import emailjs from "@emailjs/browser";
import React, { useState, useEffect, useRef } from "react";

export default function ContactForm() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formFocus, setFormFocus] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isSubjectValid, setIsSubjectValid] = useState(false);
  const [isMessageValid, setIsMessageValid] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (name === "email") {
      setFormFocus((prevFormFocus) => ({
        ...prevFormFocus,
        [name]: true,
      }));
      setIsEmailValid(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
      );
    } else {
      setFormFocus((prevFormFocus) => ({
        ...prevFormFocus,
        [name]: true,
      }));

      switch (name) {
        case "name":
          setIsNameValid(value.trim() !== "");
          break;
        case "subject":
          setIsSubjectValid(value.trim() !== "");
          break;
        case "message":
          setIsMessageValid(value.trim() !== "");
          break;
        default:
          break;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gl6t3fl",
        "template_oko7kfb",
        formRef.current,
        "87lxuN6slI6H42koq"
      )
      .then(
        (result) => {
          // setOpenSnackbar(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    setIsFormValid(
      isNameValid && isEmailValid && isSubjectValid && isMessageValid
    );
  }, [isNameValid, isEmailValid, isSubjectValid, isMessageValid]);

  return (
    <form ref={formRef} id="form" className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        onFocus={() =>
          setFormFocus((prevFormFocus) => ({ ...prevFormFocus, name: true }))
        }
        className={
          formFocus.name && !isNameValid
            ? "error"
            : formFocus.name
            ? "success"
            : ""
        }
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        onFocus={() =>
          setFormFocus((prevFormFocus) => ({ ...prevFormFocus, email: true }))
        }
        className={
          formFocus.email && !isEmailValid
            ? "error"
            : formFocus.email
            ? "success"
            : ""
        }
      />
      <input
        type="text"
        placeholder="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        onFocus={() =>
          setFormFocus((prevFormFocus) => ({ ...prevFormFocus, subject: true }))
        }
        className={
          formFocus.subject && !isSubjectValid
            ? "error"
            : formFocus.subject
            ? "success"
            : ""
        }
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        onFocus={() =>
          setFormFocus((prevFormFocus) => ({
            ...prevFormFocus,
            message: true,
          }))
        }
        className={
          formFocus.message && !isMessageValid
            ? "error"
            : isMessageValid
            ? "success"
            : ""
        }
      ></textarea>
      <button type="submit" disabled={!isFormValid} aria-label="send-message">
        Send Message
      </button>
    </form>
  );
}
