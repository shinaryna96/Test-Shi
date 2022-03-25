import React,{useState}  from "react";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import {v4 as uuidv4} from 'uuid';


function App() {
 
    const usersData = [
      { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
      { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
      { id: uuidv4(), name: 'Ben', username: 'benisphere' },
    ]
  // state
  const [users, setUsers] = useState(usersData);
 //Agregar
 const addUser =(user)=>{
   user.id=uuidv4()
   setUsers([
     ...users, user
   ])
 }
 
 //Eliminar
 const deleteUser=(id)=>{
  const arrayFiltrado= users.filter(user => user.id !== id);
  setUsers(arrayFiltrado);
 }

 // editar usuarios
 const [editing, setEditing] = useState(false) 
 const initialFormState = { id: null, name: '', username: '' }
 const [currentUser, setCurrentUser] = useState(initialFormState)
 
 const editRow=(user)=>{
  setEditing(true);
  setCurrentUser({
    id:user.id, name: user.name, username:user.username})
  
 }
 const updateUser = (id, updatedUser) => {
  setEditing(false)
  setUsers(users.map(user => (user.id === id ? updatedUser : user)))
}

  return (
    <div className="container">
      <h1>CRUD Personajes</h1>
      <div className="flex-row">
        <div className="flex-large">
      {
          editing ? ( 
        <div>
        <h2>Editar Personajes</h2>
        <EditUserForm
        currentUser={currentUser}
        updateUser={updateUser}
        />
        </div>        
        ):(
          <div>
          <h2>Agregar Personajes</h2>
          <AddUserForm addUser={addUser}/>
          </div>
          )
      }      

       </div>
        <div className="flex-large">
          <h2>Ver Personajes</h2>
          <UserTable users={users} deleteUser={deleteUser}  editRow={editRow}/>
        </div>
      </div>
    </div>
  );
}

export default App;
