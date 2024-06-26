import ProductDetailScreen, { getDefaultProductDetail } from "@/internal/product/screens/ProductDetailScreen"
import { GetServerSideProps } from "next"
import { dehydrate, QueryClient } from "@tanstack/react-query"

export const getServerSideProps: GetServerSideProps = async ctx => {
  try {
    const { id } = ctx.params ?? {}

    if (!id) throw new Error("ID not found.")

    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
      queryKey: ["productDetail", id],
      queryFn: () => getDefaultProductDetail(Number(id)),
    })

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    }
  } catch (error) {
    console.log(error, "Error SSR Product Detail")
    return {
      props: {},
    }
  }
}

export default ProductDetailScreen
