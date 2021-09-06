import { React } from "react";
import Card from "../../UI/Card";
import Input from "../../Input/Input";
import Logo from "../../../assets/logo.svg";
import Name from "../../../assets/id-card.svg";
import Email from "../../../assets/envelope.svg";
import Password from "../../../assets/lock.svg";
import Button from "../../Button/Button";

import "./SignUp.css";

const SignUp = (props) => {
  return (
    <Card>
      <div className="logoWrapper">
        <img src={Logo} alt="logo" width="65px" className="icon" />
      </div>
      <div className="wrapper">
        <p className="heading">Create a New Account</p>
      </div>
      <Input
        type="text"
        placeholder="Name"
        className="email"
        src={Name}
        alt="name"
        color="#b9b8b8"
      />
      <Input
        type="text"
        placeholder="Email"
        className="email"
        src={Email}
        alt="email"
        color="#b9b8b8"
      />
      <Input
        type="password"
        placeholder="Password"
        className="password"
        src={Password}
        alt="password"
      />
      <div className="buttonWrapper">
        <Button title="SIGN UP" />
      </div>
    </Card>
  );
};

export default SignUp;
