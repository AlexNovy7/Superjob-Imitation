import { createSlice } from '@reduxjs/toolkit';


const appSlice = createSlice({
    name:'appSlice',
    initialState:{
        filterData:{
            industry:[],
            paymentFrom:'',
            paymentTo:''
        },
        searchData:''
    },
    reducers:{
        setFilterData: (state, action) => void (state.filterData = action.payload),
        setSearchData: (state, action) => void (state.searchData = action.payload),
    }
    
})
export const { setFilterData } = appSlice.actions;
export const { setSearchData } = appSlice.actions;
export default appSlice.reducer;