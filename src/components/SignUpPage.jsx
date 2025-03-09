import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const registerUser = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: user.email,
        role: "user",
        createdAt: new Date(),
        signedIn: new Date(),
      });

      alert("User Registered Successfully");
      navigate("/"); // Redirect ke halaman home setelah sukses
    } catch (error) {
      console.error("Registration error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#150000] text-white">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md">
        <h1 className="mb-1 text-2xl font-bold text-center text-yellow-500">Sign Up</h1>
        <p className="mb-6 text-sm text-center text-gray-400">Daftar sekarang juga</p>

        {error && (
          <div className="p-2 mb-4 text-sm text-red-500 border border-red-500 rounded bg-red-500/10">
            {error}
          </div>
        )}

        <form onSubmit={registerUser}>
        <div className="mb-4">
            <label htmlFor="name" className="block text-yellow-500 font-medium">
              Name
            </label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
          />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-yellow-500 font-medium">
              Email
            </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 p-2 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
          />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition disabled:opacity-50">
            {loading ? "Loading..." : "Sign up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
