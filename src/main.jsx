import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Welcome from "./welcome/welcome";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path="/" element={<Navigate to="/welcome" />} />
                <Route path="welcome" element={<Welcome />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
