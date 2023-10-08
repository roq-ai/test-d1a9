import * as yup from 'yup';

export const tenantValidationSchema = yup.object().shape({
  rent_due_date: yup.date().nullable(),
  lease_start_date: yup.date().nullable(),
  lease_end_date: yup.date().nullable(),
  rent_amount: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
