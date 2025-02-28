export interface Athlete {
  id?: string;
  fullName: string;
  documentType: string;
  documentNumber: string;
  email: string;
  birthDate: string;
  guardianName?: string;  // Agregado (opcional)
  contactNumber?: string; // Agregado (opcional)
}
