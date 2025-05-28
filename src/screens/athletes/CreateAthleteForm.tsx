import "./createAthelete.css";
import { useState } from "react";
import { navigate } from "astro:transitions/client";

// Interfaces
import type { Athlete } from "../../interfaces/athlete";

// Services
import { AthleteService } from "../../services/athlete";

// Components
import { Form } from "../../components/Form";
import { Button } from "../../components/Button";

export const CreateAthleteForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showGuardianFields, setShowGuardianFields] = useState<boolean>(false);

  const handleDocumentTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedType = event.target.value;
    setShowGuardianFields(selectedType === "TI" || selectedType === "RC");
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    const fullName = (document.getElementById("nombre") as HTMLInputElement)
      .value;
    const documentNumber = (
      document.getElementById("documentNumber") as HTMLInputElement
    ).value;
    const documentType = (
      document.getElementById("documentType") as HTMLSelectElement
    ).value;
    const birthDate = (document.getElementById("birthDate") as HTMLInputElement)
      .value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const documentFile = (document.getElementById("documentFile") as any)
      .files[0];
    const documentEPS = (document.getElementById("documentEPS") as any)
      .files[0];
    const guardianName = showGuardianFields
      ? (document.getElementById("guardianName") as HTMLInputElement).value
      : "";
    const contactNumber = showGuardianFields
      ? (document.getElementById("contactNumber") as HTMLInputElement).value
      : "";

    if (documentFile.size > 1000000 || documentEPS.size > 1000000) {
      alert("El tamaño de los archivos no puede ser mayor a 1MB");
      setIsLoading(false);
      return;
    }

    const params: Athlete = {
      fullName,
      birthDate,
      documentNumber,
      documentType,
      email,
      guardianName,
      contactNumber,
    };
    const formData = new FormData();
    formData.append("documentFile", documentFile);
    formData.append("documentEPS", documentEPS);
    formData.append("fullName", params.fullName);
    formData.append("birthDate", params.birthDate);
    formData.append("documentNumber", params.documentNumber);
    formData.append("documentType", params.documentType);
    formData.append("email", params.email);
    formData.append("guardianName", params.guardianName || "");
    formData.append("contactNumber", params.contactNumber || "");

    try {
      await createAthlete(formData);
      navigate("/users");
    } catch (error: any) {
      if (error.response?.status === 409) {
        setErrorMessage("Este deportista ya está creado.");
        setTimeout(() => setErrorMessage(null), 3000);
      } else {
        setErrorMessage(
          "Ocurrió un error al registrar el deportista. Intente de nuevo."
        );
        setTimeout(() => setErrorMessage(null), 3000);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const createAthlete = async (athlete: FormData): Promise<void> => {
    const athleteService = new AthleteService();
    await athleteService.createAthlete(athlete);
  };

  return (
    <Form handleSubmit={handleSubmit} className="form">
      <h2 className="title" id="title">
        ALMIGHTY PLANNY
      </h2>

      <div className="containerInput">
        <label htmlFor="nombre">Nombre completo del deportista:</label>
        <input type="text" id="nombre" name="nombre" required />
      </div>

      <div className="containerInput">
        <label>Selecciona tipo de documento:</label>
        <select
          name="documento"
          id="documentType"
          required
          onChange={handleDocumentTypeChange}
        >
          <option value="" disabled selected hidden>
            Seleccione un documento
          </option>
          <option value="TI">Tarjeta de identidad</option>
          <option value="CC">Cédula de ciudadanía</option>
          <option value="RC">Registro Civil</option>
          <option value="PA">Pasaporte</option>
        </select>
      </div>

      <div className="containerInput">
        <label htmlFor="documentNumber">Número de documento:</label>
        <input type="text" id="documentNumber" required />
      </div>

      <div className="containerInput">
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" required />
      </div>

      <div className="containerInput">
        <label htmlFor="birthDate">Fecha de nacimiento:</label>
        <input
          type="date"
          id="birthDate"
          min="1964-01-01"
          max="2019-01-01"
          required
        />
      </div>

      <h4>Cargue sus documentos</h4>

      <div className="containerInput">
        <label>Documento de identidad</label>
        <input type="file" id="documentFile" required />
      </div>

      <div className="containerInput">
        <label>Certificado de EPS</label>
        <input type="file" id="documentEPS" required />
      </div>

      {showGuardianFields && (
        <>
          <div className="containerInput">
            <label htmlFor="guardianName">Nombre completo del acudiente:</label>
            <input type="text" id="guardianName" required />
          </div>

          <div className="containerInput">
            <label htmlFor="contactNumber">
              Número de contacto del acudiente:
            </label>
            <input type="text" id="contactNumber" required />
          </div>
        </>
      )}

      <div className="button-container">
        {errorMessage && <div className="floating-message">{errorMessage}</div>}
        <Button isLoading={isLoading} label="Registrarse" />
      </div>
    </Form>
  );
};
