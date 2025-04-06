import React from 'react';

const Essential = () => ( 
    <ol className="flex flex-col items-center justify-center py-2 rounded border border-orange-500 max-w-3xl my-4 border-2 p-2">
        <h2 className="text-center py-2 text-lg font-bold">Essential</h2>
          <li className="flex flex-col items-center justify-center py-2 max-w-3xl">
            <p className='font-bold'>Press CTRL SHIFT + C on any open file</p>
            <p>Opens the terminal in window at file location!</p>
          </li>
          <li className="flex flex-col items-center justify-center py-2 max-w-3xl">
            <p className='font-bold'>Press CTRL K+R (quickly) Opens keyboard shortcuts cheat sheet in browser!</p>
            <p>Edit keyboard shortcuts</p>
          </li>

          <li className="flex flex-col items-center justify-center py-2 max-w-3xl">
          <p className='font-bold'>Press CTRL K+S (quickly) to Open Keyboard shortcuts, search shortcut, click the pencil icon to edit and using the keys that you want for the shortcut and press enter.</p>
          <p>Edit keyboard shortcuts</p>
        </li>
      </ol>
)

export default Essential;