import { useLogic } from "./LogicContext";

export default function ScoreBoard() {
    // <div>, <p>, <p>, <button>
    const { currentScore } = useLogic();

    return (
        <>
            <div>
                <p>Score: {currentScore}</p>
                <p>Time: 0</p>
                <button>Restart</button>
            </div>
        </>
    );
}