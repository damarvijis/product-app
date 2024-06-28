import ProductDetailWidget from "."
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ProductDetailWidget> = {
  component: ProductDetailWidget,
}

export default meta

type Story = StoryObj<typeof ProductDetailWidget>

export const Default: Story = {}
