import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import {FaHamburger} from "react-icons/fa";
import {BsFillCameraFill} from "react-icons/bs";
import {MdOutlineEuro} from "react-icons/md";
import TextInput from "../../../../../reusable-ui/TextInput";
import Button from "../../../../../reusable-ui/Button";
import ImagePreview from "./ImagePreview";
import SubmitMessage from "./SubmitMessage";
import { getInputTextsConfig } from "./inputTextConfig";

export const EMPTY_PRODUCT = {
   id:"",
   title: "",
   imageSource: "",
   price: 0,
}

export default function AddForm() {

  const {handleAddProduct, newProduct, setNewProduct } = useContext(OrderContext)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event) => {
      event.preventDefault();

      const newProductToAdd = {
        ...newProduct,
        id: crypto.randomUUID(),
     }
      handleAddProduct(newProductToAdd)
      setNewProduct(EMPTY_PRODUCT)

      displaySuccesMessage()
    }

  const handleChange = (event) => {
   
  const { name, value } = event.target
      setNewProduct({ ...newProduct, [name]: value })
    }

  const displaySuccesMessage = () => {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
      }, 2000);
    }

  const inputTexts = getInputTextsConfig(newProduct)

  return(
  <AddFormStyled onSubmit={handleSubmit}> 
  <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title} />
    <div className="input-fields">
      { inputTexts.map((input) => (
        <TextInput  
        key={ input.id}
        name={input.name} 
        value={input.value} 
        placeholder={input.placeholder} 
        onChange={handleChange} 
        version="minimalist"
        />
      ))}
    </div>
    <div  className="submit">
       <Button className="submit-button"  Label={"Ajouter un nouveau produit"} version="success"/>
       {isSubmitted &&  <SubmitMessage/>}
    </div>
  </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
border: 1px solid red;
padding: 30px 5%;
display: grid;
grid-template-columns:  1fr 3fr ;
grid-template-rows:  repeat(4, 1fr);
grid-row-gap: 8px;
grid-column-gap: 20px;
height: auto;
width: 70%;
 
.coming-soon{
  background-image: url("/images/coming-soon.png")
}

.input-fields{
  grid-area: 1 / 2 / 4 / 3;
  grid-row-gap: 8px;
  display: grid;
 
}

.submit{
  
  grid-area: 4 / 2 / 5 / 3;
  display: flex;
  align-items: center;

  .submit-button{
    display: grid;
    width: 50%;
  }

}
`


