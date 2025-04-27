interface ShortCutProps  {
  Line1: string;
  Line2: string;
  Line3?: string;
}

// TODO: learn about definind types and propes for components in TS, so this is an HTMLDivElement but creates errors when we try to define.
export const ShortCut = ({ Line1, Line2, Line3 }: ShortCutProps) => (
  <div style={{ border: '1px solid white' }} >
    <p>{Line1}</p>
    <p>{Line2}</p>
    {Line3 && <p>{Line3}</p>}
  </div>
);

