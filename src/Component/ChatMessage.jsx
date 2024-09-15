import React from "react";

function ChatMessage({ name, message }) {
  return (
    <div className="flex items-start p-2 mb-2 bg-white shadow-sm rounded-lg">
      <img
        className="w-8 h-8 rounded-full mr-2"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user avatar"
      />
      <div>
        <div className="font-bold text-sm">{name}</div>
        <div className="text-sm">{message}</div>
      </div>
    </div>
  );
}

export default ChatMessage;
