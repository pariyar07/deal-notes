import { Link } from "react-router-dom";
import { useAuth } from "contexts/authContext";
import useToast from "custom/useToast";

export const LandingNav = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const { showToast } = useToast();

  const logoutHandler = () => {
    setIsLoggedIn(false);
    showToast("Successfully Logged Out", "success");
  }
 
  return (
    <>
      <div className="nav-wrapper">
        <img
          className="home-nav-img"
          src="/assets/DEAl.png"
          alt="logo"
          title="DEAL"
        />
        <div className="nav-btn-wrapper">
          {isLoggedIn === true ? (
            <button className="nav-signup" onClick={logoutHandler}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="nav-login">
                Log in
              </Link>
              <Link to="/signup" className="nav-signup">
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};
