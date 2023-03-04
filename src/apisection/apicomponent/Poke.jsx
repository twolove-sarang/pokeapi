import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokeDevice from './PokeDevice';

export default function Poke() {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  const [random, setRandom] = useState(randomNumber);
  const [catchPoke, setCatchPoke] = useState();
  const [pokeHistory, setPokeHistory] = useState([]);

  const previousPoke = () => {
    if (catchPoke < 1) {
      return setCatchPoke(1007);
    } else {
      setCatchPoke((prev) => prev - 1);
    }
  };

  const nextPoke = () => {
    if (catchPoke > 1008) {
      return setCatchPoke(1);
    } else {
      return setCatchPoke((prev) => prev + 1);
    }
  };

  async function pokeName(randomNum) {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon/${randomNum + 1}`)
      .then((res) => res.data);
  }
  const { data: monster } = useQuery(['monster', catchPoke], () =>
    pokeName(catchPoke)
  );

  const handleCatch = () => {
    setCatchPoke(random);
    pokeName(random);
    setPokeHistory([...pokeHistory, random]);
  };

  const handleRelease = () => {
    setPokeHistory([]);
  };
  const handleOther = () => {
    setRandom(randomNumber);
    // setCatchPoke(null);
  };

  useEffect(() => {
    setCatchPoke(null);
  }, []);

  return (
    <div className="my-4">
      <div className="my-4 md:flex md:gap-4 md:items-center">
        <div className="text-center text-xl md:text-left">🧑‍🎤</div>
        {pokeHistory.length === 0 ? (
          <div
            className="mt-2 text-md text-center md:text-left"
            id="font_galmuri"
          >
            포켓몬 마스터가 될꺼야
          </div>
        ) : (
          <div className="flex justify-center gap-2 my-2">
            {pokeHistory.length <= 10 ? (
              pokeHistory.map((el) => (
                <div className="w-8">
                  <img
                    alt="img"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      el + 1
                    }.png`}
                  />
                </div>
              ))
            ) : (
              <div className="md:flex md:items-center">
                <div className="text-center md:flex" id="font_galmuri">
                  <p>너무 많이 잡았어!</p>
                  <p>포켓몬 생태계가 위험해지니까 조금 풀어주자</p>
                </div>
                <button
                  onClick={handleRelease}
                  className="p-2 bg-blue text-white rounded-lg font-bold w-auto mt-4 block mx-auto text-sm md:mt-0 md:ml-2"
                  id="font_galmuri"
                >
                  놓아주기
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="md:flex md:gap-4">
        <div className="border rounded-xl bg-gray-100 h-dheight p-10 w-80 mx-auto sm:w-80 sm:h-fheight md:mx-0">
          <div className="text-center font-bold text-xl" id="font_galmuri">
            야생의 포켓몬이 나타났다!
          </div>
          <img
            id="silhouette"
            className="w-40 mx-auto my-8 sm:my-16"
            alt="img"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              random + 1
            }.png`}
          />
          <div className="text-center">
            <button
              className="w-24 h-12 mx-1 bg-blue text-white font-bold rounded-lg hover:bg-yellow hover:text-black"
              onClick={handleCatch}
              id="font_galmuri"
            >
              CATCH!
            </button>
            <button
              className="w-24 h-12 mx-1 bg-blue text-white font-bold rounded-lg hover:bg-yellow hover:text-black"
              onClick={handleOther}
              id="font_galmuri"
            >
              다른 포켓몬
            </button>
          </div>
        </div>

        <div>
          <PokeDevice
            catchPoke={catchPoke}
            previousPoke={previousPoke}
            nextPoke={nextPoke}
            monster={monster}
          />
        </div>
      </div>
    </div>
  );
}
