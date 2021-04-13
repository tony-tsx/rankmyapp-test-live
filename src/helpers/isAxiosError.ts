import { AxiosError } from 'axios'

const isAxiosError = ( e: any ): e is AxiosError => 'isAxiosError' in e && e.isAxiosError

export { isAxiosError }
