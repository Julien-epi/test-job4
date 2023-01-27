import { useEffect, useState } from "react";
import addressServices from "../services/addressServices";
import { Address } from "../types/address";
import toast from "react-hot-toast";


export default function AddressDetails() {
  const [address, setAddress] = useState<Address[]>();

  useEffect(() => {
    retrieveAddress();
  }, []);

  const retrieveAddress = () => {
    addressServices
      .getAddress()
      .then((response) => {
        setAddress(response.data);
      })
      .catch((e) => {
        // toast.error("Error retry address!", { duration: 3000 });
      });
  };

  return (
    <>
      {/* Address details */}

      <h1 className="font-bold text-center">Your address</h1>
      <div className="border grid p-5 m-5">
        {" "}
        {address &&
          address.map((item, index) => (
            <div
              className="p-4 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
              key={index}
            >
              <p>Street:{item.street} </p>

              <p>City: {item.city}</p>
              <p>Postal code: {item.postalCode}</p>
              <p>Phone: {item.phone}</p>
              <p>Country:{item.country}</p>
              {item.optionnal ? <p>Complement:{item.optionnal}</p> : null}
            </div>
          ))}
      </div>
    </>
  );
}
