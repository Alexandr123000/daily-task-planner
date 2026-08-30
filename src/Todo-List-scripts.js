export default function ToDo() {
    'use strict';
    // DOM refs
    const taskList = document.getElementById('taskList');
    const emptyState = document.getElementById('emptyState');
    const openModalBtn = document.getElementById('openModalBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const cancelModalBtn = document.getElementById('cancelModalBtn');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskNameInput = document.getElementById('taskNameInput');
    const taskDateInput = document.getElementById('taskDateInput');
    const taskTimeInput = document.getElementById('taskTimeInput');
    let tasks = []; // State

    function formatDate(dateStr) {
        if (!dateStr) return 'No date';
        const parts = dateStr.split('-');
        if (parts.length !== 3) return dateStr;
        const [y, m, d] = parts;
        const months = ['Jan', 'Feb', "Mar", 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${parseInt(d)} ${months[parseInt(m) - 1]} ${y}`;
    }

    function formatTime(timeStr) {
        if (!timeStr) return 'No time';
        const parts = timeStr.split(':');
        if (parts.length !== 2) return timeStr;
        let h = parseInt(parts[0]);
        const min = parts[1];
        const ampm = h >= 12 ? 'PM' : 'AM';
        h = h % 12 || 12;
        return `${h}:${min} ${ampm}`;
    }

    // Renders
    function renderTasks() {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        if (tasks.length === 0) {
            taskList.appendChild(emptyState);
            return;
        }
        // Re-add empty stare but hidden
        emptyState.style.display = 'none';
        taskList.appendChild(emptyState);
        tasks.forEach((task, index) => { // Insert tasks above empty state
            const item = document.createElement('div');
            item.className = 'task-item';
            item.dataset.index = index;
            const info = document.createElement('div');
            info.className = 'task-info';
            const nameEl = document.createElement('div');
            nameEl.className = 'task-name';
            nameEl.textContent = task.name || 'Untitled';
            const meta = document.createElement('div');
            meta.className = 'task-meta';
            const dateSpan = document.createElement('span');
            dateSpan.className = 'date';
            dateSpan.textContent = formatTime(task.date);
            const timeSpan = document.createElement('span');
            timeSpan.className = 'time';
            timeSpan.textContent = formatTime(task.time);
            meta.appendChild(dateSpan);
            meta.appendChild(timeSpan);
            info.appendChild(nameEl);
            info.appendChild(meta);
            const delBtn = document.createElement('button');
            delBtn.className = 'task-delete';
            delBtn.textContent = '\u2715';
            delBtn.setAttribute('aria-label', 'Delete task');
            delBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const idx = parseInt(item.dataset.index, 10);
                if (!isNaN(idx)) {
                    tasks.splice(idx, 1);
                    renderTasks();
                }
            });
            item.appendChild(info);
            item.appendChild(delBtn);
            taskList.insertBefore(item, emptyState); // Insert before empty state
        });
        emptyState.style.display = tasks.length === 0 ? 'block' : 'none'; // Hide empty state if tasks exist
    }

    //Modal controls
    function openModal() {
        modalOverlay.classList.add('open');
        taskNameInput.value = '';
        // Set dafault date to today
        const today = new Date();
        const y = today.getFullYear();
        const m = String(today.getMonth() + 1).padStart(2, '0');
        const d = String(today.getDate()).padStart(2, '0');
        taskDateInput.value = `${y}-${m}-${d}`;
        // Default time to current hour + 1
        const h = String((today.getHours() + 1) % 24).padStart(2, '0');
        const min = String(today.getMinutes()).padStart(2, '0');
        taskTimeInput.value = `${h}:${min}`;
        taskNameInput.focus();
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    // Add task from modal
    function addTaskFromModal() {
        const name = taskNameInput.value.trim();
        const date = taskDateInput.value;
        const time = taskTimeInput.value;

    if (!name) {
        taskNameInput.focus();
        taskNameInput.style.borderColor = '#ff6b6b';
        setTimeout(() => {
            taskNameInput.style.borderColor = '';
        }, 800);
        return;
    }
    tasks.push({
        id: Date.now() + Math.random().toString(36).slice(2, 6),
        name: name, 
        date: date || '',
        time: time || ''
    });
    renderTasks();
    closeModal();
    }

    // Event listeners
    openModalBtn.addEventListener('click', openModal);
    cancelModalBtn.addEventListener('click', closeModal);
    addTaskBtn.addEventListener('click', addTaskFromModal);
    // Close on overlay click (background)
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    //Keyboard: Escape closes modal, Enter submits
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
            closeModal();
        }
        if (e.key === 'Enter' && modalOverlay.classList.contains('open')) {
            const active = document.activeElement;
            if (active === taskNameInput || active === taskDateInput || active === taskTimeInput) {
                e.preventDefault();
                addTaskFromModal();
            }
        }
    });
    // Init
    // Start with emoty task list
    tasks = [];
    renderTasks();
    emptyState.style.display = 'block'; //Ensure empty state is visible
}