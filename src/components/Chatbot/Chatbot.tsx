import { FC, useState } from "react";
import { Icon } from "@iconify/react";
import { ChatbotProps } from "./types";

const Chatbot: FC<ChatbotProps> = ({ chatPageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className="chat-container">
      {showChatbot && (
        <>
          <div className="cancel-chatbot" onClick={() => setShowChatbot(false)}>
            <Icon
              icon="charm:cross"
              color="#FFFFFF"
              fontSize={30}
              cursor="pointer"
            />
          </div>
          <iframe
            src={chatPageUrl}
            width="100%"
            height="100%"
            title="Chatbot"
          ></iframe>
        </>
      )}
      <div
        onClick={() => setShowChatbot((prevState) => !prevState)}
        className={`${isHovered ? "chat-img hovered" : "chat-img"} ${
          showChatbot && "chat-img-hide"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Icon fontSize={50} icon="cryptocurrency-color:chat" />
      </div>
    </div>
  );
};

export default Chatbot;
