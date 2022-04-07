import { React, useEffect, useState } from "react";
import "../styles/Basket.css";
import "../global.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import greenPhoto from "../images/greenphoto.svg";
import backwhite from "../images/Rectangle 7.svg";
import eclipse_blue from "../images/Eliipse_blue.svg";
import cropImage3 from "../images/crop_blue.svg";
import cropDocument4 from "../images/scanblue.svg";
import shoppingBasket4 from "../images/noun_Shopping Cart_840489 4.svg";
import blueBar from "../images/bluebar.svg";
import rectangleBar from "../images/Rectangle 8.svg";
import rectangleBar2 from "../images/Rectangle 12.svg";
import eclipse_grey from "../images/Ellipse_grey.svg";
import tick from "../images/tick.svg";
import loadingFlownew from "../images/whh_loadingflowcw.svg";
import eclipse from "../images/Ellipse 1.svg";
import {
  AlignCenterOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Checkbox } from "antd";
import { Switch } from "antd";
import Schoolingo from "../images/Schoolingo final 1.svg";
import { useNavigate } from "react-router-dom";

export const Basket = () => {
    const navigate = useNavigate();
  const backButton = () => {
    navigate("/scan_document", { replace: true });
  };
  const databooks = [
    {
      id: 1,
      quantity: 3,
      productphoto: "image",
      productname: "Books",
      price: 45,
    },
    {
      id: 2,
      quantity: 9,
      productphoto: "image",
      productname: "Books",
      price: 45,
    },
    {
      id: 3,
      quantity: 17,
      productphoto: "image",
      productname: "Books",
      price: 45,
    },
  ];
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState(databooks);
  const totalPrice = data
    .map((product) => product.quantity * product.price)
    .reduce((prev, curr) => prev + curr, 0);

  // let [num, setNum] = useState(0);
  let incNum = (keys) => {
    const dataforid = data.filter((d) => d.id === keys);
    dataforid.quantity = dataforid.quantity - 71;
    const dataa = data.map((dd) => {
      if (dd.id === keys) {
        return {
          ...dd,
          quantity: dd.quantity + 1,
        };
      } else {
        return dd;
      }
    });
    setData(dataa);
    console.log("dsfcdsfs--->" + keys);
  };
  let decNum = (key) => {
    const dataford = data.filter((d) => d.id === key);
    dataford.quantity = dataford.quantity - 1;
    const dataaa = data.map((dd) => {
      if (dd.id === key) {
        return {
          ...dd,
          quantity: dd.quantity > 0 ? dd.quantity - 1 : 0,
        };
      } else {
        return dd;
      }
    });
    setData(dataaa);
    console.log("dsfcdsfs--->" + key);
  };
  return (
    <div className="box">
      <button className="leftarrow" onClick={backButton}>
        <ArrowLeftOutlined />
      </button>
      <div className="text-center">
        <div>
          <div className="textpageOne">
            <span>Shopping basket</span>
          </div>
          <img src={Schoolingo} alt="SchoolingoLogo" className="Schoolingo" />
        </div>
      </div>

      <div>
        <div className="flexone">
          <div className="icons">
            <img src={greenPhoto} alt="PhotoIcon" className="photoicon" />
            <img src={cropImage3} alt="CropIcon" className="cropimage" />
            <img
              src={cropDocument4}
              alt="CropDocument"
              className="cropdocument"
            />
            <img
              src={shoppingBasket4}
              alt="ShoppingBasket"
              className="shoppingbasket"
            />

            <div>
              <img src={rectangleBar2} alt="GreyBar" className="lastbar" />
              <img src={blueBar} alt="RectangleBar" className="rectanglebar2" />
              <img src={blueBar} alt="RectangleBar" className="greenbar2" />

              <img src={eclipse_blue} alt="Eclipse" className="eclipse" />
              <img src={tick} alt="Fyyy" className="tick2" />

              <img src={eclipse_blue} alt="Eclipse_2" className="eclipse2" />
              <img src={tick} alt="Fyyy" className="tick3" />

              <img src={eclipse_blue} alt="Eclipse_2" className="eclipse3" />
              <img src={tick} alt="LoadingFlow" className="loadingflowcwnew2" />

              <img src={eclipse} alt="Eclipse_2" className="eclipse4" />
              <img
                src={loadingFlownew}
                alt="LoadingFlow"
                className="loadingflowcwnew3"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="downsection">
            <div>
              <div className="filters" onClick={() => setToggle(!toggle)}>
                <AlignCenterOutlined />
              </div>
              <div className="filtertext" onClick={() => setToggle(!toggle)}>
                <span> Filters & Refine</span>
              </div>
              {toggle && (
                <div className="hiddentab">
                  <Checkbox style={{ marginLeft: "45px" }} />
                  <span className="checkboxes">Eco-Friendly</span>
                  <Checkbox style={{ marginLeft: "45px" }} />
                  <span className="checkboxes">Books</span>
                  <Checkbox style={{ marginLeft: "45px" }} />
                  <span className="checkboxes">Boy</span>
                  <Checkbox style={{ marginLeft: "45px" }} />
                  <span className="checkboxes">Girl</span>

                  <span
                    className="checkboxes"
                    style={{ marginLeft: "45px", marginRight: "23px" }}
                  >
                    Left-handed
                  </span>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                  <span className="checkboxes" style={{ marginLeft: "23px" }}>
                    Right-Handed
                  </span>
                  <span
                    className="checkboxes"
                    style={{ marginLeft: "50px", fontWeight: "600" }}
                  >
                    Price Range
                    <span class="slidecontainer">
                      <input type="range"></input>
                    </span>
                  </span>
                </div>
              )}
            </div>
            <div className="finaltable">
              <table className="lasttable">
                <thead className="lasttable" style={{ height: "90px" }}>
                  <tr>
                    <th>Quantity</th>
                    <th>Product Photo</th>
                    <th>Products Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody className="lasttable">
                  {data.map((d, id) => {
                    return (
                      <tr key={d.id}>
                        <td>
                          <MinusCircleOutlined
                            className="minus"
                            onClick={() => decNum(d.id)}
                          />
                          {d.quantity}
                          <PlusCircleOutlined
                            className="plus"
                            onClick={() => incNum(d.id)}
                          />
                        </td>
                        <td>{d.productphoto}</td>
                        <td>{d.productname}</td>
                        <td>${d.price * d.quantity}</td>
                      </tr>
                    );
                  })}
                </tbody>
        
              </table>
            </div>
            <div className="sumupp">
              <span className="freeshipping">Free Shipping</span>
              <span className="total">Total</span>
              <span style={{ marginLeft: "20px" }} className="dynamicvalue">
                ${totalPrice}
              </span>
            </div>
          </div>
        </div>
      </div>
      <button className="addtobasketbutton2">Add To Basket</button>
    </div>
  )
}
