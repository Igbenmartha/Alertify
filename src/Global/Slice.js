import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name:"user",
    initialState:{
        userdata:{},
        id: "",
        token: "",

        isAdmin:false,

      
        
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
         admin:(state,{payload})=> {
        state.isAdmin=(payload);
    },

    cleartoken:(state,action)=>{
        state.token = "",
        state.userdata ="",
        state.id=""
        state.isAdmin=""
    }

        

        
    }
})
export const { userinfo, userToken, userId, admin, cleartoken } = Slice.actions;
export default Slice.reducer