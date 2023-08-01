import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading = ({color, size}) => {
  return (
    <Box sx={{ display: 'flex' }} style={{
        alignItems: 'center', justifyContent: 'center', 
    }}>
      <CircularProgress style={{color:color? color: "orange"}} size={size}/>
    </Box>
  )
}

export default Loading