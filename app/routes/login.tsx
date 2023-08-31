import { Link, NavLink, Outlet } from "@remix-run/react";
export default function LoginPage() {
    return <div>
        <h1 className="text-2xl text-center my-4">
            Login page</h1>
        <Link to="/" className="uppercase">
            Back to Home
        </Link>
    </div>;
}