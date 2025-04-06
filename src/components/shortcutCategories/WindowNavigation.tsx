import React from 'react';

const WindowNavigation = () => (
    <ol className="flex flex-col items-center justify-center py-2 rounded border border-orange-500 max-w-3xl my-4 border-2 p-2">
        <h2 className="text-center py-2 text-lg font-bold">VSCode Window Navigation</h2>

        <li className="flex flex-col items-center justify-center py-2">
          <p className='font-bold'>CTRL + PAGE Up/Down</p>
          <p>Navigate between tabs </p>
        </li>

        <li className="flex flex-col items-center justify-center py-2">
          <p className='font-bold'>CTRL + K + W</p>
          <p>Closes all tabs </p>
        </li>

        <li className="flex flex-col items-center justify-center py-2">
          <p className='font-bold'> ALT + #</p>
          <p>Jumps to that number tab</p>
        </li>


        <li className="flex flex-col items-center justify-center py-2">
          <p className='font-bold'>CTRL + SHIFT + T</p>
          <p>Reopen last closed file </p>
        </li>

        <li className="flex flex-col items-center justify-center py-2">
        <p className='font-bold'>CTRL + SHIFT + P</p>
          <p>View commands</p>
        </li>

        <li className="flex flex-col items-center justify-center py-2">
          <p className='font-bold'>CTRL + SHIFT + F </p>
          <p>Open search in Explorer Side panel</p>
        </li>

        <li className="flex flex-col items-center justify-center py-2">
          <p className='font-bold'>CTRL + SHIFT + E </p>
          <p>Toggle Between Explorer and Editor View</p>
        </li>

        <li className="flex flex-col items-center justify-center py-2">
          <p className='font-bold'>CTRL + SHIFT + X</p>
          <p>Goto Extensions </p>
        </li>

        <li className="flex flex-col items-center justify-center py-2">
          <p className='font-bold'>CTRL + G</p>
          <p>Goto Source Control </p>
        </li>
       
        <li className="flex flex-col items-center justify-center py-2">
          <p className='font-bold'>CTRL + ,</p>
          <p>Open Settings</p>
        </li>

        <li className="flex flex-col items-center justify-center py-2">
          <p className='font-bold'>CTRL + SHIFT + V</p>
          <p>Show Preview mode for markdown/mermaid diagrams</p>
          <p className='font-bold'>CTRL + W</p>
          <p>Close preview</p>
          <p className='font-bold'>CTRL + K + V</p>
          <p>Preview on side</p>
        </li>
        {/* <li className="flex flex-col items-center justify-center py-2">
          <p className='font-bold'>ALT +  + &larr;/&rarr;</p>
          <p>Jump back and forward through recent sections of code/files</p>
        </li> */}
      </ol>
);

export default WindowNavigation;