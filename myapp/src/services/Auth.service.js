

function setAuthUser(user){
    sessionStorage.setItem("authuser", user);
}

function removeAuthUser(){
    sessionStorage.removeItem("authuser");
}

function getAuthUser(){
    let currentuser=null;
    if(sessionStorage["authuser"] !== null){
        currentuser = sessionStorage.getItem("authuser");
    }

    return currentuser;
}

export const AuthService = {
    setAuthUser,
    getAuthUser,
    removeAuthUser
}