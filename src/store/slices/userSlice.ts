import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';


import fetchUSer from '../../services/user';

type TUSer = { name: string, age: number };

const initialState: {
    user?:  TUSer ;
    loading: boolean;
    isError: boolean;
} = {
    loading: false,
    isError: false
}

const getUser = createAsyncThunk( 'user/async', async (thunkArgs, thinkAPI) => {
    try{
        const fetchedUSer: TUSer = await fetchUSer();
        return fetchedUSer;
    }catch (err){
        return  thinkAPI.rejectWithValue('User is not fetched');
    }

} )

const userSlice = createSlice({
    name: 'user',
    reducers: {

    },
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(getUser.rejected, (state) => {
            state.isError = true;
            state.loading = false;
        });

        builder.addCase(getUser.fulfilled, (state, actionPayload) => {
            state.loading = false;
            state.isError = false;
            state.user = actionPayload.payload
        })

    }

});


export { getUser };
export default userSlice.reducer;
































