import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Product({title, imageSource, price}) {
  return (
   <ProductStyled className="produit">
        <div className="image">
            <img src={imageSource} alt={title}></img>
        </div>
        <div className="info-text">
          <div className="title">{title}</div>
          <div className="description">
            <div className="price">{price}</div>
            <button className="add-button">Ajouter</button>
          </div>
        </div>
    </ProductStyled> 
  )
}

const ProductStyled = styled.div`
    background: ${theme.colors.background_white};
    height: 300px;
    width: 200px;
    color: black;
    display: grid;
    grid-template-rows: 65% 1fr;
    grid-row-gap: 10px;
    justify-items: center;


    border-radius: ${theme.borderRadius.extraRound};
    margin: auto;
    padding: 20px;
    padding-bottom: 10px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    
    .image{
        margin-top: 30px;
        border: 1px solid fuchsia;
        width: 100%;
        height: auto;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
      }

    .info-text {
      width: 100%;
      justify-items: left;
    }

    .title {
      border: 1px solid black;
    }

    .description{
        border: 1px solid red;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        justify-items: left;
    }
`;