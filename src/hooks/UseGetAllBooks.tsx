import useAxios from 'axios-hooks'
import { AllBooksDTO } from '../schemas/types'
import { API_URL } from '../utils/constants'
export default function UseGetAllBooks() {
  return useAxios<AllBooksDTO>(`${API_URL}/books`)
}
