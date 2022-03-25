import React from 'react'

const UserTable =(props) =>{
console.log(props.user)
    return(
    <table>
    <thead>
      <tr>
        <th>Personaje</th>
        <th>Descripcion</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {props.users.length > 0 ? 
         props.users.map(user =>(
            <tr key={user.id}>

                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                    <button className="button muted-button"onClick={()=>{props.editRow()}}>Editar</button>
                    <button className="button muted-button"onClick={() => {props.deleteUser(user.id)}}>Eliminar</button>
                
                </td>
            </tr>
         )):(
            <tr>
            <td colSpan={3}>No hay personaje
            </td>
          </tr>
        )}
    </tbody>
  </table>
);
};
export default UserTable;