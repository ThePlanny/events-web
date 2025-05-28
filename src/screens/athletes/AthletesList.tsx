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
  const [copied, setCopied] = useState<boolean>(false);

  const athleteService = new AthleteService();

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

  async function handleClick() {
    try {
      const newToken = await athleteService.getlink();
      setToken("/createUserWithLink?token=" + newToken);
      console.log("Token recibido:", newToken);
    } catch (error) {
      console.error("Error al obtener el token:", error);
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.origin + token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Oculta el mensaje después de 2 segundos
  };

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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "0.5rem",
          alignItems: "center",
          marginTop: "20px",
          maxWidth: "95dvw",
          width: "100%",
        }}
      >
        <button
          onClick={handleClick}
          style={{
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            background: "#1976d2",
            color: "#fff",
            cursor: "pointer",
            fontSize: "0.8rem",
            fontWeight: 500,
            boxShadow: "0 2px 4px rgba(0,0,0,0.06)",
            transition: "background 0.2s",
          }}
        >
          Generar link de registro
        </button>
        <div
          style={{
            padding: "12px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            background: "#fafafa",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            width: "100%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <span
            style={{
              flex: 1,
              color: "#333",
              fontSize: "0.95rem",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "100%",
            }}
            title={window.location.origin + token}
          >
            {token ? window.location.origin + token : "Link no disponible"}
          </span>
          <button
            style={{
              padding: "6px 12px",
              border: "none",
              borderRadius: "4px",
              background: token === "" ? "#ccc" : "#1976d2",
              color: "#fff",
              cursor: "pointer",
              fontSize: "0.9rem",
              flexShrink: 0,
            }}
            onClick={handleCopy}
            aria-label="Copiar link de registro"
            title="Copiar link de registro"
            disabled={token === "" ? true : false}
          >
            Copiar
          </button>
          {copied && (
            <span
              style={{
                position: "absolute",
                right: "10px",
                top: "0",
                background: "#4caf50",
                color: "#fff",
                padding: "6px 14px",
                borderRadius: "6px",
                fontSize: "0.9rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                zIndex: 10,
                animation: "fadeInOut 2s",
              }}
            >
              ¡Link copiado!
            </span>
          )}
        </div>
      </div>

      <header style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
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
