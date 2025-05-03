//@ts-ignore
import { ThreeColumnsContainer } from '@components/layouts/ThreeColumnContainer';
//@ts-ignore
import { ShortCut } from '@components/layouts/ShortcutView';


const CodeEditingBasics = () => (
  <>
    <h2>Code Editing Basics</h2>
    <ThreeColumnsContainer>

    <ShortCut Line1='ALT + click' Line2='Place cursor on multiple places at once' />
    
    
    <ShortCut Line1='CTRL + ALT + &larr;/&rarr;' Line2='Add another cursor at same place above or below' />

    {/* todo: indicate that this is know and not need to be added to the list */}
    <ShortCut Line1='CTRL + SHIFT + &uarr;/&darr;' Line2='Select a line, one line at a time' />

    <ShortCut Line1='CTRL + &larr;/&rarr;' Line2='Jump to next/previous word' />

    <ShortCut Line1='ALT + &uarr;/&darr;' Line2='Move current line or selected block of code up and down' />

    <ShortCut Line1='ALT +  SHIFT + &uarr;/&darr;' Line2='Duplicate lines up and down (or use for entire selection)' />

    <ShortCut Line1='CTRL + D' Line2='Highlights that word, repeatedly CTRL + D highlights the next word with the same text + adds cursor to it' Line3="Can be used to highlight and edit multiple words as cursors appears on each one" />

    <ShortCut Line1='CTRL + SHIFT L on highlighted word' Line2='Highlights any instance of that word adds cursor so can edit' />

    <ShortCut Line1='SHIFT + F12 on highlighted word' Line2='Find all references in sidebar' />

  <ShortCut Line1='F12 on highlighted word' Line2='Goto Definition' />
  <ShortCut Line1='3 clicks or CTRL + L/ 4 clicks' Line2='Select Entire Line, with CTRL + L pressing multiple times keeps selecting next lines/ Select Entire Doc' />
  <ShortCut Line1='CTRL + SHIFT + ENTER' Line2='Insert line below' />
  <ShortCut Line1='CTRL + ENTER' Line2='Open Copilot solutions???' />
  <ShortCut Line1='CTRL + ↑/↓' Line2='Scroll up and down file, leaving cursor where it was' />
  <ShortCut Line1='ALT + Z' Line2='Toggle word wrap' />S
  <ShortCut Line1='CTRL + SHIFT + \' Line2='Jump to matching bracket' />

  </ThreeColumnsContainer>
  </>
);

export default CodeEditingBasics;