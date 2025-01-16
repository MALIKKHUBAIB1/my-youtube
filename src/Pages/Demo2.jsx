import { useEffect, useRef, useState } from "react";

function Demo2() {
  const [input, setInput] = useState("");
  let count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  }, [input]);
  return (
    <div className={`flex items-center h-screen justify-center `}>
      <div className={`border border-blue-600 w-96 h-96 text-center my-10`}>
        <h1 className="text-lg font-bold mt-4">optimization hooks </h1>
        <p>
          useMemo,useCallback,memo<span>{count.current}</span>
        </p>
        <input
          type="text"
          className="border border-black rounded-md p-2 m-2"
          placeholder="typing..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Demo2;
