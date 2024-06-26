import { ProductCard } from "."
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ProductCard> = {
  component: ProductCard,
}

export default meta

type Story = StoryObj<typeof ProductCard>

export const Default: Story = {
  args: {
    title: "Powder Canister",
    description:
      "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    price: 14.99,
    onClick: () => {},
    imageSrc: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
  },
}
