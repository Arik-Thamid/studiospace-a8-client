"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginPage() {
 
     const router = useRouter()
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget)
     const user = Object.fromEntries(formdata.entries()) as {
     email: string,
     password: string,
    }
    const {data, error} = await authClient.signIn.email({
     ...user
    })
    if(data){
     router.push('/')
     toast.success("Login Success")
     
    }
    if(error){
     console.log(error)
     toast.error("Login failed")
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f6f2] flex justify-center px-5 py-6">
      <div className="w-full max-w-[393px]">
        <h1 className="text-[28px] font-bold leading-tight text-black">
          Welcome back
        </h1>

        <p className="text-sm text-[#526071] mt-1 mb-6">
          Demo mode: no password is checked or stored.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
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
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full h-9 border border-[#dedbd3] bg-white px-3 outline-none focus:border-[#e96b35]"
            />

            <a
              href="/forgot-password"
              className="block text-sm text-black underline mt-1"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full h-[45px] bg-[#ed6933] text-white font-medium hover:bg-[#d95b29] transition-colors"
          >
            Log in
          </button>

          <button
            type="button"
            className="w-full h-[47px] border border-[#dedbd3] text-black hover:bg-[#eeece6] transition-colors"
          >
            Continue with Google (demo)
          </button>
        </form>

        <p className="text-sm text-black mt-5">
          New here?{" "}
          <a href="/register" className="underline">
            Register
          </a>
        </p>
      </div>
    </main>
  );
}
