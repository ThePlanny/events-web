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

  const handleSubmit = async () => {
    setIsLoading(true);
    // values
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

    // validate files size < 1mb
    if (documentFile.size > 1000000 || documentEPS.size > 1000000) {
      alert("El tamaño de los archivos no puede ser mayor a 1mb");
      setIsLoading(false);
      return;
    }

    const params: Athlete = {
      fullName,
      birthDate,
      documentNumber,
      documentType,
      email,
    };
    const formData = new FormData();
    formData.append("documentFile", documentFile);
    formData.append("documentEPS", documentEPS);
    formData.append("fullName", params.fullName);
    formData.append("birthDate", params.birthDate);
    formData.append("documentNumber", params.documentNumber);
    formData.append("documentType", params.documentType);
    formData.append("email", params.email);

    try {
      await createAthlete(formData);
      navigate("/users");
    } catch (error) {
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
        <select name="documento" id="documentType" required>
          <option value="documento">Tarjeta de identidad</option>
          <option value="documento">Cedula de ciudadania</option>
          <option value="documento">Registro Civil</option>
          <option value="documento">Pasaporte</option>
        </select>
      </div>

      <div className="containerInput">
        <label htmlFor="nombre">Numero de documento:</label>
        <input
          type="text"
          id="documentNumber"
          name="Nombre del club"
          required
        />
      </div>

      <div className="containerInput">
        <label htmlFor="nombre">Correo electronico:</label>
        <input type="email" id="email" name="Correo electronico" required />
      </div>

      <div className="containerInput">
        <label htmlFor="nombre">Nombre completo del acudiente en caso de ser menor de edad:</label>
        <input type="text" id="nombre" name="nombre" required />
      </div>

      <div className="containerInput">
        <label htmlFor="nombre">Numero contacto del acudiente:</label>
        <input
          type="text"
          id="PhoneNumber"
          name="Numero documento del acudiente"
          required
        />
      </div>

      <div className="containerInput">
        <label htmlFor="fecha">Fecha de nacimiento:</label>
        <input
          type="date"
          id="birthDate"
          name="fecha"
          min="1964-01-01"
          max="2019-01-01"
          required
        />
      </div>

      <h4>Cargue sus documentos</h4>

      <div className="containerInput">
        <label>Documento de identidad</label>
        <input type="file" name="archivo" id="documentFile" required />
      </div>

      <div className="containerInput">
        <label>Certificado de EPS</label>
        <input type="file" name="archivo" id="documentEPS" required />
      </div>

      <Button isLoading={isLoading} label="Registrarse" />
    </Form>
  );
};
