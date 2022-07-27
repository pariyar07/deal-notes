import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "contexts/authContext";
import useToast from "custom/useToast";

export default function SignUp() {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast } = useToast();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("/api/auth/signup", {
        email: userEmail,
        password: password,
        username: userName,
      });
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem(
        "dealUser",
        JSON.stringify(response.data.createdUser)
      );
      navigate(location?.state?.from?.pathname || "/", { replace: true });
      setIsLoggedIn((isLoggedIn) => !isLoggedIn);
      showToast("Successfully Signed Up", "success");
    } catch (error) {
      console.error(error);
      showToast("Error! Try Again", "error");
    }
    setUserName("");
    setUserEmail("");
    setPassword("");
    setCheckPassword("");
  };

  return (
    <>
      <section className="flex w-full min-h-screen justify-around items-center">
        <div className="flex flex-col w-3/6">
          <Link to="/">
            <img
              src="/assets/DEAL.png"
              alt="brand logo"
              className="w-14 h-14 rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ml-6 object-scale-down"
            />
          </Link>
          <h1 className="text-8xl font-semibold z-10 px-4 py-4 mb-16">
            DEAL, we <span className="text-blue">take care</span> of your
            thoughts...
          </h1>
          <img
            className="animate-bounce rounded-xl w-full"
            src="https://picsum.photos/id/1073/2500/800"
            alt="logo"
          />
        </div>
        <div className="flex flex-col rounded-xl gap-4 overflow-hidden shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] w-2/6">
          <h2 className="flex items-center justify-center py-4 bg-grey text-2xl font-semibold">
            Sign-Up
          </h2>
          <form id="form" className="flex flex-col px-6 py-6 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="border-grey border rounded-md py-1 px-2"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="border-grey border rounded-md py-1 px-2"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="border-grey border rounded-md py-1 px-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="checkpassword">Check Password</label>
              <input
                type="password"
                id="checkpassword"
                placeholder="Check Password"
                className="border-grey border rounded-md py-1 px-2"
                value={checkPassword}
                onChange={(e) => setCheckPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
              <button
                className="text-center font-medium text-xl bg-black text-white w-full rounded-xl py-2 px-2 cursor-pointer"
                title="Signup"
                onClick={handleSignUp}
              >
                Sign-Up
              </button>
              <Link
                to="/login"
                className="flex gap-3 items-center justify-center text-center font-medium text-xl bg-black text-white w-full rounded-xl py-2 px-2 cursor-pointer"
                title="Go to Login"
              >
                <button>Log In</button>
                <BsFillArrowRightCircleFill />
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
