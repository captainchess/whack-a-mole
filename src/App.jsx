import Welcome from "./Welcome";
import HighScores from "./Highscores";
import ScoreBoard from "./ScoreBoard";
import FieldList from "./FieldList";
import { useLogic } from "./LogicContext";  

export default function App() {
  const { hasStarted } = useLogic();
  if (!hasStarted) {
    return (
      <>
        <h1>Whack a Mole</h1>
        <Welcome />
        <HighScores />
      </>
    );
  }
  return (
      <>
        <h1>Whack a Mole</h1>
        <ScoreBoard />
        <FieldList />
      </>
    );
}
