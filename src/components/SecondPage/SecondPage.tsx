import React, { useState, useEffect } from "react";
import { getCurrentUser, getCurrentRepos } from "../../api/api";
import { useParams } from "react-router";
import OutlinedCard from "../MainPage/CardComponent";
import { BasicCard } from "./BasicCard";
import { InputMainPage } from "../MainPage/InputMainPage";
import { PersonalInfo } from "../../interface/interface";

export const SecondPage = () => {
  const [findUser, setFindUser] = useState<PersonalInfo>();
  const [findRepos, setFindRepos] = useState([]);
  const [reservRepos, setReservRepos] = useState([]);
  const [valueInput, setValueInput] = useState<string | null>(null);
  const [showList, setShowList] = useState(false);
  const { user } = useParams();

  async function findRepo() {
    const find = await getCurrentRepos(user);
    if (find) {
      setFindRepos(find.data);
    }
  }

  async function takeInfoUser() {
    const find = await getCurrentUser(user);
    if (find) {
      setFindUser(find.data);
    }
  }

  const fileredRepo = () => {
    const newArr = [...findRepos];
    let searchRepo: any = [];
    if (valueInput) {
      newArr.filter((el: any) => {
        if (el.name.startsWith(valueInput)) {
          searchRepo.push(el);
        }
      });
    }
    setShowList(true);
    setReservRepos(searchRepo);
  };

  useEffect(() => {
    findRepo();
    takeInfoUser();
  }, []);

  useEffect(() => {
    console.log(valueInput, "valueInput");
    if (valueInput) {
      fileredRepo();
    }
    if (valueInput === "") {
      setReservRepos([]);
      setShowList(false);
      console.log("hi");
    }
  }, [valueInput]);

  return (
    <div>
      <OutlinedCard item={findUser} />
      <InputMainPage setValueInput={setValueInput} title="repo" />
      {showList
        ? reservRepos?.map((item: any) => (
            <BasicCard item={item} key={item.id} />
          ))
        : findRepos?.map((item: any) => (
            <BasicCard item={item} key={item.id} />
          ))}
    </div>
  );
};
