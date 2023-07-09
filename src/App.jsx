import { useState } from 'react'
import './App.css'
import logo from "./assets/hehe.svg"

function App() {
  

  return (
    <section className=" bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0  border-gray-500">
          <div className="w-full  rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-solid border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                  <input type="email" name="email" id="email" className="sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className=" sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4  bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" required />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className=" text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-gray-300 hover:underline text-primary-500">Forgot password?</a>
                </div>
                <button type="submit" className="w-full text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </section>
  )
}

export default App
