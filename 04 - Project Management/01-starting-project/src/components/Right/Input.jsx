import React, { forwardRef } from "react";

const Input = forwardRef( ({ label, textarea, ...props }, ref) => {
  const classes =
    "bg-stone-200 w-full p-1 border-b-2 border-stone-300 rounded-sm text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col my-4 gap-1">
      <label className="uppercase text-sm text-stone-500 font-bold">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
