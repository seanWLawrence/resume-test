import React, { memo, FC } from "react";

import Card from "./Card";

import styles from "./OpenSource.module.sass";

interface OpenSourceContribution {
  name: string;
  url: string;
  description: string;
  programmingLanguage: string;
}

interface OpenSourceSectionProps {
  projects: OpenSourceContribution[];
  title: string;
}

let OpenSourceSection: FC<OpenSourceSectionProps> = ({ projects, title }) => {
  return (
    <div className={styles.openSourceSectionWrapper}>
      <h5 className={styles.openSourceSectionHeader}>{title}</h5>
      {projects.map(({ name, description, url, programmingLanguage }) => {
        return (
          <div key={name}>
            <h6>
              <a href={url} className={styles.projectName}>
                {name}
              </a>{" "}
              <span className={styles.programmingLanguage}>
                ({programmingLanguage})
              </span>
            </h6>

            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

interface OpenSourceProps {
  openSourceContributions: OpenSourceContribution[];
  openSourceProjects: OpenSourceContribution[];
}

let OpenSource: FC<OpenSourceProps> = ({
  openSourceContributions,
  openSourceProjects
}) => {
  return (
    <Card>
      <OpenSourceSection
        title="Contributions"
        projects={openSourceContributions}
      />

      <OpenSourceSection title="Projects" projects={openSourceProjects} />
    </Card>
  );
};

export default memo(OpenSource);
