import ProductListScreen from "."
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ProductListScreen> = {
  component: ProductListScreen,
}

export default meta

type Story = StoryObj<typeof ProductListScreen>

export const Default: Story = {}
