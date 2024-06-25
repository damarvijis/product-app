import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

export class BaseApi {
  protected axiosInstance: AxiosInstance

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        Accept: "application/json",
      },
    })
  }

  protected async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(url, config)
      return response.data
    } catch (error) {
      throw error
    }
  }
}
