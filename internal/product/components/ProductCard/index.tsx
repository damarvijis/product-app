import { Badge, Card, Center, Text } from "@mantine/core"
import Image from "next/image"
import className from "./ProductCard.module.scss"

export type ProductCardProps = {
  id: number
  imageSrc: string
  title: string
  description: string
  price: number
}

export const ProductCard = ({ imageSrc, title, description, price, id }: ProductCardProps) => {
  return (
    <Card withBorder component="a" href={`/product/${id}`} radius="md" className={className.card}>
      <Center>
        <Image alt="product-image" src={imageSrc} width={180} height={180} />
      </Center>
      <Badge variant="gradient" gradient={{ from: "yellow", to: "red" }}>
        {price}$
      </Badge>
      <Text fw={500}>{title}</Text>
      <Text fz="sm" c="dimmed" lineClamp={4}>
        {description}
      </Text>
    </Card>
  )
}
