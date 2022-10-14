import { Button, Grid, Typography } from "@mui/material";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { words } from "../../../data/word";
import { ContextArchi } from "../../../hooks/ContextArchi";
import { getAchvtById, getArchiByName } from "../../../selectors";
import { Box } from "./";

let word = words[Math.floor(Math.random() * words.length)];

const { name: correct, description, video } = word;

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

  const { achvt, setAchvt } = useContext(ContextArchi);

  const isMounted = useRef(false);

  const Infallible = useMemo(() => getAchvtById(4, achvt), [achvt]);
  const OneSmall = useMemo(() => getAchvtById(1, achvt), [achvt]);

  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 7; j++) {
        defaulBoard[i][j][1] = "";
        defaulBoard[i][j][0] = "";
      }
    }
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);

  useEffect(() => {
    if (win || lost) {
      if (win) {
        if (!Infallible.attributes.complete) {
          const data = getArchiByName(Infallible.name, achvt);
          setAchvt([
            ...data,
            {
              name: Infallible.name,
              id: Infallible.id,
              attributes: {
                description: Infallible.attributes.description,
                complete:
                  Infallible.attributes.progress + 33 <= 66 ? false : true,
                progress:
                  Infallible.attributes.progress + 33 <= 66
                    ? Infallible.attributes.progress + 33
                    : 100,
                url: Infallible.attributes.url,
              },
            },
          ]);
        }
      }
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
      {isMounted.current &&
        board.map((row, key) => {
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
          width: "100%",
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
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          paddingTop: "10px",
          fontWeight: "bold",
          fontSize: "0.7rem",
        }}
      >
        {(win || lost) && (
          <>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                marginRight: "20px",
              }}
              onClick={() => {
                window.location.replace("");
              }}
            >
              Jugar de Nuevo
            </Button>
          </>
        )}
        {lost && (
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              window.open(video, "_blank");
            }}
          >
            Repasar concepto
          </Button>
        )}
      </Grid>
    </Grid>
  );
};
