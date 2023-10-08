import * as yup from 'yup';

export const propertyValidationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  property_type: yup.string().nullable(),
  landlord_id: yup.string().nullable().required(),
  tenant_id: yup.string().nullable().required(),
});
