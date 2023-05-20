import { createSlice } from '@reduxjs/toolkit';


const appSlice = createSlice({
    name:'appSlice',
    initialState:{
        filterData:{
            industry:[],
            paymentFrom:'',
            paymentTo:''
        },
        searchData:'',
        headerLink:''
    },
    reducers:{
        setFilterData: (state, action) => void (state.filterData = action.payload),
        setSearchData: (state, action) => void (state.searchData = action.payload),
        setHeaderLink: (state, action) => void (state.headerLink = action.payload)
    }
    
})
export const { setFilterData } = appSlice.actions;
export const { setSearchData } = appSlice.actions;
export const { setHeaderLink } = appSlice.actions;
export default appSlice.reducer;