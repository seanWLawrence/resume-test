import React, { FC, memo } from "react";

import Card from "./Card";

import { prettyDate } from "src/lib";

import styles from "./Experience.module.sass";

interface Job {
  company: { name: string; url: string };
  startDate: Date;
  endDate?: Date;
  accomplishments: string[];
  responsibilities: string[];
  title: string;
}

interface ExperienceProps {
  jobs: Job[];
}

interface StringListProps {
  items: string[];
  title: string;
}

let StringList: FC<StringListProps> = ({ items, title }) => {
  return (
    <div>
      <h6 className={styles.smallTitle}>{title}</h6>

      <ul>
        {items.map(item => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

interface TimeProps {
  date?: Date;
}

let Time: FC<TimeProps> = ({ date }) => {
  if (!date) {
    return <span className={styles.time}>Current</span>;
  }

  return (
    <time className={styles.time} dateTime={date.toUTCString()}>
      {prettyDate(date)}
    </time>
  );
};

let RightArrow = () => (
  <span
    className={styles.time}
    dangerouslySetInnerHTML={{ __html: " &rarr; " }}
  />
);

let Experience: FC<ExperienceProps> = ({ jobs }) => {
  return (
    <Card>
      {jobs.map(
        ({
          company,
          startDate,
          endDate,
          accomplishments,
          responsibilities,
          title
        }) => {
          return (
            <div key={company.name} className={styles.jobWrapper}>
              <h5>
                <a href={company.url}>{company.name}</a>
                <span>
                  <Time date={startDate} />
                  <RightArrow />
                  <Time date={endDate} />
                </span>
              </h5>

              <h6 className={styles.title}>{title}</h6>

              <StringList items={accomplishments} title="Accomplishments" />
              <StringList items={responsibilities} title="Responsibilities" />
            </div>
          );
        }
      )}
    </Card>
  );
};

export default memo(Experience);
