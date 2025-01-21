import styled from "styled-components";
import { theme } from "../../../../../theme";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown , FiChevronUp} from "react-icons/fi";
import { AiOutlinePlus} from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import OrderContext from "../../../../../context/OrderContext";
import { useContext } from "react";


export default function AdminTabs() {

  const{
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected
  } = useContext(OrderContext)
  
  
    const selectAddTab = () => {
    setIsCollapsed(false)
    setIsAddSelected(true)
    setIsEditSelected(false);
  }

  const selectEditTab = () => {
    setIsCollapsed(false)
    setIsEditSelected(true);
    setIsAddSelected(false);
    
  }

  return (
    <AdminTabsStyled>
        <Tab
        Icon={isCollapsed ? <FiChevronUp/> : <FiChevronDown/>  }
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
        />
        <Tab
        label={"Ajouter un produit"}
        Icon={ <AiOutlinePlus/>  }
        onClick={selectAddTab}
        className={isAddSelected ? "is-active" : ""}
        
        />
        <Tab
        label={"Modifier un produit"}
        Icon={ <MdModeEditOutline/>  }
        onClick={selectEditTab}
        className={isEditSelected ? "is-active" : ""}
        
        />
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`

  color: ${theme.colors.dark};
  display: flex;
  
  

  .is-active{
    background:${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};

    &:hover{
      text-decoration: underline ${theme.colors.white};
    }
  }

  .button{
    margin-left: 1px;
  }

  .is-not-active{
    background:${theme.colors.white};
    &:hover{
      text-decoration: underline ;
    }
  }
`;