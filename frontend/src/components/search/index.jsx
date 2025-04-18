"use client";

import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoCameraOutline } from "react-icons/io5";
import { useModal } from "@/context/modal-context";
import { useSearch } from "@/context/search-context";

const Search = () => {
  const { openModal } = useModal();
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <div className="flex flex-col gap-y-[32px] items-center justify-center">
      <img
        src="/logo/black-logo.png"
        alt="FARMRIO Logo with pet"
        width={332}
        height={92}
      />
      <div className="bg-[#F1F1F1] w-full lg:w-[690px] h-[58px] rounded-[100px] py-[5px] px-[35px] flex items-center justify-between">
        <input
          className="w-full h-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar por fotos..."
        />
        <div className="flex items-center gap-3">
          <FaMagnifyingGlass className="text-[17px]" />
          <div className="h-5 w-[1px] bg-[#8C8C8C]" />
          <IoCameraOutline
            className="text-[26px] cursor-pointer"
            onClick={() => openModal("search")}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
