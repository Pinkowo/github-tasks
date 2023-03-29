import React from "react";
import { TaskList } from '../components/tasklist';
import { CreateButton } from "../components/button";
import { SearchSection } from "../components/search";
import { EditModal } from "../components/modal";

export interface ITasksPageProps { }

const TasksPage: React.FunctionComponent<ITasksPageProps> = () => {
    return (
        <div>
            <EditModal />
            <CreateButton />
            <SearchSection />
            <TaskList />
        </div>
    );
}

export default TasksPage;