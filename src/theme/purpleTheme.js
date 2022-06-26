import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme= createTheme({
    palette:{
        primary:{
            main:'#311b92'
        },
        secondary:{
            main:'#5e35b1'
        },
        error:{
            main: red.A400
        }
    }
})