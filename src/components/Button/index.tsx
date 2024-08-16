import styles from "./button.module.css";

import { Loader } from "../Loader";

interface ButtonProps {
  label: string;
  isLoading: boolean;
}

export const Button = ({ label, isLoading }: ButtonProps) => {
  return (
    <button className={styles.button} disabled={isLoading}>
      {isLoading ? <Loader /> : label}
    </button>
  );
};
