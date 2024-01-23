import React, { useState, useEffect } from "react";
import Movie from "../components/movie";
import s from "../style/main.module.css";
import PersonalCard from "../components/personalCard";
import Time from "../components/time";
import Pet from "../components/pet";

export default function Main() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

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
        <Time time={currentTime} />
        <Pet
          title={"Мій домашній улюбленець"}
          photoLink={
            "https://imgtr.ee/images/2024/01/23/e059ce2af3ec776898308ec4d331d3db.png"
          }
          name={"Маргарита"}
          desc={
            "Моя кішка шотландської прямовухої породи. Їй 4 роки. Вона більш за все любить поїсти та поспати. А ще погратися)"
          }
        />
      </div>
    </div>
  );
}
