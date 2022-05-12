import React, { useContext } from 'react';
import HomeController from '../Pages/Home/HomeController';
import DetailController from '../Pages/Detail/DetailController';
import LoginController from '../Pages/Login/LoginController';
import { Routes, Route } from "react-router-dom";
import { InfoContext } from '../store/InfoContext';

const RouteController = () => {
    
    const { tokenLogin, onMakeLogin } = useContext(InfoContext);

    let hasToken = false;
    if (tokenLogin === undefined || tokenLogin === null) {
        let storageToken = localStorage.getItem("tokenLogin");
        if (storageToken !== null && storageToken !== undefined) {
            onMakeLogin(storageToken);
            hasToken = true;
        }
    } else {
        hasToken = true;
    }

    if (hasToken) {
        return (
            <Routes>
                <Route path="/" element={<HomeController />} />
                <Route path="detail">
                    <Route path=":infoID" element={<DetailController />} />
                    <Route path="add" element={<DetailController />} />
                </Route>
            </Routes>
        );
    } else {
        return (
            <Routes>
                <Route path="/" element={<LoginController />} />
							  <Route path="*" element={<LoginController />} />
            </Routes>
        );
    } 
};

export default RouteController;