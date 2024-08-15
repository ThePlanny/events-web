import { getToken } from "../authentication/validateAuth";

// Interfaces
import type { Athlete } from "../interfaces/athlete";

export class AthleteService {
  async createAthlete(athlete: Athlete): Promise<Athlete> {
    const token = await getToken();
    const response = await fetch(
      "https://planny-432016.uc.r.appspot.com/api/athletes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(athlete),
      }
    );

    if (!response.ok) throw new Error("Error creating athlete");

    const data = await response.json();

    return {
      birthDate: data.birthDate,
      email: data.email,
      documentNumber: data.documentNumber,
      documentType: data.documentType,
      fullName: data.fullName,
      id: data.id,
    };
  }
}
