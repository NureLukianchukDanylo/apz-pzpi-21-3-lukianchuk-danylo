import { VenueType } from "./venue-type";

export interface Venue {
    id: number;
    description?: string | null;
    floor?: number;
    mallId?: number;
    maxSize?: number;
    roomNumber?: string | null;
    services?: string | null;
    square?: number | null;
    type?: VenueType;
  }
  