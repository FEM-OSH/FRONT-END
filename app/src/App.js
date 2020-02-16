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
          most need it.
        </p>
        <Button small background={colors.tertiary} fontColor={colors.secondary}>
          Get Started
        </Button>
      </div>
      <div>
        <button>How To Get Started </button>
        <div>
          <div>
            <div>Create your account</div>
            <p>
              Sign Up at the top left corner of this page,verify your email and
              login.{" "}
            </p>
          </div>

          <div>
            <div>Add family &amp; friends</div>
            <p>
              Add your people who would be able to render help in your time of
              need.{" "}
            </p>
          </div>

          <div>
            <div>Take our credit test</div>
            <p>
              This is more of a survey that contains details for your profile
              and access your credit rating.{" "}
            </p>
          </div>

          <div>
            <div>Request/accept loan request</div>
            <p>
              Request for loan from friend, accept/reject an already initiated
              request
            </p>
          </div>
        </div>
      </div>
      <div>That friend who never repays his debt</div>
    </div>
  );
}

export default App;
