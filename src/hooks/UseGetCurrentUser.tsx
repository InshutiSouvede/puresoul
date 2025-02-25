import useAxios from "axios-hooks";
import { CreatedUserDto } from "../schemas/types";
import { API_URL } from "../utils/constants";

export default function UseCurrentUser(id:string) {
    return useAxios<CreatedUserDto>(`${API_URL}/users/${id}`)
}