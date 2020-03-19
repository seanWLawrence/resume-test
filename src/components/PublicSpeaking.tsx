import React, { memo, FC } from "react";

import Card from "./Card";

import styles from "./PublicSpeaking.module.sass";

interface PublicSpeaking {
  name: string;
  description: string;
  location: string;
  url?: string;
}

interface PublicSpeakingProps {
  publicSpeakings: PublicSpeaking[];
}

let PublicSpeaking: FC<PublicSpeakingProps> = ({ publicSpeakings }) => {
  return (
    <Card>
      <div className={styles.publicSpeakingWrapper}>
        {publicSpeakings.map(({ name, description, url, location }) => {
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

export default memo(PublicSpeaking);
