import { useCallback, useMemo, useState } from "react";

function Demo() {
  const [value, setValue] = useState("");
  const [theme, setTheme] = useState("white");
  const callBack = useCallback(
    function changeTheme() {
      if (theme === "white") {
        setTheme("dark");
      } else {
        setTheme("white");
      }
    },
    [theme]
  );
  function factorial(len) {
    if (len <= 0) return 1;

    let fact = 1;
    for (let i = 1; i <= len; i++) {
      fact *= i;
    }
    return fact;
  }
  const ans = useMemo(() => factorial(+value), [value]);
  // const ans = factorial(+value);
  console.log(ans);
  return (
    <>
      {console.log("component re-rendering...")}
      <div className={`flex items-center h-screen justify-center `}>
        <div
          className={`border border-blue-600 w-96 h-96 text-center my-10 ${
            theme === "white" ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <h1 className="text-lg font-bold mt-4">optimization hooks </h1>
          <p>useMemo,useCallback,memo</p>
          <input
            type="text"
            className="border border-black rounded-md p-2 m-2"
            placeholder="typing..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <h1>{ans}</h1>
          <button
            type="button"
            className={`p-3 border ${
              theme === "dark" ? "border-white" : "border-black"
            } w-20 mr-10`}
            onClick={callBack}
          >
            {theme === "dark" ? "white" : "dark"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Demo;
