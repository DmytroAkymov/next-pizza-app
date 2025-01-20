// import { ChooseProductModal } from "@/shared/components/shared";
// import { prisma } from "@/prisma/prisma-client";
// import { notFound } from "next/navigation";

// export default async function ProductModalPage({
//   params: { id },
// }: {
//   params: { id: string };
// }) {
//   const product = await prisma.product.findFirst({
//     where: {
//       id: Number(id),
//     },
//     include: {
//       ingredients: true,
//       items: true,
//     },
//   });

//   if (!product) {
//     return notFound();
//   }

//   return <ChooseProductModal product={product} />;
// }

// app/product/[id]/page.tsx
import { ChooseProductModal } from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingredients: true,
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product} />;
}
