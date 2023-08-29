import React from "react";
import { render } from "react-dom";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Preview from "./Components/Preview/Preview.jsx";
import NotFound from "./Components/notFound/notFound.jsx";

import "./Files/Fonts/MulishV12/mulish-v12-vietnamese_latin-ext_latin_cyrillic-ext_cyrillic-regular.woff";

// const location = useLocation();

render(
  <BrowserRouter>
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="*" element={<NotFound />} />
        
        {/* <Route path="preview/:mapId/" element={<NewWorkflow />} /> */}
      </Routes>
    </AnimatePresence>
  </BrowserRouter>,
  document.getElementById("root")
);

// scp -r build dmitry@130.193.53.35:/home/dmitry/minm-front
