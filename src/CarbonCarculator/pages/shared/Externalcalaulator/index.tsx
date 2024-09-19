import React from 'react';
import { Box } from '@mui/material'; // If you're using MUI for layout

const ExternalCalculotor: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh', // Set the height of the iframe to take up the full view height
        border: 'none',   // Optional: Remove border if needed
      }}
    >
      <iframe
        src="https://applications.icao.int/icec/Home/Index"
        title="ICAO Application"
        style={{
          width: '100%',
          height: '100%', // Adjust height and width to make it responsive
          border: 'none',
        }}
        allowFullScreen
      />
    </Box>
  );
};

export default ExternalCalculotor;
