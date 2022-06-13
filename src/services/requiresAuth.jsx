import { Navigate } from "react-router-dom";
import { useAuth } from "contexts/authContext";

export function RequiresAuth({ children }) {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? (
        children
    ) : (
        <Navigate to="/" replace />
    );
}
