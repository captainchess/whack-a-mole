import FieldItem from "./FieldItem";
import { useLogic } from "./LogicContext";

const NUM_HOLES = 9;

export default function FieldList() {
    const {}
    return (
        <>
            <ul>
                {Array.from({length: NUM_HOLES}, () => FieldItem())}
            </ul>
        </>
    );
}