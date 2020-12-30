import { IconButton } from "@material-ui/core";

import logo from "./../assets/cropped-logo.png";

function AppLogo(props) {
  return (
    <IconButton edge="start" color="inherit" aria-label="kutuki-home">
      <img src={logo} alt="Kutuki" height="55px" />
    </IconButton>
  );
}

export default AppLogo;
