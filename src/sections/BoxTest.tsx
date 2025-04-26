import { AddBoxRounded } from '@mui/icons-material';
import Box, { BoxProps } from '@mui/material/Box';

import { ThreeColumnsContainer } from '@components/layouts/ThreeColumnContainer';




export const BoxTest = () => ( 
    <>
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      <div>BoxTest</div>
      <div>BoxTest</div>
      <div>BoxTest</div>
      <div>BoxTest</div>
      <div>BoxTest</div>
      <div>BoxTest</div>

    </Box>
        <ThreeColumnsContainer>
        <div>BoxTest</div>
        <div>BoxTest</div>
        <div>BoxTest</div>
        <div>BoxTest</div>
        <div>BoxTest</div>
        <div>BoxTest</div>
  
      </ThreeColumnsContainer>
  </>
)

