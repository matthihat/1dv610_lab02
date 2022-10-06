export interface formOptions {
  title: string,
  label: string,
  placeholder: string
  validators: {
    minLength: {
      length: number,
      errorMessage: string
    },
    maxLength: {
      length: number,
      errorMessage: string
    },
    required: {
      isRequired: boolean,
      errorMessage: string
    }
  }
}
