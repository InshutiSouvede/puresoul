import useAxios from 'axios-hooks'
import { AllExpertsDTO } from '../schemas/types'
import { API_URL } from '../utils/constants'
export default function UseGetAllExperts() {
  return useAxios<AllExpertsDTO>(`${API_URL}/experts`)
}
