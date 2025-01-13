"use client";

import React from "react";
import {
  Title,
  FilterCheckbox,
  RangeSlider,
  CheckboxFiltersGroup,
} from "@/components/shared";
import { Input } from "../ui";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { useSearchParam, useSet } from "react-use";
import qs from "qs";
import { useRouter, useSearchParams } from "next/navigation";
import { serialize } from "v8";

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;
  const router = useRouter();

  const { ingredients, loading, onAddId, selectedIngredients } =
    useFilterIngredients();
  const [prices, setPrice] = React.useState<PriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(
      searchParams.has("sizes") ? searchParams.get("sizes")?.split(",") : []
    )
  );
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(
      searchParams.has("pizzaTypes")
        ? searchParams.get("pizzaTypes")?.split(",")
        : []
    )
  );

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    });
  };
  React.useEffect(() => {
    const filters = {
      ...prices,
      pizzaTypes: Array.from(pizzaTypes),
      sizes: Array.from(sizes),
      ingredients: Array.from(selectedIngredients),
    };
    const query = qs.stringify(filters, {
      arrayFormat: "comma",
    });
    router.push(`?${query}`, {
      scroll: false,
    });
  }, [prices, pizzaTypes, sizes, selectedIngredients, router]);

  return (
    <div className={className}>
      <Title text="Filtration" size="sm" className="mb-5 font-bold" />

      {/* top checkboxes */}
      <CheckboxFiltersGroup
        title="Pizza Types:"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={togglePizzaTypes}
        selected={pizzaTypes}
        items={[
          { text: "Thin", value: "1" },
          { text: "Thick ", value: "2" },
        ]}
        defaultItems={[]}
      />

      <CheckboxFiltersGroup
        title="Pizza Size:"
        name="sizes"
        className="mb-5"
        onClickCheckbox={toggleSizes}
        selected={sizes}
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
        defaultItems={[]}
      />

      {/* Price filters */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={20}
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            min={0}
            max={20}
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={20}
          step={1}
          value={[prices.priceFrom || 0, prices.priceTo || 20]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrice({ priceFrom, priceTo })
          }
        />
      </div>
      <CheckboxFiltersGroup
        title="Ingredients"
        name="Ingredients"
        className="mt-5"
        limit={3}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selected={selectedIngredients}
      />
    </div>
  );
};
