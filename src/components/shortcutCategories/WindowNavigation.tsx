//@ts-ignore
import { ThreeColumnsContainer } from '@components/layouts/ThreeColumnContainer';
//@ts-ignore
import { ShortCut } from '@components/layouts/ShortcutView';

const WindowNavigation = () => (
  <>
    <h2 >VSCode Window Navigation</h2>
    <ThreeColumnsContainer>
        <ShortCut Shortcut='CTRL + PAGE Up/Down' Line2='Navigate between tabs' />
        <ShortCut Shortcut='CTRL + K + W' Line2='Closes all tabs' />
        <ShortCut Shortcut='ALT + #' Line2='Jumps to that number tab' />
        <ShortCut Shortcut='CTRL + SHIFT + T' Line2='Reopen last closed file' />
        <ShortCut Shortcut='CTRL + SHIFT + P' Line2='View commands' />
        <ShortCut Shortcut='CTRL + SHIFT + F' Line2='Open search in Explorer Side panel' />
        <ShortCut Shortcut='CTRL + SHIFT + E' Line2='Toggle Between Explorer and Editor View' />
        <ShortCut Shortcut='CTRL + SHIFT + X' Line2='Goto Extensions' />
        <ShortCut Shortcut='CTRL + G' Line2='Goto Source Control' />
        <ShortCut Shortcut='CTRL + ,' Line2='Open Settings' />
        <ShortCut Shortcut='CTRL + SHIFT + V' Line2='Show Preview mode for markdown/mermaid diagrams (maybe needs pluggin)' />
        <ShortCut Shortcut='CTRL + W' Line2='Close preview' />
        <ShortCut Shortcut='CTRL + K + V' Line2='Preview on side' />
        <ShortCut Shortcut='ALT + ←/→' Line2='Jump back and forward through recent sections of code/files' />
        <ShortCut Shortcut='CCTRL + TAB' Line2='Shows entire navigation history' />
        </ThreeColumnsContainer>
    </>
);

export default WindowNavigation;