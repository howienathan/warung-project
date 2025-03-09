import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { getUserData } from "../utils/Auth";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logoo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const result = await getUserData(user.uid);
        if (result.success) {
          setUserRole(result.data.role);
          setIsLoggedIn(true);
        }
      } else {
        setIsLoggedIn(false);
        setUserRole(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setIsLoggedIn(false);
      setUserRole(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (isLoading) {
    return null;
  }

  return (
    <section className="scrollbar-hidden text-white">
      <nav
        className={`fixed w-full top-0 left-0 bg-marquezBlack z-50 duration-300 ${
          isScrolled ? "shadow-[0px_13px_21px_0px_#faf089]" : "shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold font-jakarta">
             <img src={logo} alt="" className="w-32 h-14"/>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="/" className="hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">
                Home
              </a>
              <a href="/#About" className="hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">
                About
              </a>
              <a href="/Menu" className="hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">
                Menu
              </a>
              <a href="/Sejarah" className="hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">
                Sejarah
              </a>
              <a href="/Contact" className="hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">
                Contact
              </a>
              {userRole === "admin" && (
                <a href="/Dashboard" className="hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">
                  Dashboard
                </a>
              )}
              {isLoggedIn ? (
                <button onClick={handleLogout} className="hover:text-yellow-300 text-yellow-400 hover:scale-105 duration-300 font-jakarta font-semibold">
                  Logout
                </button>
              ) : (
                <a href="/Login" className="hover:text-yellow-300 text-yellow-400 hover:scale-105 duration-300 font-jakarta font-semibold">
                  Login / SignUp
                </a>
              )}
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden bg-marquezBlack ${isOpen ? "block" : "hidden"}`}>
          <div className="px-4 py-2 space-y-2">
            <a href="/" className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">
              Home
            </a>
            <a href="/#About" className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">
              About
            </a>
            <a href="/Menu" className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">
              Menu
            </a>
            <a href="/Sejarah" className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">
              Sejarah
            </a>
            {userRole === "admin" && (
              <a href="/Dashboard" className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">
                Dashboard
              </a>
            )}
            {isLoggedIn ? (
              <button onClick={handleLogout} className="block w-full text-left hover:text-yellow-300 text-yellow-400 hover:scale-105 duration-300 font-jakarta font-semibold">
                Logout
              </button>
            ) : (
              <a href="/Login" className="block hover:text-yellow-300 bg-yellow-400 text-black hover:scale-105 duration-300 font-jakarta font-semibold">
                Login / SignUp
              </a>
            )}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
