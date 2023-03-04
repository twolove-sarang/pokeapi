import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function SmallDevice({
  catchPoke,
  monster,
  previousPoke,
  nextPoke,
}) {
  return (
    <>
      <div className="w-80 h-fheight rounded-md bg-device relative flex flex-col items-center">
        {/* 상단 버튼 */}
        <div className="flex gap-4 my-4">
          <div className="w-2 h-2 rounded-full bg-rose-700"></div>
          <div className="w-2 h-2 rounded-full bg-amber-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-900"></div>
        </div>
        {/* 화면 */}
        <div className="flex flex-col items-center justify-center absolute top-32">
          <div className="w-56 h-44 rounded-md rounded-bl-3xl bg-slate-200 absolute"></div>
          <div className="w-40 h-28 rounded-md bg-black absolute flex items-center">
            {
              <img
                className="mx-auto w-40"
                alt="img"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  catchPoke + 1
                }.png`}
              />
            }
          </div>
        </div>

        <div className="absolute top-56">
          <div className="w-52 h-16 rounded-md bg-black">
            <div className="text-white text-center pt-1 font-bold uppercase">
              no.{catchPoke + 1}
            </div>
            <div className="text-white text-center" id="font_galmuri">
              {monster && monster.species.name} (이)가 잡혔다!
            </div>
          </div>

          <div className="w-52 h-16 rounded-md bg-blue flex font-bold justify-between items-center mt-4">
            {monster &&
              monster.types.map((el) => (
                <div className="mx-auto uppercase " id="font_galmuri">
                  {el.type.name}
                </div>
              ))}
          </div>

          <div className="mt-4 flex justify-between">
            <button
              onClick={previousPoke}
              className="w-24 h-8 rounded-md bg-black"
            >
              <p className="text-white text-2xl w-6 mx-auto">
                <AiOutlineArrowLeft />
              </p>
            </button>
            <button onClick={nextPoke} className="w-24 h-8 rounded-md bg-black">
              <p className="text-white text-2xl w-6 mx-auto">
                <AiOutlineArrowRight />
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
