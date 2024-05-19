import { ResourceType } from '../models/resource-type';
export interface Resource {
  id: number;
  description?: string | null;
  name?: string | null;
  price?: number;
  type?: ResourceType;
}