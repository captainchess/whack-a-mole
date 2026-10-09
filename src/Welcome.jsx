import { useLogic } from "./LogicContext";

export default function Welcome() {
    const { toggleStart } = useLogic();
    return (
        <>
            <p>Welcome to Whack a Mole!</p>
            <p>Whack a mole to earn points.</p>
            <p>How many can you get?</p>
            <button
                onClick={toggleStart}    
            >Play</button>
        </>
    );
}