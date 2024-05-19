export interface RegistrationProps {
    id: number;
    event: string;
    userId?: string | null;
    date: Date;
    ticketsAmount: number;
}