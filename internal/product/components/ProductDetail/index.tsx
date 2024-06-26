import { Card, Group, Button, Text, Center, Badge, NumberFormatter, Box } from "@mantine/core"
import { Carousel } from "@mantine/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"

export const ProductDetail = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }))
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleBackNavigation = () => {
    setIsLoading(true)
    router.push("/").then(() => setIsLoading(false))
  }

  const slides = [1, 2, 3, 5].map(item => (
    <Carousel.Slide key={item}>
      <Center>
        <Image
          alt="product-image"
          src={"https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png"}
          width={220}
          height={220}
        />
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
          Title
        </Text>
        <Badge variant="gradient" gradient={{ from: "green", to: "blue" }}>
          In Stock
        </Badge>
      </Group>

      <Text fz="sm" c="dimmed" mt="sm">
        Description Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel close to nature in ultimate
        comfort. Enjoy the view of the epic mountain range of Blegja and the Førdefjord.
      </Text>

      <Group justify="space-between" mt="md">
        <Box>
          <Text fz="xl" span fw={500}>
            <NumberFormatter value={100} prefix="$ " thousandSeparator />
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
