"use client";

import { useState } from "react";
import Button from "../components/Button";
import logo from "../../../public/images/logo.png";
import Image from "next/image";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmmPassword, setShowConfirmPassword] = useState(false);

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

  const handleRegisterButton = () => {
    console.log(email, password, confirmPassword);
  };

  return (
    <form className="2xl:w-2/5 lg:w-3/5 sm:w-4/5 w-11/12 bg-bgPrimary mx-auto mt-20 sm:pt-20 pt-32 pb-20  rounded-md overflow-hidden relative">
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
              placeholder="Enter your email..."
              required
              className="text-textDark pl-1 rounded-md outline-none"
            />
            <div className="flex items-center gap-1">
              <input
                id="showPassword"
                type="checkbox"
                onChange={() => setShowConfirmPassword(!showConfirmmPassword)}
              />
              <label htmlFor="showPassword" className="text-xs text-textDark">
                {showConfirmmPassword ? "Hide" : "Show"} Confirm Password
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-fit">
        <Button
          text="Register"
          fn={handleRegisterButton}
          bgColor="bg-bgSecondary"
        />
      </div>
    </form>
  );
};

export default RegisterForm;
