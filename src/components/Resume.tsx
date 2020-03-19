import React, { FC, memo } from "react";
import { useTrail, animated } from "react-spring";

import Contact from "src/components/Contact";
import Experience from "src/components/Experience";
import OpenSource from "src/components/OpenSource";
import Talks from "src/components/Talks";

import { contact, openSource, experience, talks } from "src/data";

import styles from "./Resume.module.sass";

let items = ["Contact", "Experience", "Talks", "Open Source"];
let contents = [
  <Contact {...contact} />,
  <Experience {...experience} />,
  <Talks {...talks} />,
  <OpenSource {...openSource} />
];
let config = { mass: 5, tension: 500, friction: 100 };

let Resume: FC = () => {
  let trail = useTrail(items.length, {
    config,
    opacity: 1,
    x: 0,
    height: 48,
    from: { opacity: 0, x: 0, height: 48 }
  });

  return (
    <main>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className={styles.headerWrapper}
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
            }}
          >
            <animated.h2 style={{ height }} className={styles.header}>
              {items[index]}
            </animated.h2>
            {contents[index]}
          </animated.div>
        ))}
      </div>
    </main>
  );
};

export default memo(Resume);
