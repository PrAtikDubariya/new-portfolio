import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import "../App.css";

const Contact = () => {

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = "Name is required.";

    if (form.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) errors.email = "Invalid email format.";
    } else {
      errors.email = "Email is required.";
    }

    if (form.phoneNumber) {
      const e164Regex = /^\+[1-9]\d{1,14}$/;
      if (!e164Regex.test(form.phoneNumber))
        errors.phoneNumber = "Phone number must be in E.164 format.";
    }

    return errors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch(`${BASE_URL}/notify`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            number: form.phoneNumber,
            message: form.message,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          toast.success("Message sent successfully!");
          setForm({ name: "", email: "", phoneNumber: "", message: "" });
          setErrors({});
        } else {
          toast.error(data.error || "Failed to send message.");
        }
      } catch (err) {
        console.error("Error sending message:", err);
        toast.error("Server error: Failed to send message.");
      }
    } else {
      toast.error("Please fix the errors before submitting.");
    }

    setIsSending(false);
  };

  const fieldStyles = {
    maxWidth: "700px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "15px",
      color: "#9e9e9e", // input text color
      "& fieldset": {
        borderColor: "#e0e0e0",
      },
      "&:hover fieldset": {
        borderColor: "#e0e0e0",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#e0e0e0",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#9e9e9e", // label color
      fontWeight: 500,
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#9e9e9e",
    },
    "& .MuiFormHelperText-root": {
      color: "#9e9e9e", // helper text color
    },
  };

  return (
    <div className="contact pt-5">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "16px",
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
          success: {
            iconTheme: {
              primary: "#4caf50",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#f44336",
              secondary: "#fff",
            },
          },
        }}
      />

      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>
              Get in <span>Touch</span>
            </h2>
            <span className="d-none d-lg-block bg-title">Contact</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="row mb-3 d-flex justify-content-center px-0" noValidate>
          <div className="row d-flex justify-content-center px-0">
            <div className="col-12 py-2">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <TextField
                  sx={fieldStyles}
                  type="text"
                  fullWidth
                  label="Name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                />
              </div>
            </div>

            <div className="col-12 py-2">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <TextField
                  sx={fieldStyles}
                  type="email"
                  fullWidth
                  label="Email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </div>
            </div>

            <div className="col-12 py-2">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <TextField
                  sx={fieldStyles}
                  type="tel"
                  fullWidth
                  label="Phone Number"
                  id="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  error={!!errors.phoneNumber}
                  helperText={
                    errors.phoneNumber ||
                    "Include country code. e.g. +1234567890"
                  }
                />
              </div>
            </div>

            <div className="col-12 py-2">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <TextField
                  sx={fieldStyles}
                  maxRows={4}
                  minRows={4}
                  multiline
                  type="text"
                  fullWidth
                  label="Message"
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-12 py-2">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  disabled={isSending}
                  sx={{
                    maxWidth: "700px",
                    color: "#fff",
                    borderColor: "#8c6fff",
                    backgroundColor: "#8c6fff",
                    padding: "10px 20px",
                    borderRadius: "15px",
                    textTransform: "none",
                    fontWeight: 500,
                    opacity: isSending ? 0.6 : 1,
                    cursor: isSending ? "not-allowed" : "pointer",
                  }}
                >
                  {isSending ? "Sending..." : "Submit"}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
