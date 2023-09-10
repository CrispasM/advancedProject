import { useFormikContext } from "..";

export const useFormikField = (name: string)=>{
    const {
        value,
        handleChange,
        touched,
        errors,
        setFieldValue,
        initialValues,

    } = useFormikContext();

    console.log ({errors});

    const hasError = touched[name] && Boolean(errors[name])

    const errorMessage = touched[name] && errors [name]

    return {
        value,
        errorMessage,
        hasError,
        handleChange,
        setFieldValue,
        initialValues,
    };
};