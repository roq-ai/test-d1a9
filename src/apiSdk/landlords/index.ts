import queryString from 'query-string';
import { LandlordInterface, LandlordGetQueryInterface } from 'interfaces/landlord';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLandlords = async (
  query?: LandlordGetQueryInterface,
): Promise<PaginatedInterface<LandlordInterface>> => {
  return fetcher('/api/landlords', {}, query);
};

export const createLandlord = async (landlord: LandlordInterface) => {
  return fetcher('/api/landlords', { method: 'POST', body: JSON.stringify(landlord) });
};

export const updateLandlordById = async (id: string, landlord: LandlordInterface) => {
  return fetcher(`/api/landlords/${id}`, { method: 'PUT', body: JSON.stringify(landlord) });
};

export const getLandlordById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/landlords/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteLandlordById = async (id: string) => {
  return fetcher(`/api/landlords/${id}`, { method: 'DELETE' });
};
