import { useCallback, useState } from 'react'
export const FormValidator = () => {
    const [value, setValue] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [isValid, setIsValid] = useState(false)
    const onChange = useCallback((e) => {
        setValue(e.target.value)
        setErrorMessage(e.target.validationMessage)
        setIsValid(e.target.validity.valid)
    }, [])
    return { value, errorMessage, setErrorMessage, isValid, onChange }
}