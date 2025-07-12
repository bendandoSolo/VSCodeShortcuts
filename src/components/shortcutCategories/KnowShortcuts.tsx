//@ts-expect-error
import { ThreeColumnsContainer } from '@components/layouts/ThreeColumnContainer';
//@ts-expect-error
import { ShortCut } from '@components/layouts/ShortcutView';

const KnowShortCuts = () => (
  <>
    <h2>Basic Navigation</h2>

    <h2>Fix Tab Issues CRTL + M</h2>
    <ThreeColumnsContainer>
      <ShortCut Shortcut="CTRL + &larr;/&rarr;" Line2="Jump to next/previous word" />
      <ShortCut Shortcut="CTRL + SHIFT + &larr;/&rarr;" Line2="Jump and select next/previous words" />
    </ThreeColumnsContainer> 
  </>
);

export default KnowShortCuts;
