"use client";
import React, { forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ label, id, error, type = "text", ...props }, ref) => {
    return (
      <div className="relative z-0 w-full mb-9 group">
        <input
          type={type}
          id={id}
          ref={ref}
          className={`block py-2.5 px-2 w-full text-sm bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 peer transition-colors
            ${error 
              ? "border-red-500 focus:border-red-500" 
              : "hover:border-foreground/20 focus:border-foreground"
            }`}
          placeholder=" "
          {...props}
        />
        <label
          htmlFor={id}
          className="absolute text-sm mx-2 duration-300 transform -translate-y-6  top-3 -z-10 origin-left peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6"
        >
          {label}
        </label>
        
        {error && (
          <span className="text-red-500 text-xs mt-1 absolute left-0 -bottom-5">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);

FloatingInput.displayName = "FloatingInput";

export default FloatingInput;