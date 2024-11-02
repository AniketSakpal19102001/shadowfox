import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { Element } from "react-scroll";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      email: email,
      message: message,
    };
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_USER_ID"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setEmail("");
          setMessage("");
          Swal.fire({
            title: "Submitted!",
            text: "Message Sent",
            icon: "success",
          });
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <>
      <Element name="contact" className="element">
        <div id="contact" className="h-screen w-full ">
          <div className="py-8 md:py-14 w-full h-[10%] flex justify-center items-center ">
            <h1 className="contact-heading text-4xl font-bold section-heading">
              Contact
            </h1>
          </div>

          <div className="mx-4 md:mx-20 h-[70%] flex justify-center items-center ">
            <form
              onSubmit={sendEmail}
              className="contact-form border border-gray-600 py-16 flex flex-col gap-4 justify-center items-center rounded-lg w-full"
            >
              <div className="flex justify-between gap-4 w-1/2">
                <label htmlFor="email" className="">
                  Email &nbsp; &nbsp; &nbsp;
                </label>
                <input
                  required
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className="bg-slate-300 rounded-md text-black px-2 py-1 w-2/3"
                />
              </div>
              <div className="flex justify-between gap-4  w-1/2">
                <label htmlFor="message" className="">
                  Message
                </label>
                <textarea
                  required
                  name=""
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="message"
                  id=""
                  className="bg-slate-300 rounded-md text-black px-2 pb-5 w-2/3"
                ></textarea>
              </div>
              <div className="flex justify-end gap-4 pt-4  w-1/2">
                <button className="px-4 py-1 border border-white rounded-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className=" w-full h-[15%] flex justify-center items-center gap-5 border-t border-gray-600">
            <div
              title="yourgmail@gmail.com"
              className="rotate-logo rounded-full border-2 border-gray-300 aspect-square w-14"
            >
              <a href="mailto:yourgmail@gmail.com" target="_blank">
                <img
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/gmail.png"
                  className="p-2"
                  alt=""
                />
              </a>
            </div>
            <div className="rotate-logo rounded-full border-2 border-gray-300 aspect-square w-14">
              <a
                href="https://www.linkedin.com/in/aniket-sunil-sakpal"
                target="_blank"
              >
                <img
                  src="https://img.icons8.com/ios/50/FFFFFF/linkedin.png"
                  className="p-2"
                  alt=""
                />
              </a>
            </div>
            <div className="rotate-logo rounded-full border-2 border-gray-300 aspect-square w-14">
              <a
                href="https://www.facebook.com/sunil.sakpal.140193?mibextid=ZbWKwL"
                target="_blank"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-new.png"
                  className="p-2"
                  alt=""
                />
              </a>
            </div>
            <div className="rotate-logo rounded-full border-2 border-gray-300 aspect-square w-14">
              <a
                href="https://www.instagram.com/aniket_sunil_sakpal/"
                target="_blank"
              >
                <img
                  src="https://img.icons8.com/ios/50/FFFFFF/instagram-new--v1.png"
                  className="p-2"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Contact;
