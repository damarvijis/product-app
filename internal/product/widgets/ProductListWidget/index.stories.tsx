import ProductListWidget from "."
import {
  errorGetListProductHandler,
  loadingGetListProductHandler,
  successGetListProductHandler,
} from "@/internal/base/mocks/products"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ProductListWidget> = {
  component: ProductListWidget,
}

export default meta

type Story = StoryObj<typeof ProductListWidget>

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
