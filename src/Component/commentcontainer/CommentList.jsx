import Comment from "./Comment";

function CommentList({ comment,handleReply }) {
  // const data = [ {
  //   name: "xyz",
  //   text: "lorem ipsum dolor sit amet",
  //   replies: [
  //     {
  //       name: "akshay sainai",
  //       text: "lorem ipsum dolor sit amet",
  //       replies: [
  //         {
  //           name: "john doe",
  //           text: "nested reply text",
  //           replies: [], // Empty if no further replies
  //         },
  //       ],
  //     },
  //   ],
  // },]
  return (
    <div>
      {comment &&
        comment.map((comment, i) => (
          <div key={i}>
            <Comment data={comment} key={i} index= {i} handleReply = {handleReply} />
            <div className="pl-5 border border-l-black ml-5">
              <CommentList comment={comment.replies} handleReply = {handleReply} />
            </div>
          </div>
        ))}
    </div>
  );
}

export default CommentList;
