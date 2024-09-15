import { useRef, useState } from "react";
import CommentList from "./CommentList";

function CommentContainer() {
  const [data, setData] = useState([]);
  const [replyingTo, setReplyingTo] = useState(null); // State to track which comment you're replying to
  const ref = useRef(null);

  const handleSubmitComment = () => {
    const value = ref.current && ref.current.value;
    if (!value) return;

    const newComment = {
      name: "John Doe",
      text: value,
      replies: [],
    };

    // If you're replying to a comment
    if (replyingTo !== null) {
      setData((prevData) =>
        prevData.map((comment, index) =>
          index === replyingTo
            ? { ...comment, replies: [...comment.replies, newComment] }
            : comment
        )
      );
    } else {
      // Adding a new top-level comment
      setData((prevData) => [...prevData, newComment]);
    }

    ref.current.value = ""; // Clear input field
    setReplyingTo(null); // Reset replying state
  };

  const handleReply = (index) => {
    setReplyingTo(index); // Set the index of the comment being replied to
    ref.current.focus(); // Optionally focus the input for better UX
  };

  return (
    <div>
      <h1 className="font-bold text-xl mb-2"> Comments:</h1>

      <CommentList comment={data} handleReply={handleReply} />

      <input
        type="text"
        className="p-2 border border-black w-80 ml-20 my-3"
        ref={ref}
        placeholder={
          replyingTo !== null ? "Enter your reply" : "Enter your comment"
        }
      />
      <button
        className="border border-black w-24 mx-2 p-2 hover:bg-slate-100 rounded-md"
        onClick={handleSubmitComment}
      >
        {replyingTo !== null ? "Reply" : "Comment"}
      </button>
    </div>
  );
}

export default CommentContainer;
