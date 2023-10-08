const mapping: Record<string, string> = {
  guests: 'guest',
  landlords: 'landlord',
  properties: 'property',
  'service-providers': 'service_provider',
  tenants: 'tenant',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
