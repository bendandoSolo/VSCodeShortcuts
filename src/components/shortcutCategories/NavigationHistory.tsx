import React from 'react';

const NavigationHistory = () => (
    <ol className="flex flex-col items-center justify-center py-2 rounded border border-orange-500 max-w-3xl my-4 border-2 p-2">
        <h2 className="text-center py-2 text-lg font-bold">Navigation History</h2>

        <li className="flex flex-col items-center justify-center py-2">
          <p className='font-bold'>CTRL + TAB </p>
          <p>Shows entire navigation history</p>
        </li>

        <li className="flex flex-col items-center justify-center py-2">
          <p className='font-bold'>ALT +  + &larr;/&rarr;</p>
          <p>Jump back and forward through recent sections of code/files</p>
        </li>
      </ol>
);



export default NavigationHistory;