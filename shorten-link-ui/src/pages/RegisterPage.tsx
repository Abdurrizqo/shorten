import axios from "axios";
import { useState } from "react";
import LoadingOverlay from "../components/LoadingOverlay";
import { Link, redirect, useNavigate } from "react-router-dom";

function RegisterPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [status, setStatus] = useState<string>("SUCCESS");
  const [errorState, setErrorState] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setErrorState("");
    setStatus("LOADING");

    axios
      .post(`${import.meta.env.VITE_REACT_APP_API_URL}user/register`, {
        email: email,
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
        navigate('/verification-account')
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
          <h1 className="text-2xl font-bold text-orange-theme text-center">
            Register
          </h1>

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
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="border rounded outline-gray-300 p-2"
            />

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border rounded outline-gray-300 p-2"
            />

            <input
              type="password"
              required
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              placeholder="Password Confirmation"
              className="border rounded outline-gray-300 p-2"
            />
            <input
              type="submit"
              value="Register"
              className="bg-orange-theme cursor-pointer font-semibold rounded shadow p-2 text-white hover:bg-orange-500"
              onClick={handleSubmit}
            />
          </form>

          <div className="text-center">
            <Link
              to="/"
              className="text-center text-dark-theme hover:underline text-sm phone:text-base"
            >
              already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
