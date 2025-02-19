"use client";

import { useState } from "react";
import Login from "./ui/login/page";

export default function Home() {
  const [isAuth] = useState(false);
  return <div className="mx-auto">{!isAuth && <Login />}</div>;
}
