import { UserInterface } from 'interfaces/user';
import { TenantInterface } from 'interfaces/tenant';
import { GetQueryInterface } from 'interfaces';

export interface GuestInterface {
  id?: string;
  user_id: string;
  visit_date?: any;
  tenant_id: string;
  visit_reason?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  tenant?: TenantInterface;
  _count?: {};
}

export interface GuestGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  tenant_id?: string;
  visit_reason?: string;
}
