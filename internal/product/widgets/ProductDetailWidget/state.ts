import { useQuery } from "@tanstack/react-query"
import { productApi } from "../../api"
import { Product } from "../../type"
import { useRouter } from "next/router"
import { ProductDetailProps } from "../../components/ProductDetail"

export const useProductDetail = () => {
  const router = useRouter()
  const productDetailQuery = useQuery({
    queryKey: ["productDetail", Number(router.query.id)],
    queryFn: () => productApi.findProduct(Number(router.query.id)),
  })

  const getProductDetailData = (item: Product): ProductDetailProps => ({
    description: item.description,
    title: item.title,
    price: item.price,
    images: item.images,
    availabilityStatus: item.availabilityStatus,
  })

  return {
    productDetailQuery,
    getProductDetailData,
  }
}
