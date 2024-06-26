import ProductListWidget from "."
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ProductListWidget> = {
  component: ProductListWidget,
}

export default meta

type Story = StoryObj<typeof ProductListWidget>

export const Default: Story = {
  args: {},
}
