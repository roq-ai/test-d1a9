import queryString from 'query-string';
import { TenantInterface, TenantGetQueryInterface } from 'interfaces/tenant';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTenants = async (query?: TenantGetQueryInterface): Promise<PaginatedInterface<TenantInterface>> => {
  return fetcher('/api/tenants', {}, query);
};

export const createTenant = async (tenant: TenantInterface) => {
  return fetcher('/api/tenants', { method: 'POST', body: JSON.stringify(tenant) });
};

export const updateTenantById = async (id: string, tenant: TenantInterface) => {
  return fetcher(`/api/tenants/${id}`, { method: 'PUT', body: JSON.stringify(tenant) });
};

export const getTenantById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/tenants/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteTenantById = async (id: string) => {
  return fetcher(`/api/tenants/${id}`, { method: 'DELETE' });
};
