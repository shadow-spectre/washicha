import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
    title: "WashiCha | Login",
    description: "Login Page of WashiCha",
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
