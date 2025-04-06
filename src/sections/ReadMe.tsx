import * as React from 'react';
import Stack from '@mui/material/Stack';

interface IReadMeProps {
}

export const ReadMe: React.FunctionComponent<IReadMeProps> = (props) => {
  return <>
    <h1>Read Me</h1>

    <h2>Todo</h2>
    <h3>Next priority is some basic styling of the shortcuts so that we can see them properly and then delete the old version.</h3>
    <h4>Priority 1 is to copy over the old data so we don't have to reference the old projects and can delete it</h4>

    <Stack spacing={2} direction="column" alignItems="flex-centre">
        <h4>Pages and basic setup</h4>
        <div>1. Navigation</div>
        <div>2. Code Editing</div>
        <div>3. Other</div>
        <div>4. Learn TypeScript Code Snippet</div>
        <div>5. ToDo List</div>
        <div>5 toDo list advanced features</div>
        <div>- 1 set up basic app showing all the useful features we need to remember on one page</div>
        <div> - 3 set up nav bar</div>
        <div>- 2 set up accordion/ use of mui</div>
        <div>- set up pages fore each of 3 above</div>
        <div>- link with google drive</div>
        <div>- make game out of remembering the features</div>
    </Stack>
  </>;
};

