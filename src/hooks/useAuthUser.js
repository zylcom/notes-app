import { getUserLogged } from "../utils/networkData";
import { useEffect, useState } from "react";

function useAuthUser(defaultValue) {
  const [authedUser, setAuthedUser] = useState(defaultValue);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    async function fetchUserLogged() {
      const { data } = await getUserLogged();

      setAuthedUser(data);
      setInitializing(false);
    }

    fetchUserLogged();
  }, []);

  return [authedUser, initializing, setAuthedUser];
}

export default useAuthUser;
