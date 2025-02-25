import useAxios from "axios-hooks";
import { API_URL } from "../utils/constants";
import { CreatedUserDto } from "../schemas/types";

export default function UseSignup() {
    return useAxios<CreatedUserDto>(
        {
          method: 'POST',
          url: `${API_URL}/auth/register`,
        },
        { manual: true },
      )
}
