import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  role: Yup.string().oneOf(['Administrator', 'User'], 'Invalid role').required('Required'),
});

const CreateUserModal = () => {
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
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form className="w-full">
            <div className="mb-4">
              <TextField
                fullWidth
                variant="outlined"
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                className="mt-1"
              />
            </div>

            <div className="mb-4">
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                className="mt-1"
              />
            </div>

            <div className="mb-4">
              <TextField
                fullWidth
                select
                variant="outlined"
                label="User Role"
                name="role"
                value={values.role}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.role && Boolean(errors.role)}
                helperText={touched.role && errors.role}
                className="mt-1"
              >
                <MenuItem value="Administrator">Administrator</MenuItem>
                <MenuItem value="User">User</MenuItem>
              </TextField>
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

export default CreateUserModal;
