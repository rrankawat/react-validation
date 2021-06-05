const validate = (inputs) => {
  const errors = {};

  // Check Name
  if (!inputs.name) {
    errors.name = 'Name is required';
  }

  // Check Email
  // if (!inputs.email) {
  //   errors.email = 'Email is required';
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)) {
  //   errors.email = 'Invalid email address';
  // }

  return errors;
};

export default validate;
