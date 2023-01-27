import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import userServices from "../services/userServices";
import { User } from "../types/user";

export default function UserDetails() {
  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf("/") + 1);
    retrieveUser(Number(id));
  }, []);
  
  function retrieveUser(id: number) {
    userServices
    .getOne(id)
    .then((response) => {
      console.log("🚀 ~ file: UserDetails.tsx:19 ~ .then ~ response", response)
      setCurrentUser(response.data);
    })
      .catch((e) => {
        console.log("🚀 ~ file: UserDetails.tsx:23 ~ retrieveUser ~ e", e)
        // toast.error("Error retry!", { duration: 3000 });
      });
  }
  return (
    <>
      <h1 className="font-bold underline">User infos</h1>
      <div className="flex">
        <h3 className="font-bold">Firstname:</h3>
        <p>{currentUser?.firstname}</p>
      </div>
      <div className="flex">
        <h3 className="font-bold">Lastname:</h3>
        <p>{currentUser?.lastname}</p>
      </div>
      <div className="flex">
        <h3 className="font-bold">Email:</h3>
        <p>{currentUser?.email}</p>
      </div>
    </>
  );
}
