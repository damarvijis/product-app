import ProductDetailScreen from "."
import {
  errorGetDetailProductHandler,
  loadingGetDetailProductHandler,
  successGetDetailProductHandler,
} from "@/internal/base/mocks/products"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ProductDetailScreen> = {
  component: ProductDetailScreen,
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
  parameters: {
    msw: {
      handlers: loadingGetDetailProductHandler,
    },
  },
}

export const Error: Story = {
  parameters: {
    msw: {
      handlers: errorGetDetailProductHandler,
    },
  },
}
