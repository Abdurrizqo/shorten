import axios from "axios";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import LoadingOverlay from "./components/LoadingOverlay";
import { Link } from "react-router-dom";

function App() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState<string>("SUCCESS");
  const [errorState, setErrorState] = useState<string>("");

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setErrorState("");
    setStatus("LOADING");
    axios
      .post(`${import.meta.env.VITE_REACT_APP_API_URL}user/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("credential", JSON.stringify(res.data));
        setStatus("SUCCESS");
      })
      .catch((err) => {
        setStatus("SUCCESS");
        setErrorState(err.response.data.detail);
      });
  };

  return (
    <>
      <LoadingOverlay status={status} />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-2 phone:p-4 rounded shadow w-[20em] phone:w-[24em]">
          <h1 className="text-xl font-bold text-orange-theme text-center">
            Login
          </h1>

          {errorState === "Invalid Password or Email" ? (
            <div className="bg-red-100 rounded p-1 my-5 mx-5">
              <p className="text-center text-red-500 font-semibold">
                {errorState}
              </p>
            </div>
          ) : (
            <></>
          )}

          <form className="flex flex-col m-4 phone:m-6 gap-6 phone:gap-8">
            <input
              required
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="border rounded outline-gray-300 p-2"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border rounded outline-gray-300 p-2"
            />
            <input
              type="submit"
              value="Login"
              className="bg-orange-theme cursor-pointer font-semibold rounded shadow p-2 text-white hover:bg-orange-500"
              onClick={handleSubmit}
            />
          </form>

          <div className="text-center">
            <Link
              to="/register"
              className="text-center text-dark-theme hover:underline text-sm phone:text-base"
            >
              Don't have an account? Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
