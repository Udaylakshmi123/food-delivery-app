import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  //  check if online
  useEffect(() => {
    console.log()
    window.addEventListener("online", (event) => {
      setOnlineStatus(true);
    });
    window.addEventListener("offline", (event) => {
      setOnlineStatus(false);
    });
  }, []);

  // return boolean value
  return onlineStatus;
};
export default useOnlineStatus;
