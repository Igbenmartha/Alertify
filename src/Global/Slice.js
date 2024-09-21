import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name:"user",
    initialState:{
        userdata:{},
        
        id: "",
        token: "",
        isAdmin: "",
        contactId : ""
        
    },
    reducers:{
        userinfo: (state,action) => {
            state.userdata = action.payload;
        },
       
        userId : (state,action) =>{
            state.id = action.payload;
        },
        userToken : (state,action) =>{
            state.token = action.payload;
        },
         admin:(state,action)=> {
        state.token = action.payload;
    },
   
        

        
    }
})
export const {userinfo,userToken,userId,admin} = Slice.actions;
export default Slice.reducer