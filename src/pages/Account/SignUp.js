import React, { useState } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import axios from 'axios';


const SignUp = () => {

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("")
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errBio, setErrBio] = useState("")
  const [errPassword, setErrPassword] = useState("");

  const [successMsg, setSuccessMsg] = useState("");
  const [dummyEmail, setDummyEmail] = useState("");

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setDummyEmail(e.target.value);
    setErrEmail("");
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setErrPhone("");
  };
  const handleBio = (e) => {
    setBio(e.target.value);
    setErrBio("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  // ================= Email Validation =============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };


  const handleProfile = (e) => {
    e.preventDefault();
    if (!phone) {
      setErrPhone("Enter your phone number");
    }
    if (!bio) {
      setErrBio("please write a short bio- anything!");
    }
    if (phone && bio){
      axios.post(
        'https://51.21.125.104/user/createprofile/',
        {
          email: dummyEmail,
          phone: phone,
          bio: bio
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      window.location.href = '/signin';
    }

  }

  const handleSignUp = (e) => {
    e.preventDefault();
    if (checked) {
      if (!clientName) {
        setErrClientName("Enter your name");
      }
      if (!email) {
        setErrEmail("Enter your email");
      } else {
        if (!EmailValidation(email)) {
          setErrEmail("Enter a Valid email");
        }
      }
      if (!password) {
        setErrPassword("Create a password");
      } else {
        if (password.length < 8) {
          setErrPassword("Passwords must be at least 8 characters");
        }
      }
      // ============== Restore the state ==============
      if (
        clientName &&
        email &&
        EmailValidation(email) &&
        password &&
        password.length >= 8
      ) {
        setSuccessMsg(
          `Hello dear ${clientName}, thank you for joining us, your account has been created, pleaase add profile and you can sign in with you email ${email}`
        );
    
        axios.post(
          'https://51.21.125.104/user/create/',
          {
            email: email,
            username: clientName,
            password: password
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        
        setClientName("");
        setEmail("");
        setPhone("");
        setPassword("");
    }
    
    }
  };
  return (
    <div className="w-full h-screen flex items-start justify-start">
      <Message page="signup"/>
      <div className="w-full lgl:w-1/2 h-full flex flex-col justify-center  ">
        {successMsg ? (
          <div className="w-[500px]">
            <p className="w-full px-4 py-6 text-black font-medium font-titleFont">
              {successMsg}
            </p>

            <form className="w-full lgl:w-[500px] flex items-center justify-center">
            <div className="px-6 py-4 w-full flex flex-col justify-center ">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
                Create your profile
              </h1>
              <div className="flex flex-col gap-3">
                {/* client bio */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Your Bio
                  </p>
                  <input
                    onChange={handleBio}
                    value={bio}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-black outline-none"
                    type="text"
                    placeholder="tell us what you like"
                  />
                  {errBio && (
                    <p className="text-sm text-themeColor font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errBio}
                    </p>
                  )}
                </div>
                {/* Phone Number */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Phone Number
                  </p>
                  <input
                    onChange={handlePhone}
                    value={phone}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-black outline-none"
                    type="text"
                    placeholder="256751454155"
                  />
                  {errPhone && (
                    <p className="text-sm text-themeColor font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPhone}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleProfile}
                  className="w-full bg-primeColor hover:bg-black  cursor-pointer text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300"
                >
                  Create Profile & Sign in
                </button>
              </div>
            </div>
          </form>
          </div>
        ) : (
          <form className="w-full lgl:w-[500px] h-screen flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-center ">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
                Create your account
              </h1>
              <div className="flex flex-col gap-3">
                {/* client name */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Full Name
                  </p>
                  <input
                    onChange={handleName}
                    value={clientName}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-black outline-none"
                    type="text"
                    placeholder="eg. John Doe"
                  />
                  {errClientName && (
                    <p className="text-sm text-themeColor font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errClientName}
                    </p>
                  )}
                </div>
                {/* Email */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Personal Email
                  </p>
                  <input
                    onChange={handleEmail}
                    value={email}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-black outline-none"
                    type="email"
                    placeholder="isaac@gmail.com"
                  />
                  {errEmail && (
                    <p className="text-sm text-themeColor font-titleFont font-semibold px-4">
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
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-black outline-none"
                    type="password"
                    placeholder="Create password"
                  />
                  {errPassword && (
                    <p className="text-sm text-themeColor font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPassword}
                    </p>
                  )}
                </div>

                {/* Checkbox */}
                <div className="flex items-start mdl:items-center gap-2">
                  <input
                    onChange={() => setChecked(!checked)}
                    className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
                    type="checkbox"
                  />
                  <p className="text-sm text-primeColor">
                    I agree to the OUR{" "}
                    <span className="text-themeColor">Terms of Service </span>and{" "}
                    <span className="text-themeColor">Privacy Policy</span>.
                  </p>
                </div>
                <button
                  onClick={handleSignUp}
                  className={`${
                    checked
                      ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
                      : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
                  } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
                >
                  Create Account
                </button>
                <p className="text-sm text-center font-titleFont font-medium">
                  Have an Account?{" "}
                  <Link to="/signin">
                    <span className="hover:text-themeColor duration-300">
                      Sign in
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

export default SignUp;
