import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";

export default function ForgotPassword() {
  return (
    <>
      <Header />
      <FormForgotPassword />
      <Footer />
    </>
  );
}

function FormForgotPassword() {
  return (
    <div className="mt-30 flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Forget Password</h1>
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
            placeholder="Email"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
