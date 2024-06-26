import ProductDetailScreen from "."
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ProductDetailScreen> = {
  component: ProductDetailScreen,
}

export default meta

type Story = StoryObj<typeof ProductDetailScreen>

export const Default: Story = {
  args: {},
}
