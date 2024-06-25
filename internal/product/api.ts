import { BaseApi } from "../base/api"
import { Product, ProductList } from "./type"

class ProductApi extends BaseApi {
  constructor() {
    super("https://dummyjson.com")
  }

  async listProduct({ page, limit }: { page: number; limit: number }): Promise<ProductList> {
    const skip = (page - 1) * limit
    const productList = await this.get<ProductList>("/products", { params: { skip, limit } })
    return productList
  }

  async findProduct(productId: number): Promise<Product> {
    const productDetail = await this.get<Product>(`/products/${productId}`)
    return productDetail
  }
}

export const productApi = new ProductApi()
