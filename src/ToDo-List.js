import { useEffect } from "react"

export default function ShowToDoList() {
    {/*useEffect(() => { waiting for all to finish to start
        setTimeout(() => {

        }, 0);
    }, []);*/}
    return (
        <div className="task-app">
            /*Tlt*/
            <div cl assName="app-title">
                <span>-</span> T M
            </div>
            /*A BTN*/
            <div className="add-btn-wrap">
                <button className="btn" id="openModalBtn">+ Add Task</button>
            </div>
            /*T LST*/
            <div className="task-list" id="taskList">
                /*emt*/
                <div className="task-empty" id="emptyState">No tasks</div>
            </div>
        </div>
        /*MDL*/
        <div className="modal-overlay" id="modalOverlay">
            <div className="modal">
                <div className="modal-title">New Task</div>
            /*Task Name*/
            <div className="modal-field">
                <label for="taskNameInput">Task name</label>
                <input type="text" id="taskNameInput" placeholder="e.g. Review design draft" />
            </div>
            /*Date*/
            <div className="modal-field">
                <label for="taskDateInput">Date</label>
                <input type="date" id="taskDateInput" />
            </div>
            /*Acts*/
            </div>
        </div>
    );
}