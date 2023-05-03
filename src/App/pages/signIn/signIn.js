import React, { useState } from "react";
import "./styles.css";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // You can replace the console logs with your own logic to handle sign-in

    navigate("/admin");
  };
  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit} className="formgroup">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiWcxk0RhD0nhYOgZsGYu83tW2L9oZTMgCKax9dss3sA&usqp=CAU&ec=48600113"
          alt="manoj"
          className="avatar"
          style={{ aspectRatio: 1 / 1 }}
        />
        <div className="group">
          <label htmlFor="email">Email</label>
          <TextField
            type="email"
            value={email}
            id="filled-basic"
            variant="filled"
            onChange={(event) => setEmail(event.target.value)}
            sx={{ input: { color: 'aliceblue' } }}

          />
        </div>
        <div className="group">
          <label htmlFor="password">Password</label>
          <TextField
            id="filled-basic"
            variant="filled"
            type="password"
            value={password}
            sx={{ input: { color: 'aliceblue' } }}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" style={{ marginTop: "2vh" }}>
          Sign In
        </button>
      </form>
    );
  };
  return (
    <div className="signInwrapper">
      <img
        src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/business/tour/administrative-tools/work-desk-headset.svg"
        alt="IMgae"
        className="signImage"
      />
      <div>{renderForm()}</div>
    </div>
  );
}

export default SignInForm;
