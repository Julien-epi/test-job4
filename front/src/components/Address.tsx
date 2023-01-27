import { useForm, SubmitHandler } from "react-hook-form";
import { Address } from "../types/address";
import toast from "react-hot-toast";
import addressServices from "../services/addressServices";

function AddressRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Address>({
    defaultValues: {
      street: "",
      city: "",
      country: "",
    },
  });


  const onSubmit: SubmitHandler<Address> = (addAddress) => {
    addressServices
      .createAddress(addAddress)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Address was created !", { duration: 3000 });
        }
      })
      .catch((err) => {
        toast.error("Error retry!", { duration: 3000 });
      });
  };

  return (
    <>
      {/* Form address infos */}
      <form
        className="flex flex-col border p-5 m-5 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Enter your address here</h1>
        <input
          className="border p-2 m-5"
          {...register("street", {
            minLength: 2,
            required: { value: true, message: "This is required" },
          })}
          placeholder="Number and name's street"
        />
        {errors.street && <p>Street is not valide</p>}

        <input
          className="border p-2 m-5"
          {...register("city", {
            required: { value: true, message: "This is required" },
          })}
          placeholder="Name's city"
        />
        {errors.city && <p>City is not valide</p>}

        <input
          className="border p-2 m-5"
          {...register("postalCode", {
            required: { value: true, message: "This is required" },
          })}
          placeholder="Your postal code"
        />

        <input
          className="border p-2 m-5"
          {...register("country", {
            required: { value: true, message: "This is required" },
          })}
          placeholder="Your country"
        />

        <input
          className="border p-2 m-5"
          {...register("phone", {
            required: { value: true, message: "This is required" },
          })}
          placeholder="Your phone number"
        />

        <input
          className="border p-2 m-5"
          {...register("optionnal")}
          placeholder="Optionnal informations"
        />

        <input type="submit" />
      </form>
    </>
  );
}

export default AddressRegister;
