import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/appstore/Slice/LiveChatSlice";
import { generateRandomName } from "../utils/RandomNameGen";

function LiveChat() {
  const chat = useSelector((store) => store.chat.message);
  const dispatch = useDispatch();
  const chatEndRef = useRef(null);
  const ref = useRef(null);

  // Auto-scroll function
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Dispatch new messages at intervals
  function handleSubmit(e) {
    e.preventDefault();
    const value = ref.current && ref.current.value;
    dispatch(
      addMessage({
        id: Date.now(),
        name: "Khubaib Malik",
        message: value,
      })
    );
    ref.current.value = "";
  }

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          id: Date.now(),
          name: generateRandomName(),
          message: "This is message " + Date.now(),
        })
      );
    }, 600);

    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  // Scroll to bottom whenever chat changes
  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  return (
    <div className="relative flex flex-col h-[600px] bg-gray-100 shadow-md rounded-lg">
      {/* Chat messages */}
      <div className="flex-1 overflow-y-scroll p-2 mb-14">
        {chat.map((chat) => (
          <ChatMessage name={chat.name} message={chat.message} key={chat.id} />
        ))}
        {/* Element to scroll to */}
        <div ref={chatEndRef} />
      </div>

      {/* Input container */}
      <form
        className="absolute bottom-0 left-0 w-full p-2 bg-white flex items-center border-t border-gray-300"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter your comment"
          ref={ref}
        />
        <button
          className="w-20 p-1 border border-black rounded-md ml-2"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default LiveChat;
