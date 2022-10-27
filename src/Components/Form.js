import React from "react";
import { useForm } from "react-hook-form"
import { edadValidator } from "./validators"

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return(
        <div>
            <div>
               <h2>Hola, bienvenido, sabemos que quieres viajar en un X (Donde X=Nombre del item del menú seleccionado), por favor diligencia el siguiente formulario:</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register('nombre', {
                        required: true,
                        pattern:  /^[A-Za-z]+$/i})} placeholder='Ingresa tu nombre'
                    />
                    {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                    {errors.nombre?.type === 'pattern' && <p>El campo nombre no podrá aceptar números</p>}

                    <input type="email" {...register('correo', {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} placeholder='Ingresa tu email'
                    />
                    {errors.correo?.type === 'pattern' && <p>El formato del correo es incorrecto</p>}
                    {errors.correo?.type === 'required' && <p>El campo correo es requerido</p>}

                    <input type="tel" {...register('celular', {
                        required: true,
                        pattern: /^[0-9]+$/i })} placeholder='Ingresa tu celular'
                    />
                    {errors.celular?.type === 'required' && <p>El campo celular es requerido</p>} 
                    {errors.celular?.type === 'pattern' && <p>El campo teléfono no podrá aceptar letras</p>}

                    <input type="text" {...register('edad', {
                        required:true,
                        validate: edadValidator})} placeholder='Ingresa tu edad'
                    />
                    {errors.edad?.type === 'required' && <p>El campo edad es requerido</p>}
                    {errors.edad && <p>La edad debe estar entre 18 y 100</p>}
                   

                    <input type="submit" value="Enviar"/>
                </form>
            </div>
        </div>
    )
}

export default Form