import React from 'react'

import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
    title: "WashiTea | Login",
    description: "Login Page of About",
};

const Login = () => {
  return (
    <>
        <div>Login</div>
        <Link href="/sign-up">Sign Up</Link>
    </>
  )
}

export default Login
