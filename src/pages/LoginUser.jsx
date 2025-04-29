import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

export default function LoginUser() {
  return (
    <>
      <Header />
      <LoginForm />
      <Footer />
    </>
  );
}

function LoginForm() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form className="bg-white p-6 rounded shadow-md w-80">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full cursor-pointer"
        >
          Login
        </button>
        <p className="mt-4 text-sm text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:text-blue-700">
            Register here
          </Link>
        </p>
        <p className="mt-4 text-sm text-center">
          <Link
            to="/forgot-password"
            className="text-blue-500 hover:text-blue-700"
          >
            Forgot Password?
          </Link>
        </p>
      </form>
    </div>
  );
}
