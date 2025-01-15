import styled from "styled-components";
import { theme } from "../../../../../theme";
import { IoChevronDownOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { FaPen } from "react-icons/fa";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown , FiChevronUp} from "react-icons/fi";





export default function AdminTabs() {
  return (
    <AdminTabsStyled>
        <Tab
        Icon={<FiChevronDown/>}
        />
    </AdminTabsStyled>

  )
}

const AdminTabsStyled = styled.div`

  color: ${theme.colors.dark};
  display: flex;
`;