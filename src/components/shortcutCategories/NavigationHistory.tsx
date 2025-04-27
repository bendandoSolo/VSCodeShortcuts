//@ts-ignore
import { ThreeColumnsContainer } from '@components/layouts/ThreeColumnContainer';
//@ts-ignore
import { ShortCut } from '@components/layouts/ShortcutView';

const NavigationHistory = () => (
  <>
  <h2 >Navigation History</h2>
  <ThreeColumnsContainer>
      <ShortCut Line1='CCTRL + TAB' Line2='Shows entire navigation history' />
      <ShortCut Line1='ALT +  + &larr;/&rarr;' Line2='Jump back and forward through recent sections of code/files (repeated in file navigation perhaps combine)' />
      </ThreeColumnsContainer>
  </>
);

export default NavigationHistory;