import { IconButton } from "@material-ui/core";
import { Home } from "@material-ui/icons";

function AppLogo(props) {
    return (
        <IconButton edge="start" color="inherit" aria-label="kutuki-home">
          <Home fontSize="large" />
        </IconButton>
    );
}

export default AppLogo;