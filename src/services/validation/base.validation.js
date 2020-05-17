// validators === Array of functions given in validators.js
// stateSetter === Function that sets-up validation state
// inputs === Array of objects in this schema:
// {value: input value, stateSetter: look above ^, validators: look above ^}

class BaseValidator {
  validateInput(value, stateSetter, validators) {
    for (let i = 0; i < validators.length; i++) {
      const result = validators[i](value);
      if (result.error) {
        stateSetter({
          error: result.error,
          helpertext: result.helpertext,
        });
        return false;
      }
    }
    stateSetter({
      error: false,
      helpertext: '',
    });
    return true;
  }

  validateForm(inputs) {
    const validationResults = [];
    for (let i = 0; i < inputs.length; i++) {
      validationResults.push(
        this.validateInput(
          inputs[i].value,
          inputs[i].stateSetter,
          inputs[i].validators
        )
      );
    }
    return validationResults.every((value) => !!value);
  }
}

export default BaseValidator;
