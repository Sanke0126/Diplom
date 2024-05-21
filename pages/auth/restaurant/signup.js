import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      const errTimer = setTimeout(() => {
        setError(null);
      }, 3000);
      return () => clearTimeout(errTimer);
    }
  }, [error]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7 ||
      password !== confirmPassword
    ) {
      setError("Invalid input or passwords do not match");
      return;
    }

    try {
      const res = await axios.post("/api/auth/signup", {
        email,
        password,
      });

      if (!res.data) {
        throw new Error("Empty response received");
      }

      router.replace("/auth");
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
  };

  return (
    <div className="h-[80vh] custom-container w-full grid place-items-center">
      <div className="w-full md:w-[450px] shadow-xl px-6 pb-4 rounded-xl border-2 border-stone-100">
        <h2 className="text-center text-2xl font-bold py-4">Sign Up</h2>
        <form onSubmit={submitHandler}>
          <div className="control-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="control-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="control-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mt-12">
            <button className="button bg-blue-600 text-white w-full">
              Sign Up
            </button>
          </div>
        </form>
        {error && <div className="text-red-600 mt-4">{error}</div>}
      </div>
    </div>
  );
};

export default Signup;
