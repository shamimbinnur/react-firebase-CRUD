import { useEffect, useState } from 'react';
import './App.css';
import { db } from "./firebase-config"
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore"


function App() {
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "user");
  const [name, setName] = useState(null)
  const [age, setAge] = useState(null)

  useEffect(() => {
    console.log(process.env.REACT_APP_ID);
    
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(
        data.docs.map((doc)=> ({...doc.data(), id: doc.id}))
      );
      console.log(data);
    }
    getUsers();
  }, [])

  const createUser = async ()=>{
    await addDoc(usersCollectionRef, {name: name, age: Number(age)})
  }
  const updateUser = async (id, age) => {
    const userDoc = doc(db, "user", id)
    const newFields  = {
      age: age+1
    }
    await updateDoc(userDoc,newFields);
  }
  const deleteUser = async(id) =>{
    const userDoc = doc(db, "user", id);
    await deleteDoc(userDoc);

  }

  return (
    <div className="App">
              <div>
                <input onChange={(e)=> setName(e.target.value)} placeholder="Name" />
                <input onChange={(e)=> setAge(e.target.value)} placeholder="Age" />
                <button onClick={createUser}> Add</button>
              </div>

      {
        users.map(user => {
          return (
            <div>
              <div>
                <h1>{user.name}</h1>
                <h1>{user.age}</h1>
                <button onClick={()=> updateUser(user.id, user.age)} >Increase age</button>
                <button onClick={()=> deleteUser(user.id)} >Delete</button>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
