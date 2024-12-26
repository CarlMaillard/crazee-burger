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
   background: ${theme.colors.background_white};
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-column-gap: 85px;
   grid-row-gap: 60px;
   padding: 50px 50px 150px;
   justify-items: center;
`;