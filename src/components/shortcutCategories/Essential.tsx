//@ts-ignore
import { ThreeColumnsContainer } from '@components/layouts/ThreeColumnContainer';
//@ts-ignore
import { ShortCut } from '@components/layouts/ShortcutView';

const Essential = () => (
  <>
  <h2>Essential</h2>
  <ThreeColumnsContainer>
        <ShortCut Line1='Press CTRL SHIFT + C on any open file' Line2='Opens the terminal in window at root file location!' />
        <ShortCut Line1='Press CTRL K+R (quickly) Opens keyboard shortcuts cheat sheet in browser!' Line2='Edit keyboard shortcuts' />
        <ShortCut Line1="Press CTRL K+S (quickly) to Open Keyboard shortcuts, search shortcut, click the pencil icon to edit and using the keys that you want for the shortcut and press enter." Line2="Edit keyboard shortcuts" />
    </ThreeColumnsContainer>
    <p>We should review the most useful shortcuts from the cheat sheets, move know into another section and test yourself with accordion example</p>
  </>
)

export default Essential;