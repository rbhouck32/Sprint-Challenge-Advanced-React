import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useDarkMode() {
  const [toggle, setToggle] = useLocalStorage("_darkmode");

  useEffect(() => {
    toggle
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [setToggle]);
  return [toggle, setToggle];
}
export default useDarkMode;
