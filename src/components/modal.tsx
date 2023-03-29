import React from "react";
import { Octokit } from "@octokit/core";

export interface IEditModalProps { }

export const EditModal: React.FunctionComponent<IEditModalProps> = () => {
    return (
        <div className="modal-mask">
            <div className="modal-box">

            </div>
        </div>
    );
}