import styles from "./athleteListItem.module.css";
import { TrashIcon } from "../../icons/TrashIcon";
import { EditIcon } from "../../icons/EditIcon";

// Interfaces
import type { Athlete } from "../../interfaces/athlete";

interface AthleteListItemProps {
  athlete: Athlete;
}

export const AthleteListItem = ({ athlete }: AthleteListItemProps) => {
  const handleDelete = () => {};

  const handleEdit = () => {};

  return (
    <li className={styles.item}>
      <picture className={styles.picture}>
        <img
          className={styles.image}
          src="https://via.placeholder.com/150"
          alt="Athlete"
        />
      </picture>
      <section className={styles.conteinerInfo}>
        <h4 className={styles.name}>{athlete.fullName}</h4>
        <p className={styles.email}>{athlete.email}</p>
      </section>

      {/* <div className={styles.status}>
        <span className={styles.statusIcon}>•</span>
        <span className={styles.statusText}>Activo</span>
        </div> */}

      <div className={styles.status}>
        <button
          className={styles.buttonIconDelete}
          aria-label="Eliminar"
          onClick={handleDelete}
        >
          <TrashIcon size={16} />
        </button>
        <button
          className={styles.buttonIcon}
          aria-label="Eliminar"
          onClick={handleEdit}
        >
          <EditIcon size={16} />
        </button>
      </div>
    </li>
  );
};
