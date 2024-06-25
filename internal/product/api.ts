import { BaseApi } from "../base/api"
import { Product } from "./type"

class ProductApi extends BaseApi {
  constructor() {
    super("https://dummyjson.com")
  }

  async listProduct(): Promise<Product[]> {
    const articles = await this.get<Product[]>("/products")
    return articles
  }

  async findProduct(productId: number): Promise<Product> {
    const updatedArticle = await this.get<Product>(`/products/${productId}`)
    return updatedArticle
  }
}

export const productApi = new ProductApi()
