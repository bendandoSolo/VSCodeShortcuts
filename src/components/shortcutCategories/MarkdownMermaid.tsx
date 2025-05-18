//@ts-ignore
import { ThreeColumnsContainer } from '@components/layouts/ThreeColumnContainer';
//@ts-ignore
import { ShortCut } from '@components/layouts/ShortcutView';

const MarkdownMermaid = () => (
  <>
    <h2>VSCode Markdown/Mermaid Preview - need pluggin not relevant ATM</h2>
    <ThreeColumnsContainer>
      <ShortCut
        Shortcut="CTRL + SHIFT + V"
        Line2="Show Preview mode for markdown/mermaid diagrams (maybe needs pluggin)"
      />
      <ShortCut Shortcut="CTRL + W" Line2="Close preview" />
      <ShortCut Shortcut="CTRL + K + V" Line2="Preview on side" />
    </ThreeColumnsContainer>
  </>
);

export default MarkdownMermaid;
