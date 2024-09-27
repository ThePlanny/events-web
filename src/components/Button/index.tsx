import styles from "./button.module.css";

import { Loader } from "../Loader";

interface ButtonProps {
  label: string;
  isLoading?: boolean;
  href?: string;
  onClick?: () => void;
}

export const Button = ({ label, isLoading, href, onClick }: ButtonProps) => {
  const handleClick = () => {
    if (typeof onClick === "function") {
      onClick();
      return;
    }

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
