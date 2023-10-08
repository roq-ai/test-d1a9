import * as yup from 'yup';

export const serviceProviderValidationSchema = yup.object().shape({
  service_type: yup.string().nullable(),
  availability: yup.string().nullable(),
  rating: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
