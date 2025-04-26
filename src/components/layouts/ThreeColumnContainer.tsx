import Box, { BoxProps } from '@mui/material/Box';
import { ReactNode } from 'react';

interface BoxTestProps extends BoxProps {
  children: ReactNode;
}

export const ThreeColumnsContainer = ({ children, ...props }: BoxTestProps) => (
  <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }} {...props}>
    {children}
  </Box>
);