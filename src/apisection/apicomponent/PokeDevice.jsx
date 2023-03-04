import React from "react";
// import LeftDevice from "./LeftDevice";
// import RightDevice from "./RightDevice";
import SmallDevice from "./SmallDevice";

export default function PokeDevice({
  catchPoke,
  previousPoke,
  nextPoke,
  monster,
}) {
  return (
    <section className="relative">
      <div className="invisible lg:visible flex items-end absolute">
        {/* <LeftDevice catchPoke={catchPoke} />
        <RightDevice
          monster={monster}
          previousPoke={previousPoke}
          nextPoke={nextPoke}
        /> */}
      </div>

      <div
        className="lg:absolute flex justify-center mb-10 mt-4
      md:mt-0"
      >
        <SmallDevice
          catchPoke={catchPoke}
          monster={monster}
          previousPoke={previousPoke}
          nextPoke={nextPoke}
        />
      </div>
    </section>
  );
}
