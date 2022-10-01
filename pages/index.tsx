import type { NextPage } from "next";
import React, { useState } from "react";
import CategoryCard from "../components/categoryCard";
import Layout from "../components/layout";
import List from "../components/list";
import emojisData from "../data/emojis";

const Home: NextPage = () => {
  const [emojis, setEmojis] = useState(emojisData.slice(0, 100));

  const handleFilterByName = (name: string) => {
    if (name.trim().length > 0) {
      setEmojis(
        emojisData.filter((emoji) => {
          return emoji.name.toUpperCase().includes(name.toUpperCase().trim());
        })
      );
    } else {
      setEmojis(emojisData.slice(0, 100));
    }
  };

  const handleFilterByCategory = (group: string) => {
    setEmojis(
      emojisData.filter((emoji) => {
        return emoji.group.toUpperCase().includes(group.toUpperCase().trim());
      })
    );
  };

  return (
    <Layout>
      <h1 className="text-3xl md:text-5xl font-bold text-white pb-5 text-center tracking-wide">
        Emoji Library
      </h1>
      <div className="flex justify-center">
        <input
          className="w-full max-w-xl border border-gray-500 rounded-md p-3 my-8 bg-white shadow-md focus:outline-none focus:border-cyan-400 focus:ring-1"
          id="name"
          type="text"
          placeholder="Search emojis for group"
          onChange={(e) => {
            handleFilterByName(e.target.value);
          }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <CategoryCard
          emoji="😁"
          group={"Smileys & Emotion"}
          handleFilterGroup={handleFilterByCategory}
        />
        <CategoryCard
          emoji="👍"
          group={"People & Body"}
          handleFilterGroup={handleFilterByCategory}
        />
        <CategoryCard
          emoji="🐶"
          group={"Animals & Nature"}
          handleFilterGroup={handleFilterByCategory}
        />
        <CategoryCard
          emoji="🍎"
          group={"Food & Drink"}
          handleFilterGroup={handleFilterByCategory}
        />
        <CategoryCard
          emoji="⚾"
          group={"Activities"}
          handleFilterGroup={handleFilterByCategory}
        />
        <CategoryCard
          emoji="✈️"
          group={"Travel & Places"}
          handleFilterGroup={handleFilterByCategory}
        />
        <CategoryCard
          emoji="📸"
          group={"Objects"}
          handleFilterGroup={handleFilterByCategory}
        />
        <CategoryCard
          emoji="⚠️"
          group={"Symbols"}
          handleFilterGroup={handleFilterByCategory}
        />
        <CategoryCard
          emoji="🚩"
          group={"Flags"}
          handleFilterGroup={handleFilterByCategory}
        />
      </div>
      <List emojis={emojis} />
    </Layout>
  );
};

export default Home;
