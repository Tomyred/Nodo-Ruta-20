import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import routes from "../../config/routesConfig";
import Page404 from "../../pages/page404";
import TopNavbar from "./topNavbar";
import Sidebar from "./sidebar";
import LoadingScreen from "../../pages/loadingScreen";
import { useDispatch } from "react-redux";

const Dashboard = () => {
    const dispatch = useDispatch();
    return (
        <div className="app">
            <div className="dashboard">
                <Sidebar />

                <div className="big__container">
                    <TopNavbar />
                    <div className="page__container">
                        <Routes>
                            <Route
                                path="*"
                                exact={true}
                                element={<Page404 />}
                            />
                            <Route
                                path="/"
                                exact={true}
                                element={<Navigate to="/home" />}
                            />
                            {routes.map(routeConfig =>
                                routeConfig.map((route, i) => (
                                    <Route
                                        key={i}
                                        path={route.path}
                                        exact={route.exact}
                                        element={
                                            <Suspense
                                                fallback={<LoadingScreen />}
                                            >
                                                <route.component
                                                    dispatch={dispatch}
                                                />
                                            </Suspense>
                                        }
                                    />
                                ))
                            )}
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
