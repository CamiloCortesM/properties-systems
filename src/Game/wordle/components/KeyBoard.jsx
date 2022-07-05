import BackspaceIcon from "@mui/icons-material/Backspace";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

const keyboard = {
  line1: "QWERTYUIOP",
  line2: "ASDFGHJKL",
  line3: "ZXCVBNM",
};

let defaultLetters = [];

"abcdefjhijklmnopqrstuvwxyz".split("").forEach((i) => {
  defaultLetters[i] = "";
});

const Key = (props) => {
  const returnKey = () => {
    props.getKey(props.value);
  };

  return (
    <button onClick={returnKey} style={{
      height:"3rem",
      marginRight:2,
      padding:6

    }} >
      {props.value === "DEL" ? <BackspaceIcon /> : props.value}
    </button>
  );
};

export const KeyBoard = (props) => {
  const [letters, setletters] = useState(defaultLetters);
  useEffect(() => {
    setletters(props.letters);
  }, [props.changed]);

  const keyHandler = (value) => {
    props.keyHandler(value);
  };
  return (
    <Grid container
    alignItems="center"
    justifyContent="center"
    sx={{
      display:"flex",
      py:5,
      width:"100%",
    }}>
      <Grid item 
      alignItems="center"
      justifyContent="center"
      xs={12} sx={{
        display:"flex",
        m:"auto",
        my:0.5,
      }}>
        {keyboard.line1.split("").map((value, key) => (
          <Key
            getKey={keyHandler}
            value={value}
            key={key}
            state={letters[value]}
          />
        ))}
      </Grid>
      <Grid item 
      alignItems="center"
      justifyContent="center"
      xs={12} sx={{
        display:"flex",
        m:"auto",
        my:0.5,
      }}>
        {keyboard.line2.split("").map((value, key) => (
          <Key
            getKey={keyHandler}
            value={value}
            key={key}
            state={letters[value]}
          />
        ))}
      </Grid>
      <Grid item 
      alignItems="center"
      justifyContent="center"
      xs={12} sx={{
        display:"flex",
        m:"auto",
        my:0.5,
      }}>
        <Key value="ENTER" getKey={keyHandler} />
        {keyboard.line3.split("").map((value, key) => (
          <Key
            getKey={keyHandler}
            value={value}
            key={key}
            state={letters[value]}
          />
        ))}
        <Key value="DEL" getKey={keyHandler} />
      </Grid>
    </Grid>
  );
};
