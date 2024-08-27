"use client"
import React, { useState } from 'react';
import {signIn} from  "next-auth/react"
import { useRouter } from 'next/navigation';
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pending,setPending] = useState('');
    const [error , setError]= useState('');
    const  router = useRouter();

    const handleEmailChange =(e) =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange =(e) =>{
        setPassword(e.target.value);
    }
     async function handleSigninwithGoogle(){
        await signIn("google",{callbackUrl:"http://localhost:3000"})
    }
    const handleLogin = async (e) => {
      e.preventDefault();
      if(!password || !email){
         setError("please fill the email or password")
      }
      try{
        setPending(true);
        const res = await signIn("credentials",{email,password,redirect:false})
        if(res.error){
            setError("invalid credentials");
            setPending(false)
            return;
        }
        router.push("/")
      }
      catch(error){
       setPending(false);
       console.log(error.message)
       setError(error.message)
      }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Email address" value={email} onChange={handleEmailChange} />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Password" value={password} onChange={handlePasswordChange} />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</a>
                        </div>
                    </div>

                    <div>
                        <button type="submit"  disabled={ pending ?true:false} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-blue-500 group-hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M13.293 7.293a1 1 0 00-1.414-1.414L10 8.586 7.121 5.707a1 1 0 00-1.414 1.414l3.5 3.5a1 1 0 001.414 0l3.5-3.5a1 1 0 00-1.414-1.414L10 8.586l.293-.293a1 1 0 000-1.414z" clipRule="evenodd" />
                                </svg>
                            </span>
                            {pending ? "wating":"Login"}
                        </button> 
                    </div>
                </form> 
                <button type='button' onClick={handleSigninwithGoogle} className='bg-black  w-full px-3 py-2 rounded text-white'>Sign In With Google</button>
            </div>
        </div>
    );
};

export default LoginForm;
