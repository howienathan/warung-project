import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { loginUser } from "../utils/Auth";
import { useNavigate } from "react-router-dom";
import { getFirestore } from "firebase/firestore";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

    // // Tambahkan useEffect untuk mengecek status autentikasi
    // useEffect(() => {
    //   const unsubscribe = onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       // Jika user sudah login, redirect ke dashboard
    //       navigate("/dashboard");
    //     }
    //   });
  
      // Cleanup subscription
    //   return () => unsubscribe();
    // }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await loginUser(formData.email, formData.password);
      if (result.success) {
        alert("Login Successful!")
        navigate("/"); // Arahkan ke halaman dashboard setelah login
      } else {
        setError(result.error || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#150000] text-white">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-yellow-500 text-center mb-1">
          Log In
        </h1>
        <p className="text-center text-sm text-gray-400 mb-6">
          Masuk ke akun anda
        </p>

        {error && (
          <div className="mb-4 p-2 bg-red-500/10 border border-red-500 rounded text-red-500 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-yellow-500 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full mt-1 p-2 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-yellow-500 font-medium">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full mt-1 p-2 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute pt-3 right-3 text-gray-400 hover:text-yellow-500"
            >
              <button
  type="button"
  onClick={() => setShowPassword(!showPassword)}
  className="absolute pt-3 right-3 text-gray-400 hover:text-yellow-500"
>
  {showPassword ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223a10.477 10.477 0 011.713-1.928m3.846-1.739c1.288-.356 2.733-.556 4.27-.556 2.52 0 4.848.564 6.607 1.556a10.477 10.477 0 012.824 2.928m-2.09 8.917a10.45 10.45 0 01-3.121 2.444c-1.759.992-4.087 1.556-6.607 1.556-1.537 0-2.982-.2-4.27-.556a10.45 10.45 0 01-3.44-2.272m6.44-5.272a2.5 2.5 0 113.16 3.16"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9.75a2.5 2.5 0 00-3.16-3.16"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-.53 1.614-1.539 3.058-2.958 4.047M2.458 12a9.975 9.975 0 003.5 4.8M9 21h6"
      />
    </svg>
  )}
</button>
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition disabled:opacity-50"
          >
            {loading ? "Loading..." : "Login"}
          </button>
          <a 
            type="submit"
           href="/"
            className="w-full py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition disabled:opacity-50"
          >
            back
          </a>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <a href="/SignUp" className="text-yellow-500 font-semibold">
            Register now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;