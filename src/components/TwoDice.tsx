import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    let initialLeft = d6();
    let initialRight = d6();
    while (initialLeft === initialRight) {
        initialRight = d6();
    }
    const [leftDie, setLeftDie] = useState<number>(initialLeft);
    const [rightDie, setRightDie] = useState<number>(initialRight);

    let message = "";
    if (leftDie === rightDie) {
        message = leftDie === 1 ? "You Lose!" : "You Win!";
    }

    return (
        <span>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die">{rightDie}</span>
            <Button
                onClick={() => {
                    setLeftDie(d6());
                }}
                data-testid="left-die"
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    setRightDie(d6());
                }}
                data-testid="right-die"
            >
                Roll Right
            </Button>
            {message && <p>{message}</p>}
        </span>
    );
}
