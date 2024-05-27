import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Auth = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      password.trim().length < 7
    ) {
      return;
    }

    const result = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });

    if (!result.error) {
      router.replace("/admin");
    } else {
      console.log(result.error);
      setError(result.error);
    }
  };

  return (
    <div className="h-[65vh] custom-container w-full grid place-items-center">
      <div className="w-full md:w-[450px] shadow-2xl px-10 pb-4 rounded-xl border-2 border-black-100 bg-light-yellow">
        <h2
          id="Login"
          className="text-center text-[40px] font-bold py-4 mt-[10px]"
        >
          Login
        </h2>
        <form onSubmit={submitHandler}>
          <div className="control-group">
            <label htmlFor="email"></label>
            <input
              className="mt-[10px]"
              placeholder="Email"
              type="text"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="control-group">
            <label htmlFor="password"></label>
            <input
              className="mt-[15px]"
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-12 flex justify-center">
            <button className="button bg-yellow text-black w-[250px] mb-[20px]">
              Login
            </button>
          </div>
        </form>
        {error && <div className="text-red-600 mt-4">{error}</div>}
      </div>
    </div>
  );
};

export default Auth;
