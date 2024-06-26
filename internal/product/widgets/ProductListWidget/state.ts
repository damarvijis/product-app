import { useQuery } from "@tanstack/react-query"
import { productApi } from "../../api"
import { useState } from "react"
import { Product } from "../../type"
import { ProductCardProps } from "../../components/ProductCard"

const PAGE = 1
const LIMIT = 10

export const useProductList = () => {
  const [currentPage, setCurrentPage] = useState<number>(PAGE)

  const productQuery = useQuery({
    queryKey: ["productList", currentPage, LIMIT],
    queryFn: () => productApi.listProduct({ page: currentPage, limit: LIMIT }),
    staleTime: 100,
  })

  const totalPages = productQuery.data ? Math.ceil(productQuery.data.total / LIMIT) : 0
  const handleChangePage = (page: number) => setCurrentPage(page)

  const getProductCardData = (item: Product): ProductCardProps => ({
    id: item.id,
    description: item.description,
    title: item.title,
    imageSrc: item.thumbnail,
    price: item.price,
  })

  return {
    productQuery,
    totalPages,
    handleChangePage,
    currentPage,
    getProductCardData,
  }
}
