import React from "react";

export default function LeftDevice({ catchPoke }) {
  return (
    <>
      <div className="w-72 h-fheight rounded-md rounded-br-none bg-device relative flex flex-col items-center">
        {/* 상단 버튼 */}
        <>
          <div className="w-16 h-16 rounded-full bg-slate-200 absolute top-4 left-6"></div>
          <div className="w-12 h-12 rounded-full bg-blue absolute top-6 left-8"></div>
          <div className="w-2 h-2 rounded-full bg-rose-700 absolute top-4 left-24"></div>
          <div className="w-2 h-2 rounded-full bg-amber-500 absolute top-4 left-28"></div>
          <div className="w-2 h-2 rounded-full bg-green-900 absolute top-4 left-32"></div>
        </>
        {/* 화면 */}
        <div className="flex flex-col items-center justify-center absolute top-48">
          <div className="w-2 h-2 rounded-full absolute bg-black"></div>
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
        {/* 하단 버튼 */}
        <div className="absolute top-80">
          <div className="w-8 h-8 rounded-full bg-black absolute -left-28"></div>
          <div className="absolute -left-14">
            <div className="flex justify-between gap-4">
              <div className="w-8 h-2 rounded-full bg-rose-700"></div>
              <div className="w-8 h-2 rounded-full bg-blue"></div>
            </div>
            <div className="w-20 h-12 rounded-sm bg-green-400 absolute top-6 flex items-center">
              <div
                className="w-20 text-center font-bold text-xl bg-green-400 outline-none"
                type="text"
                id="font_galmuri"
              >
                no.{catchPoke + 1}
              </div>
            </div>
          </div>
          <div className="absolute">
            <div className="flex absolute top-6 left-10">
              <div className="w-6 h-6 bg-black"></div>
              <div className="w-6 h-6 bg-black"></div>
              <div className="w-6 h-6 bg-black"></div>
            </div>
            <div className="flex-col absolute left-16">
              <div className="w-6 h-6 bg-black"></div>
              <div className="w-6 h-6 bg-black"></div>
              <div className="w-6 h-6 bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
