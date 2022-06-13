import axios from "axios";
import Login from "components/login";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "contexts/authContext";
import useToast from "custom/useToast";

export default function LogIn() {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast } = useToast();

  const handleGuestLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("/api/auth/login", {
        email: "satyam@deal.com",
        password: "satyam@deal123",
      });
      localStorage.setItem("token", response.data.encodedToken);
    } catch (error) {
      console.log(error);
    }
    setIsLoggedIn((isLoggedIn) => !isLoggedIn);
    showToast("Successfully Logged In", "success");
    navigate(location?.state?.from?.pathname || "/", { replace: true });
  };

  return (
    <>
      <Login login={handleGuestLogin} />
    </>
  );
}
