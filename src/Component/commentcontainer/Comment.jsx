import React from "react";

function Comment({ data,handleReply,index }) {
  const { text, name, replies } = data;
  return (
    <div className="flex justify-start shadow-sm bg-slate-100 p-2 rounded-lg my-2
    ">
      <img
      className="w-12 h-12"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="comment logo user"
      />
      <div className="mx-5">
        
        <p className="font-bold">{name}</p>
        <p>{text}</p>
        <button
          className="text-blue-500"
          onClick={() => handleReply(index,"reply")}
        >
          Reply
        </button>

        {/* <p>{replies && replies.map(({name})=>{
          return <li key={name}>{name}</li>
        })}</p> */}
      </div>
      
    </div>
  );
}

export default Comment;
