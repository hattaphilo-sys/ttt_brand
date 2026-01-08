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
      duration: 3.8, // ゆっくりとしたフェード
      delay: getDelay(i),
      ease: [0.2, 0.8, 0.2, 1] as const,
    }
  }),
};

export default function ConceptSubContent() {
  const lines = [
    "何かを新しく学び足す必要はありません。",
    "「偏った学び」を静かに手放す場所です。",
    "",
    "生まれたての赤子のように",
    "一度まっさらな心にリセットする。",
    "",
    "無限の可能性を取り戻し",
    "生きながらにして生まれ変わる。",
    "",
    "まったく新しい在り方を手にして",
    "まったく新しい生き方を可能にしてください。"
  ];

  return (
    <div className="space-y-2 text-center max-w-2xl mx-auto">
      {lines.map((line, i) => {
        if (line === "") {
          return <div key={i} className="h-8" />;
        }
        return (
          <motion.p
            key={i}
            className="leading-loose text-text-muted"
            custom={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            {line}
          </motion.p>
        );
      })}
    </div>
  );
}
