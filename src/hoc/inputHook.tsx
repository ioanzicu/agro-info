import { useState, FormEvent } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: (event: FormEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
      }
    }
  };
};

export default useInput;
