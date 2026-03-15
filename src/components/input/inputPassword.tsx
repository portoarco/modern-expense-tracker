import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { cn } from "@/lib/utils";
const InputPassword = ({
  className,
  ...props
}: React.ComponentProps<"input">) => {
  const [password, setPassword] = useState(false);
  return (
    <div className="relative">
      <input
        placeholder="Password"
        // className={cn(
        //   "h-12   px-6 rounded-2xl bg-gray-200/30 border-gray-200/60 focus:bg-white   transition-all duration-300 text-sm shadow-sm w-full ",
        //   className,
        // )}
        className={cn(
          "dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        type={password ? "password" : "text"}
        {...props}
      />
      <button
        type="button"
        className="absolute top-4 right-4 cursor-pointer"
        onClick={() => setPassword((prev) => !prev)}
      >
        {password ? (
          <FaEye className="text-gray-500" />
        ) : (
          <FaEyeSlash className="text-gray-500" />
        )}
      </button>
    </div>
  );
};

export default InputPassword;
