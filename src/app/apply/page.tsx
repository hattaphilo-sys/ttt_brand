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

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex justify-center items-center relative overflow-hidden">
      {isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
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
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-3xl md:text-4xl text-center mb-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        >
          対話の始まり
        </motion.h1>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
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
