import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

function EditProfile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = auth.currentUser;

      if (!user) {
        alert("User is not logged in.");
        return;
      }

      const userDocRef = doc(db, "users", user.uid);
      const updatedData = {};

      if (username) updatedData.username = username;
      if (email) updatedData.email = email;
      if (password) {
        await user.updatePassword(password);
      }

      if (Object.keys(updatedData).length > 0) {
        await updateDoc(userDocRef, updatedData);
        alert("Profile updated successfully!");
      }

      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error updating profile: ", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="text-yellow-400 p-8 rounded-lg border border-yellow-400 shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Edit Account</h1>
        <label className="block mb-2">New Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="New Username"
          className="w-full p-2 mb-4 rounded bg-[#2a2a2a] text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <label className="block mb-2">New Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="New Email"
          className="w-full p-2 mb-4 rounded bg-[#2a2a2a] text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <label className="block mb-2">New Password</label>
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            className="w-full p-2 rounded bg-[#2a2a2a] text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-2 flex items-center text-yellow-400"
          >
            {showPassword ? "👀" : "👁️"}
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-[#1a1a1a] font-bold py-2 rounded hover:bg-yellow-500"
        >
          Change
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
