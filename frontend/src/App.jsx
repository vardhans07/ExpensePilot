import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

import SummaryCards from "./components/SummaryCards";
import {
  BanknotesIcon,
  CreditCardIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import ExpenseChart from "./components/ExpenseChart";
import CategoryTotals from "./components/CategoryTotals";
import Transactions from "./components/Transactions";
import AddIncomeForm from "./components/AddIncomeForm";
import IncomeList from "./components/IncomeList";
import AddExpenseForm from "./components/AddExpenseForm";
import FilterPanel from "./components/FilterPanel";
import ExpenseList from "./components/ExpenseList";
import Home from "./components/Home";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Footer from "./components/Footer";

import Login from "./components/Login";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import LogoutButton from "./components/LogoutButton";

const AppLayout = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const location = useLocation();
  const isAuthPage = ["/login", "/register", "/reset-password"].includes(location.pathname);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && activeSection === "mobileMenu") {
        setActiveSection("dashboard");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeSection]);

  return (
    <div className="min-h-screen flex flex-col bg-[#BDD6F2]">
      {/* Header */}
      {!isAuthPage && (
        <header className="bg-gradient-to-r from-[#a78bfa] via-[#8b5cf6] to-[#7c3aed] shadow-md mb-2 rounded-b-md border-b-2 border-[#a78bfa] flex justify-between items-center px-6 py-3 animate-fadeIn">
          <div className="flex items-center space-x-3">
            <HomeIcon className="w-9 h-9 text-white hover:text-[#fbbf24] transition-colors duration-300" />
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide font-sans">
              ExpensePilot
            </h1>
          </div>

          <nav className="space-x-4 flex items-center">
            {!isAuthenticated && (
              <>
                <Link
                  to="/login"
                  className="px-5 py-2 rounded-full bg-[#10b981] text-white font-semibold shadow hover:bg-[#059669] transition duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-2 rounded-full bg-[#34d399] text-white font-semibold shadow hover:bg-[#059669] transition duration-300"
                >
                  Register
                </Link>
              </>
            )}
            {isAuthenticated && (
              <>
                <button
                  onClick={() => setActiveSection("home")}
                  className="px-5 py-2 rounded-full bg-[#3b82f6] text-white font-bold shadow hover:bg-[#2563eb] hover:scale-105 transition-transform duration-300"
                >
                  Home
                </button>
                <LogoutButton
                  setIsAuthenticated={setIsAuthenticated}
                  className="px-5 py-2 rounded-full bg-[#ef4444] text-white font-bold shadow hover:bg-[#dc2626] hover:scale-105 transition-transform duration-300"
                />
              </>
            )}
          </nav>
        </header>
      )}

      {/* Sidebar (only when logged in and not on auth pages) */}
      {isAuthenticated && !isAuthPage && (
        <div className="hidden md:flex flex-col bg-[#05375E] text-white w-16 py-6 fixed top-0 left-0 h-screen items-center space-y-6 border-2 border-white rounded-md">
          <button onClick={() => setActiveSection("dashboard")}>
            <HomeIcon className="w-8 h-8" />
          </button>
          <button onClick={() => setActiveSection("income")}>
            <BanknotesIcon className="w-8 h-8" />
          </button>
          <button onClick={() => setActiveSection("expense")}>
            <CreditCardIcon className="w-8 h-8" />
          </button>
        </div>
      )}

      {/* Routes */}
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              setIsAuthenticated={setIsAuthenticated}
              setActiveSection={setActiveSection}
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>

      {/* Main content only if not on auth pages */}
      {!isAuthPage && (
        <main className="flex-1 md:ml-16 p-2">
          {(!isAuthenticated || activeSection === "home") && (
            <div className="text-center p-10 bg-[#D9EAFA] flex flex-col justify-center items-center border-2 border-white min-h-screen">
              <Home />
            </div>
          )}

          {isAuthenticated && activeSection !== "home" && (
            <>
              <div>
                <button
                  className="sm:hidden"
                  onClick={() => setActiveSection("home")}
                >
                  <ArrowLeftCircleIcon className="w-8 h-8 text-white" />
                </button>
                <SummaryCards />
              </div>

              {activeSection === "dashboard" && (
                <div className="grid md:grid-cols-3 gap-2 mt-4">
                  <div className="md:col-span-2 flex flex-col gap-4">
                    <ExpenseChart />
                    <CategoryTotals />
                  </div>
                  <div>
                    <Transactions />
                  </div>
                </div>
              )}

              {activeSection === "income" && (
                <div className="grid md:grid-cols-2 gap-4">
                  <AddIncomeForm />
                  <IncomeList />
                </div>
              )}

              {activeSection === "expense" && (
                <div className="grid md:grid-cols-2 gap-4">
                  <AddExpenseForm setActiveSection={setActiveSection} />
                  <div>
                    <FilterPanel />
                    <ExpenseList />
                  </div>
                </div>
              )}
            </>
          )}
        </main>
      )}

      {!isAuthPage && <Footer />}
    </div>
  );
};

const App = () => (
  <Router>
    <AppLayout />
  </Router>
);

export default App;
