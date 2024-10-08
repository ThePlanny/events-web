import { getToken } from "../authentication/validateAuth";

// Interfaces
import type { Athlete } from "../interfaces/athlete";

export class AthleteService {
  async createAthlete(athlete: FormData): Promise<Athlete> {
    const token = await getToken();
    const response = await fetch(
      "https://planny-432016.uc.r.appspot.com/api/athletes",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: athlete,
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

  async getAllAthletes(): Promise<Athlete[]> {
    const token = await getToken();
    const response = await fetch(
      "https://planny-432016.uc.r.appspot.com/api/athletes",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
      }
    );

    if (!response.ok) throw new Error("Error fetching athletes");

    const data = await response.json();

    return data.map((athlete: Athlete) => ({
      birthDate: athlete.birthDate,
      email: athlete.email,
      documentNumber: athlete.documentNumber,
      documentType: athlete.documentType,
      fullName: athlete.fullName,
      id: athlete.id,
    }));
  }
}
