import { Link } from "react-router-dom";
import "./homePage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const HomePage = () => {
  const [typingStatus, setTypingStatus] = useState("human1")

  return (
    <div className="homepage">
      <img
        src="/orbital.png"
        alt="Homepage background Image"
        className="orbital"
      />
      <div className="left">
        <h1>MERN AI</h1>
        <h2>Engage, Connect, Inspire: AI-Driven Conversations</h2>
        <h3>
          Unlock smart conversations with our AI Chat Companion. Get instant
          answers, insights, and support from an advanced AI that's always ready
          to assist. Engage with the future, today.
        </h3>

        <Link to="/dashboard">Get Started</Link>
      </div>

      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="Homepage Bot Image" className="bot" />
          <div className="chat">
            <img src={
              typingStatus === "human1"
                ? "/human1.jpeg"
                : typingStatus === "human2"
                ? "/human2.jpeg"
                : "/bot.png"
            } alt="chat avatars images" />
            <TypeAnimation
              sequence={[                
                "Human: Check the my code for any bugs and errors",
                2000,() => setTypingStatus("bot"),
                "Bot: Sure, let me check your code",
                2000,() => setTypingStatus("human2"),
                "Human: Analyze the picture and generate details",
                2000,() => setTypingStatus("bot"),
                "Bot: Here's all the details from the picture",
                2000,() => setTypingStatus("human1"),
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
