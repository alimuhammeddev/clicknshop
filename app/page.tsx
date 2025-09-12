import Image from "next/image";
import Link from "next/link";

export default function Login() {
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
          Login to ClickNShop
        </h2>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-[#1c4880] focus:outline-none border-[#1c4880]"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-[#1c4880] focus:outline-none border-[#1c4880]"
              required
            />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Button */}
            <Link
              href="/home"
              className="block w-full bg-[#1c4880] text-white py-2 rounded-lg text-center cursor-pointer"
            >
              Login
            </Link>
          </div>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-[#1c4880] font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
