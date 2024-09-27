import styles from "./styles.module.css";
import { useState } from "react";

import { getToken } from "../../authentication/validateAuth";

// Components
import { Button } from "../Button";

export const EnrollButton = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = async () => {
    setIsLoading(true);
    const token = await getToken();

    if (!token) {
      window.location.href = "/auth/login";
      return;
    } 
    
    

    setIsLoading(false);
    window.location.href = "/events/my-events";
  };

  return (
    <Button label="Inscribirse" onClick={handleClick} isLoading={isLoading} />
  );
};
