import React from "react";

export default function RightDevice({ monster, previousPoke, nextPoke }) {
  return (
    <>
      <div className="w-72 h-96 rounded-md rounded-bl-none rounded-tl-none bg-device relative flex flex-col items-center">
        {/* 이름 */}
        <div className="w-52 h-16 rounded-md bg-black absolute top-16">
          <div className="text-white text-center mt-2 font-bold uppercase">
            {monster && monster.species.name}
          </div>
          <div className="text-white text-center" id="font_galmuri">
            (이)가 잡혔다!
          </div>
        </div>
        <div className="w-52 h-16 rounded-md bg-blue absolute top-36 flex font-bold justify-between items-center">
          {monster &&
            monster.types.map((el) => (
              <div className="mx-auto uppercase " id="font_galmuri">
                {el.type.name}
              </div>
            ))}
        </div>

        {/* 버튼 */}
        <div className="flex absolute top-60 gap-10">
          <div className="w-24 h-12 rounded-md bg-slate-200"></div>
          <div className="flex-col gap-2">
            <div className="flex gap-2">
              <div className="w-8 h-2 rounded-full bg-black"></div>
              <div className="w-8 h-2 rounded-full bg-black"></div>
            </div>
            <div className="w-8 h-8 rounded-full bg-yellow absolute top-4 left-44"></div>
          </div>
        </div>

        {/* 하단버튼 */}
        <div className="flex absolute top-80 justify-between gap-4">
          <button
            onClick={previousPoke}
            className="w-24 h-8 rounded-md bg-black top-80"
          >
            <p className="text-white text-2xl">⬅️</p>
          </button>
          <button
            onClick={nextPoke}
            className="w-24 h-8 rounded-md bg-black top-80"
          >
            <p className="text-white text-2xl">➡️</p>
          </button>
        </div>
      </div>
    </>
  );
}
