import styled from "styled-components"
import { theme } from "../../../../theme"
import Menu from "./Menu"


export default function Main() {
  return (
    <MainStyled>
      <div className="basket">Basket</div>
      <Menu/>
        {/* <div class="grid-container">
          <div class="grid-item">
           <div className="food-image">
              food-image
           </div>
           <div className="food-name">
            <p> food-name</p>
           </div>
           <div className="item-bottom-block">
             <div className="price">
                price
             </div>
             <div>
              button
             </div>
           </div>
          </div>
          <div class="grid-item">2</div>
          <div class="grid-item">3</div>
          <div class="grid-item">4</div>
        </div> */}
    </MainStyled>
  )
}

const MainStyled = styled.div`
    background: ${theme.colors.background_white};
    
    flex: 1; //or you can also use this : height: (95vh - 10vh);
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
    overflow: hidden;
    /* padding: 20px; */

    display: grid;
    grid-template-columns: 25% 1fr;

    .basket {
      background: blue;
    }

  

    /* .grid-container {
      background: black;
      margin: auto ;
      padding: 30px;
      display: grid;
      grid-template-columns: auto auto auto auto;
      column-gap: 85px;
      row-gap: 60px;
    }
    .grid-item{
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: space-between;
      background: ${theme.colors.background_white};
      border-radius: ${theme.borderRadius.extraRound};
      margin: auto;
      padding: 20px;
      padding-top: 50px;
      padding-bottom: 14px;
      height: 300px;
      width: 240px;
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
    } */
`