"use client";

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } 
  },
};

export default function ConceptSubContent() {
  return (
    <motion.div className="space-y-12 text-left md:text-center" variants={containerVariants}>
      <motion.p className="leading-loose text-text-muted" variants={itemVariants}>
        成果を出すこと。変化すること。<br />
        正しくあること。うまく話すこと。<br />
        <br />
        これら全てを、私はあなたに求めません。
      </motion.p>

      <motion.ul className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-xs mx-auto text-lg text-text-primary font-bold" variants={containerVariants}>
        <motion.li variants={itemVariants}>- 教えない</motion.li>
        <motion.li variants={itemVariants}>- 導かない</motion.li>
        <motion.li variants={itemVariants}>- 治さない</motion.li>
        <motion.li variants={itemVariants}>- 救わない</motion.li>
        <motion.li variants={itemVariants}>- 評価しない</motion.li>
        <motion.li variants={itemVariants}>- 期待しない</motion.li>
      </motion.ul>

      <motion.p className="leading-loose text-text-muted" variants={itemVariants}>
        ただあなたの内面を映す鏡 - 問い - として<br />
        同じ時間と空間に存在します。<br />
        <br />
        あなたが望むのであれば、<br />
        永遠に沈黙が続いてもよい。<br />
        <br />
        日常生活では決してあり得ない<br />
        <strong className="text-text-primary font-bold">100％の対等性と心理的安全性</strong>を創出します。
      </motion.p>
    </motion.div>
  );
}
