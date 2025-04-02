import useAxios from "axios-hooks";
import { API_URL } from "../utils/constants";
import { CreateBookDto,  } from "../schemas/types";

export default function UseNewBook() {
    return useAxios<CreateBookDto>(
        {
          method: 'POST',
          url: `${API_URL}/books`,
        },
        { manual: true },
      )
}
