/* tslint:disable */
/* eslint-disable */
import { VenueType } from '../models/venue-type';
export interface VenueRequest {
  description?: string | null;
  floor?: number;
  mallId?: number | null;
  maxSize?: number;
  roomNumber?: string | null;
  services?: string | null;
  square?: number | null;
  type?: VenueType;
}
