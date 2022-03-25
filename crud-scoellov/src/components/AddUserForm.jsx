import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm =(props) => {
    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data, e) => {       
        //console.log(data)
        props.addUser(data)
        e.target.reset();
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
      <label>Personaje</label>
      <input type="text" name="name"  {...register("name", {
                required: {value: true, message: 'Campo Requerido'}
            })} />
      <label>Descripcion</label>
      <input type="text" name="username" {...register("username", {
            required: {value: true, message: 'Campo Requerido'}
        })}/>
      <button>Add new user</button>
    </form>
    )
}

export default AddUserForm;