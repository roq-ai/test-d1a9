import * as yup from 'yup';

export const guestValidationSchema = yup.object().shape({
  visit_date: yup.date().nullable(),
  visit_reason: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  tenant_id: yup.string().nullable().required(),
});
