import React, { useState } from "react";
import { Link, NavLink, Route, Routes } from 'react-router-dom';
const Home = () => {
    return (
        <div className="">
            <div className="bg-adminmainColor p-2 w-full text-white md:flex md:items-center justify-between flex-wrap text-lg font-semibold text-center">
                <div>
                    <p className="px-2">MFT クリニック画面</p>
                </div>
                <div className="md:flex md:items-center">
                    <NavLink to="programmanage/programA" className="md:border-r-2">
                        <p className="mx-2 underline hover:text-mainColor sm:py-2"> プログラムリスト</p>
                    </NavLink>
                    <NavLink to="patientmamage/patientlist" className="md:border-r-2">
                        <p className="mx-2 underline hover:text-mainColor sm:py-2">プログラムリスト</p>
                    </NavLink>
                    <p className="px-2 ">東京医科歯科大学</p>    
                </div>            
            </div>
            <Routes>
                <Route path="/patientmamage/*"  element={<div/>}/> 
                <Route path="/programmanage/*"  element={<div/>}/>
            </Routes>
        </div>        
    ); 
};

export default Home;