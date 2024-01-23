import React from "react";
import s from "../style/time.module.css"

export default function Time(props) {
  const time = props.time;
  return (
    <div>
      <div className={s.container}>
        <div className={s.box}>
          <span className={s.title}>Current time</span>
          <div>
            <strong>{time.toDateString()}</strong>
            <p>
              {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
