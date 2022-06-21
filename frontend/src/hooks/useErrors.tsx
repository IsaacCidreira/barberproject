import { useState } from 'react'

interface errorType {
  field: string
  message: string
}
interface IRequest {
  setErros: ({ field, message }: errorType) => void
  removeErrors: (field: string) => void
  getErrorMessageByFieldName: (fieldName: string) => string
  errors: errorType[]
}


const useErrors = (): IRequest => {

  const [errors, setErrors] = useState<errorType[]>([])

  function setErros({ field, message }: errorType) {
    const errorAlreadyExists = errors.find(error => error.field === field)
    if (errorAlreadyExists) {
      return
    }
    setErrors(prevState => [...prevState, { field, message }])
  }

  function removeErrors(fieldName: string) {
    setErrors(prevState => prevState.filter(error => error?.field !== fieldName))
  }

  function getErrorMessageByFieldName(fieldName: string) {
    return errors.find(error => error.field === fieldName)?.message as string
  }

  return { setErros, removeErrors, getErrorMessageByFieldName, errors }

}

export default useErrors