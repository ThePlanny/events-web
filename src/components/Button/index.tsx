import styles from "./button.module.css";

import { Loader } from "../Loader";

interface ButtonProps {
  label: string;
  isLoading?: boolean;
  href?: string;
}

export const Button = ({ label, isLoading, href }: ButtonProps) => {
  const handleClick = () => {
    if (href) {
      window.location.href = href;
    }
  };
  return (
    <button
      className={styles.button}
      disabled={isLoading}
      onClick={handleClick}
    >
      {isLoading ? <Loader /> : label}
    </button>
  );
};
