// import { auth, db } from '../firebase';
// import React, {useState, useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';

// const AdminPage = async () => {
//   const [isAdmin, setIsAdmin] = useState(false);
//   const adminData = {
//     name: 'Admin',
//     email: 'admin@gmail.com',
//     password: 'password123',
//     role: 'admin',
//   };

//   try {
//     const userCredential = await auth.createUserWithEmailAndPassword(adminData.email, adminData.password);
//     const user = userCredential.user;

//     await db.collection('users').doc(user.uid).set({
//       name: adminData.name,
//       email: adminData.email,
//       role: adminData.role,
//     });

//     console.log('Akun admin berhasil dibuat');
//   } catch (error) {
//     console.error('Gagal membuat akun admin:', error);
//   }
// };

// const user = auth.currentUser;
// const userDoc = await db.collection('users').doc(user.uid).get();

// // if (userDoc.exists()) {
// //   const userData = userDoc.data();
// //   if (userData.role === 'admin') {
// //     setIsAdmin(true);
// //   } else {
// //     setIsAdmin(false);
// //   }
// // }

// // return (
// //   <div>
// //     {isAdmin ? (
// //       <h1>Selamat datang, Admin!</h1>
// //     ) : (
// //       <h1>Anda tidak memiliki akses sebagai admin.</h1>
// //     )}
// //   </div>
// // );
// // };

// export default AdminPage;