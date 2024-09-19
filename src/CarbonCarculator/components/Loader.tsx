import React from 'react'
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
        </Box>
    </>
  )
}

export default Loader;