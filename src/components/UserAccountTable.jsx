import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Pastikan konfigurasi Firebase sudah benar
import { collection, deleteDoc, doc, addDoc, onSnapshot, Timestamp } from "firebase/firestore";

function UserAccountTable() {
  const [userAccounts, setUserAccounts] = useState([]);
  const [user] = useState([]);
  const [email, setEmail] = useState(""); 

  const userAccountsCollection = collection(db, "users");

  // Realtime listener dengan onSnapshot
  useEffect(() => {
    const unsubscribe = onSnapshot(userAccountsCollection, (snapshot) => {
      const accounts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUserAccounts(accounts);
    });

    return () => unsubscribe(); // Cleanup listener saat komponen di-unmount
  }, []);


  // // Fetch email dari API eksternal
  // const fetchUserEmail = async () => {
  //   try {
  //     const response = await fetch("https://randomuser.me/api/");
  //     const data = await response.json();
  //     const userEmail = data.results[0].email;
  //     setEmail(userEmail);
  //   } catch (error) {
  //     console.error("Error fetching email:", error);
  //   }
  // };
  
  const handleRemove = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
    } catch (error) {
      console.error("Error removing user:", error);
    }
  };

  const handleViewMore = () => {
    alert("View More clicked! Implement action here.");
    // Bisa diarahkan ke halaman detail user atau pagination
  };

  const addUser = async () => {
    try {
      await addDoc(userAccountsCollection, {
        email: email,
        createdAt: new Date(),
        signedIn: new Date(),
      });
      alert("User added successfully.");
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user.");
    }
  };
  
  return (
    <div className="min-h-screen  flex flex-col items-center py-10 mx-[2rem]">
      <div className="w-full max-w-4xl bg-[#101010] border border-yellow-400 text-yellow-400 rounded-lg shadow-md p-8 overflow-x-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">User Logged Accounts</h1>

        {userAccounts.length === 0 ? (
          <p className="text-center text-yellow-400">No user accounts found.</p>
        ) : (
          <table className="w-full text-left border-collapse border border-yellow-400">
            <thead>
              <tr>
                <th className="border border-yellow-400 p-2">No</th>
                <th className="border border-yellow-400 p-2">Email</th>
                <th className="border border-yellow-400 p-2">Created</th>
                <th className="border border-yellow-400 p-2">Signed In</th>
                <th className="border border-yellow-400 p-2">Remove</th>
              </tr>
            </thead>
            <tbody>
              {userAccounts.map((user, index) => (
                <tr key={user.id} className="hover:bg-[#2a2a2a]">
                  <td className="border border-yellow-400 p-2">{index + 1}</td>
                  <td className="border border-yellow-400 p-2">{user.email}</td>
                  <td className="border border-yellow-400 p-2">
                    {user.createdAt?.toDate ? user.createdAt.toDate().toLocaleDateString() : "Unknown"}
                  </td>
                  <td className="border border-yellow-400 p-2">
                    {user.signedIn?.toDate ? user.signedIn.toDate().toLocaleDateString() : "Unknown"}
                  </td>
                  <td className="border border-yellow-400 p-2 text-center">
                    <button onClick={() => handleRemove(user.id)} className="text-red-500 hover:text-red-600">
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="text-center mt-4">
         
        </div>
      </div>
    </div>
  );
}

export default UserAccountTable;
