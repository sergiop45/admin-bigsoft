import { Route, Routes, useNavigate } from "react-router-dom";
import Cadastrar from "../pages/Cadastrar";
import Home from "../pages/Home";
import Email from "../pages/emails";
import Posts from "../pages/Posts";
import Login from "../pages/Login";
import { useEffect, useState } from "react";

export const AppRoutes = () => {


    return (
        
        
            <Routes>
                
                <Route  path="/" element={<Home/>} />
                <Route  path="/email" element={<Email/>} />
                <Route  path="/cadastrar" element={<Cadastrar/>} />
                <Route path="/post" element={<Posts />} />
                <Route path="/login" element={<Login />} />
                <Route  path="*" element={<Home/>} />

            </Routes>
        
        
    )
}