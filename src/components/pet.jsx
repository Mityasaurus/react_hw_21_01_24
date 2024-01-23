import React from "react";
import s from "../style/card.module.css";

export default function Pet(props) {
  return (
    <div>
      <div className={s.card}>
        <p className={s.card__title}>{props.title}</p>
        <img src={props.photoLink} alt="" />
        <div className={s.card__content}>
          <p className={s.card__title}>{props.name}</p>
          <p className={s.card__description}>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}
