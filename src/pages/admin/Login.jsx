import React from "react";
import Navbar from "../../component/navbar";


function Login() {
    return (
        <div className="bg-primary h-screen w-screen flex items-center justify-center relative overflow-hidden">
          <img 
            src="src\assets\petani.png"
            alt="Petani" 
            className="absolute left-0 bottom-0 h-[300px] w-auto"
          />
          <div className="bg-secondary p-8 rounded-lg shadow-md w-full max-w-[540px] mx-2 relative z-10">
            <div className="flex items-center mb-4">
              <img src="src\assets\logo\logofill.png" alt="logo" className="h-12 w-auto" />
              <h1 className="text-primary ml-1 text-base font-bold">Warung Kopi<br />Mbah Rejo</h1>
            </div>
            <h1 className="text-2xl font-bold text-red-600">Admin Login</h1>
            <p className="text-gray-600 mb-4">Welcome back. Enter your credentials to access your account.</p>
            <form>
              <div className="mb-4">
                <label className="block font-bold text-gray-700">Email Address</label>
                <input
                  type="email" 
                  name="username"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-[#FFFBF5] text-black focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
                  placeholder="hello@example.com"
                  required
                />
              </div>
              <div className="mb-2">
                <div className="flex justify-between">
                  <label className="block font-bold text-gray-700">Password</label>
                  <a href="#" className="text-red-600 text-sm">Forgot Password</a>
                </div>
                <input
                  type="password"
                  name="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-[#FFFBF5] text-black focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
                  placeholder="password"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 accent-red-600" />
                  <span className="text-gray-700">Keep me signed in</span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-lg hover:bg-red-700"
              >
                Continue
              </button>
              <div className="mt-4 text-center">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">or sign up with</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center space-x-4">
              <button className="flex items-center px-6 py-2 border border-black rounded-lg hover:bg-gray-50 bg-transparent text-black">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                </svg>
                Google
              </button>
                <button className="flex items-center px-6 py-2 border border-black rounded-lg hover:bg-gray-50 bg-transparent text-black">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Apple
                </button>
              <button className="flex items-center px-4 py-2 border border-black rounded-lg hover:bg-gray-50 bg-transparent text-black">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
                  <path fill="#1877F2" d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24"/>
                  <path fill="#FFFFFF" d="M33.342 30.938L34.406 24h-6.656v-4.5c0-1.9.93-3.75 3.911-3.75h3.026v-5.906s-2.747-.469-5.372-.469c-5.482 0-9.065 3.323-9.065 9.337V24h-6.094v6.938h6.094v16.77c1.225.182 2.475.292 3.75.292s2.525-.11 3.75-.292v-16.77h5.592z"/>
                </svg>
                Facebook
              </button>
              </div>
            
              <p className="mt-6 text-gray-600">
                Don't have an Account? 
                <a href="#" className="text-red-600 ml-1">Sign up here</a>
              </p>
            </form>
          </div>
        </div>
    );
  }
  
  export default Login;