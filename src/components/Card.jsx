import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Meal from "./Meal";

const Card = () => {
  const [data, setData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch
      )
      .then((res) => setData(res.data.meals));
  }, [inputSearch]);
  return (
    <div>
      <div className="my-6">
        <label class="block text-center">
          <span class="block text-sm font-medium mb-2 ">Recherche</span>
          <input
            class=" border border-slate-800 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-lg px-3"
            placeholder="Tapez le nom d'un element"
            type="text"
            onChange={(e) => setInputSearch(e.target.value)}
          />
        </label>
      </div>

      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        {data &&
          data
            .slice(0, 24)
            .map((element, index) => (
              <Meal key={element.idMeal} meal={element} />
            ))}
      </div>
    </div>
  );
};

export default Card;
