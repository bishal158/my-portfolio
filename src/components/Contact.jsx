import "./styles/Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";

export const Contact = () => {
  const [state, handleSubmit] = useForm("mayrybjl");
  const success = () => {
    if (state.succeeded) {
      toast.success("Email Sent Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className={"container-fluid contact_container"} id={"contact"}>
      <div className={"container"}>
        <h1>Feel free to contact me</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.682683746663!2d90.35061597604582!3d23.82988018571899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c138a4e06af9%3A0xfab24877265a9760!2sKazi%20Barir%20mor!5e0!3m2!1sen!2sbd!4v1704291465748!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <form onSubmit={handleSubmit} className={"contact_form"}>
          <h4>Contact Form</h4>
          <input
            id="email"
            type="email"
            name="email"
            placeholder={"abc@gmail.com"}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            placeholder={"Message:"}
            rows="10"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" onClick={success} disabled={state.submitting}>
            Send
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
