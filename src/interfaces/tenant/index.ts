import { GuestInterface } from 'interfaces/guest';
import { PropertyInterface } from 'interfaces/property';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TenantInterface {
  id?: string;
  user_id: string;
  rent_due_date?: any;
  lease_start_date?: any;
  lease_end_date?: any;
  rent_amount?: number;
  created_at?: any;
  updated_at?: any;
  guest?: GuestInterface[];
  property?: PropertyInterface[];
  user?: UserInterface;
  _count?: {
    guest?: number;
    property?: number;
  };
}

export interface TenantGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
