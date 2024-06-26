import { Alert, Center, Flex, Grid, Loader, Pagination, Title } from "@mantine/core"
import { useProductList } from "./state"
import { ProductCard } from "../../components/ProductCard"

const ProductListWidget = () => {
  const { productQuery, totalPages, handleChangePage, currentPage, getProductCardData, isLoadingDetailPage } =
    useProductList()

  if (productQuery.status === "pending" || isLoadingDetailPage)
    return (
      <Center>
        <Loader />
      </Center>
    )
  else if (productQuery.status === "error")
    return (
      <Alert title="Error" color="red">
        Error Fetch Data
      </Alert>
    )

  return (
    <Flex justify={"center"} align={"center"} gap={"xl"} direction={"column"}>
      <Grid gutter={"xl"} grow>
        {productQuery.data.products.map((item, index) => (
          <Grid.Col span={{ base: 12, md: 5 }} key={index}>
            <ProductCard {...getProductCardData(item)} />
          </Grid.Col>
        ))}
      </Grid>
      <Pagination total={totalPages} value={currentPage} onChange={handleChangePage} />
    </Flex>
  )
}

export default ProductListWidget
