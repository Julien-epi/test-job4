import axios from "axios";
import { Address } from "../types/address";
import { API_URL } from "../utils/url";


class AddressService {
    createAddress(addAddress: Address) {
        return axios.post<Address>(API_URL + '/address/create', addAddress);
      }

    getAddress(){
      return axios.get<Address[]>(API_URL + "findAddress");
    }
}


export default new AddressService();
