export interface FinishedEvent {
    id: number;
    name: string;
    description: string;
    paidEntrance: boolean;
    size: number;
    visitors: number;
    ticketsIncome: number;
    resourcesUsed: number;
    resourcesSpendings: number;
    roomsUsed: number;
    startDate: Date;
    endDate: Date;
}