import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import phoneIcon from "../../assets/phone-icon.png";
import emailLogo from "../../assets/paper-plane.png";

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
    <div className="flex flex-col w-full relative items-center justify-center text-center md:gap-0 lg:text-left xl:gap-2 2xl:gap-4 border-t-4 border-zinc-800 bg-[#0c0c0c] pt-14">
      <h1 className="flex items-center justify-center text-center font-bold text-5xl">
        Contact Me
      </h1>
      <h2 className="flex items-center justify-center text-center font-normal text-xl mt-10 mb-4">
        Feel free to contact me about anything!
      </h2>
      <div className="flex flex-row items-center justify-center gap-6">
        <div className="justify-items-center text-center w-1/2">
          <div className="w-14 h-14 rounded-full flex justify-center items-center bg-[#bc9864]">
            <img src={phoneIcon} className="size-6" alt="phone logo" />
          </div>
          <div className="text">
            <p>
              <span className="text-[#bc9864] justify-center text-center">
                Phone:
              </span>{" "}
              <br />
              <a href="tel:+353851024884" target="_blank">
                +353 85 102 4884
              </a>
            </p>
          </div>
        </div>
        <div className="justify-items-center text-center w-full md:w-1/2">
          <div className="w-14 h-14 rounded-full flex justify-center items-center bg-[#bc9864]">
            <img src={emailLogo} className="size-6" alt="Email logo" />
          </div>
          <div className="text">
            <p>
              <span className="text-[#bc9864]">Email:</span> <br />
              <a
                href="mailto:martis.jascemskas@gmail.com"
                target="_blank"
                className=""
              >
                martis.jascemskas@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-12 rounded-md p-10 size-8/12 sm:size-8/12 md:size-6/12 lg:size-5/12 xl:size-4/12">
        <form onSubmit={onSubmit} className="">
          <div className="mb-4 h-10">
            <input
              className="bg-[#141414] hover:bg-[#252525] focus:outline-none rounded-md w-full h-full text-base font-normal px-4 placeholder-[#676767]"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4 h-10">
            <input
              className="bg-[#141414] hover:bg-[#252525] focus:outline-none rounded-md w-full h-full text-base font-normal px-4 placeholder-[#676767]"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4 h-10">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="bg-[#141414] hover:bg-[#252525] focus:outline-none rounded-md w-full h-full text-base font-normal px-4 placeholder-[#676767]"
            />
          </div>
          <div className="mb-6 h-56">
            <textarea
              className="bg-[#141414] hover:bg-[#252525] focus:outline-none rounded-md h-full w-full text-base font-normal px-4 pt-1 placeholder-[#676767]"
              name="message"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <input
            type="hidden"
            name="from_name"
            value="Portfolio Contact Me"
          ></input>
          <Button
            sx={{
              width: "100%",
              backgroundColor: "#bc9864",
              color: "black",
              fontWeight: "bold",
              ":hover": { backgroundColor: "#a57f48", color: "white" },
            }}
            variant="contained"
            endIcon={<SendIcon />}
            type="submit"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
