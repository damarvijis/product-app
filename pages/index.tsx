import ProductListScreen, { getDefaultProductList } from "../internal/product/screens/ProductListScreen"
import { GetServerSideProps } from "next"
import { dehydrate, QueryClient } from "@tanstack/react-query"

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
      queryKey: ["productList", 1, 10],
      queryFn: getDefaultProductList,
      staleTime: 100,
    })

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    }
  } catch (error) {
    console.log(error, "Error SSR")
    return {
      props: {},
    }
  }
}

export default ProductListScreen
