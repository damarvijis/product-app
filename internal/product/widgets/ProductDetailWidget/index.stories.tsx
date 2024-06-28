import {
  errorGetDetailProductHandler,
  loadingGetDetailProductHandler,
  successGetDetailProductHandler,
} from "@/internal/base/mocks/products"
import ProductDetailWidget from "."
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ProductDetailWidget> = {
  component: ProductDetailWidget,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof ProductDetailWidget>

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
