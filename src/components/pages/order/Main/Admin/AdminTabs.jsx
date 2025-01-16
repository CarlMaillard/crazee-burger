import styled from "styled-components";
import { theme } from "../../../../../theme";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown , FiChevronUp} from "react-icons/fi";
import { AiOutlinePlus} from "react-icons/ai";
// import { MdModeEditOutline } from "react-icons/md";


export default function AdminTabs({isCollapsed, setIsCollapsed}) {


  return (
    <AdminTabsStyled>
        <Tab
        onClick={() => setIsCollapsed(!isCollapsed)}
        Icon={isCollapsed ? <FiChevronUp/> : <FiChevronDown/>  }
        className={isCollapsed ? "is-active" : ""}
        />
        <Tab
        label={"Ajouter un produit"}
        onClick={() => setIsCollapsed(!isCollapsed)}
        Icon={ <AiOutlinePlus/>  }
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

    /* &:hover{
      text-decoration: underline ${theme.colors.white};
    } */
  }

  .button{
    margin-left: 1px;
  }

  /* .is-not-active{
    background:${theme.colors.white};
    &:hover{
      text-decoration: underline ${theme.colors.greyLight};
    }
  } */
`;