import { useForm, SubmitHandler } from "react-hook-form";
import { User } from "../types/user";
import toast from "react-hot-toast";
import Address from "../components/Address";
import UserDetails from "../components/UserDetails";
import AddressDetails from "../components/AddressDetails";
import userServices from "../services/userServices";
import { HiTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
  });

  var url = window.location.pathname;
  var id = url.substring(url.lastIndexOf("/") + 1);
  const onSubmit: SubmitHandler<User> = (modifyData) => {
    userServices
      .updateUser(Number(id), modifyData)
      .then((response) => {
        if (response.status === 200) {
          toast.success("User was updated !", { duration: 3000 });
        }
      })
      .catch((err) => {
        toast.error("Error retry!", { duration: 3000 });
      });
  };

  const removeUser = () => {
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf("/") + 1);
    userServices
      .remove(Number(id))
      .then((response) => {
        navigate("/")
        console.log("🚀 ~ file: AllUsers.tsx:30 ~ .then ~ response", response);
        toast.success("User deleted!", { duration: 3000 });
      })
      .catch((e) => {
        toast.error("Error retry!", { duration: 3000 });
      });
  };

  return (
    <div className="border-4 flex flex-col w-1/2">
      <div className="grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {/* Form Update user's infos */}
        <form
          className="flex flex-col border p-5 m-5 items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1>Update your account here</h1>
          <input
            className="border-2 p-2 m-5"
            {...register("firstname", {
              minLength: 2,
              required: { value: true, message: "This is required" },
            })}
            placeholder="First name"
          />
          {errors.firstname && <p>Firstname is not valide</p>}

          <input
            className="border-2 p-2 m-5"
            {...register("lastname", {
              required: { value: true, message: "This is required" },
            })}
            placeholder="Lastname"
          />
          {errors.lastname && <p>Lastname is not valide</p>}

          <input
            className="border-2 p-2 m-5"
            {...register("email", {
              required: { value: true, message: "This is required" },
            })}
            placeholder="Email"
          />
          {errors.email && <p>Email is not valide</p>}

          <input type="submit" />
        </form>

        {/* USER DETAILS */}
        <div className="flex flex-col items-center w-full">
          <div className="mx-5 flex flex-col border-2 p-5 items-center">
            <UserDetails />
          </div>
            <button
              className="border-2 rounded-full h-10 w-32 p-2 bg-orange-400"
              onClick={removeUser}
            >
              {/* <HiTrash className="h-5 w-5" /> */}
              Remove User
            </button>
        </div>
      </div>

      {/* // Form address */}
      <div className="p-5 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <Address />
        <div>
          <AddressDetails />
        </div>
      </div>
    </div>
  );
}

export default Profile;
