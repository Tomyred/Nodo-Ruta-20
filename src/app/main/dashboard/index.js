import React from "react";
import { Route, Routes } from "react-router";
import routes from "../../config/routesConfig";
import Page404 from "../../pages/page404";
import Sidebar from "./sidebar";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="container">
                <div className="page__container">
                    <Routes>
                        <Route path="*" exact={true} element={<Page404 />} />
                        {routes.map(routeConfig =>
                            routeConfig.map((route, i) => (
                                <Route
                                    key={i}
                                    path={route.path}
                                    exact={route.exact}
                                    element={route.component}
                                />
                            ))
                        )}
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
