import Sidebar from '../../components/sidebar/index';
import NavBar from '../../components/navbar/index';
import Footer from '../../components/footer/index';
// import { useState, useEffect, useRef } from 'react';
import HomePage from "../HomePage/HomePage";
import ProfilePage from "../profile_page/ProfilePage";
import SearchPage from "../search_page/SearchPage";
import CategoryPage from "../CategoryPage";
import FormPlaylist from "../form/FormPlaylist";


import { Routes, Route, Navigate } from "react-router-dom";
import ListPopularSong from '../HomePage/ListPopularSong';
import ListPopularArtists from '../HomePage/ListPopularArtist';
import ListPopularAlbum from '../HomePage/ListPopularAlbum';
import Datapage2 from '../../components/category/page2/Datapage2';
import Datapage3 from '../../components/category/page3/Datapage3';
import SongAtWork from '../HomePage/Album/ListSongAtWork';
import SongAtParty from '../HomePage/Album/ListSongAtParty';
import SongNCSRelease from '../HomePage/Album/ListSongNCSRelease';
import SongSummerVibe from '../HomePage/Album/ListSongSummerVibe';
import SongUSUKTopHit from '../HomePage/Album/ListSongUSUKTopHit';
import { element } from 'prop-types';

const arrayOfHomePages = [
    {
        link: '',
        component: <></>
    }
]

const arrayOfCategoryPages = [
    {
        link: '',
        component: <></>
    }
]

export default function AppDefault({ children }) {
    const routerHompage = [
        {
            id :0,
            path: "/list-popular-song",
            element: <ListPopularSong />
        },
        {
            id:1,
            path:"/list-popular-artist",
            element: <ListPopularArtists />
        },
        {
            id:2,
            path: "/list-popular-album",
            element: <ListPopularAlbum />
        },
        {
            id:3,
            path:"/list-song-at-work" ,
            element: <SongAtWork/>
        },
        {
            id:4,
            path: "/list-song-at-party",
            element: <SongAtParty/>
        },
        {
            id:5,
            path: "/list-song-NCSRelease" ,
            element: <SongNCSRelease/>
        }, 
        {
            id:6,
            path: "/list-song-party-summervibe",
            element: <SongSummerVibe/>
        },
        {
            id:7,
            path:"/list-song-USUKTopHit",
            element:<SongUSUKTopHit/>
        },
    ]
    const routerCategorypage=[
        {
            id:1,
            path:"/the-loai/VietNam",
            element:<Datapage3/>
        },
        {
            id:2,
            path:"the-loai/AuMy",
            element:<Datapage2/>
        },
        {
            id:3,
            path:"/the-loai/HanQuoc",
            element:<Datapage3/>
        },
        {
            id:4,
            path:"/the-loai/TrungQuoc",
            element:<Datapage2/>
        },
        {
            id:5,
            path:"/the-loai/COFFEE",
            element:<Datapage3/>
        },
        {
            id:6,
            path:"/the-loai/GAME",
            element:<Datapage2/>
        },
        {
            id:7,
            path:"/the-loai/WORKING",
            element:<Datapage3/>
        },
        {
            id:8,
            path:"/the-loai/RELAX",
            element:<Datapage2/>
        },
        {
            id:9,
            path:"/the-loai/Mien-Trung-Ngan-Nam-Bien-Doi",
            element:<Datapage2/>
        },
        {
            id:10,
            path:"/the-loai/Only-Honest-On-The-Weekend",
            element:<Datapage3/>
        },
        {
            id:11,
            path:"/the-loai/K-EDM",
            element:<Datapage3/>
        },
        {
            id:12,
            path:"/the-loai/Dance-Pop",
            element:<Datapage3/>
        },
        {
            id:13,
            path:"/the-loai/Best-EDM",
            element:<Datapage2/>
        },
        {
            id:14,
            path:"/the-loai/Paradise-Again",
            element:<Datapage2/>
        }
    ]
    return (
        <>
            <div className="bg"></div>
            <div className="wrapper" >
                <Sidebar />
                <NavBar />
                <Routes>
                    <Route path="*" element={<Navigate to="/404" />} />
                    <Route index element={<HomePage />} />
                        {routerHompage.map((item) => (
                            <Route key={item.id} path = {item.path} element = {item.element}/>
                        ))}
                    <Route path="ca-nhan/*" element={<ProfilePage />} />


                    {/* Nguyen */}
                    <Route path="the-loai" element={<CategoryPage />} />
                        {routerCategorypage.map((item)=>(
                            <Route key={item.id} path={item.path} element={item.element}></Route>
                        ))}
                    {/* <Route path="the-loai/VietNam" element={<Datapage3 />} />
                    <Route path="the-loai/AuMy" element={<Datapage3 />} />
                    <Route path="the-loai/HanQuoc" element={<Datapage2 />} />
                    <Route path="the-loai/TrungQuoc" element={<Datapage2 />} />
                    <Route path="the-loai/COFFEE" element={<Datapage2 />} />
                    <Route path="the-loai/GAME" element={<Datapage2 />} />
                    <Route path="the-loai/WORKING" element={<Datapage3 />} />
                    <Route path="the-loai/RELAX" element={<Datapage3 />} />
                    <Route path="the-loai/Mien-Trung-Ngan-Nam-Bien-Doi" element={<Datapage2 />} />
                    <Route path="the-loai/Only-Honest-On-The-Weekend" element={<Datapage3 />} />
                    <Route path="the-loai/K-EDM/" element={<Datapage3 />} />
                    <Route path="the-loai/Dance-Pop" element={<Datapage3 />} />
                    <Route path="the-loai/Best-EDM" element={<Datapage2 />} />
                    <Route path="the-loai/Paradise-Again" element={<Datapage2 />} /> */}


                    <Route path="search/:search/*" element={<SearchPage />} />
                    {/* <Route path="tao-playlist" element={<FormPlaylist />} /> */}


                    {/* 
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<RegisterPage />} />
                    <Route path="/404" element={<NotFoundPage />} />
                    <Route path="/forgot" element={<ForgotPassword />} /> */}
                </Routes >
                {/* {children} */}
            </div >
            <Footer />
        </>
    )
}