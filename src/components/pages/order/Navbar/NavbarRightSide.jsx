import styled from "styled-components";
import Profile from "./Profile.jsx";
import ToggleButton from "../../../reusable-ui/ToggleButton.jsx"
import { ToastContainer, toast } from 'react-toastify';
import { theme } from "../../../../theme/index.js";
import { useState } from "react";


export default function NavbarRightSide({username}) {

  const [isModeAdmin, setIsModeAdmin] = useState(false);

  const displayToastotification= () => {

    if (!isModeAdmin) {

      toast.info("Mode admin activé", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } 
    setIsModeAdmin(!isModeAdmin) 
  }
   
    return (
    <NavbarRightSidesStyled>
      <ToggleButton 
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        onToggle={displayToastotification}
        />
      <Profile username={username}/>
      <ToastContainer className="toaster" bodyClassName="body-toast"/>
    </NavbarRightSidesStyled>
  )
}

const NavbarRightSidesStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center ;
  padding-right: 50px;

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
