// You add more validation functions here, to work with the BaseValidator class
// they have to return object in the following model:
// { error: Bool -> logic behind error classification, helpertext: String -> ref to translation name}

export const isEmail = (value) => ({
  error: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value),
  helpertext: 'Invalid email address',
});

export const isEmpty = (value) => ({
  error: !value,
  helpertext: 'This field is required',
});
