 import styled from "styled-components";
import { theme } from "../../../../../theme";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown , FiChevronUp} from "react-icons/fi";
import OrderContext from "../../../../../context/OrderContext";
import { useContext } from "react";
import { getTabsConfig } from "./getTabsConfig";


export default function AdminTabs() {

  const{
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected
  } = useContext(OrderContext)
  

  const selectTab = (tabSelected) => {
    setIsCollapsed(false)
    setCurrentTabSelected(tabSelected)
  }

 const tabs = getTabsConfig(currentTabSelected)

  return (
    <AdminTabsStyled>
      <Tab
            Icon= {isCollapsed ? <FiChevronUp/> : <FiChevronDown/>}
            onClick= {() => setIsCollapsed(!isCollapsed)}
            className={isCollapsed ? "is-active" : ""}
            />
          { tabs.map((tab) => (
            <Tab
            key={tab.id}
            label= {tab.label}
            Icon={tab.Icon}
            onClick= {() => selectTab(tab.index)}
            className={currentTabSelected === tab.index ? "is-active" : ""}
            />
          ))}

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