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
  const [token, setToken] = useState<string>("");

  const athleteService = new AthleteService();

  // Obtener atletas al cargar el componente
  useEffect(() => {
    const getAthletes = async () => {
      try {
        const data: Athlete[] = await athleteService.getAllAthletes();
        setAthletes(data);
      } catch (error) {
        console.error("Error al obtener atletas:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getAthletes();
  }, []);

  // Función para obtener el token del link de registro
  async function handleClick() {
    try {
      const newToken = await athleteService.getlink();
      setToken("http://localhost:4321/createUserWithLink?token="+ newToken);
      console.log("Token recibido:", newToken);
    } catch (error) {
      console.error("Error al obtener el token:", error);
    }
  }

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
        {/* Botón para obtener el link de registro */}
        <div className="registrationLink">
          <button onClick={handleClick}>Link registro</button>
          {token && <p>Token: {token}</p>}
        </div>

        {athletes.map((athlete) => (
          <AthleteListItem athlete={athlete} key={athlete.id} />
        ))}
      </ul>
    </>
  );
};