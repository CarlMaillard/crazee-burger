import styled from "styled-components";
import { theme } from "../../../../../theme";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown , FiChevronUp} from "react-icons/fi";

export default function AdminTabs({isCollapsed, setIsCollapsed}) {


  return (
    <AdminTabsStyled>
        <Tab
        onClick={() => setIsCollapsed(!isCollapsed)}
        Icon={isCollapsed ? <FiChevronUp/> : <FiChevronDown/>  }
        className={isCollapsed ? "is-active" : ""}
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
  }

`;