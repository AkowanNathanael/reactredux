import { Outlet ,Link} from "react-router-dom"
import Navbar from "../components/Navbar"
import { useDeleteUserMutation, useGetAllUsersQuery } from "../services/api"

const Mainlayouts = () => {
    const { data, isError, isLoading } = useGetAllUsersQuery()
  // console.log(data);
  
  const [deleteUser]=useDeleteUserMutation()
  //  async function handleDel(event,id) {
  //   // e.preventDefault(id)
  //    // useDeleteUserMutation()
  //    console.log(id)
  //    await deleteUser(id)
  //     // console.log(event);
  // }
  return (
    <div>
      <Navbar />
      <Outlet />
      <div className="fluid-container text-center display-3 p-3 m-2 border border-4 border-danger ">
        This a history
      </div>
      <div className="container">
        <ul className="">
          {data?.map((user) => (
            <li key={user.id}>
              {" "}
              {user.name}
              <Link to={`/edituser/${user.id}`}> edit</Link>|
              <button className=" btn" onClick={() =>deleteUser(user.id)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Mainlayouts
