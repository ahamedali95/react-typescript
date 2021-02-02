import React from "react";
import { connect } from "react-redux";
import ButtonTypes from "../../constants/ButtonTypes";
import { setFearFactor, destroy } from "../../reducers/homeReducer";

type Props = {
    setFearFactor(value: ButtonTypes): void,
    destroy(): void
};

export const Buttons = (props: Props): JSX.Element => {
    return (
        <>
            <button
                data-test="buttons-component-ok"
                type="button"
                onClick={() => props.setFearFactor(ButtonTypes.ok)}
            >
                Make it OK
            </button>
            <button
                data-test="buttons-component-dangerous"
                type="button"
                onClick={() => props.setFearFactor(ButtonTypes.dangerous)}
            >
                Make it DANGEROUS
            </button>
            <button
                data-test="buttons-component-destroy"
                type="button"
                onClick={() => props.destroy()}
            >
                DESTROY
            </button>
        </>
    );
};

export default connect(null, { setFearFactor, destroy })(Buttons);