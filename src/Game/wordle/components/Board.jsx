import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { words } from "../../../data/word";
import { Box } from "./Box.jsx";

const word = words[Math.floor(Math.random() * words.length)];

const { name: correct, description } = word;

let defaulBoard = [];
let defaultLetters = [];

"abcdefghijklmnopqrstuvwxyz".split("").forEach((i) => {
  defaultLetters[i] = "";
});

for (let i = 0; i < 3; i++) {
  defaulBoard.push([]);
  for (let j = 0; j < 7; j++) {
    defaulBoard[i].push(["", ""]);
  }
}

export const Board = (props) => {
  const [letters, setLetters] = useState(defaultLetters);
  const [board, setBoard] = useState(defaulBoard);
  const [changed, setChanged] = useState(false);
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [win, setWin] = useState(false);
  const [lost, setLost] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (win || lost) {
      if (win) {
        console.log("gano")
      } else {
        console.log("perdio")
      }
      setTimeout(() => {
        window.location.replace('');
      }, 2750);
    }
  }, [win, lost]);

  useEffect(() => {
    if (win || lost) {
      console.log("Juego Terminado!");
    } else {
      if (props.clicks !== 0) {
        if (props.letter === "DEL") {
          setCol(col === 0 ? 0 : col - 1);
          setBoard((prevBoard) => {
            prevBoard[row][col === 0 ? 0 : col - 1][0] = "";
            return prevBoard;
          });
        } else {
          setBoard((prevBoard) => {
            if (col < 7) {
              if (props.letter !== "ENTER") {
                prevBoard[row][col][0] = props.letter;
                setCol(col + 1);
              } else {
                props.error("Las palabras tienen que tener 7 letras");
                setTimeout(() => {
                  props.error("");
                }, 1500);
              }
            } else {
              if (props.letter === "ENTER") {
                let correctLetters = 0;
                let word = "";
                for (let i = 0; i < 7; i++) {
                  word += prevBoard[row][i][0];
                }
                if (true) {
                  for (let i = 0; i < 7; i++) {
                    if (
                      correct[i].toLowerCase() ===
                      prevBoard[row][i][0].toLowerCase()
                    ) {
                      prevBoard[row][i][1] = "C";
                      correctLetters++;
                    } else if (
                      correct
                        .toLowerCase()
                        .includes(prevBoard[row][i][0].toLowerCase())
                    )
                      prevBoard[row][i][1] = "E";
                    else prevBoard[row][i][1] = "N";
                    setRow(row + 1);
                    if (row === 2) {
                      setLost(true);
                      setTimeout(() => {
                        setMessage(`Has perdido`);
                      }, 750);
                    }

                    setCol(0);
                    setLetters((prev) => {
                      prev[board[row][i][0]] = board[row][i][1];
                      return prev;
                    });
                  }
                  setChanged(!changed);

                  if (correctLetters === 7) {
                    setWin(true);
                    setTimeout(() => {
                      setMessage("Has Ganado");
                    }, 750);
                  }
                  return prevBoard;
                }
              }
            }
            return prevBoard;
          });
        }
      }
    }
  }, [props.clicks]);

  useEffect(() => {
    props.letters(letters);
  }, [changed]);

  return (
    <Grid
      container
      spacing={0.5}
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
      }}
    >
      {board.map((row, key) => {
        return (
          <Grid
            item
            container
            key={key}
            alignItems="center"
            justifyContent="center"
            sx={{
              display: "flex",
              gap: 0.5,
            }}
          >
            {row.map((value, key) => (
              <Box key={key} value={value[0]} state={value[1]} pos={key} />
            ))}
          </Grid>
        );
      })}
      <Grid
        item
        alignItems="center"
        justifyContent="center"
        sx={{
          fontSize: "0.7rem",
          width:"100%"
        }}
      >
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            m: 2,
          }}
        >
          Pista:{description}
        </Typography>
      </Grid>
      <Grid
        item
        alignItems="center"
        justifyContent="center"
        sx={{
          fontWeight: "bold",
          fontSize: "0.7rem",
        }}
      >
        {lost || win ? message : ""}
      </Grid>
    </Grid>
  );
};
