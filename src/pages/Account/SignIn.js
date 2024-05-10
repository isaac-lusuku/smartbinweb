import React, { useState } from "react";  // Import necessary modules and hooks
import Message from "./Message";  // Import Message component
import { Link, useNavigate } from "react-router-dom";   // Import Link component and useNavigate hook from React Router
import axios from "axios";    // Import axios for making HTTP requests
import { jwtDecode } from "jwt-decode";   // Import jwtDecode function for decoding JWT tokens
import { addId, addCartBoth, updateFavorite } from "../../redux/mainSlice";   // Import action creators from Redux slice
import { useDispatch, useSelector } from "react-redux";    // Import useDispatch and useSelector hooks from Redux


// Define SignIn component
const SignIn = () => {
  const navigate = useNavigate()  // Initialize navigate function for navigation
  const dispatch = useDispatch()  // Initialize dispatch function for dispatching actions


  const [email, setEmail] = useState("");     
  const [password, setPassword] = useState("");

  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  // Select user info from Redux store
  const id = useSelector((state) => state.mainReducer.userInfo);
  const [successMsg, setSuccessMsg] = useState("");

  // Function to handle email input change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  // Function to handle password input change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  // Function to handle sign-in form submission
  const handleSignUp = (e) => {
    e.preventDefault();

     // Validate email and password inputs
    if (!email) {
      setErrEmail("Enter your email");
    }

    if (!password) {
      setErrPassword("Enter a password");
    }
    // ============== Getting the value ==============
    // If email and password are provided
    if (email && password) {
      // Make a POST request to obtain access and refresh tokens
      axios.post('https://lusukugroup21.online/user/api/token/', {
          email: email,
          password: password
      }, {
          headers: {'Content-Type': 'application/json'}
      })
      .then(response => {
          // Extract the access and refresh tokens from the response data
          const data = response.data;
  
          // Clear previous tokens and set new ones in local storage
          localStorage.clear();
          localStorage.setItem('access_token', data.access);
          localStorage.setItem('refresh_token', data.refresh);

          const token = data.access;
          // Decode the token
          const decodedToken = jwtDecode(token);

          // logging all the user information
          // Dispatch action to store user ID in Redux store
          dispatch(addId(decodedToken["user_id"]))

          const user_id = decodedToken["user_id"]
          // CART
          // Function to fetch and update cart items from server
          const getCart = async () => {
            try {
                const response = await axios.get('https://lusukugroup21.online/product/getCart/', { params : {id : user_id}});
                if (Array.isArray(response.data) && response.data.length !== 0) {
                  for (let i = 0; i < response.data.length; i++) {
                    const item = response.data[i]
                    dispatch(addCartBoth({
                        id: item['product'],
                        quantity: item['quantity']
                    }))
                  }
                  
                } else {
                  console.log('Response contains no data.');
                }
                console.log('Cart info:', response.data);
            } catch (error) {
                console.error('Error getting cart info:', error);
            }
        };

        // FAVORITES
         // Function to fetch and update favorite items from server
        const getFavorites = async () => {
          try {
              const response = await axios.get('https://lusukugroup21.online/product/getFavorites', { params : {id : user_id}});

              if (Array.isArray(response.data) && response.data.length !== 0) {
                for (let i = 0; i < response.data.length; i++) {
                  const item = response.data[i]
                  dispatch(updateFavorite({
                      id: item['product'],
                  }))
                }
                
              } else {
                console.log('Response contains no data.');
              }
              console.log('Favorite info:', response.data);
          } catch (error) {
              console.error('Error getting favorite info:', error);
          }
      };
          
      getCart();  // Fetch cart items

      getFavorites();   // Fetch favorite items
  
          // Set the authorization header for Axios requests
          axios.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
          navigate("/profile")     // Navigate to profile page
  
      })
      .catch(error => {
          // Handle any errors that occur during the request
          console.error('Error:', error);
          setSuccessMsg(
            `Validation was unsuccessfull, the password or email entered are invalid. We have several new items, log in to check them out`
          );
      });
      setEmail("");
      setPassword("");
    }
    };

    //JSX CONTENT
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Message page="signin" />
      <div className="w-full lgl:w-1/2 h-full">
        {successMsg ? (
          <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
            <p className="w-full px-4 py-10 text-black font-medium font-titleFont">
              {successMsg}
            </p>
            <Link to="/signin">
              <button
                onClick={()=>setSuccessMsg(null)}
                className="w-full h-10 bg-red-900 text-gray-200 rounded-md text-base font-titleFont font-semibold 
            tracking-wide hover:bg-black hover:text-white duration-300"
              >
                TRY AGAIN
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full lgl:w-[450px] h-screen flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">
                Sign in
              </h1>
              <div className="flex flex-col gap-3">
                {/* Email */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Personal Email
                  </p>
                  <input
                    onChange={handleEmail}
                    value={email}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="email"
                    placeholder="benjamin@gmail.com"
                  />
                  {errEmail && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errEmail}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Password
                  </p>
                  <input
                    onChange={handlePassword}
                    value={password}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="password"
                    placeholder="Enter password"
                  />
                  {errPassword && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPassword}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSignUp}
                  className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
                >
                  Sign In
                </button>
                <p className="text-sm text-center font-titleFont font-medium">
                  Don't have an Account?{" "}
                  <Link to="/signup">
                    <span className="hover:text-themeColor duration-300">
                      Sign up
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignIn;
