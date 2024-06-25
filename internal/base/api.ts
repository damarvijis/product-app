import axios, { AxiosInstance, AxiosResponse } from "axios"

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

  protected async get<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(url)
      return response.data
    } catch (error) {
      throw error
    }
  }

  protected async patch<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.patch(url, data)
      return response.data
    } catch (error) {
      throw error
    }
  }

  protected async post<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.post(url, data)
      return response.data
    } catch (error) {
      throw error
    }
  }

  protected async put<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.put(url, data)
      return response.data
    } catch (error) {
      throw error
    }
  }

  protected async delete<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.delete(url)
      return response.data
    } catch (error) {
      throw error
    }
  }
}
