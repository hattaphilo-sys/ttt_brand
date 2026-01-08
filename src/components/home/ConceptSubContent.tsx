"use client";
import { motion } from 'framer-motion';

// 擬似ランダムな方向を生成 (SSRでの整合性のためindexベース)
const getDirection = (index: number) => {
  const directions = [
    { x: 0, y: 30 },   // 下から
    { x: 0, y: -30 },  // 上から
    { x: 30, y: 0 },   // 右から
    { x: -30, y: 0 },  // 左から
  ];
  return directions[index % directions.length];
};

// 擬似ランダムな遅延を生成
const getDelay = (index: number) => {
  // 0.3s 〜 1.2s の間でランダムに見えるように分散
  return 0.3 + ((index * 7) % 10) * 0.1;
};

const itemVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    ...getDirection(i),
    filter: "blur(4px)"
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.8, // ゆっくりとしたフェード
      delay: getDelay(i),
      ease: [0.2, 0.8, 0.2, 1],
    }
  }),
};

export default function ConceptSubContent() {
  return (
    <div className="space-y-12 text-left md:text-center">
      <motion.p 
        className="leading-loose text-text-muted" 
        custom={1}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-5%" }}
      >
        成果を出すこと。変化すること。<br />
        正しくあること。うまく話すこと。<br />
        <br />
        これら全てを、私はあなたに求めません。
      </motion.p>

      <ul className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-xs mx-auto text-lg text-text-primary font-bold">
        <motion.li custom={2} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-5%" }}>- 教えない</motion.li>
        <motion.li custom={5} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-5%" }}>- 導かない</motion.li>
        <motion.li custom={3} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-5%" }}>- 治さない</motion.li>
        <motion.li custom={6} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-5%" }}>- 救わない</motion.li>
        <motion.li custom={4} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-5%" }}>- 評価しない</motion.li>
        <motion.li custom={7} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-5%" }}>- 期待しない</motion.li>
      </ul>

      <motion.p 
        className="leading-loose text-text-muted" 
        custom={8}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-5%" }}
      >
        ただあなたの内面を映す鏡 - 問い - として<br />
        同じ時間と空間に存在します。<br />
        <br />
        あなたが望むのであれば、<br />
        永遠に沈黙が続いてもよい。<br />
        <br />
        日常生活では決してあり得ない<br />
        <strong className="text-text-primary font-bold">100％の対等性と心理的安全性</strong>を創出します。
      </motion.p>
    </div>
  );
}
