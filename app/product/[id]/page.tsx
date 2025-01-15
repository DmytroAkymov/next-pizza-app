import { Container, Title } from "@/components/shared";
import { GroupVariants } from "@/components/shared/group-variants";
import { ProductImage } from "@/components/shared/product-image";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }
  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <ProductImage imageUrl={product.imageUrl} size={40} />
        <div className="w-[490px] bg-[#fcfcfc] p-7">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />
          <p className="text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem reiciendis consectetur corporis voluptas aliquam
            nihil? Aliquam sequi amet possimus velit, quas ut, similique error
            cupiditate magnam suscipit laudantium officiis perferendis?
          </p>
          <GroupVariants
            value="2"
            items={[
              {
                name: "Small",
                value: "1",
              },
              {
                name: "Average",
                value: "2",
              },
              {
                name: "Big",
                value: "3",
                disabled: true,
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
