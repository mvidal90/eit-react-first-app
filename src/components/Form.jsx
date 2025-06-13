import React, { useEffect, useState } from 'react'
import Text from './Text'
import Button from './Button'

const Form = () => {

    const [values, setValues] = useState({
        name: "",
        lastname: "",
        pass: ""
    })
    const [userName, setUserName] = useState("")
    const [errors, setErrors] = useState({
        name: "",
        lastname: "",
        pass: ""
    })

    useEffect(() => {
      setErrors({
        name: values.name.length <=3 && values.name ? "El nombre debe tener màs de 3 caracteres" : "",
        lastname: values.lastname.length <=3 && values.lastname ? "El apellido debe tener màs de 3 caracteres" : "",
        pass: values.pass.length <=7 && values.pass ? "Contraseña debe tener màs de 7 caracteres" : "",
      })
    }, [values])

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (values.pass) {
            setUserName(`${values.name} ${values.lastname}`)
        } else {
            alert("la password es obligatoria")
        }
    }

    return (
        <>
            <form className='mb-100' onSubmit={handleSubmit}>
                <div>
                    <Text as="label" text="Nombre" htmlFor="name" />
                    <input type='text' id='name' name="name" autoComplete='true' value={values.name} onChange={handleChange}/>
                    <Text as="span" text={errors.name} className="d-block color-error" />
                    <Text as="label" text="Apellido" htmlFor="lastname" />
                    <input type='text' id='lastname' name="lastname" autoComplete='true' value={values.lastname} onChange={handleChange}/>
                    <Text as="span" text={errors.lastname} className="d-block color-error" />
                    <Text as="label" text="Contraseña" htmlFor="pass" /> 
                    <input type='password' id='pass' name="pass" autoComplete='true' value={values.pass} onChange={handleChange}/>
                    <Text as="span" text={errors.pass} className="d-block color-error" />
                    <Button type="submit" label="Iniciar sesión" className="w-100" disabled={!(values.name && values.lastname && values.pass)}/>
                </div>
            </form>
            {
                userName ? <Text as="h2" text={`Bienvenido ${userName} a nuestra app!!`} /> : undefined
            }
        </>
    )
}

export default Form