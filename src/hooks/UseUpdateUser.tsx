import useAxios from "axios-hooks";
import { CreatedUserDto } from "../schemas/types";
import { API_URL } from "../utils/constants";

export default function UseUpdateUser(id:string) {
   return useAxios<CreatedUserDto>({
             method: 'PUT',
             url: `${API_URL}/users/${id}`,
           },
           { manual: true },)
}
