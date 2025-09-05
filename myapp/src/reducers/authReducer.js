import { createReducer } from "@reduxjs/toolkit";
import { AuthService } from "../services/Auth.service";
import { AuthAction } from "../actions/authAction";


const initialState = {
    currentUser: AuthService.getAuthUser()
}

export const authReducer = createReducer(initialState, (builder) =>{

    builder.addCase(AuthAction.authenticate, (state, action) =>{
        state.currentUser = action.payload;
        AuthService.setAuthUser(action.payload);
    })
    .addCase(AuthAction.logout, (state, action)=>{
        state.currentUser = null;
        AuthService.removeAuthUser();
    })

})