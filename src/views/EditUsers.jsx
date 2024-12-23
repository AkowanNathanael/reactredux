
import { useParams } from "react-router-dom"
import { useGetUserByIdQuery, useUpdateUserMutation } from "../services/api"
import { useEffect, useState } from "react"

const EditUsers = () => {
    const { id } = useParams()
     const { data, isError, isLoading } = useGetUserByIdQuery(id);
     const [user, setUser] = useState({
       id: "",
       name: "",
       email: "",
       password: "",
       gender: "",
     });
    useEffect(() => {
       
         if (data) {
        //  data;
           setUser({
             ...data,
             name: data.name,
             email: data.email,
             password: data.password,
             gender: data.gender,
           });
         }
    },[data])
   
  const [updateUser]=useUpdateUserMutation()
    async function handleSub(e){
         e.preventDefault()
        console.log(user)
        await updateUser(user)
        alert("data update")
   }
    
    // console.log(data)
  return (
    <div className="border border-4 border-dark p-4 m-4 ">
      {isLoading ? 
        "loading... "
       : (
        <form onSubmit={handleSub} >
          <input
            type="text"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={user.name}
            placeholder="name"
            name="name"
            id="name"
          />{" "}
          <br />
          <input
            type="email"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={user.email}
            placeholder="email"
            name="email"
            id="email"
          />{" "}
          <br />
          <input
            type="password"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={user.password}
            placeholder="password"
            name="password"
            id="password"
          />{" "}
          <br />
          <select
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={user.gender}
            name="gender"
            id="gender"
          >
            <option value=""></option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <input
            type="submit"
            className="btn btn-success"
            value="update user"
          />
        </form>
      )}
    </div>
  );
}

export default EditUsers
