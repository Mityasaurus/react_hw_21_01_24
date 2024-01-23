import React from "react";
import s from "../style/card.module.css";

export default function Movie(props) {
  return (
    <div>
      <div className={s.card}>
      <p className={s.card__title}>Улюблений {props.type}</p>
        <img src={props.movieImageLink} alt="" />
        <div className={s.card__content}>
          <p className={s.card__title}>{props.name}</p>
          <p className={s.card__description}>Режисер - {props.director}</p>
          <p className={s.card__description}>Рік випуску - {props.year}</p>
          <p className={s.card__description}>Кіностудія - {props.studio}</p>
          <p className={s.card__description}>Касовий збір - {props.money}</p>
        </div>
      </div>
    </div>
  );
}
