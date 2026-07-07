import { useContext, useState } from "react";
import { NewContext } from "./NewContext";

export default function Entry() {
  let [textInput, setTextInput] = useState("");

  let {submitHandler} = useContext(NewContext)

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        placeholder="... کار جدید"
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-right focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        onClick={() => {
          submitHandler(textInput);
          setTextInput("");
        }}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        افزودن
      </button>
    </div>
  );
}
