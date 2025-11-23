import { useCallback, useEffect, useMemo, useState } from 'react';
import { ValidationRule, ValidationType } from '../components/atoms/Input/types';

const defaultValidators = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address'
  },
  url: {
    pattern: /^https?:\/\/(?:[-\w.])+(?:\:[0-9]+)?(?:\/(?:[\w\/_.])*(?:\?(?:[\w&=%.])*)?(?:\#(?:[\w.])*)?)?$/,
    message: 'Please enter a valid URL'
  },
  number: {
    pattern: /^\d+$/,
    message: 'Please enter a valid number'
  },
  phone: {
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
    message: 'Please enter a valid phone number'
  }
};

export const useInputValidation = (
  value: string,
  rules: ValidationRule[] = [],
  validateOnChange: boolean = true
) => {
  const [errors, setErrors] = useState<string[]>([]);
  const [isValidated, setIsValidated] = useState(false);

  const validate = useCallback((inputValue: string): string[] => {
    if (!inputValue) return [];
    
    const validationErrors: string[] = [];

    rules.forEach((rule) => {
      let isValid = true;
      
      if (rule.validator) {
        isValid = rule.validator(inputValue);
      } else if (rule.pattern) {
        isValid = rule.pattern.test(inputValue);
      } else if (rule.type in defaultValidators) {
        const defaultRule = defaultValidators[rule.type as keyof typeof defaultValidators];
        isValid = defaultRule.pattern.test(inputValue);
      }

      if (!isValid) {
        validationErrors.push(rule.message || defaultValidators[rule.type as keyof typeof defaultValidators]?.message || 'Invalid input');
      }
    });

    return validationErrors;
  }, [rules]);

  const validateInput = useCallback(() => {
    const validationErrors = validate(value);
    setErrors(validationErrors);
    setIsValidated(true);
    return validationErrors;
  }, [value, validate]);

  useEffect(() => {
    if (validateOnChange && isValidated) {
      validateInput();
    }
  }, [value, validateInput, validateOnChange, isValidated]);

  const isValid = useMemo(() => errors.length === 0, [errors]);

  return {
    errors,
    isValid: isValidated ? isValid : true, // Don't show invalid until validated
    validate: validateInput,
    hasBeenValidated: isValidated
  };
};