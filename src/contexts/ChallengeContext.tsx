import { createContext, useState, ReactNode} from 'react';;
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  resetChallenge: () => void;
  levelUp: () => void;
  startNewChallenge: () => void;
}

export const ChallengeContext = createContext({} as ChallengesContextData)

interface ChallengesProviderProps {
  children: ReactNode;
}

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setlevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level +1) * 4, 2)

  function levelUp() {
    setlevel(level + 1)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return(
    <ChallengeContext.Provider 
      value={{ 
        level, 
        currentExperience, 
        experienceToNextLevel,
        challengesCompleted, 
        activeChallenge,
        levelUp,
        startNewChallenge,
        resetChallenge,
        }}
    >
      {children}
    </ChallengeContext.Provider>
  )
}