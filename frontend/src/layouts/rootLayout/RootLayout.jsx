import { Link, Outlet } from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {
  SignedIn,
  UserButton,
} from "@clerk/clerk-react";
import "./rootLayout.css";

const RootLayout = () => {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default RootLayout;
