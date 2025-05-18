import * as React from 'react';
import Stack from '@mui/material/Stack';

interface IReadMeProps {
}

export const Todo: React.FunctionComponent<IReadMeProps> = () => {
  return <>
    <h1>Read Me /TODO</h1>

    <Stack spacing={2} direction="column" alignItems="flex-centre">
        <h2>Next Steps</h2>
        <p><a href='https://www.youtube.com/watch?v=nWIRJBCjls8' >Watch Video for more nice shortcuts</a></p>
        <p>Setup basic linting</p>
        <p>Add prettier config</p>
        
        <p>Create page of know answers, some of the shortcuts we know and should test ourselves and then remove from project</p>
        <p>Make it usable by swapping and renaming line 1 and line2 then have accordion with answers.</p>
        <p>Continue to leare better shortcuts </p>


        <h5>Make it usable, style properly so we can easily see all the tips and use it</h5>

        <div>- link with google drive - general test </div>
        <div>- make game out of remembering the features, using google drive a spread sheet of features that get pulled in 
          then spreadsheet we mark off when we learn them, or not!
        </div>

        <h4>Create one for visual studio</h4>
    </Stack>
  </>;
};

