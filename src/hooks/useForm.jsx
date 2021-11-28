import { useState } from 'react';
import { helpHttp } from '../helpers/helpsHttp';


export const useForm = (initialFrom, validateForm) =>{
    const [form, setForm] = useState(initialFrom);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]:value
        });
    };
    
    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));

    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));

        if (Object.keys(errors).length === 0){
            alert('enviando formulario');
            setLoading(true);
            helpHttp()
            .post("https://formsubmit.co/ajax/3e948aea1019ec5e0e0dcdf8e1ce9090", {
                body: form,
                headers:{
                    "Content-Type":"aplication/json",
                    Accept:"aplication/json",
                },
            })
            .then((res) => {
                setLoading(false);
                setResponse(true);
                setForm(initialFrom);
                setTimeout(() => {
                    setResponse(false);
                },5000);
            })
        }else{
            return;
        }
    };

    return {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    }
};