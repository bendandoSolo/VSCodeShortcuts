//@ts-ignore
import { ThreeColumnsContainer } from '@components/layouts/ThreeColumnContainer';
//@ts-ignore
import { ShortCut } from '@components/layouts/ShortcutView';


const CodeEditingBasics = () => (
  <>
    <h2>Code Editing Basics</h2>
    <ThreeColumnsContainer>

    <ShortCut Shortcut='ALT + click' Line2='Place cursor on multiple places at once' />
        
    <ShortCut Shortcut='CTRL + ALT + &uarr;/&darr;' Line2='Add another cursor at same place above or below' />
    <ShortCut Shortcut='CTRL + SHIFT + &uarr;/&darr;' Line2='Select a line, one line at a time' />

    <ShortCut Shortcut='CTRL + &larr;/&rarr;' Line2='Jump to next/previous word' />

    <ShortCut Shortcut='CTRL + SHIFT + &larr;/&rarr;' Line2='Jump to next/previous word and select all'  />

    <ShortCut Shortcut='ALT + &uarr;/&darr;' Line2='Move current line or selected block of code up and down' />

    <ShortCut Shortcut='ALT +  SHIFT + &uarr;/&darr;' Line2='Duplicate lines up and down (or use for entire selection)' />

    <ShortCut Shortcut='CTRL + D' Line2='Highlights that word, repeatedly CTRL + D highlights the next word with the same text + adds cursor to it' Line3="Can be used to highlight and edit multiple words as cursors appears on each one" />

    <ShortCut Shortcut='CTRL + SHIFT L on highlighted word' Line2='Highlights any instance of that word adds cursor so can edit' />

    <ShortCut Shortcut='SHIFT + F12 on highlighted word' Line2='Find all references in current file on sidebar' />

  <ShortCut Shortcut='F12 on highlighted word' Line2='Goto Definition' />
  <ShortCut Shortcut='3 clicks or CTRL + L/ 4 clicks' Line2='Select Entire Line, with CTRL + L pressing multiple times keeps selecting next lines/ Select Entire Doc' />
  <ShortCut Shortcut='CTRL + SHIFT + ENTER' Line2='Insert line below' />
  <ShortCut Shortcut='CTRL + i' Line2='Open Copilot ' />
  <ShortCut Shortcut='CTRL + ↑/↓' Line2='Scroll up and down file, leaving cursor where it was' />
  <ShortCut Shortcut='ALT + Z' Line2='Toggle word wrap' />
    <ShortCut Shortcut='CRTL + /' Line2='Comment out line' />
  <ShortCut Shortcut='CTRL + SHIFT + \' Line2='Jump to matching bracket' />
  <ShortCut Shortcut='CTRL + Home/End' Line2='Goto Top/Bottom of file' />
  <ShortCut Shortcut='CTRL + T' Line2='Search Symbol...anything used throughout project' />
  </ThreeColumnsContainer>
  </>
);


export default CodeEditingBasics;