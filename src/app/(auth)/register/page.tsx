'use client'

import { authClient } from "@/lib/auth-client";
import { redirect, useRouter } from "next/navigation";
import React, { use } from "react";



export default function RegisterPage() {
  

const router = useRouter()
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formdata = new FormData(e.currentTarget)
    const user = Object.fromEntries(formdata.entries()) as {
     name: string,
     email: string,
     password: string,
     photoURL: string
    }

   const {data, error} = await authClient.signUp.email({
     ...user
   })
    if (data) {
      router.push("/");
    }

    if (error) {
      console.log(error);
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f6f2] flex justify-center px-5 py-9">
      <div className="w-full max-w-[393px]">
        <h1 className="text-[28px] font-bold leading-tight text-black">
          Create your account
        </h1>

        <p className="text-sm text-[#526071] mt-1 mb-6">
          Demo mode: no password is checked or stored.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-black mb-1">
              Full name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full h-9 border border-[#dedbd3] bg-white px-3 outline-none focus:border-[#e96b35]"
            />
          </div>

          <div>
            <label className="block text-sm text-black mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full h-9 border border-[#dedbd3] bg-white px-3 outline-none focus:border-[#e96b35]"
            />
          </div>

          <div>
            <label className="block text-sm text-black mb-1">
              Photo URL (optional)
            </label>
            <input
              type="url"
              name="photoURL"
              className="w-full h-9 border border-[#dedbd3] bg-white px-3 outline-none focus:border-[#e96b35]"
            />
          </div>

          <div>
            <label className="block text-sm text-black mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full h-9 border border-[#dedbd3] bg-white px-3 outline-none focus:border-[#e96b35]"
            />
          </div>

          <button
            type="submit"
            className="w-full h-[46px] bg-[#ed6933] text-white hover:bg-[#d95b29] transition-colors"
          >
            Register
          </button>

          <button
            type="button"
            className="w-full h-[47px] border border-[#dedbd3] text-black hover:bg-[#eeece6] transition-colors"
          >
            Continue with Google (demo)
          </button>
        </form>

        <p className="text-sm text-black mt-5">
          Have an account?{" "}
          <a href="/login" className="underline">
            Log in
          </a>
        </p>
      </div>
    </main>
  );
}
