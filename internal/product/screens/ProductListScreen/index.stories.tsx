import ProductListScreen from "."
import {
  errorGetListProductHandler,
  loadingGetListProductHandler,
  successGetListProductHandler,
} from "@/internal/base/mocks/products"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ProductListScreen> = {
  component: ProductListScreen,
}

export default meta

type Story = StoryObj<typeof ProductListScreen>

export const Default: Story = {
  parameters: {
    msw: {
      handlers: successGetListProductHandler,
    },
  },
}

export const Loading: Story = {
  parameters: {
    msw: {
      handlers: loadingGetListProductHandler,
    },
  },
}

export const Error: Story = {
  parameters: {
    msw: {
      handlers: errorGetListProductHandler,
    },
  },
}
