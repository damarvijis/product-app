import { ProductDetail } from "."
import { userEvent, within, expect } from "@storybook/test"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

const meta: Meta<typeof ProductDetail> = {
  component: ProductDetail,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ProductDetail>

export const Default: Story = {
  render: args => {
    const [isLoadingBack, setIsLoadingBack] = useState(false)

    const handleClickBack = () => {
      setIsLoadingBack(true)
      const timeoutId = setTimeout(() => {
        setIsLoadingBack(false)
      }, 2000)

      return () => clearTimeout(timeoutId)
    }

    return <ProductDetail {...args} isLoadingBack={isLoadingBack} onClickBack={handleClickBack} />
  },
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole("button", { name: /Back To List Product/i })
    await userEvent.click(button)

    await expect(button).toBeDisabled()
  },
}
