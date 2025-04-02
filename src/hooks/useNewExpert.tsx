import useAxios from "axios-hooks";
import { CreateExpertDto } from "../schemas/types";
import { API_URL } from "../utils/constants";

export default function useNewExpert() {
    return useAxios<CreateExpertDto>(
        {
          method: 'POST',
          url: `${API_URL}/experts`,
        },
        { manual: true },
      )
}
