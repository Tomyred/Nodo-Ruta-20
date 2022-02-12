import Dashboard from "./main/dashboard";
import "./sass/main.scss";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import generateStore from "./store";
import { Provider } from "react-redux";

const store = generateStore();
function App() {
    return (
        <Provider store={store}>
            <Router>
                <Dashboard />
            </Router>
        </Provider>
    );
}

export default App;
