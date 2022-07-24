import React, { useState, useEffect } from "react";
import { getDataUser } from "../../api/api";
import { User } from "../../interface/interface";
import OutlinedCard from "./CardComponent";
import { InputMainPage } from "./InputMainPage";

import "./Main.css";

export const MainPage = () => {
  const [valueInput, setValueInput] = useState<string | null>(null);
  const [findUsers, setFindUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(1);

  async function scrollData() {
    if (fetching) {
      const result = await getDataUser(valueInput, currentPage);
      setFindUsers([...findUsers, ...result.data.items]);
      setCurrentPage((prevState) => prevState + 1);
      setTotalCount(result.data.total_count);
    }
    setFetching(false);
  }

  async function fetchData() {
    if (valueInput === "") {
      setValueInput(null);
      const result = await getDataUser(valueInput, 1);
      setFindUsers(result.data.items);
      return;
    }
    const result = await getDataUser(valueInput, 1);
    setFindUsers(result.data.items);
  }

  const scrollHandler = (e: any) => {
    if (
      e?.target?.documentElement.scrollHeight -
        (e?.target?.documentElement.scrollTop + window.innerHeight) <
        100 &&
      findUsers.length < totalCount
    ) {
      setFetching(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return document.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    fetchData();
  }, [valueInput]);

  useEffect(() => {
    if (fetching) {
      scrollData();
    }
  }, [fetching]);

  return (
    <div>
      <div className="container">
        <div className="page-name">GitHub Searcher</div>
        <InputMainPage setValueInput={setValueInput} title="user" />
        {findUsers.map((item) => (
          <OutlinedCard key={item?.id} item={item} userId={item.id} />
        ))}
      </div>
    </div>
  );
};
