import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createProperty } from 'apiSdk/properties';
import { propertyValidationSchema } from 'validationSchema/properties';
import { LandlordInterface } from 'interfaces/landlord';
import { TenantInterface } from 'interfaces/tenant';
import { getLandlords } from 'apiSdk/landlords';
import { getTenants } from 'apiSdk/tenants';
import { PropertyInterface } from 'interfaces/property';

function PropertyCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: PropertyInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createProperty(values);
      resetForm();
      router.push('/properties');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<PropertyInterface>({
    initialValues: {
      name: '',
      address: '',
      property_type: '',
      landlord_id: (router.query.landlord_id as string) ?? null,
      tenant_id: (router.query.tenant_id as string) ?? null,
    },
    validationSchema: propertyValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Properties',
              link: '/properties',
            },
            {
              label: 'Create Property',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Property
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.name}
            label={'Name'}
            props={{
              name: 'name',
              placeholder: 'Name',
              value: formik.values?.name,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.address}
            label={'Address'}
            props={{
              name: 'address',
              placeholder: 'Address',
              value: formik.values?.address,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.property_type}
            label={'Property Type'}
            props={{
              name: 'property_type',
              placeholder: 'Property Type',
              value: formik.values?.property_type,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<LandlordInterface>
            formik={formik}
            name={'landlord_id'}
            label={'Select Landlord'}
            placeholder={'Select Landlord'}
            fetcher={getLandlords}
            labelField={'name'}
          />
          <AsyncSelect<TenantInterface>
            formik={formik}
            name={'tenant_id'}
            label={'Select Tenant'}
            placeholder={'Select Tenant'}
            fetcher={getTenants}
            labelField={'rent_due_date'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/properties')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'property',
    operation: AccessOperationEnum.CREATE,
  }),
)(PropertyCreatePage);
