"use client";

import { useState } from "react";
import Button from "../components/Button";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswrodInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
    const isEmailValid = emailPattern.test(email);
    const isPasswordMathcing = password === confirmPassword;
    const isPasswordValid = passwordPattern.test(password);

    setErrorMessage("");

    if (email.trim() === "") {
      setErrorMessage("Email cannot be empty.");
      return;
    } else if (!isEmailValid) {
      setErrorMessage("Invalid email format. example@email.com");
      return;
    } else if (password.trim() === "") {
      setErrorMessage("Password cannot be empty.");
      return;
    } else if (!isPasswordValid) {
      setErrorMessage(
        "Password must be at least 8 characters, include 1 uppercase letter, 1 number, and 1 special character."
      );
      return;
    } else if (confirmPassword.trim() === "") {
      setErrorMessage("Confirm Password cannot be empty.");
      return;
    } else if (!isPasswordMathcing) {
      setErrorMessage("Passwords do not match.");
      return;
    } else {
      try {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        if (res.ok) {
          router.push("/register");
        } else {
          setErrorMessage(data.message || "Registration failed");
        }
      } catch (error) {
        setErrorMessage("Failed to register user");
        console.log(error);
      }
    }
  };

  const handleBackToLoginPageButton = () => {
    router.push("/login");
  };

  return (
    <form
      onSubmit={handleRegister}
      className="2xl:w-2/5 lg:w-3/5 sm:w-4/5 w-11/12 bg-bgPrimary mx-auto mt-20 sm:pt-20 pt-32 pb-20  rounded-md overflow-hidden relative"
    >
      <Image
        src={logo}
        alt="logo"
        width={80}
        height={80}
        className="absolute top-4 left-4 rounded-md"
      />
      <h2 className="text-center text-textDark text-bold text-3xl uppercase px-4">
        Registration Form
      </h2>
      <div className="flex flex-col gap-6 md:w-3/5 w-4/5 pb-10 my-6 mx-auto">
        <div className="flex flex-col p-4 border-2 border-borderColor rounded-md">
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
        <div className="flex flex-col p-4 border-2 border-borderColor rounded-md">
          <label htmlFor="password" className="text-xs text-textDark font-bold">
            Password
          </label>
          <div className="flex sm:flex-row flex-col gap-2">
            <input
              id="password"
              value={password}
              onChange={handlePasswordInput}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password..."
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
        <div className="flex flex-col p-4 border-2 border-borderColor rounded-md">
          <label
            htmlFor="confirmPassword"
            className="text-xs text-textDark font-bold"
          >
            Confirm Password
          </label>
          <div className="flex sm:flex-row flex-col gap-2">
            <input
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswrodInput}
              type={showConfirmmPassword ? "text" : "password"}
              placeholder="Enter your password..."
              required
              className="text-textDark pl-1 rounded-md outline-none"
            />
            <div className="flex items-center gap-1">
              <input
                id="showPasswordCheckbox"
                type="checkbox"
                onChange={() => setShowConfirmPassword(!showConfirmmPassword)}
              />
              <label
                htmlFor="showPasswordCheckbox"
                className="text-xs text-textDark"
              >
                {showConfirmmPassword ? "Hide" : "Show"} Confirm Password
              </label>
            </div>
          </div>
        </div>
        {errorMessage && (
          <div className="text-center text-errorColor font-semibold">
            {errorMessage}
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2 w-3/5 mx-auto">
        <Button type="submit" text="Register" bgColor="bg-bgSecondary" />
        <Link href="/" className="w-full">
          <Button
            text="Back to Login"
            fn={handleBackToLoginPageButton}
            bgColor="bg-bgLight"
          />
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
