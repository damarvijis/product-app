import { StaticPage } from "@/internal/base/components/StaticPage"
import { productApi } from "../../api"
import { Flex, Title } from "@mantine/core"

import ProductDetailWidget from "../../widgets/ProductDetailWidget"

export const getDefaultProductDetail = async (id: number) => await productApi.findProduct(id)

const ProductDetailScreen = () => (
  <StaticPage title="Product Detail - Damar">
    <Flex justify={"center"} align={"center"} gap={"md"} direction={"column"}>
      <Title order={3}>Product Detail</Title>
      <ProductDetailWidget />
    </Flex>
  </StaticPage>
)

export default ProductDetailScreen
