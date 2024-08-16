import styles from "./loader.module.css";

interface LoaderProps {
  color?: string;
}

export const Loader = ({ color }: LoaderProps) => {
  return (
    <div
      className={styles.loader}
      style={{ borderRightColor: color || "#FFF" }}
    ></div>
  );
};
