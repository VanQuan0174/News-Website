import { useState } from "react";

const useForm = (initialValues, onSubmitCallback) => {
    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const { name } = e.target;
        const file = e.target.files[0];
        setValues(prevValues => ({
            ...prevValues,
            [name]: file,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitCallback(values);
    };

    return {
        values,
        handleInputChange,
        handleFileChange,
        handleSubmit,
    };
};

export default useForm;
