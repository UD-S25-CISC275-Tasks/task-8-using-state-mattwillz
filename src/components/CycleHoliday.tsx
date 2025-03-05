import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const holidays: Record<string, string> = {
        "🎄": "Christmas",
        "🎃": "Halloween",
        "🦃": "Thanksgiving",
        "🎆": "New Year's",
        "💖": "Valentine's Day"
    };

    const alphabetOrder = ["🎄", "🎃", "🎆", "🦃", "💖"];

    const yearOrder = ["🎆", "💖", "🎃", "🦃", "🎄"];

    const [currentHoliday, setCurrentHoliday] = useState("🎄");

    function advanceByAlphabet() {
        const currentIndex = alphabetOrder.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % alphabetOrder.length;
        setCurrentHoliday(alphabetOrder[nextIndex]);
    }

    // Function to advance by the time of year
    function advanceByYear() {
        const currentIndex = yearOrder.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % yearOrder.length;
        setCurrentHoliday(yearOrder[nextIndex]);
    }

    return (
        <div>
            <h2>
                Holiday: {currentHoliday} ({holidays[currentHoliday]})
            </h2>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
