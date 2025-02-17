import {createSlice, createAsyncThunk} from '@redux/toolkit'


const userDefaultState = {
    _id: null,
    firstname: null,
    lastname: null,
    email: null,
    mobile: null,
    token: null,
};

const initialState = {
    user: userDefaultState,
    isError: false,
    isLoading: false,
    isSucces: false,
    message: "",
};

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder) => {},
})