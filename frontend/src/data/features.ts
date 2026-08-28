export interface Feature {
  id: string;
  index: string;
  title: string;
  description: string;
  spec: string;
}

export const features: Feature[] = [
{
  id: 'battery',
  index: '01',
  title: '38 hours on a single charge',
  description:
  'A 6,000 mAh cell runs a full weekend away from an outlet. USB-C in, and a reverse-charge port out for the phone on the table next to it.',
  spec: '6,000 mAh · USB-C'
},
{
  id: 'dimming',
  index: '02',
  title: 'Candlelight to task light, by feel',
  description:
  'A knurled ring around the base sweeps from 2,000K to 4,000K with no steps or clicks — warm enough for dinner, crisp enough to read by.',
  spec: '2,000–4,000K · stepless'
},
{
  id: 'weather',
  index: '03',
  title: 'Built for the porch, not just the shelf',
  description:
  'Anodised aluminium body, sealed frosted dome, and an IP65 rating. Rain, sea spray, and spilled wine are all fine.',
  spec: 'IP65 · anodised alloy'
},
{
  id: 'weight',
  index: '04',
  title: 'One hand, one loop, anywhere',
  description:
  'At 420 grams with a vegetable-tanned leather loop, it hangs from a branch or a hook as easily as it sits on a table.',
  spec: '420 g · 9 × 18 cm'
}];
