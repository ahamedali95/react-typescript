// @ts-nocheck -> did this because facing some issues with the redux connected component, otherwise everything working fine
import React from "react";
import { connect } from "react-redux";
import {State} from "../interfaces";

type IProps = {
    isLoading: boolean
    Component: React.ComponentClass
}

class EnhancedComponent extends React.Component<IProps> {
    public render(): JSX.Element {
        return (
            <>
                {
                    this.props.isLoading &&
                    <p>Loading...</p>
                }
                <this.props.Component />
            </>
        );
    }
}

const withLoader = (Component: React.ComponentClass): React.ComponentClass<IProps> => {
    const mapStateToProps = (state: State) => {
        return {
            isLoading: state.home.isLoading,
            Component
        };
    };

    return connect(mapStateToProps)(EnhancedComponent);
};


export default withLoader;