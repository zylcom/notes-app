import { useState } from "react";

function useInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  function onValueChangeHandler(e) {
    setValue(e.target.value);
  }

  return [value, onValueChangeHandler, setValue];
}

export default useInput;
