//@ts-ignore
import { ThreeColumnsContainer } from '@components/layouts/ThreeColumnContainer';
//@ts-ignore
import { ShortCut } from '@components/layouts/ShortcutView';

const FileNavigation = () => (
    <>
    <h2 className="text-center py-2 text-lg font-bold">File Navigation</h2>
    <ThreeColumnsContainer>
        <ShortCut Line1='CTRL + Home/End' Line2='Goto Top/Bottom of file' />
        <ShortCut Line1='ALT +  + &larr;/&rarr;' Line2='Jump back and forward through recent sections of code/files' />
        <ShortCut Line1='CTRL + SHIFT + T' Line2='Reopen last closed tab' />
        <ShortCut Line1='CTRL + SHIFT + F' Line2='Open Search whole project' />
        </ThreeColumnsContainer>
    </>
);

export default FileNavigation;