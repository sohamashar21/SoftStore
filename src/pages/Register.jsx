import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    const success = await register(name, email, password);
    if (success) {
      navigate("/");
    } else {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="animate-fade-in min-h-[calc(100vh-160px)] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
            Create Account
          </h1>
          <p style={{ color: "var(--text-secondary)" }}>Join us and start shopping</p>
        </div>

        <div className="card-elevated p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-primary)" }}>
                Full Name
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                  <User size={18} style={{ color: "var(--text-muted)" }} />
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="input-soft"
                  style={{ paddingLeft: "48px" }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-primary)" }}>
                Email
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                  <Mail size={18} style={{ color: "var(--text-muted)" }} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="input-soft"
                  style={{ paddingLeft: "48px" }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-primary)" }}>
                Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                  <Lock size={18} style={{ color: "var(--text-muted)" }} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input-soft"
                  style={{ paddingLeft: "48px", paddingRight: "48px" }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
                >
                  {showPassword ? (
                    <EyeOff size={18} style={{ color: "var(--text-muted)" }} />
                  ) : (
                    <Eye size={18} style={{ color: "var(--text-muted)" }} />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-primary)" }}>
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                  <Lock size={18} style={{ color: "var(--text-muted)" }} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input-soft"
                  style={{ paddingLeft: "48px", paddingRight: "48px" }}
                />
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" className="w-4 h-4 mt-1 rounded" style={{ accentColor: "var(--accent)" }} />
              <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                I agree to the{" "}
                <span className="underline cursor-pointer hover:text-indigo-600 transition-colors" style={{ color: "var(--accent)" }}>
                  Terms of Service
                </span>
                {" "}and{" "}
                <span className="underline cursor-pointer hover:text-indigo-600 transition-colors" style={{ color: "var(--accent)" }}>
                  Privacy Policy
                </span>
              </span>
            </div>

            {error && <p className="text-sm text-red-500 text-center">{error}</p>}

            <button type="submit" className="btn-primary-soft w-full">
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Already have an account?{" "}
              <Link to="/login" className="font-medium hover:text-indigo-600 transition-colors" style={{ color: "var(--accent)" }}>
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
