import useAxios from 'axios-hooks'
import { AllUsersDTO } from '../schemas/types'
import { API_URL } from '../utils/constants'
export default function UseGetAllUsers() {
  return useAxios<AllUsersDTO>(`${API_URL}/users`)
}
