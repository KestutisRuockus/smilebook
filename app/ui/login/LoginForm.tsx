"use client";

import { useState } from "react";
import Button from "../components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const router = useRouter();

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        router.push("/dashboard");
      } else {
        setErrorMessage(data.message || "Login failed");
      }

      console.log(data);
    } catch (error) {
      console.error(error);
      setErrorMessage("smth wrong");
    }
  };

  const handleRegisterButton = () => {};

  return (
    <div className="lg:w-1/2 sm:w-4/5 w-11/12 rounded-md border-2 border-borderColor">
      <form onSubmit={handleLogin} className="flex flex-col gap-4 p-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-xs text-textDark font-bold">
            Email
          </label>
          <input
            id="email"
            value={email}
            onChange={handleEmailInput}
            type="email"
            placeholder="Enter your email..."
            required
            className="text-textDark pl-1 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-xs text-textDark font-bold">
            Password
          </label>
          <div className="flex max-[1400px]:flex-col flex-row  gap-2">
            <input
              id="password"
              value={password}
              onChange={handlePasswordInput}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your email..."
              required
              className="text-textDark pl-1 rounded-md outline-none"
            />
            <div className="flex items-center gap-1">
              <input
                id="showPassword"
                type="checkbox"
                onChange={() => setShowPassword(!showPassword)}
              />
              <label htmlFor="showPassword" className="text-xs text-textDark">
                {showPassword ? "Hide" : "Show"} Password
              </label>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <input
            id="rememberMe"
            type="checkbox"
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="rememberMe" className="text-xs text-textDark">
            Remember Me
          </label>
        </div>
        {errorMessage && (
          <div className="text-center text-errorColor font-semibold">
            {errorMessage}
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          <Button text="Login" type="submit" bgColor="bg-bgSecondary" />
          <Link href="/register" className="w-full">
            <Button
              text="Register"
              fn={handleRegisterButton}
              bgColor="bg-bgLight"
            />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
