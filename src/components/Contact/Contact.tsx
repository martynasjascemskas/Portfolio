import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import emailLogo from "../../assets/email-icon.png";
import phoneIcon from "../../assets/phone-icon.png";

function Contact() {
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", "2f68c6eb-810e-426a-9a19-d0d9f54edade");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Email Submitted Successfully");
      e.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message);
    }
  };
  return (
    <div className="flex flex-col w-full relative items-center justify-center text-center md:gap-6 lg:text-left xl:gap-8 2xl:gap-10 border-y-4 border-zinc-800">
      <h1 className="flex items-center justify-center text-center font-bold text-5xl mt-10">
        Contact Me
      </h1>
      <h2 className="flex items-center justify-center text-center font-normal text-xl mt-10">
        Feel free to contact me about anything!
      </h2>
      <div className="flex items-center justify-center">
        <div>
          <div className="w-16 h-16 rounded-full flex justify-center items-center bg-[#bc9864]">
            <img src={phoneIcon} className="size-8" alt="phone logo" />
          </div>
          <div className="text">
            <p>
              <span>Phone:</span> <br />
              <a href="tel:353851024884" target="_blank">
                +353 85 102 4884
              </a>
            </p>
          </div>
        </div>
        <div>
          <a href="mailto:martis.jascemskas@gmail.com" target="_blank">
            <img src={emailLogo} className="logo email" alt="Email logo" />
          </a>
        </div>
      </div>
      <div></div>
      <div className="flex flex-col mb-12 size-3/12 rounded-md p-10">
        <form onSubmit={onSubmit}>
          <div className="mb-6">
            <input
              className="bg-[#141414] rounded-md h-full w-full border-2 border-zinc-800 text-lg font-medium px-2"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-6">
            <input
              className="bg-[#141414] rounded-md h-full w-full border-2 border-zinc-800 text-lg font-medium px-2"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6 h-60">
            <textarea
              className="bg-[#141414] rounded-md h-full w-full border-2 border-zinc-800 text-lg font-medium px-2"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <Button
            sx={{ mt: "25px" }}
            variant="contained"
            endIcon={<SendIcon />}
            type="submit"
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
