import React, { useState } from "react";
import BoxImg from "../images/Group 746.png";
import BoxImg2 from "../images/Group 747.png";
import BoxImg3 from "../images/Group 748.png";
import Arrow from "../images/Arrow 8.png";
import styles from "./opportunities.module.css";
const Opportunities = () => {
  const classes = styles.point + " " + styles.active;

  const [offset, setOffset] = useState(0);

  const RightClick = () => {
    console.log("Right clicked");
    setOffset((current) => {
      const newOffset = current - 100;
      console.log(newOffset);
      const max = -(100 * 2);
      if (newOffset == -100) {
        let points = document.querySelectorAll(".opportunities_point__8J-5G");
        console.log(points);
        points[1].classList.add("opportunities_active__VEWRq");
        points[0].classList.remove("opportunities_active__VEWRq");
      } else if (newOffset == -200) {
        let points = document.querySelectorAll(".opportunities_point__8J-5G");
        console.log(points);
        points[2].classList.add("opportunities_active__VEWRq");
        points[1].classList.remove("opportunities_active__VEWRq");
      }
      // return newOffset;
      return Math.max(newOffset, max);
    });
  }; //.opportunities_active__VEWRq
  const LeftClick = () => {
    console.log("Left clicked");
    setOffset((current) => {
      const newOffset = current + 100;
      if (newOffset == -100) {
        let points = document.querySelectorAll(".opportunities_point__8J-5G");
        console.log(points);
        points[1].classList.add("opportunities_active__VEWRq");
        points[2].classList.remove("opportunities_active__VEWRq");
      } else if (newOffset == 0) {
        let points = document.querySelectorAll(".opportunities_point__8J-5G");
        console.log(points);
        points[0].classList.add("opportunities_active__VEWRq");
        points[1].classList.remove("opportunities_active__VEWRq");
      }
      return Math.min(newOffset, 0);
    });
  };

  return (
    <section className={styles.opportunities}>
      <h1 className="heading">Возможности</h1>
      <div className={styles.window}>
        <div
          className={styles.containers}
          style={{
            transform: `translateX(${offset}%)`,
          }}
        >
          <div className={styles.container} id={styles.container1}>
            <section className={styles.box}>
              <img src={BoxImg} />
              <h2>Процент получения кредита выше</h2>
              <p>
                рассмотрение одновременно несколькими МФО/МКО в онлайн режиме
                клиенту - подбирается несколько альтернативных решений
              </p>
            </section>
            <section className={styles.box}>
              <img src={BoxImg2} />
              <h2>Единый интерфейс</h2>
              <p>
                упрощает клиентский путь для потенциального покупателя и
                менеджера
              </p>
            </section>
            <section className={styles.box}>
              <img src={BoxImg3} />
              <h2>Mobile first</h2>
              <p>
                весь процесс проводится в<br /> телефоне менеджера
              </p>
            </section>
          </div>

          <div className={styles.container} id={styles.container1}>
            <section className={styles.box}>
              <img src={BoxImg} />
              <h2>Процент получения кредита выше444444</h2>
              <p>
                рассмотрение одновременно несколькими МФО/МКО в онлайн режиме
                клиенту - подбирается несколько альтернативных решений
              </p>
            </section>
            <section className={styles.box}>
              <img src={BoxImg2} />
              <h2>Единый интерфейс</h2>
              <p>
                упрощает клиентский путь для потенциального покупателя и
                менеджера
              </p>
            </section>
            <section className={styles.box}>
              <img src={BoxImg3} />
              <h2>Mobile first</h2>
              <p>
                весь процесс проводится в<br /> телефоне менеджера
              </p>
            </section>
          </div>

          <div className={styles.container} id={styles.container1}>
            <section className={styles.box}>
              <img src={BoxImg} />
              <h2>Процент получения кредита выше784856123</h2>
              <p>
                рассмотрение одновременно несколькими МФО/МКО в онлайн режиме
                клиенту - подбирается несколько альтернативных решений
              </p>
            </section>
            <section className={styles.box}>
              <img src={BoxImg2} />
              <h2>Единый интерфейс</h2>
              <p>
                упрощает клиентский путь для потенциального покупателя и
                менеджера
              </p>
            </section>
            <section className={styles.box}>
              <img src={BoxImg3} />
              <h2>Mobile first</h2>
              <p>
                весь процесс проводится в<br /> телефоне менеджера
              </p>
            </section>
          </div>
        </div>
      </div>

      <div className={styles.points}>
        <div className={classes}></div>
        <div className={styles.point}></div>
        <div className={styles.point}></div>
      </div>

      <div className={styles.arrow} onClick={LeftClick}>
        <img src={Arrow} />
      </div>
      <div className={styles.arrow2} onClick={RightClick}>
        <img src={Arrow} />
      </div>
    </section>
  );
};
export default Opportunities;
