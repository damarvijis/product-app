import { Alert, Center, Loader } from "@mantine/core"
import { ProductDetail } from "../../components/ProductDetail"
import { useProductDetail } from "./state"

const ProductDetailWidget = () => {
  const { productDetailQuery, getProductDetailData } = useProductDetail()

  if (productDetailQuery.status === "pending")
    return (
      <Center>
        <Loader />
      </Center>
    )
  else if (productDetailQuery.status === "error")
    return (
      <Alert title="Error" color="red">
        Error Fetch Data
      </Alert>
    )

  return <ProductDetail {...getProductDetailData(productDetailQuery.data)} />
}

export default ProductDetailWidget
