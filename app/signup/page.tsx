import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        {/* Logo */}
        <div className="flex justify-center">
          <Image 
            src="/clicknshop.png"
            alt="ClicknShop Logo" 
            width={80} 
            height={80} 
            priority
          />
        </div>

        {/* Heading */}
        <h2 className="text-xl font-medium text-center text-[#1c4880] mb-6">
          Create your Account
        </h2>

        {/* Form */}
        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your full name" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-b[#1c4880] focus:outline-none border-[#1c4880]"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-b[#1c4880] focus:outline-none border-[#1c4880]"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="Create a password" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-b[#1c4880] focus:outline-none border-[#1c4880]"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input 
              type="password" 
              placeholder="Confirm your password" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-b[#1c4880] focus:outline-none border-[#1c4880]"
              required
            />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Button */}
            <Link
              href="/home"
              className="block w-full bg-[#1c4880] text-white py-2 rounded-lg text-center cursor-pointer"
            >
              Sign Up
            </Link>
          </div>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link href="/" className="text-[#1c4880] font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
