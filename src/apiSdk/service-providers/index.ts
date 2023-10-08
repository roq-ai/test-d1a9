import queryString from 'query-string';
import { ServiceProviderInterface, ServiceProviderGetQueryInterface } from 'interfaces/service-provider';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getServiceProviders = async (
  query?: ServiceProviderGetQueryInterface,
): Promise<PaginatedInterface<ServiceProviderInterface>> => {
  return fetcher('/api/service-providers', {}, query);
};

export const createServiceProvider = async (serviceProvider: ServiceProviderInterface) => {
  return fetcher('/api/service-providers', { method: 'POST', body: JSON.stringify(serviceProvider) });
};

export const updateServiceProviderById = async (id: string, serviceProvider: ServiceProviderInterface) => {
  return fetcher(`/api/service-providers/${id}`, { method: 'PUT', body: JSON.stringify(serviceProvider) });
};

export const getServiceProviderById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/service-providers/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteServiceProviderById = async (id: string) => {
  return fetcher(`/api/service-providers/${id}`, { method: 'DELETE' });
};
