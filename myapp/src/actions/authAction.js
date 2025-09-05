import { createAction } from "@reduxjs/toolkit";


export const AuthAction = {
    authenticate: createAction('auth/Authenticate'),
    logout: createAction('auth/Logout')
}