import { node } from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../firebase/firebase";


const AuthWrapper = ({ children }) => {
    const location = useLocation();

    const [user] = useAuthState(auth);

    const isAuthenticated = user || localStorage.getItem('authUser');

    if (isAuthenticated) {
        return <Navigate to={"/dashboard"} state={{ from: location }} replace />;
    }


    return <>{children}</>;
};

AuthWrapper.propTypes = {
    children: node,
};

export default AuthWrapper;
