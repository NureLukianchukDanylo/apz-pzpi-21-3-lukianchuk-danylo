/* tslint:disable */
/* eslint-disable */
import { ResourceType } from '../models/resource-type';
export interface ResourceRequest {
  description?: string | null;
  name?: string | null;
  price?: number;
  type?: ResourceType;
}
