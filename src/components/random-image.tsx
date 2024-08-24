"use client";

import getRandomImageData from "@/services/get-random-image-data";
import { faker } from "@faker-js/faker";
import React from "react";

export default function RandomImage() {
  const [word, setWord] = React.useState("");
  const [imageData, setImageData] = React.useState("");

  React.useEffect(() => {
    if (word) {
      getRandomImageData({ word }).then((data) => {
        setImageData(data);
      });
    }
  }, [word]);

  function handleClickGenerateNewImage() {
    setWord(faker.animal.dog());
  }

  return (
    <div className="flex flex-col gap-2">
      <div
        className="w-96 h-96 bg-no-repeat bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${imageData})` }}
      />
      <button
        className="p-4 bg-blue-600 rounded-md"
        onClick={handleClickGenerateNewImage}
      >
        Generate new image
      </button>
    </div>
  );
}
