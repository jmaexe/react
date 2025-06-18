import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { fetchComics } from "../api/Comics";
import { useDebounce } from "../hooks/useDebounce";
import { CharacterFilters } from "../models/Characters";
import ComicsList from "./ComicsList";

type CharacterListFiltersProps = {
  onChange: (filters: CharacterFilters) => void;
};

const CharacterListFilters = ({ onChange }: CharacterListFiltersProps) => {
  const [limit, setLimit] = useState<CharacterFilters["limit"]>(10);
  const [comics, setComics] = useState<CharacterFilters["comics"]>(0);
  const [name, setName] = useState<CharacterFilters["name"]>("");
  const debouncedName = useDebounce(name);
  const selectRefName = useRef<HTMLSelectElement | null>(null);
  const refComics = useRef<HTMLSelectElement | null>(null);
  const { data, isFetching } = useQuery({
    queryKey: ["comics"],
    queryFn: () => fetchComics(),
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  useEffect(() => {
    onChange({ limit, name: debouncedName, comics });
  }, [limit, debouncedName, comics]);
  return (
    <div className="w-full px-4 gap-5 mb-5 pb-5 flex justify-between">
      <div className="flex items-center gap-2">
        <select
          ref={selectRefName}
          className="select select-info select-sm w-full max-w-xs"
          onChange={(e) => {
            setLimit(+e.target.value as CharacterFilters["limit"]);
          }}
          defaultValue={"Select limit"}
          value={limit}
        >
          <option disabled value={"Select limit"}>
            Select Limit
          </option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <select
          className="select select-info select-sm w-full max-w-xs"
          onChange={(e) => {
            setComics(+e.target.value as CharacterFilters["comics"]);
          }}
          ref={refComics}
          defaultValue={"Select comic"}
        >
          <option disabled value={"Select comic"}>
            Select Comic
          </option>
          {data && <ComicsList comics={data} />}
          {isFetching && <option>sta caricando i comics</option>}
        </select>
        {comics && comics > 0 ? (
          <button
            className="badge badge-primary"
            onClick={() => {
              refComics.current
                ? (refComics.current.value = "Select comic")
                : null;
              setComics(0);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-4 w-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        ) : null}
      </div>
      <div className="flex items-center gap-2">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};
export default CharacterListFilters;
