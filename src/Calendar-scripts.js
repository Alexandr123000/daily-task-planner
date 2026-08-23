/*import { ToastTitle } from "@chakra-ui/react";*/

export default function Calendar() {
    'use strict';

    const monthYearEl = document.getElementById('monthYear');
    const daysGrid = document.getElementById('daysGrid');
    const prevBtn = document.getElementById('prevMonth');
    const nextBtn = document.getElementById('nextMonth');

    let currentDate = new Date(); //today
    let currentYear = currentDate.getFullYear(); //today
    let currentMonth = currentDate.getMonth();

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December' 
    ];

    /*Render Calendar*/
    function renderCalendar(year, month) {
        monthYearEl.textContent = `${monthNames[month]} ${year}`;
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        daysGrid.innerHTML = '';
        const totalCells = 42;
        const today = new Date();
        for (let i = 0; i < totalCells; i++) {
            const cell = document.createElement('div');
            cell.className = 'day-cell';
            let dayNumber;
            let isCurrentMonth = true;
            let dateObj;
            if (i < firstDay) {
                const prevMonth = new Date(year, month, 0);
                const prevDays = prevMonth.getDate();
                dayNumber = prevDays - firstDay + i + 1;
                isCurrentMonth = false;
                dateObj = new Date(year, month - 1, dayNumber);
            } else if (i >= firstDay + daysInMonth) {
                dayNumber = i - firstDay - daysInMonth + 1;
                isCurrentMonth = false;
                dateObj = new Date(year, month + 1, dayNumber);
            } else {
                dayNumber = i - firstDay + 1;
                dateObj = new Date(year, month, dayNumber);
            }
            cell.textContent = dayNumber;

            if (!isCurrentMonth) {
                cell.classList.add('other-month');
            }

            if (dateObj.getFullYear() === today.getFullYear() &&
                dateObj.getMonth() === today.getMonth() &&
                dateObj.getDate() === today.getDate()) {
                cell.classList.add('today');
            }

            if (isCurrentMonth) {
                cell.addEventListener('click', function() {
                    document.querySelectorAll('.day-cell.selected').forEach(el => el.classList.remove('selected'));
                    cell.classList.add('selected');
                });
        }
        daysGrid.appendChild(cell);
        }
    }
    function changeMonth(delta) {
        currentMonth += delta;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        } else if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentYear, currentMonth);
    }
    prevBtn.addEventListener('click', function() {
        changeMonth(-1);
    });
    nextBtn.addEventListener('click', function() {
        changeMonth(1);
    });
    renderCalendar(currentYear, currentMonth);
};