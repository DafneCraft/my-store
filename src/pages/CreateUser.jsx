import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";

export default function CreateUser() {
  return (
    <>
      <Header />
      <FormCreateUser />
      <Footer />
    </>
  );
}

function FormCreateUser() {
  return (
    <div className="mt-30 flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Create User</h1>
      <form className="bg-white p-6 rounded shadow-md w-80">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstname"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="First Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastname"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            type="text"
            id="username"
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
          Create
        </button>
      </form>
    </div>
  );
}
//           >
