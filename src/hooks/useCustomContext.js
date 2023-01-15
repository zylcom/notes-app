import { useMemo, useState } from "react";

function useCustomContext(contextName, defaultValue, value) {
  const [context, setContext] = useState(
    localStorage.getItem(contextName) || defaultValue
  );

  function toggleContext() {
    setContext((prevContext) => {
      const newContext = prevContext === defaultValue ? value : defaultValue;

      localStorage.setItem(contextName, newContext);

      return newContext;
    });
  }

  const contextValue = useMemo(() => {
    return { context, toggleContext };
  }, [context]);

  return { context, contextValue };
}

export default useCustomContext;
