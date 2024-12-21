// import styled from "styled-components";
// import { theme } from "../../../../theme";

export default function Product({title, imageSource, price}) {
  return (
   <div className="produit">
        <div className="image">
            <img src={imageSource} alt={title}></img>
        </div>
        <div className="info-text">
        <div className="description">
            <div className="title">{title}</div>
            <div className="price">{price}</div>
            <button className="add-button">Ajouter</button>
        </div>
        </div>
    </div> 
  )
}

const ProduitStyled = styled.div`
    background: ${theme.colors.background_white};
    height: 330px;
    width: 240px;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    border-radius: ${theme.borderRadius.extraRound};
    margin: auto;
    padding: 20px;
    padding-top: 50px;
    padding-bottom: 14px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    
    .image{
        border: 1px solid fuchsia;
        width: 100px;
        height: auto;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          /* background-size: cover;
          background-position: center;
          background-repeat: no-repeat; */
        }
      }

`;