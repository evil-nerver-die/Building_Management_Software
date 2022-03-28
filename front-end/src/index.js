import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./scene/home";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Đổi tên element component sau khi code xong scene */}
          <Route path="/home" element={<Home />} />
          <Route path="/premise" element={<App />} />
          <Route path="/contract" element={<App />} />
          <Route path="/service" element={<App />} />
          <Route path="/customer" element={<App />} />
          <Route path="/employee" element={<App />} />
          <Route path="/account" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
