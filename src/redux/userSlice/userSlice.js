import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export default createSlice({
    name: 'user',
    initialState: {
        status: "idle",
        user: {},
        myPlayLists: []
    },
    reducers: {
        resetLogout: (state, action) => {
            localStorage.removeItem("user")
            state.user = {}
            state.myPlayLists = {}
        },
        addPlayList: (state, action) => {
            const checkItemPlayList = state.myPlayLists.filter((item) => item.id === action.payload.id);
            console.log(checkItemPlayList);
            if (checkItemPlayList.length === 0) {
                state.myPlayLists.push(action.payload);
                const data = JSON.parse(localStorage.getItem('data'));
                if (data) {
                    let i = 0;
                    const myPLayList = data.filter((item, index) => {
                        if (item.user._id == state.user._id) {
                            i = index;
                            return item
                        }
                    });

                    if (myPLayList.length === 0) {
                        data.push({
                            user: state.user,
                            playlist: state.myPlayLists
                        })
                    } else {
                        const myData = myPLayList[0];
                        const newData = { ...myData, playlist: state.myPlayLists };
                        data[i] = newData;
                    }
                    localStorage.setItem("data", JSON.stringify(data))
                }
                else {
                    localStorage.setItem("data", JSON.stringify(
                        [
                            {
                                user: state.user,
                                playlist: state.myPlayLists
                            }
                        ]
                    ))
                }
            }

        },
        deletePlayList: (state, action) => {

        },
        login: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        register: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(state.user));
        },

    },
    extraReducers: builder => {
        builder
            .addCase(fetchDataUser.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchDataUser.fulfilled, (state, action) => {
                const data = JSON.parse(action.payload);
                console.log('user: ', data);
                if (data) {
                    state.user = data;
                    const dataPlayList = JSON.parse(localStorage.getItem('data'));
                    console.log("dataPlayList: ", dataPlayList);

                    if (dataPlayList) {
                        const filterUserData = dataPlayList.filter((item, index) => item.user._id == data._id);
                        console.log("filterUserData: ", filterUserData);
                        if (filterUserData.length > 0) {
                            state.myPlayLists = filterUserData[0].playlist;
                        }
                    }
                } else {
                    console.log("Khong ton tai....");
                }
                state.status = "idle";
            })

    }
})

export const fetchDataUser = createAsyncThunk('user/fetchDataUser', async () => {
    const user = localStorage.getItem('user');
    return user;
})
