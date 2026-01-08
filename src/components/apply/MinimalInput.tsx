"use client";
import { motion } from "framer-motion";
import { ForwardedRef, forwardRef, useState } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export const MinimalInput = forwardRef(
  ({ label, error, ...props }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className="relative pt-6 pb-2">
        <label
          className={`absolute left-0 transition-all duration-300 ${
            isFocused || props.value ? "top-0 text-xs text-text-muted" : "top-4 text-base text-text-muted/50"
          }`}
        >
          {label}
        </label>

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-mist" />

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: isFocused ? 1 : 0, opacity: isFocused ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        />

        <input
          ref={ref}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className="w-full bg-transparent py-2 text-text-primary focus:outline-none placeholder-transparent relative z-10"
          {...props}
        />

        {error && (
          <motion.span
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-[-20px] left-0 text-xs text-red-400/80"
          >
            {error}
          </motion.span>
        )}
      </div>
    );
  }
);
MinimalInput.displayName = "MinimalInput";
