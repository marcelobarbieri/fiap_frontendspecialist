import React from 'react';
import HomeController from '../Pages/Home/HomeController';
import DetailController from '../Pages/Detail/DetailController';
import { Routes, Route } from "react-router-dom";

const routes = () => {
    return (
        <Routes>
            {/* //locahost:3000/ */}
            <Route path="/" element={<HomeController />} />
            <Route path="detail">
                {/* //locahost:3000/1 */}
                <Route path=":infoID" element={<DetailController />} />
                {/* //locahost:3000/add */}
                <Route path="add" element={<DetailController />} />
            </Route>
            <Route path="*" element={<HomeController />} />
        </Routes>
    );
};

export default routes;