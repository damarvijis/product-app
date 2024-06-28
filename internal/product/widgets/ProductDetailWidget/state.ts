import { useQuery } from "@tanstack/react-query"
import { productApi } from "../../api"
import { Product } from "../../type"
import { useRouter } from "next/router"
import { ProductDetailProps } from "../../components/ProductDetail"
import { useState } from "react"

export const useProductDetail = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const productDetailQuery = useQuery({
    queryKey: ["productDetail", Number(router.query.id)],
    queryFn: () => productApi.findProduct(Number(router.query.id)),
  })

  const handleBackNavigation = () => {
    setIsLoading(true)
    router.push("/").then(() => setIsLoading(false))
  }

  const getProductDetailData = (item: Product): ProductDetailProps => ({
    description: item.description,
    title: item.title,
    price: item.price,
    images: item.images,
    availabilityStatus: item.availabilityStatus,
    onClickBack: handleBackNavigation,
    isLoadingBack: isLoading,
  })

  return {
    productDetailQuery,
    getProductDetailData,
  }
}
