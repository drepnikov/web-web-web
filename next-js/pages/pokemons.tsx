import * as React from "react";
import { GetStaticProps, NextPage } from "next";
import Pokemons from "data/pokemons/pokemons.json";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import * as fs from "fs/promises";
import path from "path";

interface PokemonInterface {
  id: number;
  name: string;
  typeList: string[];
}

interface IPokemonsPageProps {
  pokemons: PokemonInterface[];
}

const PokemonsPage: NextPage<IPokemonsPageProps> = ({ pokemons }) => {
  const [filteredPokemons, setFilteredPokemons] =
    useState<PokemonInterface[]>(pokemons);

  const [searchValue, setSearchValue] = useState("");

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  // + debouncing
  useEffect(() => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      clearTimeout(timerRef.current);

      if (!searchValue.length) {
        setFilteredPokemons(pokemons);
      } else {
        setFilteredPokemons(
          Pokemons.filter((p) => {
            return p.name.toLowerCase().startsWith(searchValue.toLowerCase());
          })
        );
      }
    }, 300);
  }, [searchValue]);

  return (
    <>
      <label>
        Filter:{" "}
        <input type={"text"} value={searchValue} onChange={onInputChange} />
      </label>
      <ul>
        {filteredPokemons.map((p) => {
          return <li key={p.id}>{p.name}</li>;
        })}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps<IPokemonsPageProps> = async () => {
  const jsonContent = await fs.readFile(
    path.resolve(process.cwd(), "data", "pokemons", "pokemons.json"),
    "utf-8"
  );

  const pokemons = JSON.parse(jsonContent);

  return {
    props: {
      pokemons: pokemons,
    },
  };
};

export default PokemonsPage;
