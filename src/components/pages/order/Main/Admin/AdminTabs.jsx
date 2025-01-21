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
  

  const selectTab = (tabSelected) => {
    setIsCollapsed(false)

    if(tabSelected === "Add" ){
      setIsAddSelected(true)
      setIsEditSelected(false)
    } 

    if(tabSelected === "Edit" ) {
      setIsEditSelected(true)
      setIsAddSelected(false)
    }

  }

  const tabsConfig = [

    {
      label: "",
      Icon: isCollapsed ? <FiChevronUp/> : <FiChevronDown/>,
      onClick: () => setIsCollapsed(!isCollapsed),
      className: isCollapsed ? "is-active" : ""
    },

    {
      label: "Ajouter un produit",
      Icon: <AiOutlinePlus/>,
      onClick: () => selectTab ("Add"),
      className: isAddSelected ? "is-active" : ""
    },

    {
      label: "Modifier un produit",
      Icon: <MdModeEditOutline/>,
      onClick: () => selectTab ("Edit"),
      className: isEditSelected ? "is-active" : ""
    }
  ]

  return (
    <AdminTabsStyled>
          {tabsConfig.map((tab) => {
            return <Tab
            label= {tab.label}
            Icon={tab.Icon}
            onClick= {tab.onClick}
            className={tab.className}
            />
          })}

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