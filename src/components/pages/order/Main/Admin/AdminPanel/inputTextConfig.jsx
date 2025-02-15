import {FaHamburger} from "react-icons/fa";
import {BsFillCameraFill} from "react-icons/bs";
import {MdOutlineEuro} from "react-icons/md";

export const getInputTextsConfig = (newProduct) => 
    [
        {
       id:"0",
       name: "title",
       value: newProduct.title,
       type: "text",
       placeholder:"Nom du produit (ex: Super Burger)",
       Icon: <FaHamburger/>,
       version: "version"
      },
   
      {
       id:"1",
       name: "imageSource",
       value: newProduct.imageSource,
       type: "text",
       placeholder:"Nom du produit (ex: Super Burger)",
       Icon: <BsFillCameraFill/>,
       version: "version"
      },
   
      {
       id:"2",
       name: "price",
       value: newProduct.price ? newProduct.price : "",
       type: "text",
       placeholder:"Nom du produit (ex: Super Burger)",
       Icon: <MdOutlineEuro/>,
       version: "version"
      }
   ]

  