import React from "react";

function ChatMessage({name,message}) {
  return (
    <div className="flex items-center shadow-md rounded-lg">
      <img
        className="w-8 h-8"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="comment logo user"
      />
      <span className="font-bold p-3">{name}</span>
      <div className="text-sm">{message}</div>
    </div>
  );
}

export default ChatMessage;
