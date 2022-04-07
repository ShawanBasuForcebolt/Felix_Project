import React,{useState} from 'react';
import "../styles/Document.css";
import "../global.css";
import Schoolingo from "../images/Schoolingo final 1.svg";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeftOutlined,
  PlusCircleOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import bluePhoto from "../images/greenphoto.svg";
import cropImage2 from "../images/crop_blue.svg";
import cropDocument from "../images/noun_List_4411314 3.svg";
import shoppingBasket from "../images/noun_Shopping Cart_840489 1.svg";
import tick from "../images/tick.svg";
import backwhite from "../images/Rectangle 7.svg";
import eclipse_blue from "../images/Eliipse_blue.svg";
import loadingFlownew from "../images/whh_loadingflowcw.svg";
import eclipse from "../images/Ellipse 1.svg";
import eclipse_grey from "../images/Ellipse_grey.svg";
import rectangleBar from "../images/bluebar.svg";
import rectangleBar2 from "../images/Rectangle 8.svg";
import smallEclipse from "../images/small_eclipse.svg";
import imageBorder from "../images/image 10.svg";

export const Document = () => {
    const navigate = useNavigate();
  const backButton = () => {
    navigate("/crop_image", { replace: true });
  };
  const nextPage = () => {
    navigate("/shopping_basket", { replace: true });
  };
  const documents = ["pancil", "books", "pen", "laptop", "phone"];
  const [products, setProducts] = useState(documents);
  const removeItem = (id) => {
    setProducts(products.filter((product, idx) => idx !== id));
  };
  const editItem = (id) => {
    const editProduct= products.map((product, idx)=>{
      if(idx===id){
        return 'tableeeeee';
      }
      else{
        return product;
      }
    })
    setProducts([...editProduct]);
  };
  const addItem = () => {
    const newItem = "table";
    setProducts([newItem, ...products]);
  };
  return (
    <div className="box">
      <button className="leftarrow" onClick={backButton}>
        <ArrowLeftOutlined />
      </button>
      <div className="text-center">
        <div>
          <div className="textpageOne">
            <span>Check the list</span>
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
              <img
                src={rectangleBar2}
                alt="RectangleBar"
                className="greenbar2"
              />
              <img src={eclipse_blue} alt="Eclipse" className="eclipse" />
              <img src={tick} alt="Fyyy" className="tick2" />

              <img src={eclipse_blue} alt="Eclipse_2" className="eclipse2" />
              <img src={tick} alt="Fyyy" className="tick3" />

              <img src={eclipse} alt="Eclipse_2" className="eclipse3" />
              <img
                src={loadingFlownew}
                alt="LoadingFlow"
                className="loadingflowcwnew2"
              />
              <img src={eclipse_grey} alt="Eclipse_2" className="eclipse4" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="leftbox">
            <div class="image-crop">
              <img src={imageBorder} alt="xyz" />
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
            <div className="listheader d-flex align-items-center justify-content-between">
              <span className="listtext">List of Products</span>
              <span className="d-flex align-items-center ">
                <PlusCircleOutlined onClick={() => addItem()} />
                <button className="add_new_item" onClick={() => addItem()}>
                  Add Item
                </button>
              </span>
            </div>
            <div className="table-form">
              <ul>
    
                {products.map((product, id) => {
                  return (
                    <li>
                      <input
                        type="text"
                        value={product}
                        onChange={(e) => e.target.value}
                        disabled='true'
                      />
                      <span className="tableitems">{product}</span>
                      <span className="btn-wrap">
                        <span>
                          <EditOutlined onClick={() => editItem(id)} />
                        </span>
                        <span>
                          <DeleteOutlined onClick={() => removeItem(id)} />
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button className="addtobasketbutton" onClick={nextPage}>
        Continue
      </button>
    </div>
  )
}
