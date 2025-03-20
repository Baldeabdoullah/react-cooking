import React from "react";

const Search = () => {
  return (
    <div className="my-6">
      <form>
        <label class="block text-center">
          <span class="block text-sm font-medium ">Recherche</span>
          <input class=" border border-slate-800 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-lg" />
        </label>
      </form>
    </div>
  );
};

export default Search;
