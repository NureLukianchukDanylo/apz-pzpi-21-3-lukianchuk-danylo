import { TicketType } from "./ticket-type";
export interface Ticket {
  id: number;
  price?: number;
  registrationId?: number;
  smartBraceletId?: number;
  type?: TicketType;
}