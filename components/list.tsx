import React, { FunctionComponent } from "react";
import EmojiCard, { EmojiCardProps } from "./emojiCard";

export interface ListProps {
  emojis: EmojiCardProps[];
}

const List: FunctionComponent<ListProps> = ({ emojis }) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {emojis.map((emoji, index) => {
        return <EmojiCard key={index} {...emoji} />;
      })}
    </div>
  );
};

export default List;
