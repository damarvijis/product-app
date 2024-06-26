import { StaticPage } from "@/internal/base/components/StaticPage"
import { productApi } from "../../api"
import ProductListWidget from "../../widgets/ProductListWidget"
import { Flex, Title } from "@mantine/core"

const PAGE = 1
const LIMIT = 10

export const getDefaultProductList = async () => await productApi.listProduct({ page: PAGE, limit: LIMIT })

const ProductListScreen = () => (
  <StaticPage title="Product App - Damar">
    <Flex justify={"center"} align={"center"} gap={"md"} direction={"column"}>
      <Title order={3}>List Product</Title>
      <ProductListWidget />
    </Flex>
  </StaticPage>
)

export default ProductListScreen
