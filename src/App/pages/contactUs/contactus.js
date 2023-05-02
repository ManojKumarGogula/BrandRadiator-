import React, { useEffect, useState,forwardRef } from "react";
import TextField from "@mui/material/TextField";
import Header from "../../components/Header/header";
import "./styles.css";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = JSON.parse(localStorage.getItem("FORMDATA"));
    const data = {
      name: name,
      email: email,
      message: message,
    };
    if (formData) formData = [...formData, data];
    else formData = [data];
    localStorage.setItem("FORMDATA", JSON.stringify(formData));
    setEmail("");
    setMessage("");
    setName("");
    setOpen(true);
  };
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const renderToast = () => {
    return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Data si submitted successfully
        </Alert>
      </Snackbar>
    );
  };
  return (
    <div className="contactUS" style={{ aspectRatio: 1 / 1 }}>
      <Header />
      {renderToast()}
      <div className="heading">ContactUs</div>
      <form onSubmit={handleSubmit} className="formWrapper">
        <label htmlFor="name">Name:</label>
        <TextField
          id="filled-basic"
          label="Name"
          variant="filled"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <TextField
          error={false}
          id="filled-basic"
          label="Email"
          variant="filled"
          defaultValue="Hello World"
          helperText="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="message">Message:</label>
        <TextField
          error={false}
          id="filled-basic"
          label="Message"
          variant="filled"
          defaultValue="Hello World"
          helperText="Describe your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
