export interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: string) => string | undefined
}

export interface ValidationRules {
  [key: string]: ValidationRule
}

export const validateField = (value: string, rules: ValidationRule): string | undefined => {
  if (rules.required && !value.trim()) {
    return "This field is required"
  }

  if (value && rules.minLength && value.length < rules.minLength) {
    return `Must be at least ${rules.minLength} characters`
  }

  if (value && rules.maxLength && value.length > rules.maxLength) {
    return `Must be no more than ${rules.maxLength} characters`
  }

  if (value && rules.pattern && !rules.pattern.test(value)) {
    return "Invalid format"
  }

  if (value && rules.custom) {
    return rules.custom(value)
  }

  return undefined
}

export const validateForm = (data: Record<string, string>, rules: ValidationRules): Record<string, string> => {
  const errors: Record<string, string> = {}

  Object.entries(rules).forEach(([field, rule]) => {
    const error = validateField(data[field] || "", rule)
    if (error) {
      errors[field] = error
    }
  })

  return errors
}

// Common validation patterns
export const patterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[+]?[0-9\s\-$$$$]{8,}$/,
  url: /^https?:\/\/.+/,
}
