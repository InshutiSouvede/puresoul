import useAxios from 'axios-hooks'
import { CreatedUserDto } from '../schemas/types'
import { API_URL } from '../utils/constants'
export default function UseGetAllUsers() {
  return useAxios<CreatedUserDto[]>(`${API_URL}/users`)
}
