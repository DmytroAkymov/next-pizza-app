import React from "react";
import {
  Title,
  FilterCheckbox,
  RangeSlider,
  CheckboxFiltersGroup,
} from "@/components/shared";
import { Input } from "../ui";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filtration" size="sm" className="mb-5 font-bold" />

      {/* top checkboxes */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Can be collected" value="1" />
        <FilterCheckbox text="New" value="2" />
      </div>

      {/* Price filters */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={20}
            defaultValue={0}
          />
          <Input type="number" min={0} max={20} defaultValue={20} />
        </div>
        <RangeSlider min={0} max={20} step={1} value={[0, 20]} />
      </div>
      <CheckboxFiltersGroup
        title="Ingredients"
        className="mt-5"
        limit={3}
        defaultItems={[
          { text: "Cheese sauce", value: "11" },
          { text: "Mozzarella", value: "22" },
          { text: "Garlic", value: "33" },
        ]}
        items={[
          { text: "Cheese sauce", value: "44" },
          { text: "Mozzarella", value: "55" },
          { text: "Garlic", value: "66" },
          { text: "Sauce Garlic", value: "77" },
        ]}
      />
    </div>
  );
};
