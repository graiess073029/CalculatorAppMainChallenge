/* eslint-disable no-eval */

import { useEffect, useState } from "react";

import "./Calculator.css";

import { Button } from "../Button/Button";
import { Header } from "../Header/Header";
import { Console } from "../Console/Console";

let evalOp = (operation) => {
  operation = operation.replaceAll("x", "*");
  operation = operation.replaceAll(",", ".");
  alert(operation)
  let result = eval(operation);
  return result;
};



export function Calculator(props) {
  let [theme, setTheme] = useState("theme-1");
  let [argText, setArgText] = useState("");

  useEffect(() => {
    argText.length === 17 ? setArgText(argText.slice(0, argText.length - 1)) : setArgText(argText)
  }, [argText, setArgText])

  document.getElementById('root').className = theme

  const keyWriting = event => {
    event.key === "=" || event.key === "Enter" ? setArgText(evalOp(argText)) : setArgText(argText)
    event.key === "7" ? setArgText((argText += "7")) : setArgText(argText)
    event.key === "0" ? setArgText((argText += "0")) : setArgText(argText)
    event.key === "x" ? setArgText((argText += "x")) : setArgText(argText)
    event.key === "/" ? setArgText((argText += "/")) : setArgText(argText)
    event.key === "/" ? setArgText((argText += "/")) : setArgText(argText)
    event.key === "." ? setArgText((argText += ".")) : setArgText(argText)
    event.key === "-" ? setArgText((argText += "-")) : setArgText(argText)
    event.key === "3" ? setArgText((argText += "3")) : setArgText(argText)
    event.key === "2" ? setArgText((argText += "2")) : setArgText(argText)
    event.key === "1" ? setArgText((argText += "1")) : setArgText(argText)
    event.key === "+" ? setArgText((argText += "+")) : setArgText(argText)
    event.key === "6" ? setArgText((argText += "6")) : setArgText(argText)
    event.key === "5" ? setArgText((argText += "5")) : setArgText(argText)
    event.key === "4" ? setArgText((argText += "4")) : setArgText(argText)
    event.key === 'Backspace' ? setArgText((argText = argText.slice(0, argText.length - 1))) : setArgText(argText)
    event.key === "9" ? setArgText((argText += "9")) : setArgText(argText)
    event.key === "8" ? setArgText((argText += "8")) : setArgText(argText)
    event.key === "7" ? setArgText((argText += "7")) : setArgText(argText)
  }

  return (
    <div className="container">
      <Header theme={theme} changeTheme={setTheme} />
      <Console className={theme} argText={argText} />
      <div className={`buttons ${theme}`}>
        <div>
          <Button
            onKeyPress={keyWriting}
            className={`button ${theme}`}
            onClick={(event) => {
              setArgText((argText += "7"));
            }}
          >
            7
          </Button>
          <Button
            onKeyPress={keyWriting}
            onClick={(event) => {
              setArgText((argText += "8"));
            }}
            className={`button ${theme}`}
          >
            8
          </Button>
          <Button
            onKeyPress={keyWriting}
            onClick={(event) => {
              setArgText((argText += "9"));
            }}
            className={`button ${theme}`}
          >
            9
          </Button>
          <Button
            onKeyPress={keyWriting}

            onClick={(event) => {
              setArgText(argText.slice(0, argText.length - 1));
            }}
            className={`button del ${theme}`}
          >
            DEL
          </Button>

        </div>
        <div>
          <Button
            onKeyPress={keyWriting}

            onClick={(event) => {
              setArgText((argText += "4"));
            }}
            className={`button ${theme}`}
          >
            4
          </Button>
          <Button
            onKeyPress={keyWriting}

            onClick={(event) => {
              setArgText((argText += "5"));
            }}
            className={`button ${theme}`}
          >
            5
          </Button>
          <Button

            onKeyPress={keyWriting}

            onClick={(event) => setArgText((argText += "6"))}
            className={`button ${theme}`}
          >
            6
          </Button>
          <Button
            onKeyPress={keyWriting}

            onClick={(event) => {
              setArgText((argText += "+"));
            }}
            className={`button ${theme}`}
          >
            +
          </Button>
        </div>
        <div>
          <Button
            onKeyPress={keyWriting}

            onClick={(event) => {
              setArgText((argText += "1"));
            }}
            className={`button ${theme}`}
          >
            1
          </Button>
          <Button
            onKeyPress={keyWriting}

            onClick={(event) => {
              setArgText((argText += "2"));
            }}
            className={`button ${theme}`}
          >
            2
          </Button>
          <Button
            onKeyPress={keyWriting}

            onClick={(event) => {
              setArgText((argText += "3"));
            }}
            className={`button ${theme}`}
          >
            3
          </Button>
          <Button
            onKeyPress={keyWriting}

            onClick={(event) => {
              setArgText((argText += "-"));
            }}
            className={`button ${theme}`}
          >
            -
          </Button>

        </div>
        <div>
          <Button
            onKeyPress={keyWriting}

            onClick={(event) => {
              setArgText((argText += ","));
            }}
            className={`button ${theme}`}
          >
            .
          </Button>
          <Button
            onKeyPress={keyWriting}

            onClick={(event) => {
              setArgText((argText += "0"));
            }}
            className={`button ${theme}`}
          >
            0
          </Button>
          <Button
            onKeyPress={keyWriting}

            onClick={(event) => {
              setArgText((argText += "/"));
            }}
            className={`button ${theme}`}
          >
            /
          </Button>
          <Button
            onKeyPress={keyWriting}

            onClick={(event) => {
              setArgText((argText += "x"));
            }}
            className={`button ${theme}`}
          >
            x
          </Button>

        </div>
        <div>
          <Button
            onKeyPress={keyWriting}

            onClick={(event) => {
              setArgText((argText = ""));
            }}
            className={`button reset  ${theme}`}
          >
            RESET
          </Button>
          <Button
            onKeyPress={keyWriting}

            onClick={(event) => {
              setArgText(evalOp(argText));
            }}
            className={`button equal  ${theme}`}
          >
            =
          </Button>
        </div>
      </div>
    </div>
  );
}




