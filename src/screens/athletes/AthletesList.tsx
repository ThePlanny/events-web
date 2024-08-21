import styles from "./athleteList.module.css";
import { useEffect, useState } from "react";

// Components
import { AthleteListItem } from "../../components/AthleteListItem";
import { Loader } from "../../components/Loader";
import { Button } from "../../components/Button";

// Interfaces
import type { Athlete } from "../../interfaces/athlete";

// Services
import { AthleteService } from "../../services/athlete";

export const AthletesList = () => {
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getAthletes = async () => {
    try {
      const athleteService = new AthleteService();
      const data: Athlete[] = await athleteService.getAllAthletes();
      setAthletes(data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAthletes();
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          height: "50vh",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div>
          <Loader color="red" />
        </div>
      </div>
    );
  }

  return (
    <>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <Button label="Agregar deportista" href="/createUser" />
      </header>
      <ul className={styles.container}>
        {athletes.map((athlete) => (
          <AthleteListItem athlete={athlete} key={athlete.id} />
        ))}
      </ul>
    </>
  );
};
