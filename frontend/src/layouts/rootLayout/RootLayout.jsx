import { Link, Outlet } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import "./rootLayout.css";

const RootLayout = () => {
  return (
    <div className="rootLayout">
      <header>
        <Link to="/" className="logo">
          <img src="/logo.png" alt="MERN AI Logo" />
          <span>MERN AI</span>
              </Link>
              
              <div className="user">
              
      <SignedIn>
        <UserButton />
      </SignedIn>
              </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
