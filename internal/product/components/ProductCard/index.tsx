import { Badge, Card, Center, Text, NumberFormatter } from "@mantine/core"
import Image from "next/image"
import className from "./ProductCard.module.scss"

export type ProductCardProps = {
  onClick: () => void
  imageSrc: string
  title: string
  description: string
  price: number
}

export const ProductCard = ({ imageSrc, title, description, price, onClick }: ProductCardProps) => {
  return (
    <Card withBorder onClick={onClick} radius="md" className={className.card}>
      <Center>
        <Image alt="product-image" src={imageSrc} width={180} height={180} />
      </Center>
      <Badge variant="gradient" gradient={{ from: "yellow", to: "red" }}>
        <NumberFormatter value={price} prefix="$ " thousandSeparator />
      </Badge>
      <Text fw={500}>{title}</Text>
      <Text fz="sm" c="dimmed" lineClamp={4}>
        {description}
      </Text>
    </Card>
  )
}
