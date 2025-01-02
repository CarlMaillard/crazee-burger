import styled from "styled-components";
import { theme } from "../../../../theme";
import { useState } from "react";
import {fakeMenu2} from "../../../../fakeData/fakeMenu"
import Card from "../../../reusable-ui/Card";
import {formatPrice} from "../../../../utils/maths"



export default function Menu() {

  const [menu, setMenu] = useState(fakeMenu2)

  return (
    <MenuStyled className="menu">
       {menu.map(({id, title, imageSource, price}) => {
            return  (
              <Card 
                key={id} 
                title={title} 
                imageSource={imageSource} 
                leftDescription={formatPrice(price)}/>
            )
          }
        )}        
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  border: 5px solid blue;
   background: ${theme.colors.background_white};
   /* height:100%; */
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr) );
   grid-row-gap: 60px;
   padding: 50px 50px 150px;
   justify-items: center;
   box-shadow: 0px 8px 20px 8px rgba(0,0,0,0.2) inset;
   overflow-y: scroll;
`;