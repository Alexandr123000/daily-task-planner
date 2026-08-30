import { useEffect } from "react"
import ToDo from "./Todo-List-scripts"

export default function ShowToDoList() {
    useEffect(() => { //waiting for all to finish to start
        setTimeout(() => {
            ToDo();
        }, 0);
    }, []);
    return (
        <div>
            <div className="task-app">
                <div className="app-title">
                    Tasks
                </div>
                <div className="add-btn-wrap">
                    <button className="btn" id="openModalBtn">+ Add Task</button>
                </div>
                <div className="task-list" id="taskList">
                    <div className="task-empty" id="emptyState">No tasks yet</div>
                </div>
            </div>
            <div className="modal-overlay" id="modalOverlay">
                <div className="modal">
                    <div className="modal-title">New Task</div>
                <div className="modal-field">
                    <label for="taskNameInput">Task name</label>
                    <input type="text" id="taskNameInput" placeholder="e.g. Review design draft" />
                </div>
                <div className="modal-field">
                    <label for="taskDateInput">Date</label>
                    <input type="date" id="taskDateInput" />
                </div>

                <div className="modal-field">
                    <label for="taskTimeInput">Time</label>
                    <input type="time" id="taskTimeInput" />
                </div>
                <div className="modal-actions">
                    <button className="btn-modal cancel" id="cancelModalBtn">Cancel</button>
                    <button className="btn-modal" id="addTaskBtn">Add</button>
                </div>
                </div>
            </div>
        </div>
    );
}