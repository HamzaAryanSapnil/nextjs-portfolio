export interface IInputErrorState {
  success: boolean;
  errors?: {
    field: string;
    message: string;
  }[] | Record<string, string[]>;
  message?: string;
}
export const getInputFieldError = (
  fieldName: string,
  state: IInputErrorState | null
) => {
  if (!state || !state.errors) {
    return null;
  }

  // Handle array format (from zodValidator)
  if (Array.isArray(state.errors)) {
    const error = state.errors.find((err) => err.field === fieldName);
    return error ? error.message : null;
  }

  // Handle object format (from backend API)
  if (typeof state.errors === 'object' && !Array.isArray(state.errors)) {
    const fieldErrors = state.errors[fieldName];
    if (Array.isArray(fieldErrors) && fieldErrors.length > 0) {
      return fieldErrors[0]; // Return first error message
    }
    if (typeof fieldErrors === 'string') {
      return fieldErrors;
    }
  }

  return null;
};
