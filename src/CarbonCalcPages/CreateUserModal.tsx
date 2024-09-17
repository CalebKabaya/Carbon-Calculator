import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  role: Yup.string().oneOf(['Administrator', 'User'], 'Invalid role').required('Required'),
});

const CreateUserForm = () => {
  return (
    <Box className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg w-full max-w-md mx-auto">
      <Typography variant="h5" className="mb-4">Add User Modal</Typography>
      <Typography variant="body1" className="mb-6">Please fill in the following details to create a custom user</Typography>
      <Formik
        initialValues={{ name: '', email: '', role: '' }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="w-full">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Field name="name" placeholder="Enter name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Field name="email" type="email" placeholder="Enter email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">User Role</label>
              <Field as="select" name="role" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="" label="Select role" />
                <option value="Administrator" label="Administrator" />
                <option value="User" label="User" />
              </Field>
              <ErrorMessage name="role" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div className="flex justify-between">
              <Button type="reset" variant="outlined" color="secondary" className="w-1/3">Cancel</Button>
              <Button type="submit" variant="contained" color="primary" className="w-1/3">Submit</Button>
            </div>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateUserForm;
