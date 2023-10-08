import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ServiceProviderInterface {
  id?: string;
  user_id: string;
  service_type?: string;
  availability?: string;
  rating?: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ServiceProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  service_type?: string;
  availability?: string;
}
