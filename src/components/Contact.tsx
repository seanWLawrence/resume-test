import React, { FC, memo } from "react";

import Card from "./Card";

import styles from "./Contact.module.sass";

type LogoType = "png" | "svg";

interface SocialMediaAccount {
  name: string;
  url: string;
  logo: string;
}

interface ContactProps {
  name: string;
  programmingLanguages: string[];
  phone: string;
  email: string;
  city: string;
  state: string;
  socialMediaAccounts: SocialMediaAccount[];
}

interface ProgrammingLanguageBadgeProps {
  language: string;
}

let ProgrammingLanguageBadge: FC<ProgrammingLanguageBadgeProps> = ({
  language
}) => {
  return <span className={styles.programmingLanguageBadge}>{language}</span>;
};

interface AvatarProps {
  src: string;
}

let Avatar: FC<AvatarProps> = ({ src }) => {
  return (
    <img
      src={require(`../assets/${src}`)}
      alt="avatar"
      className={styles.avatar}
    />
  );
};

interface SocialMediaAccountsProps {
  socialMediaAccounts: SocialMediaAccount[];
}

let SocialMediaAccounts: FC<SocialMediaAccountsProps> = ({
  socialMediaAccounts
}) => {
  return (
    <span className={styles.socialMediaAccountsWrapper}>
      {socialMediaAccounts.map(({ name, url, logo }) => {
        return (
          <a key={name} href={url}>
            <img
              className={styles.logo}
              src={require(`../assets/${logo}`)}
              alt={`${name} logo`}
            />
          </a>
        );
      })}
    </span>
  );
};

let Contact: FC<ContactProps> = ({
  name,
  programmingLanguages,
  phone,
  email,
  city,
  state,
  socialMediaAccounts
}) => {
  return (
    <header>
      <Card>
        <div className={styles.wrapper}>
          <div className={styles.avatarWrapper}>
            <Avatar src="avatar.jpg" />

            <SocialMediaAccounts socialMediaAccounts={socialMediaAccounts} />
          </div>
          <div>
            <h1 className={styles.name}>{name}</h1>

            <div>
              <div className={styles.programmingLanguageWrapper}>
                {programmingLanguages.map(language => {
                  return (
                    <ProgrammingLanguageBadge
                      language={language}
                      key={language}
                    />
                  );
                })}
              </div>

              <address>
                <p>
                  <a href={`tel:1-${phone}`}>{phone}</a>
                  <div className={styles.emailWrapper}>
                    <a href={`mailto:${email}`}>{email}</a>
                  </div>
                </p>
              </address>
            </div>
          </div>
        </div>
      </Card>
    </header>
  );
};

export default memo(Contact);
