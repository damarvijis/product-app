import { ProductDetail } from "."
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ProductDetail> = {
  component: ProductDetail,
}

export default meta

type Story = StoryObj<typeof ProductDetail>

export const Default: Story = {
  args: {
    title: "Rolex Datejust Women",
    description:
      "The Rolex Datejust Women's watch is an iconic timepiece designed for women. With a timeless design and a date complication, it offers both elegance and functionality.",
    price: 10999.99,
    availabilityStatus: "In Stock",
    images: [
      "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/1.png",
      "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/2.png",
      "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/3.png",
    ],
  },
}
