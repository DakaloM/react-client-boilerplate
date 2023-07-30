import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading = () => {
  return (
    <Box sx={{ display: 'flex' }} style={{
        alignItems: 'center', justifyContent: 'center', padding: 50
    }}>
      <CircularProgress style={{color: "orange"}} />
    </Box>
  )
}

export default Loading