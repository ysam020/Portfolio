import React, { useState, useEffect, useRef } from "react";
import { sendMessage, submitForm } from "../utils/sendMessage";

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
    sendMessage(
      event,
      setFormData,
      setFormFocus,
      setIsEmailValid,
      setIsNameValid,
      setIsSubjectValid,
      setIsMessageValid
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formRef);
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
