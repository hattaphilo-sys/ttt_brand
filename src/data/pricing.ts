import type { PricingCase } from '@/types/content';

export const pricingCases: PricingCase[] = [
  {
    id: 'case-founder',
    clientAttribute: '経営者 / 40代',
    catchCopy: '鎧を脱ぐための代償',
    summary:
      '意思決定の層を増やし、声の大きさより輪郭の明瞭さを優先する伴走。',
    detail:
      '週次の対話と、触感的なUI検討を並走。意思決定の速度は維持しつつ、選択の層を増やす。可視化された余白が、判断の硬直をほどき、合意形成のノイズを下げた。価格は対話の深度と期間によって変動。',
  },
  {
    id: 'case-designer',
    clientAttribute: 'デザイナー / 30代',
    catchCopy: '曖昧さの設計費',
    summary:
      '正解を削らず、選択肢の温度を調整するためのレビュー環境を構築。',
    detail:
      '一人では確定しすぎる案を、複数の仮説が共存できる状態へ。静的なガイドラインと、触感的なプレビューの往復で、合意の落としどころを見つける。案件規模ごとに範囲を柔軟に調整。',
  },
  {
    id: 'case-team',
    clientAttribute: 'プロダクトチーム / 20〜50代',
    catchCopy: '速度を落とさず、層を増やす投資',
    summary:
      'リズムを壊さず深度を足すためのデザイン・オペレーションの再設計。',
    detail:
      'スプリントに介入し、意思決定のタイミングを整理。UIの密度ではなく、認知の負債を減らす方向で改善。価格はチーム規模・関与範囲に応じて協議。',
  },
  {
    id: 'case-individual',
    clientAttribute: '個人プロジェクト / 年齢不問',
    catchCopy: '静けさの初期投資',
    summary:
      '最小機能の設計に、思想の輪郭を同梱するセットアップ。',
    detail:
      'ローンチ前の要件定義と、最初の体験設計。「早く出す」と「雑に出す」を混同しないための土台作り。価格は目的の明瞭さに応じて変動。',
  },
];

