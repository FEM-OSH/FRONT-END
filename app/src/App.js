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
      <div>Lessons learnt from my sad experience</div>
      <p>
        Danotious is a good friend of mine, we grew up in the same
        neighbourhood, had lots of fun moments and we sure did consider
        ourselves brothers rather than just friends.
      </p>
      <p>
        Time and distance had come between us as we ventured to face life, only
        to reconnect and continue as though we were never separated. One
        faithful morning, Danotious came calling and he did seek for my help. He
        said he needed a loan, he had some bills to settle and would need
        N30,000. What are we friends for, if I cannot help when I am empowered
        to do so. I borrowed him the amount requested and asked when he would
        repay me. He muffled something about reimbursing me at the end of the
        month when he receives his salary. I took him by his word and asked when
        it was month end. Then the trouble began, he would post me to a later
        date, started avoiding my calls, changed his known pattern of movement
        and till date, i have not received my money back.
      </p>
      <p>
        I could do nothing to him than let him go, but, it struck me to realise
        how many people he could as well be indebted to at the moment.
      </p>
      <p>
        He is a fraudstar and such persons who are not honest and true to their
        word should be avoided by all means necessary.
      </p>
      <div>Avoid lending money to the wrong hands... Join lender today</div>
      <div>Rate credit worthiness and avoid fraudsters</div>
      <div>Available on</div>

      {/* <Footer>
        Borrow>>> <br/>
        Lend>>>
      </Footer> */}
    </div>
  );
}

export default App;
