"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MinimalInput } from "@/components/apply/MinimalInput";
import { submitApplication } from "@/actions/submitApplication";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ApplyPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = await submitApplication(data);
    if (res.success) {
      setIsExiting(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/thanks");
    } else {
      alert(res.error);
    }
    setIsSubmitting(false);
  };

  const slowTransition = {
    duration: 1.5,
    ease: [0.22, 1, 0.36, 1] as const
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex justify-center items-center relative overflow-hidden">
      {isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-black pointer-events-none"
        />
      )}

      <motion.div
        className="w-full max-w-lg relative z-10"
        animate={
          isExiting
            ? { opacity: 0, filter: "blur(10px)", scale: 0.95 }
            : { opacity: 1, filter: "blur(0px)", scale: 1 }
        }
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={slowTransition}
          className="font-serif text-3xl md:text-4xl text-center mb-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        >
          対話の始まり
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...slowTransition, delay: 0.2 }}
          className="text-center text-text-muted mb-16 space-y-6 leading-loose font-serif text-sm md:text-base"
        >
          <p>
            The Think Time は、<br/>
            あなたの人生のOSを書き換えるための<br/>
            6ヶ月間のプロジェクトです。
          </p>
          <p>
            しかし、言葉だけで「真空」を<br/>
            理解することは不可能です。
          </p>
          <p>
            本契約を真剣に検討されている方に限り、<br/>
            「Session 0」として一度だけ、扉を開放します。
          </p>
          <p>
            これは「お試し」ではありません。
          </p>
          <p>
            既存クライアントと同条件、<br/>
            「1日1名限定/時間無制限」で行います。
          </p>
          <p>
            互いの人生を預けるに値する相手か。
          </p>
          <p>
            その目と肌で、確かめに来てください。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={slowTransition}
          className="max-w-md mx-auto mb-16 border border-mist/20 rounded-lg p-8 bg-depth/50 backdrop-blur-sm"
        >
          <h2 className="text-xl font-serif text-text-primary text-center mb-8">Session 0 について</h2>
          <div className="space-y-6 text-sm md:text-base">
            <div>
              <h3 className="text-xs tracking-widest text-text-muted mb-1 font-serif">時間</h3>
              <p className="text-text-primary">無制限（あなたが納得するまで）</p>
            </div>
            <div>
              <h3 className="text-xs tracking-widest text-text-muted mb-1 font-serif">条件</h3>
              <p className="text-text-primary">本契約（6ヶ月コース）に関心がある方限定</p>
            </div>
            <div>
              <h3 className="text-xs tracking-widest text-text-muted mb-1 font-serif">場所</h3>
              <p className="text-text-primary">オンライン / 希望に応じて対面（都内）</p>
            </div>
            <div>
              <h3 className="text-xs tracking-widest text-text-muted mb-1 font-serif">価格</h3>
              <p className="text-text-primary">要相談</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={slowTransition}
          className="max-w-md mx-auto mb-16"
        >
          <h2 className="text-xl font-serif text-text-primary text-center mb-12">申し込みの流れ</h2>
          <div className="space-y-0 relative">
            {/* Vertical Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-[15px] top-4 bottom-4 w-px bg-white/20 origin-top"
            />

            {/* Items */}
            {[
              {
                num: "01",
                title: "Entry",
                desc: "以下のフォームより、必要事項を入力し送信してください。"
              },
              {
                num: "02",
                title: "Manual Reply / 審査・返信",
                desc: "私は、効率化のための自動返信を使用しません。\nいただいた内容にすべて目を通し、手動で個別に返信するため、数日のお時間をいただきます。\n\n※フォームの内容を確認し、「構造的なミスマッチ（お役に立てない）」と判断した場合、恐れ入りますが返信を差し控える場合がございます。予めご了承ください。"
              },
              {
                num: "03",
                title: "Scheduling / 日程・価格調整",
                desc: "メールにて日程と価格を調整し、確定します。"
              },
              {
                num: "04",
                title: "Payment / お支払い",
                desc: "事前の決済（銀行振込 / クレジットカード）をお願いしております。"
              },
              {
                num: "05",
                title: "Session 0 / 当日",
                desc: "時間無制限の対話が始まります。\n準備はいりません。身一つでお越しください。"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...slowTransition, delay: i * 0.2 }}
                className="relative flex gap-8 pb-12 last:pb-0"
              >
                <div className="flex-none">
                   <div className="w-[30px] h-[30px] rounded-full border border-white/20 bg-[#050505] flex items-center justify-center text-[10px] tracking-widest text-text-muted font-serif relative z-10">
                     {item.num}
                   </div>
                </div>
                <div>
                  <h3 className="text-sm font-serif text-text-primary tracking-wider mb-3">{item.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={slowTransition}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <MinimalInput
            label="Name"
            {...register("name", { required: "名前を入力してください" })}
            error={errors.name?.message}
          />
          <MinimalInput
            label="Email"
            type="email"
            {...register("email", { required: "メールアドレスを入力してください" })}
            error={errors.email?.message}
          />

          <div className="relative pt-6 pb-2">
            <label className="absolute top-0 left-0 text-xs text-text-muted">
              Message
            </label>
            <textarea
              {...register("message")}
              rows={4}
              className="w-full bg-transparent border-b border-mist py-2 text-text-primary focus:outline-none focus:border-white transition-colors resize-none placeholder-transparent"
            />
          </div>

          <div className="pt-12 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative px-10 py-4 overflow-hidden rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="absolute inset-0 border border-mist rounded-full transition-all duration-500 group-hover:border-white/50 group-hover:bg-white/5" />
              <motion.div
                className="absolute inset-0 bg-text-primary rounded-full mix-blend-overlay"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: "circOut" }}
              />
              <span className="relative z-10 text-sm tracking-[0.2em] uppercase text-text-primary group-hover:text-white transition-colors">
                {isSubmitting ? (
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    Sending...
                  </motion.span>
                ) : (
                  "Send Application"
                )}
              </span>
            </button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
}
