import React, { FunctionComponent } from "react";

interface CategoryProps {
  emoji: string;
  group: string;
  handleFilterGroup: (group: string) => void;
}

const CategoryCard: FunctionComponent<CategoryProps> = ({
  emoji,
  group,
  handleFilterGroup,
}) => {
  return (
    <button
      onClick={() => handleFilterGroup(group)}
      className="flex items-baseline justify-start mb-2 px-7 py-1 gap-2 transition-all duration-500 rounded-md text-white hover:bg-gray-400 hover:text-black"
    >
      <span className="text-2xl mb-2 pt-3" role={"img"} aria-label={emoji}>
        {emoji}
      </span>
      <p>{group}</p>
    </button>
  );
};

export default CategoryCard;
