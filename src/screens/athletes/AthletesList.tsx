import styles from "./athleteList.module.css";
import { useEffect, useState } from "react";

// Components
import { AthleteListItem } from "../../components/AthleteListItem";

// Interfaces
import type { Athlete } from "../../interfaces/athlete";

// Services
import { AthleteService } from "../../services/athlete";

export const AthletesList = () => {
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  console.log("🥑 ~ AthletesList ~ athletes:", athletes);

  const getAthletes = async () => {
    const athleteService = new AthleteService();
    const data: Athlete[] = await athleteService.getAllAthletes();
    setAthletes(data);
  };

  useEffect(() => {
    getAthletes();
  }, []);

  return (
    <ul className={styles.container}>
      {athletes.map((athlete) => (
        <AthleteListItem athlete={athlete} key={athlete.id} />
      ))}
    </ul>
  );
};
