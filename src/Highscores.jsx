import { useLogic } from "./LogicContext";

export default function HighScores() {
    const { scores } = useLogic();
    return (
        <>
            <h2>High Scores</h2>
            <ul>
                {scores.map((score) => (
                    <li key={score}>{score}</li>
                ))}
            </ul>
        </>
    );
}