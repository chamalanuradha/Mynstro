import React from "react";

export default function Landing() {
  return (
    <div className="container mx-auto pt-10">

     <section className="py-10 border-4 border-[#F4A261] rounded-xl">

      <div className="ml-20">
<h1 className="text-4xl font-bold text-gray-800 mb-4 ">
          Welcome to Mynstro......
        </h1>
        <p className="text-gray-600 mb-6">
          Build, manage, and grow your platform with modern tools and secure
          authentication.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/register"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Get Started
          </a>
          <a
            href="/login"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50"
          >
            Login
          </a>
        </div>
      </div>
        
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6 py-16">
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Secure Auth</h3>
          <p className="text-gray-600">
            JWT-based authentication with refresh tokens and email verification.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Fast Performance</h3>
          <p className="text-gray-600">
            Optimized backend and frontend built with modern tech.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Scalable</h3>
          <p className="text-gray-600">
            Ready to scale for startups and enterprise solutions.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 text-center bg-gray-100 rounded-lg mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Start building today 🚀
        </h2>
        <p className="text-gray-600 mb-6">
          Join Mynstro and take your project to the next level.
        </p>
        <a
          href="/register"
          className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700"
        >
          Create Account
        </a>
      </section>

    </div>
  );
}
