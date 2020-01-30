import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./atoms/Buttons";
import { colors } from "./reusables";
import { Logo } from "./atoms/Logo/index";

function App() {
  return (
    <div className="App">
      <Logo />
      <nav>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">FAQ</a>
        <a>
          <Button
            small
            background={colors.tertiary}
            fontColor={colors.secondary}
          >
            Login
          </Button>
        </a>
        <Button small background={colors.tertiary} fontColor={colors.secondary}>
          Signup
        </Button>
      </nav>

      <div>
        <h5>First Online</h5>
        <h1>Peer-to-Peer</h1>
        <h2>Lending platform</h2>
        <p>
          Providing you easy access to funds from family and friends when you
          must need it.
        </p>
        <Button small background={colors.tertiary} fontColor={colors.secondary}>
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default App;
