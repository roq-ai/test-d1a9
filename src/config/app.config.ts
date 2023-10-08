interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Building Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Building Owner', 'Property Manager', 'Tenant', 'Service Provider', 'Guest'],
  tenantName: 'Landlord',
  applicationName: 'Test',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View properties', 'View landlords', 'View tenants', 'View service providers'],
  ownerAbilities: [
    'Manage property information',
    'Manage tenant leases',
    'View service provider ratings',
    'Manage guest visits',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/a05cb8af-b378-43aa-98eb-74a111543cdc',
};
