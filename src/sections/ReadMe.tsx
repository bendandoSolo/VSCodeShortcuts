import * as React from 'react';
import Stack from '@mui/material/Stack';

interface IReadMeProps {
}

export const ReadMe: React.FunctionComponent<IReadMeProps> = (props) => {
  return <>
    <h1>Read Me /TODO</h1>

    <Stack spacing={2} direction="column" alignItems="flex-centre">
        <h4>Next Steps</h4>
        <h5>Make it usable, style properly so we can easily see all the tips and use it</h5>

        <div>- link with google drive - general test </div>
        <div>- make game out of remembering the features, using google drive a spread sheet of features that get pulled in 
          then spreadsheet we mark off when we learn them, or not!
        </div>
    </Stack>
  </>;
};

