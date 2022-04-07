import React, { useState }  from 'react'
import axios from "axios";
import "../styles/Upload.css";
import "../global.css";
import { useNavigate } from "react-router-dom";
import backwhite from "../images/Rectangle 7.svg";
import Schoolingo from "../images/Schoolingo final 1.svg";
import photoIcon from "../images/noun_Upload_3927 1.svg";
import cropImage from "../images/noun_Crop_629172 1.svg";
import cropDocument from "../images/noun_List_4411314 1.svg";
import shoppingBasket from "../images/noun_Shopping Cart_840489 1.svg";
import loadingFlow from "../images/whh_loadingflowcw.svg";
import eclipse from "../images/Ellipse 1.svg";
import rectangleBar from "../images/Rectangle 8.svg";
import eclipse_grey from "../images/Ellipse_grey.svg";
import cloudUpload from "../images/bi_cloud-upload.svg";
import noDocuments from "../images/et_document.svg";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Web from "./Webcam";
import Uploady, {
  withRequestPreSendUpdate,
  useItemFinalizeListener,
} from "@rpldy/uploady";

export const Upload = ({updateImage}) => {
    const [userInfo, setuserInfo] = useState({
    file: [],
    filepreview: null,
  });

  const handleInputChange = (event) => {
    setuserInfo({
      ...userInfo,
      file: event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),
    });
  };
  updateImage(userInfo.filepreview);
  const [isSucces, setSuccess] = useState(null);

  const submit = async () => {
    const formdata = new FormData();
    formdata.append("avatar", userInfo.file);

    axios
      .post("http://localhost:8080/imageupload", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        // then print response status
        console.warn(res);
        if (res.data.success === 1) {
          setSuccess("Image upload successfully");
        }
      });
  };

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  const [openWebcam, setWebcam] = useState(false);
  const history = useNavigate();
  const doSomething = () => {
    history("./crop_image", { replace: true });
  };
  const openWeb = () => {
    setWebcam(true);
  };
  return (
    <>
      {openWebcam === true && <Web />}
      {/* <Webcam openWebcam={false} /> */}
      <Uploady destination={{ url: "/crop_image" }}>
        <div className="box">
          <button className="leftarrow">
            <ArrowLeftOutlined />
          </button>
          <div className="text-center">
            <div>
              <div className="textpageOne">
                <span> Upload a picture or pdf of your list</span>
              </div>
              <img
                src={Schoolingo}
                alt="SchoolingoLogo"
                className="Schoolingo"
              />
            </div>
          </div>
          <div className="flexone">
            <div className="icons">
              <img src={photoIcon} alt="PhotoIcon" className="photoicon" />
              <img src={cropImage} alt="CropIcon" className="cropimage" />
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
                  className="rectanglebar1"
                />
                <img src={eclipse} alt="Eclipse" className="eclipse" />
                <img
                  src={loadingFlow}
                  alt="LoadingFlow"
                  className="loadingflowcw"
                />

                <img src={eclipse_grey} alt="Eclipse_2" className="eclipse3" />
                <img src={eclipse_grey} alt="Eclipse_2" className="eclipse2" />
                <img src={eclipse_grey} alt="Eclipse_2" className="eclipse4" />
              </div>
            </div>

            <div className="container">
              <div className="rowsT">
                <div className="leftbox">
                  <div className="dragbutton">
                    <button className="drag-drop">
                      <img src={cloudUpload} alt="CloudUpload" />
                    </button>
                    <p className="dragfile">Drags files to upload</p>
                  </div>

                  <div>
                    <div className="btn-wrap-filechoose">
                    <div className="img-upload-wrap">
                      <input
                        type="file"
                        accept="image/*"
                        name="upload_file"
                        onChange={handleInputChange}
                        
                        style={{ opacity: 0.1 }}
                        id="img-up"
                      />
                      <label for="img-up" style={{ marginRight: "20px" }}>choose file</label>

                      
                        <button
                          type="submit"
                          // className="btn btn-dark"
                          onClick={doSomething}
                        >
                          dc
                        </button>
                      </div>
                      <button
                        onClick={openWeb}
                        className="takepicturebutton"
                        
                      >
                        Take Picture
                      </button>
                    </div>             
                  </div>
                </div>
                <div className="rightbox col-sm-6">
                  {userInfo.filepreview !== null ? (
                    <img
                      className="previewimg"
                      src={userInfo.filepreview}
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
              </div>
            </div>
          </div>
        </div>
      </Uploady>
    </>
  )
}
