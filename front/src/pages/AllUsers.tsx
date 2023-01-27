import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import userServices from "../services/userServices";
import { User } from "../types/user";
import { HiOutlineUser } from "react-icons/hi";

export default function AllUsers() {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    retrieveAllUsers();
  }, []);

  const retrieveAllUsers = () => {
    userServices
      .getAllUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((e) => {
        toast.error("Error retry!", { duration: 3000 });
      });
  };

  return (
    <div>
      <h1 className="text-center font-bold mb-8">All Users</h1>
      <div className="ml-6 h-40 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {users &&
          users.map((user, index) => (
            <div className="flex justify-center border-2 rounded-full">
              
              <Link to={`/profile/${user.id}`}>
                <HiOutlineUser className="h-1/2 w-10" />
                <p key={index}>{user.firstname}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
