import { useState } from 'react';
import { Home } from './components/Home';
import { Quiz } from './components/Quiz';
import { Login } from './components/Login';
import { problems } from './data/problems';
import type { ProblemType } from './data/problems';

type Screen = 'HOME' | 'QUIZ';

interface QuizConfig {
  subject: string;
  type: ProblemType | 'ALL';
  order: 'SEQUENTIAL' | 'RANDOM';
  fontSize: 'SMALL' | 'MEDIUM' | 'LARGE';
}

function App() {
  const [screen, setScreen] = useState<Screen>('HOME');
  const [config, setConfig] = useState<QuizConfig | null>(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const startQuiz = (newConfig: QuizConfig) => {
    setConfig(newConfig);
    setScreen('QUIZ');
  };

  const exitQuiz = () => {
    setScreen('HOME');
    setConfig(null);
  };

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div>
      {screen === 'HOME' && (
        <Home problems={problems} onStart={startQuiz} />
      )}
      {screen === 'QUIZ' && config && (
        <Quiz problems={problems} config={config} onExit={exitQuiz} />
      )}
    </div>
  );
}

export default App;
