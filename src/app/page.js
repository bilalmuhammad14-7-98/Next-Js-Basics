import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Home() {
  const memeData = await getApiData();

  const allMemes = memeData.data.memes;
  // console.log(allMemes)

  return (
    <>
      <div>
        <h1 className="text-center m-10 font-bold text-2xl underline ">
          Meme Generator App
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-10">
        {allMemes.map((meme) => (
          <Link
            href={`/meme-maker?id=${meme.id}`}
            key={meme.id}
            className="rounded  shadow-lg"
          >
            <img className="w-full" src={meme.url} alt={meme.name} />
          </Link>
        ))}
      </div>
    </>
  );
}

async function getApiData() {
  const res = await fetch("https://api.imgflip.com/get_memes");
  if (!res.ok) {
    throw new Error("failed to fetch API data");
  }
  return res.json();
}
