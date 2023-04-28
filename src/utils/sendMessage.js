import emailjs from "@emailjs/browser";

export function sendMessage(
  event,
  setFormData,
  setFormFocus,
  setIsEmailValid,
  setIsNameValid,
  setIsSubjectValid,
  setIsMessageValid
) {
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
}

export function submitForm(formRef) {
  emailjs
    .sendForm(
      "service_gl6t3fl",
      "template_oko7kfb",
      formRef.current,
      "87lxuN6slI6H42koq"
    )
    .then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error.text);
      }
    );
}
