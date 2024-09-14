import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name:"user",
    initialState:{
        userdata:{},
        
        id: "",
        token: ""
        
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
         clearUser(state) {
      state.userdata =[]
      state.id = null
    },
        

        
    }
})
export const {userinfo,userToken,userId,clearUser} = Slice.actions;
export default Slice.reducer