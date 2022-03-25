import React from "react";
import { useForm } from "react-hook-form";

const EditUserForm =(props) => {
    
    const {register, handleSubmit,setValue, formState: { errors }} = useForm({
        defaultValues: (props.currentUser)
    });
    setValue('name',props.currentUser.name)
    setValue('username',props.currentUser.username)


    const onSubmit = (data, e) => {       
        //console.log(data)
        props.addUser(data)
        e.target.reset();
        props.updateUser(props.currentUser.id,data)
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
      <button>Editar personaje</button>
    </form>
    )
}

export default EditUserForm;