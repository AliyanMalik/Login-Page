import { React } from "react";
import Card from "../../UI/Card";
import Input from "../../Input/Input";
import Logo from "../../../assets/logo.svg";
import Email from "../../../assets/email.svg";
import Password from "../../../assets/password.svg";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

import "./Login.css";

const Login = (props) => {
  return (
    <Card>
      <div className="logoWrapper">
        <img src={Logo} alt="logo" className="logo" width="65px" />
      </div>
      <div className="titleWrapper">
        <p className="title">Welcome home, Andy.</p>
      </div>
      <Input
        type="text"
        placeholder="cerpow"
        className="email"
        src={Email}
        alt="email"
      />
      <Input
        type="password"
        placeholder="Password"
        className="password"
        src={Password}
        alt="password"
      />
      <div className="btnWrapper">
        <p>
          Or{" "}
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <span style={{ color: "#fc3955", fontSize: 18, cursor: "pointer" }}>
              Sign up
            </span>{" "}
          </Link>
          to continue.{" "}
        </p>
        <Button title="SIGN IN" />
      </div>
    </Card>
  );
};

export default Login;
