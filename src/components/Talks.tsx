import React, { memo, FC } from "react";

import Card from "./Card";

import styles from "./Talks.module.sass";

interface Talk {
  name: string;
  description: string;
  location: string;
  url?: string;
}

interface TalksProps {
  talks: Talk[];
}

let Talks: FC<TalksProps> = ({ talks }) => {
  return (
    <Card>
      <div className={styles.talksWrapper}>
        {talks.map(({ name, description, url, location }) => {
          return (
            <div key={name}>
              <h6>
                {url ? (
                  <a href={url} className={styles.projectName}>
                    {name}
                  </a>
                ) : (
                  <span className={styles.projectName}>{name}</span>
                )}{" "}
                <span className={styles.location}>({location})</span>
              </h6>

              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default memo(Talks);
