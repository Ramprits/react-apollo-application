import { useState } from "react";

export const useForm = (callBack, initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const onChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = event => {
    event.preventDefault();
    callBack();
  };
  return {
    onChange,
    onSubmit,
    values
  };
};
