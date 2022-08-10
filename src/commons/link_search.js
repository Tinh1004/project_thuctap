import SearchBody from "../components/searchpage_content/body_searchpage/index";
import SearchSong from "../components/searchpage_content/search_song/SearchSong";
import SearchSinger from "../components/searchpage_content/search_singer/SearchSinger";
import SearchPlaylist from "../components/searchpage_content/search_playlist/SearchPlaylist";

export const linkSearch = [
    {
        content: "tat-ca",
        title: "Tất cả",
        component: <SearchBody />
    },
    {
        content: "ca-si",
        title: "Ca sĩ",
        component: <SearchSinger />
    },
    {
        content: "bai-hat",
        title: "Bài hát",
        component: <SearchSong />
    },
    {
        content: "playlist",
        title: "Playlist",
        component: <SearchPlaylist />
    },
    {
        content: "album",
        title: "Album",
        component: <SearchPlaylist />
    },
    {
        content: "ho-so",
        title: "Hồ sơ",
        component: <SearchBody />
    },

]