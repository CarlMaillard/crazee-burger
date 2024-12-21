import styled from "styled-components";
import { theme } from "../../../../theme";
import PrimaryButton from "../../../reusable-ui/PrimaryButton"

export default function Product({title, imageSource, price }) {
  return (
   <ProductStyled className="produit">
        <div className="image">
            <img src={imageSource} alt={title}></img>
        </div>
        <div className="info-text">
          <div className="title">{title}</div>
          <div className="description">
            <div className="left-description">{price}</div>
            <div className="right-description"> 
              <PrimaryButton className="primary-button" Label={"Ajouter"}>Ajouter</PrimaryButton>
            </div>
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
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};
    padding: 20px;
    padding-bottom: 10px;
    margin: auto;
   
  
    .image {
    width: 100%;
    height: auto;
    margin-top: 30px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

    .info-text {
      display: grid;
      width: 100%;
      grid-template-rows: 30% 70%;
      padding: 5px;

      .title {
        margin: auto 0;
        font-size: ${theme.fonts.sizes.P4};
        position: relative;
        bottom: 10px;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        font-family: "Amatic SC", cursive;
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .left-description {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.fonts.weights.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: ${theme.fonts.weights.medium};
        color: ${theme.colors.primary};
      }

      .right-description {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.sizes.P1};

        .primary-button {
          font-size: ${theme.fonts.sizes.XS};
          cursor: pointer;
          padding: 12px;
        }
      }
    }
    }
`;