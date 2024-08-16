import styles from "./athleteListItem.module.css";

// Interfaces
import type { Athlete } from "../../interfaces/athlete";

interface AthleteListItemProps {
  athlete: Athlete;
}

export const AthleteListItem = ({ athlete }: AthleteListItemProps) => {
  return (
    <li className={styles.item}>
      <picture className={styles.picture}>
        <img className={styles.image} src="https://via.placeholder.com/150" alt="Athlete" />
      </picture>
      <section className={styles.conteinerInfo}>
        <h4 className={styles.name}>{athlete.fullName}</h4>
        <p className={styles.email}>{athlete.email}</p>
      </section>

      <div className={styles.status}>
        <span className={styles.statusIcon}>•</span>
        <span className={styles.statusText}>Activo</span>
      </div>
    </li>
  );
};
