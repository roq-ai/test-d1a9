import { LandlordInterface } from 'interfaces/landlord';
import { TenantInterface } from 'interfaces/tenant';
import { GetQueryInterface } from 'interfaces';

export interface PropertyInterface {
  id?: string;
  name: string;
  address: string;
  landlord_id: string;
  tenant_id: string;
  property_type?: string;
  created_at?: any;
  updated_at?: any;

  landlord?: LandlordInterface;
  tenant?: TenantInterface;
  _count?: {};
}

export interface PropertyGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  landlord_id?: string;
  tenant_id?: string;
  property_type?: string;
}
