//@ts-ignore
import { ThreeColumnsContainer } from '@components/layouts/ThreeColumnContainer';
//@ts-ignore
import { ShortCut } from '@components/layouts/ShortcutView';

const Essential = () => (
  <>
    <h2>Essential</h2>
    <ThreeColumnsContainer>
      <ShortCut
        Shortcut="Press CTRL SHIFT + C on any open file"
        Line2="Opens the terminal in window at root file location!"
      />
      <ShortCut Shortcut="Press CTRL K+R" Line2="Opens keyboard shortcuts cheat sheet in browser!" />
      <ShortCut
        Shortcut="Press CTRL K+S (quickly)"
        Line3="Search shortcut, click the pencil icon to edit and using the keys that you want for the shortcut and press enter."
        Line2="Open keyboard shortcuts in VScode"
      />
      <ShortCut Shortcut="Press CTRL K+T (quickly)" Line2="Brings up themes" />
    </ThreeColumnsContainer>
    <p>
      We should review the most useful shortcuts from the cheat sheets, move know into another section and test yourself
      with accordion example
    </p>
  </>
);

export default Essential;
