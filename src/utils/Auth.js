import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
  } from 'firebase/auth';
  import { doc, setDoc, getDoc } from 'firebase/firestore';
  import { auth, db } from '../firebase';
  
    // Register
    export const registerUser = async (name, email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        await setDoc(doc(db, 'users', user.uid), {
          name: name,
          email: user.email,
          role: "user", // Role default
          createdAt: new Date(),
          signedIn: new Date(),
        });
    
        return { success: true };
      } catch (error) {
        console.error('Registration error:', error);
        return { success: false, error: error.message };
      }
    };
    
    // Login
    export const loginUser = async (email, password) => {
      try {
        // Login dengan email dan password
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
    
        // Mengambil data pengguna dari Firestore
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          return { success: true, data: userDoc.data() }; // Data pengguna berhasil diambil
        } else {
          // Jika pengguna tidak ditemukan di Firestore
          return { success: false, error: 'User data not found in Firestore' };
        }
      } catch (error) {
        console.error('Login error:', error);
        return { success: false, error: error.message };
      }
    };
    
    
    // Logout
    export const logoutUser = async () => {
      try {
        await signOut(auth);
        setIsLoggedIn(false); 
        return { success: true };
      } catch (error) {
        console.error('Logout error:', error);
        return { success: false, error: error.message };
      }
    };
    
    // Get user data
    export const getUserData = async (uid) => {
      try {
        const userDoc = await getDoc(doc(db, 'users', uid));
        if (userDoc.exists()) {
          return { success: true, data: userDoc.data() };
        }
        return { success: false, error: 'User not found' };
      } catch (error) {
        console.error('Get user error:', error);
        return { success: false, error: error.message };
      }
    };