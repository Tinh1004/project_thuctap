import Sidebar from '../../components/sidebar/index';
import NavBar from '../../components/navbar/index';
import Footer from '../../components/footer/index';
// import { useState, useEffect, useRef } from 'react';
import HomePage from "../HomePage/HomePage";
import ProfilePage from "../profile_page/ProfilePage";
import SearchPage from "../search_page/SearchPage";
import Datapage2 from "../../components/category/page2/Datapage2";
import CategoryPage from "../CategoryPage";

import { Routes, Route, Navigate } from "react-router-dom";


export default function AppDefault({ children }) {
    return (
        <>
            <div className="bg"></div>
            <div className="wrapper" >
                <Sidebar />
                <NavBar />
                <Routes>
                    <Route path="*" element={<Navigate to="/404" />} />
                    <Route index element={<HomePage />} />
                    <Route path="ca-nhan/*" element={<ProfilePage />} />
                    <Route path="the-loai" element={<CategoryPage />} />
                    <Route path="page2" element={<Datapage2 />} />
                    <Route path="search/:search/*" element={<SearchPage />} />
                    {/* 
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<RegisterPage />} />
                    <Route path="/404" element={<NotFoundPage />} />
                    <Route path="/forgot" element={<ForgotPassword />} /> */}
                </Routes>
                {/* {children} */}
            </div>
            <Footer />
        </>
    )
}