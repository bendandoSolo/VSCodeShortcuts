//@ts-ignore
import { ThreeColumnsContainer } from '@components/layouts/ThreeColumnContainer';
//@ts-ignore
import { ShortCut } from '@components/layouts/ShortcutView';

const WindowNavigation = () => (
  <>
    <h2 >VSCode Window Navigation</h2>
    <ThreeColumnsContainer>
        <ShortCut Line1='CTRL + PAGE Up/Down' Line2='Navigate between tabs' />
        <ShortCut Line1='CTRL + K + W' Line2='Closes all tabs' />
        <ShortCut Line1='ALT + #' Line2='Jumps to that number tab' />
        <ShortCut Line1='CTRL + SHIFT + T' Line2='Reopen last closed file' />
        <ShortCut Line1='CTRL + SHIFT + P' Line2='View commands' />
        <ShortCut Line1='CTRL + SHIFT + F' Line2='Open search in Explorer Side panel' />
        <ShortCut Line1='CTRL + SHIFT + E' Line2='Toggle Between Explorer and Editor View' />
        <ShortCut Line1='CTRL + SHIFT + X' Line2='Goto Extensions' />
        <ShortCut Line1='CTRL + G' Line2='Goto Source Control' />
        <ShortCut Line1='CTRL + ,' Line2='Open Settings' />
        <ShortCut Line1='CTRL + SHIFT + V' Line2='Show Preview mode for markdown/mermaid diagrams' />
        <ShortCut Line1='CTRL + W' Line2='Close preview' />
        <ShortCut Line1='CTRL + K + V' Line2='Preview on side' />
        <ShortCut Line1='ALT + ←/→' Line2='Jump back and forward through recent sections of code/files' />
        </ThreeColumnsContainer>
    </>
);

export default WindowNavigation;