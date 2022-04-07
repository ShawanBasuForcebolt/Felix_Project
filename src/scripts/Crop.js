import React, {useState}from 'react';
import "../styles/Crop.css";
import "../global.css";
import tick from "../images/tick.svg";
import backwhite from "../images/Rectangle 7.svg";
import { ArrowLeftOutlined } from "@ant-design/icons";
import loadingFlownew from "../images/whh_loadingflowcw.svg";
import cropImage2 from "../images/noun_Crop_629172 2.svg";
import cropDocument from "../images/noun_List_4411314 1.svg";
import shoppingBasket from "../images/noun_Shopping Cart_840489 1.svg";
import rectangleBar from "../images/Rectangle 8.svg";
import eclipse_grey from "../images/Ellipse_grey.svg";
import noDocuments from "../images/et_document.svg";
import eclipse_blue from "../images/Eliipse_blue.svg";
import eclipse from "../images/Ellipse 1.svg";
import bluePhoto from "../images/greenphoto.svg";
import smallEclipse from "../images/small_eclipse.svg";

import Schoolingo from "../images/Schoolingo final 1.svg";
import { useNavigate } from "react-router-dom";

export const Crop = ({image}) => {
    const [file, setFile] = useState(null);

  const navigate = useNavigate();
  const backButton = () => {
    navigate("/", { replace: true });
  };
  const nextPage = () => {
    navigate("/scan_document", { replace: true });
  };
  return (
     <div className="box">
      <button className="leftarrow" onClick={backButton}>
        <ArrowLeftOutlined />
      </button>
      <div className="text-center">
        <div>
          <div className="textpageOne">
            <span>Adjust the points</span>
          </div>
          <img src={Schoolingo} alt="SchoolingoLogo" className="Schoolingo" />
        </div>
      </div>

      <div>
        <div className="flexone">
          <div className="icons">
            <img src={bluePhoto} alt="PhotoIcon" className="photoicon" />
            <img src={cropImage2} alt="CropIcon" className="cropimage" />
            <img
              src={cropDocument}
              alt="CropDocument"
              className="cropdocument"
            />
            <img
              src={shoppingBasket}
              alt="ShoppingBasket"
              className="shoppingbasket"
            />
            <div>
              <img src={backwhite} alt="GreyBar" className="greybar" />
              <img
                src={rectangleBar}
                alt="RectangleBar"
                className="rectanglebar2"
              />
              <img src={eclipse_blue} alt="Eclipse" className="eclipse" />
              <img src={tick} alt="Fyyy" className="tick" />

              <img src={eclipse} alt="Eclipse_2" className="eclipse2" />
              <img
                src={loadingFlownew}
                alt="LoadingFlow"
                className="loadingflowcwnew"
              />
              <img src={eclipse_grey} alt="Eclipse_2" className="eclipse3" />
              <img src={eclipse_grey} alt="Eclipse_2" className="eclipse4" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="leftbox">
            <div class="image-crop">
              {
                <img
                  className="previewimg"
                  src={image}
                  alt="UploadImage"
                  style={{
                    maxWidth: "auto",
                    height: "420px",
                    paddingRight: "118px",
                  }}
                />
              }
            </div>
            <div className="eclipseA">
              <img src={smallEclipse} alt="SmallEclipse" />
            </div>
            <div className="eclipseB">
              <img src={smallEclipse} alt="SmallEclipse" />
            </div>
            <div className="eclipseC">
              <img src={smallEclipse} alt="SmallEclipse" />
            </div>
            <div className="eclipseD">
              <img src={smallEclipse} alt="SmallEclipse" />
            </div>
          </div>
          <div className="rightbox col-sm-6">
            {image !== null ? (
              <img
                className="previewimg"
                src={image}
                alt="UploadImage"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "200%",
                  height: "200%",
                }}
              />
            ) : (
              <div>
                <div className="nodocumentsicon">
                  <img
                    className="img-fluid"
                    src={noDocuments}
                    alt="NoDocumentsPhoto"
                  />
                  <br />
                  <span className="nodocumenttext">No Documents</span>
                </div>
              </div>
            )}
          </div>
          <button className="continuebutton" onClick={nextPage}>
            Continue
          </button>
        </div>
      </div>
    </div>
  )
};
