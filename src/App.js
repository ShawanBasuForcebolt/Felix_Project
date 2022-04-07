import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Upload} from "./scripts/Upload.js"
import {Crop} from "./scripts/Crop.js";
import {Document} from "./scripts/Document.js";
import {Basket} from "./scripts/Basket.js";

function App() {
  const [image, setImage] = useState("");
  const updateImage = (src) => {
    setImage(src);
  };
  return (
    <>
      <Router>
        <Link to="/"></Link>
        <Link to="/crop_image"></Link>
        <Link to="/scan_document"></Link>
        <Link to="/shopping_basket"></Link>
        <Routes>
          <Route
            exact
            path="/"
            element={<Upload updateImage={updateImage} />}
          />

          <Route exact path="/crop_image" element={<Crop image={image} />} />

          <Route exact path="/scan_document" element={<Document />} />

          <Route exact path="/shopping_basket" element={<Basket />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
