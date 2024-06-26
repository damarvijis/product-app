import { Card, Group, Button, Text, Center, Badge, NumberFormatter, Box } from "@mantine/core"
import { Carousel } from "@mantine/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"

export type ProductDetailProps = {
  images: string[]
  description: string
  title: string
  price: number
  availabilityStatus: string
}

export const ProductDetail = ({ images, description, title, price, availabilityStatus }: ProductDetailProps) => {
  const autoplay = useRef(Autoplay({ delay: 2000 }))
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleBackNavigation = () => {
    setIsLoading(true)
    router.push("/").then(() => setIsLoading(false))
  }

  const slides = images.map((item, index) => (
    <Carousel.Slide key={index}>
      <Center>
        <Image alt="product-image" src={item} width={220} height={220} />
      </Center>
    </Carousel.Slide>
  ))

  return (
    <Card radius="md" withBorder padding="xl">
      <Card.Section>
        <Center>
          <Carousel
            w={300}
            withIndicators
            height={250}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            {slides}
          </Carousel>
        </Center>
      </Card.Section>

      <Group justify="space-between" mt="lg">
        <Text fw={500} fz="lg">
          {title}
        </Text>
        <Badge variant="gradient" gradient={{ from: "green", to: "blue" }}>
          {availabilityStatus}
        </Badge>
      </Group>

      <Text fz="sm" c="dimmed" mt="sm">
        {description}
      </Text>

      <Group justify="space-between" mt="md">
        <Box>
          <Text fz="xl" span fw={500} variant="gradient" gradient={{ from: "yellow", to: "red" }}>
            <NumberFormatter value={price} prefix="$ " thousandSeparator />
          </Text>
          <Text span fz="sm" c="dimmed">
            {" "}
            / item
          </Text>
        </Box>

        <Button radius="md" loading={isLoading} onClick={handleBackNavigation}>
          Back To List Product
        </Button>
      </Group>
    </Card>
  )
}
