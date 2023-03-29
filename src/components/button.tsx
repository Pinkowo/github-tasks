import React from "react";

export interface ICreateButtonProps { }

export const CreateButton: React.FunctionComponent<ICreateButtonProps> = (props) => {
    return (
        <button>
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
        </button>
    );
}