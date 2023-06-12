import React, { useState } from "react";
import { toast } from "react-toastify";

function Contact() {
  const [feedBack, setFeedBack] = useState({
    name: "",
    email: "",
    message: "",
  });

  function changeHandler(e) {
    let name = e.target.name;
    let value = e.target.value;

    setFeedBack((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  }
  function Submit(e) {
    if (!feedBack.name || !feedBack.email || !feedBack.message) {
      toast.error("Fill all fields");
    } else {
      setFeedBack({
        name: "",
        email: "",
        message: "",
      });
      toast.success("Thank you for your Feedback");
    }
  }

  return (
    <div className="contactForm">
      <div>
        <label className="divlable" for="name">
          Name
        </label>
        <input
          className="input-value"
          type="text"
          onChange={(e) => {
            changeHandler(e);
          }}
          value={feedBack.name}
          name="name"
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <label className="divlable" for="name">
          Email
        </label>
        <input
          className="input-value"
          type="email"
          onChange={(e) => {
            changeHandler(e);
          }}
          value={feedBack.email}
          name="email"
          placeholder="Your email"
          required
        />
      </div>
      <div>
        <label className="divlable" for="find-us">
          How did you find us?
        </label>
        <select
          style={{
            border: "2px solid #c2b7b7",
            borderRadius: "5px",
            width: "10%",
            textAlign: "center",
          }}
          name="find-us"
        >
          <option value="friends" selected>
            Friends
          </option>
          <option value="advertising">Advertising</option>
          <option value="google">Google</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <label className="divlable">Subscribe to our newsletter?</label>
        <input
          style={{ width: "20px", height: "20px" }}
          //  className="input-value"
          type="checkbox"
          name="news"
        />
      </div>
      <div>
        <textarea
          //   className="input-value"
          style={{
            border: "2px solid #c2b7b7",
            borderRadius: "8px",
          }}
          onChange={(e) => {
            changeHandler(e);
          }}
          value={feedBack.message}
          name="message"
          placeholder="Your message..."
          rows="10"
          cols="70"
        />
      </div>
      <div>
        <button className="contactButton" type="submit" onClick={Submit}>
          Send it!
        </button>
      </div>
    </div>
  );
}

export default Contact;
