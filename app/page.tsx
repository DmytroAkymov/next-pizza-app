import { Container, Title, TopBar, Filters } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-2">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />
      <Container className="mt-5 pb-14">
        <div className="flex pag-[60px]">
          {/* filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* product list */}
          <div className="flex-1">
            <div className="flex flex-col pag-16">Product list</div>
          </div>
        </div>
      </Container>
      <div style={{ height: "3000px" }} />
    </>
  );
}
