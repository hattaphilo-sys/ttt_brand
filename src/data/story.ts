import type { StoryBlock } from '@/types/content';

export const storyBlocks: StoryBlock[] = [
  {
    id: 'origin',
    layout: 'image-left',
    title: '原体験',
    body: [
      '夜更け、窓辺に指を置くと、思考がやわらかく浮き上がる。音のない余白が、輪郭をほどき、概念の温度だけが残る。',
      '私はその瞬間に触れる設計を望んだ。言葉より前に立ち上がる感覚を、静けさの構造で包みたいと思った。',
    ],
    image: '/images/story-origin.jpg',
    caption: '薄明の気配が、境界をやさしくほどく',
  },
  {
    id: 'conflict',
    layout: 'image-right',
    title: '葛藤',
    body: [
      '情報は速く、意思決定は鋭くなるほど、接地感が薄くなる。輪郭は強く、深度は浅く。',
      'その強さは魅力的だけれど、揺らぎの余地を失う。私は、複数の思考が同居できる場をもう一度探した。',
    ],
    image: '/images/story-conflict.jpg',
    caption: '強く描くことと、ゆるく漂わせることのあいだ',
  },
  {
    id: 'resolution',
    layout: 'center-text',
    title: '解決',
    body: [
      '速度を落とすのではなく、層を増やす。触感的な深度を与えると、思考は勝手に浮く。',
      '静けさが場を満たすと、判断は急がれず、必要な線だけが残る。私はその環境をプロダクトに埋め込む。',
    ],
    image: '/images/story-resolution.jpg',
    caption: '静けさは、思考を妨げない最良の支援者',
  },
];

