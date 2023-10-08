import queryString from 'query-string';
import { GuestInterface, GuestGetQueryInterface } from 'interfaces/guest';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getGuests = async (query?: GuestGetQueryInterface): Promise<PaginatedInterface<GuestInterface>> => {
  return fetcher('/api/guests', {}, query);
};

export const createGuest = async (guest: GuestInterface) => {
  return fetcher('/api/guests', { method: 'POST', body: JSON.stringify(guest) });
};

export const updateGuestById = async (id: string, guest: GuestInterface) => {
  return fetcher(`/api/guests/${id}`, { method: 'PUT', body: JSON.stringify(guest) });
};

export const getGuestById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/guests/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteGuestById = async (id: string) => {
  return fetcher(`/api/guests/${id}`, { method: 'DELETE' });
};
