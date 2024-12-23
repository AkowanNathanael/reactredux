// import React from 'react'

import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useAddUserMutation } from "../services/api";

const AddUserPage = () => {
    const [load, setLoad]=useState(false)
    const [addUser,{data,isErrr,isLoading}]=useAddUserMutation()
    const [user, setUser]=useState({ id:nanoid(),  name:"",email:"",password:'',gender: ""})
    async function handleSub(e) {
        e.preventDefault()
        setLoad(true)
        console.log(user)
        if (user.name != "" || user.email != "") {
            await addUser(user)
        }

        setUser({
          id: nanoid(),
          name: "",
          email: "",
          password: "",
          gender: "",
        });
        setLoad(false)
        
    }
  return (
    <div>
      <form
        onSubmit={handleSub}
        className="border shadow shadow-4 border-2 border-danger p-4 m-4"
      >
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
          disabled={load ? "disabled" : ""}
          className="btn btn-success"
          value="add user"
        />
      </form>
    </div>
  );
}

export default AddUserPage
