import { Container, Title, TopBar, Filters } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-2">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />
      <Container className="mt-5 pb-14">
        <div className="flex gap-[40px]">
          {/* filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* product list */}
          <div className="flex-1">
            <div className="flex flex-col pag-16">
              <ProductsGroupList
                title="Pizza"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Pepperoni",
                    imageUrl:
                      "https://cdn.aniagotuje.com/pictures/articles/2022/08/31553220-v-1080x1080.jpg",
                    price: 6,
                    items: [{ price: 9 }],
                  },
                  {
                    id: 2,
                    name: "Vegetarian",
                    imageUrl:
                      "https://i0.wp.com/itsallgoodvegan.com/wp-content/uploads/2020/06/IMG_5449.jpg?w=1638&ssl=1",
                    price: 7,
                    items: [{ price: 10 }],
                  },
                  {
                    id: 3,
                    name: "BBQ Chicken",
                    imageUrl:
                      "https://www.pamperedchef.com/iceberg/com/recipe/11508-lg.jpg",
                    price: 8,
                    items: [{ price: 11 }],
                  },
                  {
                    id: 4,
                    name: "Hawaiian",
                    imageUrl:
                      "https://www.kayscleaneats.com/wp-content/uploads/2020/07/unadjustednonraw_thumb_a8b0.jpg",
                    price: 6,
                    items: [{ price: 9 }],
                  },
                  {
                    id: 5,
                    name: "Meat Lovers",
                    imageUrl:
                      "https://ilovecbfoods.com/wp-content/uploads/2020/09/The-Ultimate-Meat-Lovers-Pizza-2-1-350x350.jpg",
                    price: 9,
                    items: [{ price: 12 }],
                  },
                ]}
              />
              <ProductsGroupList
                title="Breakfasts"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: "Pepperoni",
                    imageUrl:
                      "https://cdn.aniagotuje.com/pictures/articles/2022/08/31553220-v-1080x1080.jpg",
                    price: 6,
                    items: [{ price: 9 }],
                  },
                  {
                    id: 2,
                    name: "Vegetarian",
                    imageUrl:
                      "https://i0.wp.com/itsallgoodvegan.com/wp-content/uploads/2020/06/IMG_5449.jpg?w=1638&ssl=1",
                    price: 7,
                    items: [{ price: 10 }],
                  },
                  {
                    id: 3,
                    name: "BBQ Chicken",
                    imageUrl:
                      "https://www.pamperedchef.com/iceberg/com/recipe/11508-lg.jpg",
                    price: 8,
                    items: [{ price: 11 }],
                  },
                  {
                    id: 4,
                    name: "Hawaiian",
                    imageUrl:
                      "https://www.kayscleaneats.com/wp-content/uploads/2020/07/unadjustednonraw_thumb_a8b0.jpg",
                    price: 6,
                    items: [{ price: 9 }],
                  },
                  {
                    id: 5,
                    name: "Meat Lovers",
                    imageUrl:
                      "https://ilovecbfoods.com/wp-content/uploads/2020/09/The-Ultimate-Meat-Lovers-Pizza-2-1-350x350.jpg",
                    price: 9,
                    items: [{ price: 12 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
      <div style={{ height: "3000px" }} />
    </>
  );
}
