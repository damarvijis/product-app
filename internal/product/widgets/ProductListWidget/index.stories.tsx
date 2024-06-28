import ProductListWidget from "."
import {
  errorGetListProductHandler,
  loadingGetListProductHandler,
  successGetListProductHandler,
} from "@/internal/base/mocks/products"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ProductListWidget> = {
  component: ProductListWidget,
  tags: ["autodocs"],
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
  tags: ["!autodocs"],
  parameters: {
    msw: {
      handlers: loadingGetListProductHandler,
    },
  },
}

export const Error: Story = {
  tags: ["!autodocs"],
  parameters: {
    msw: {
      handlers: errorGetListProductHandler,
    },
  },
}
