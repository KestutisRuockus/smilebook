import { useState } from "react";
import Button from "../components/Button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLoginButton = () => {
    console.log("login btn");
  };

  const handleRegisterButton = () => {
    console.log("register btn");
  };

  return (
    <div className="lg:w-1/2 sm:w-4/5 w-11/12 rounded-md border-2 border-borderColor">
      <form className="flex flex-col gap-4 p-4">
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
          <input
            id="password"
            type="email"
            value={password}
            onChange={handlePasswordInput}
            placeholder="Enter your password..."
            required
            className="text-textDark pl-1 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            text="Login"
            fn={handleLoginButton}
            bgColor="bg-bgSecondary"
          />
          <Button
            text="Register"
            fn={handleRegisterButton}
            bgColor="bg-bgLight"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
