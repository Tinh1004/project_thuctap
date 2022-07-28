import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "user",
  initialState: {
    user: {},
    myPlayLists: [
      {
        name: "Alan Walker",
        discription: "Nekozilla [NCS Release]",
        id: 0,
        image:
          "https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a",
        array: [0, 2, 4, 5, 6, 7, 8, 9],
      },
    ],
  },
  reducers: {},
});
