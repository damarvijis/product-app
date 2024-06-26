import { ProductCard } from "."
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ProductCard> = {
  component: ProductCard,
}

export default meta

type Story = StoryObj<typeof ProductCard>

export const Default: Story = {
  args: {},
}
