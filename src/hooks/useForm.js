import { useState } from 'react';
import validate from '../utils/formValidation';

const useForm = (inputValues) => {
  const [inputs, setInputs] = useState(inputValues);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputErrors = validate(inputs);
    const noErrors = Object.keys(inputErrors).length === 0;
    setErrors(inputErrors);

    if (noErrors) {
      console.log(inputs);
    } else {
      console.log(inputErrors);
    }
  };

  const handleChange = (e) => {
    e.persist();
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  return {
    handleSubmit,
    handleChange,
    inputs,
    errors,
  };
};

export default useForm;
