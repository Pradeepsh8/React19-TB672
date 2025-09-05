import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../services/Auth.service";
import { AuthAction } from "../actions/authAction";
import { useSelector } from "react-redux";
import store from "../store";


export const UserContext = createContext(null);

export function UserProvider({children}){
    //const [currentUser, setCurrentUser] = useState(AuthService.getAuthUser());

    const currentUser = useSelector((state) => state.authReducer.currentUser);

    const navigate = useNavigate();

    const logoutClick = () => {
        //setCurrentUser(null);
        //AuthService.removeAuthUser();

        store.dispatch(AuthAction.logout());
        navigate('/signin');
    }

    const loginClick=(data)=> {
        //setCurrentUser(data);
        //AuthService.setAuthUser(data);

        store.dispatch(AuthAction.authenticate(data));
    }
    
    return (
        <UserContext.Provider value={{currentUser, loginClick, logoutClick}}>
            {children}
        </UserContext.Provider>
    );
}

