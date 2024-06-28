import ProductDetailScreen from "."
import {
  errorGetDetailProductHandler,
  loadingGetDetailProductHandler,
  successGetDetailProductHandler,
} from "@/internal/base/mocks/products"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ProductDetailScreen> = {
  component: ProductDetailScreen,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof ProductDetailScreen>

export const Default: Story = {
  parameters: {
    msw: {
      handlers: successGetDetailProductHandler,
    },
  },
}

export const Loading: Story = {
  tags: ["!autodocs"],
  parameters: {
    msw: {
      handlers: loadingGetDetailProductHandler,
    },
  },
}

export const Error: Story = {
  tags: ["!autodocs"],
  parameters: {
    msw: {
      handlers: errorGetDetailProductHandler,
    },
  },
}
