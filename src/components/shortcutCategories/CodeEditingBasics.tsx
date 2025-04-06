import React from 'react';

const CodeEditingBasics = () => (
    <ol className="flex flex-col items-center justify-center py-2 rounded border border-orange-500 max-w-3xl my-4 border-2 p-2">
    <h2 className="text-center py-2 text-lg font-bold">Code Editing Basics</h2>
    <p className='font-bold text-sm'>Get familiar with these ASAP</p>

    <li className="flex flex-col items-center justify-center py-2">
      <p className='font-bold'>ALT + click; </p>
      <p>Place cursor on multiple places at once</p>
    </li>

    <li className="flex flex-col items-center justify-center py-2">
      <p className='font-bold'>CTRL + ALT + &larr;/&rarr; </p>
      <p>Add another cursor at same place above or below</p>
    </li>

    <li className="flex flex-col items-center justify-center py-2">
      <p className='font-bold'>CTRL + &larr;/&rarr; </p>
      <p>Navigate a line, one word at a time</p>
    </li>
    <li className="flex flex-col items-center justify-center py-2">
      <p className='font-bold'>CTRL + SHIFT + &larr;/&rarr; </p>
      <p>Highlights a line, one word at a time</p>
    </li>
    <li className="flex flex-col items-center justify-center py-2">
      <p className='font-bold'>ALT + &uarr;/&darr; </p>
      <p>Selects and moves entire line up and down, also works with whole selected blocks of code</p>
    </li>
    <li className="flex flex-col items-center justify-center py-2">
      <p className='font-bold'>ALT +  SHIFT + &uarr;/&darr; </p>
      <p>Duplicate lines up and down (or use for entire selection)</p>
    </li>
    <li className="flex flex-col items-center justify-center py-2">
      <p className='font-bold'>CTRL + D on highlighted word </p>
      <p>Highlights that word, repeatedly CTRL + D highlights the next word with the same text + adds cursor to it</p>
      <p>Can be used to highlight and edit multiple words as cursors appears on each one</p>
    </li>
    <li className="flex flex-col items-center justify-center py-2">
      <p className='font-bold'>CTRL + SHIFT L on highlighted word </p>
      <p>Highlights any instance of that word adds cursor so can edit </p>
    </li>
    <li className="flex flex-col items-center justify-center py-2">
      <p className='font-bold'>SHIFT + F12  on highlighted word </p>
      <p>Find all references in sidebar</p>
    </li>
    <li className="flex flex-col items-center justify-center py-2">
      <p className='font-bold'>F12  on highlighted word </p>
      <p>Goto Definition</p>
    </li>
    <li className="flex flex-col items-center justify-center py-2">
      <p className='font-bold'>3 clicks or CTRL + L/ 4clicks </p>
      <p>Select Entire Line , with CTRL + L pressing multiple times keeps selecting next lines/ Select Entire Doc, </p>
    </li>

    
    
    <li className="flex flex-col items-center justify-center py-2"> 
    <p className='font-bold'>CTRL + SHIFT + ENTER  </p>
      <p>Insert line below</p>
    </li>
    <li className="flex flex-col items-center justify-center py-2"> 
    <p className='font-bold'>CTRL + ENTER  </p>
      <p>open copilot solutions???</p>
    </li>
    <li className="flex flex-col items-center justify-center py-2">
      <p className='font-bold'>CTRL + &uarr;/&darr;   </p>
      <p>scroll up and down file, leaving cursor where it was</p>
    </li>
    <li className="flex flex-col items-center justify-center py-2">
      <p className='font-bold'>ALT + Z   </p>
      <p>toggle word wrap</p>
    </li>
    <li className="flex flex-col items-center justify-center py-2">
      <p className='font-bold'>Click the line number/ CTRL + L</p>
      <p>selects entire line </p>
    </li>
    
    <li className="flex flex-col items-center justify-center py-2">
      <p className='font-bold'>CTRL + SHIFT + \</p>
      <p>Jump to matching bracket </p>
    </li>

  </ol>
);

export default CodeEditingBasics;