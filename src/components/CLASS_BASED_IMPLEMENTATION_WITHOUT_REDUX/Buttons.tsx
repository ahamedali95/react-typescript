import React from "react";
import ButtonTypes from "../../constants/ButtonTypes.js";

type Props = {
  handleFearToggle(value: ButtonTypes): void,
  handleDestroy(): void
};

const Buttons = (props: Props): JSX.Element => {
    return (
        <>
            <button
                type="button"
                onClick={() => props.handleFearToggle(ButtonTypes.ok)}
            >
                Make it OK
            </button>
            <button
                type="button"
                onClick={() => props.handleFearToggle(ButtonTypes.dangerous)}
            >
                Make it DANGEROUS
            </button>
            <button
                type="button"
                onClick={() => props.handleDestroy()}
            >
                DESTROY
            </button>
        </>
    );
};

export default Buttons;