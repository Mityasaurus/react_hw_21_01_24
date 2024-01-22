import React from 'react'
import s from "../style/personalCard.module.css"

export default function PersonalCard(props) {
  return (
    <div>
      <div className={s.card}>
      <p className={s.card__title}>{props.name}</p>
        <img src={props.photoLink} alt="" />
        <div className={s.card__content}>
          <p className={s.card__title}>Персональна сторінка</p>
          <p className={s.card__description}>Телефон - {props.phone}</p>
          <p className={s.card__description}>Пошта - {props.mail}</p>
          <p className={s.card__description}>Місто проживання - {props.city}</p>
          <p className={s.card__description}>Знання технологій - {props.tech}</p>
        </div>
      </div>
    </div>
  )
}
