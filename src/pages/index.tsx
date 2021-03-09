import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengeContext';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css'

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  username: string;
  user: string;
}

export default function Home(props: HomeProps) {
  return ( 
    <ChallengesProvider
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
    >
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar/>
      <CountdownProvider>
      <section>
        <div>
          <Profile
          username={props.username}
          user={props.user}/>
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div>
          <ChallengeBox/>
        </div>
      </section>
      </CountdownProvider>

    </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted, username, user } = ctx.req.cookies
  if (!username || !user) {
    return {
      redirect: {
        destination: "/login"
      }
    }
  }

  return{
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted),
      username: String(username),
      user: String(user),
    }
  }
}