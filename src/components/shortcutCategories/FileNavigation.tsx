//@ts-ignore
import { ThreeColumnsContainer } from '@components/layouts/ThreeColumnContainer';
//@ts-ignore
import { ShortCut } from '@components/layouts/ShortcutView';

const FileNavigation = () => (
    <>
    <h2 className="text-center py-2 text-lg font-bold">File Navigation - seems to be repeated perhaps remove</h2>
    <ThreeColumnsContainer>
        <ShortCut Shortcut='CTRL + Home/End' Line2='Goto Top/Bottom of file' />
        <ShortCut Shortcut='ALT +  + &larr;/&rarr;' Line2='Jump back and forward through recent sections of code/files' />
        <ShortCut Shortcut='CTRL + SHIFT + T' Line2='Reopen last closed tab' />
        <ShortCut Shortcut='CTRL + SHIFT + F' Line2='Open Search whole project' />
        </ThreeColumnsContainer>
    </>
);

export default FileNavigation;