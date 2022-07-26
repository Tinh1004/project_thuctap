import { createSelector } from '@reduxjs/toolkit';
export const searchTextSelector = (state) => state.filter.search;
export const dataSelector = (state) => state.data.array;
export const songSelector = (state) => state.data.song;
// export const idSongSelector = (state) => state.data.id;


export const arraySearchSong = createSelector(
    dataSelector,
    searchTextSelector,
    (data, searchText) => {
        let array = [];
        data.filter((todo) => {
            if (todo.name.toUpperCase().includes(searchText.toUpperCase()) || todo.author.toUpperCase().includes(searchText.toUpperCase())) {
                array.push({
                    id: todo.id,
                    title: todo.name,
                    images: todo.links.images,
                    singer: todo.author,
                    url: todo.url
                })
            }
        });
        return array;
    }
);

export const arraySearchSinger = createSelector(
    dataSelector,
    searchTextSelector,
    (data, searchText) => {
        let array = [];
        data.filter((todo) => {
            if (todo.name.toUpperCase().includes(searchText.toUpperCase()) || todo.author.toUpperCase().includes(searchText.toUpperCase())) {
                let check = array.filter((item) => item.singer.toUpperCase() === todo.author.toUpperCase() || todo.author.toUpperCase().includes(item.singer.toUpperCase()));
                if (check.length === 0) {
                    array.push({
                        singer: todo.author,
                        images: todo.links.images
                    })
                }
            }
        })
        return array;
    }
);

// export const nextSongAudio = createSelector(
//     songSelector,idSongSelector, (songAudio, idSongAudio) => {
//             return songAudio.find((item) => {
//                 if ( item.id === idSongAudio) {
//                     return item.url
//                 }
//             })
//     }

// )

// export const nextSongAudio = createSelector()
