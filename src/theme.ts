import { grey, teal } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export default createTheme({
    palette: {
        primary: {
            main: teal[500]
        },
        secondary: {
            main: grey[100]
        }
    }
});