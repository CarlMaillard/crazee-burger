import styled from "styled-components";
import { theme } from "../../../../theme";
import { useState } from "react";
import {fakeMenu2} from "../../../../fakeData/fakeMenu"


export default function Menu() {

  const [menu, setMenu] = useState(fakeMenu2)

  return (
    <MenuStyled className="menu">
       {menu.map((produit) => {
            return  <div className="produit">{produit.title}</div>
          }
          //   (
          //   <Card
          //   burgerName={produit.title}
          //   key={produit.id}
          //   />
          // )
        )}
          {/* <div className="grid-item">
           <div className="food-image">
              food-image
           </div>
           <div className="food-name">
            <p> 
              {burgerName[0]}
            </p>
           </div>
           <div className="item-bottom-block">
             <div className="price">
                price
             </div>
             <div>
              button
             </div>
           </div>
          </div> */}
          // 
        
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
   background: purple;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-column-gap: 85px;
   grid-row-gap: 60px;
   padding: 50px 50px 150px;
   justify-items: center;

    .produit {
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

      .food-image{
        background: blue;
        height: 100%;
        background-blend-mode: darken;
      }

      .food-name {
        background: yellow;
        color: black;
        font-size: ${theme.fonts.sizes.P4};
      }

      .item-bottom-block{
        background: orange;
        display: flex;
        flex-direction: row;
        justify-content: space-around;      
      }
    }
`;