import React from "react";
import Movie from "../components/movie";
import s from "../style/main.module.css";
import PersonalCard from "../components/personalCard";

export default function Main() {
  return (
    <div>
      <div className={s.mainBox}>
        <Movie
          movieImageLink={
            "https://upload.wikimedia.org/wikipedia/ru/d/dd/Squid_Game.jpg"
          }
          type={"серіал"}
          name={"Гра в кальмара"}
          director={"Хван Дон-Хьок"}
          year={"2021"}
          studio={"Siren Pictures Inc"}
          money={"11.000.000 $"}
        />
        <PersonalCard
          name={"Бовдун Дмитро"}
          photoLink={
            "https://imgtr.ee/images/2024/01/22/ac516f6a2d0c57bc3e1a78bf06dbe3b5.png"
          }
          phone={"+380987586371"}
          mail={"dmitriybovdun5@gmail.com"}
          tech={"HTML, CSS, JS, React"}
          city={"Кременчук"}
        />
        <p> Поточний час</p>
        <p> Домашній улюбленець</p>
      </div>
    </div>
  );
}
