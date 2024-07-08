document.addEventListener('DOMContentLoaded', () => {
    // Datos del usuario
    const user = {
        name: "Juan Pérez",
        email: "juan.perez@example.com",
        age: 28,
        score: 0,
        streak: 0
    };

    // Mostrar datos del usuario en el perfil
    document.getElementById('user-name').textContent = user.name;
    document.getElementById('user-email').textContent = user.email;
    document.getElementById('user-age').textContent = user.age;
    document.getElementById('user-score').textContent = `Puntaje: ${user.score}`;
    document.getElementById('current-streak').textContent = user.streak;

    // Inicializa la primera vista
    showView('profile');
    
    // Inicializa el calendario (ejemplo con FullCalendar)
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: false,
        events: []
    });

    // Agregar manejo del formulario de hábitos
    document.getElementById('habit-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const habitName = document.getElementById('habit-name').value;
        const habitTime = document.getElementById('habit-time').value;
        const habitFrequency = document.getElementById('habit-frequency').value;
        if (habitName && habitTime && habitFrequency) {
            addHabit(habitName, habitTime, habitFrequency);
            document.getElementById('habit-form').reset();
            showView('habits');
        }
    });
});

function showView(viewId) {
    const views = document.querySelectorAll('.view');
    views.forEach(view => {
        if (view.id === viewId) {
            view.classList.add('active');
        } else {
            view.classList.remove('active');
        }
    });
}

function addHabit(name, time, frequency) {
    const habitList = document.getElementById('habits-list');
    const habitItem = document.createElement('div');
    habitItem.textContent = `${name} - ${time} - ${frequency}`;
    habitItem.classList.add('habit-item');
    habitItem.dataset.streak = 0; // Inicializar la racha en 0
    habitItem.dataset.frequency = frequency.toLowerCase(); // Guardar la frecuencia en minúsculas
    habitList.appendChild(habitItem);

    // Agregar opción para marcar como completado por etapas
    habitItem.addEventListener('click', () => {
        const habitFrequency = habitItem.dataset.frequency;
        if (!habitItem.classList.contains('completed')) {
            if (habitFrequency === 'diario') {
                habitItem.classList.add('completed');
                updateScore(10); // Añadir puntos por cada etapa completada (en este caso, 10 puntos)
                updateStreak(habitItem);
                updateKPI();
                updateProgressBar();
            } else if (habitFrequency === 'semanal') {
                // Implementar lógica para marcar etapas en hábitos semanales
                alert('Completar etapas para hábitos semanales');
            } else if (habitFrequency === 'mensual') {
                // Implementar lógica para marcar etapas en hábitos mensuales
                markMonthlyProgress(habitItem);
            }
        }
    });
}

function updateScore(points) {
    const scoreValue = document.getElementById('user-score');
    let currentScore = parseInt(scoreValue.textContent.split(' ')[1]);
    currentScore += points;
    scoreValue.textContent = `Puntaje: ${currentScore}`;
}

function updateKPI() {
    const habits = document.querySelectorAll('.habit-item');
    const completedHabits = document.querySelectorAll('.habit-item.completed');
    const kpiValue = document.getElementById('kpi-value');
    const kpi = ((completedHabits.length / habits.length) * 100).toFixed(2);
    kpiValue.textContent = `Tasa de Cumplimiento: ${kpi}%`;
}

function updateStreak(habitItem) {
    let streak = parseInt(habitItem.dataset.streak);
    streak++;
    habitItem.dataset.streak = streak;
    document.getElementById('current-streak').textContent = streak;
}

function updateProgressBar() {
    const habits = document.querySelectorAll('.habit-item');
    const completedHabits = document.querySelectorAll('.habit-item.completed');
    const progressBarFill = document.getElementById('progress-bar-fill');
    const progress = (completedHabits.length / habits.length) * 100;
    progressBarFill.style.width = `${progress}%`;
}

document.addEventListener('DOMContentLoaded', () => {
    // Datos del usuario
    const user = {
        name: "Juan Pérez",
        email: "juan.perez@example.com",
        age: 28,
        score: 0,
        streak: 0
    };

    // Mostrar datos del usuario en el perfil
    document.getElementById('user-name').textContent = user.name;
    document.getElementById('user-email').textContent = user.email;
    document.getElementById('user-age').textContent = user.age;
    document.getElementById('user-score').textContent = `Puntaje: ${user.score}`;
    document.getElementById('current-streak').textContent = user.streak;

    // Inicializa la primera vista
    showView('profile');
    
    // Inicializa el calendario (ejemplo con FullCalendar)
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: false,
        events: []
    });

    // Agregar manejo del formulario de hábitos
    document.getElementById('habit-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const habitName = document.getElementById('habit-name').value;
        const habitTime = document.getElementById('habit-time').value;
        const habitFrequency = document.getElementById('habit-frequency').value;
        if (habitName && habitTime && habitFrequency) {
            addHabit(habitName, habitTime, habitFrequency);
            document.getElementById('habit-form').reset();
            showView('habits');
        }
    });
});

function showView(viewId) {
    const views = document.querySelectorAll('.view');
    views.forEach(view => {
        if (view.id === viewId) {
            view.classList.add('active');
        } else {
            view.classList.remove('active');
        }
    });
}

function addHabit(name, time, frequency) {
    const habitList = document.getElementById('habits-list');
    const habitItem = document.createElement('div');
    habitItem.textContent = `${name} - ${time} - ${frequency}`;
    habitItem.classList.add('habit-item');
    habitItem.dataset.streak = 0; // Inicializar la racha en 0
    habitItem.dataset.frequency = frequency.toLowerCase(); // Guardar la frecuencia en minúsculas
    habitList.appendChild(habitItem);

    // Agregar opción para marcar como completado por etapas
    habitItem.addEventListener('click', () => {
        const habitFrequency = habitItem.dataset.frequency;
        if (!habitItem.classList.contains('completed')) {
            if (habitFrequency === 'diario') {
                habitItem.classList.add('completed');
                updateScore(10); // Añadir puntos por cada etapa completada (en este caso, 10 puntos)
                updateStreak(habitItem);
                updateKPI();
                updateProgressBar();
            } else if (habitFrequency === 'semanal') {
                // Implementar lógica para marcar etapas en hábitos semanales
                alert('Completar etapas para hábitos semanales');
            } else if (habitFrequency === 'mensual') {
                // Implementar lógica para marcar etapas en hábitos mensuales
                markMonthlyProgress(habitItem);
            }
        }
    });
}

function updateScore(points) {
    const scoreValue = document.getElementById('user-score');
    let currentScore = parseInt(scoreValue.textContent.split(' ')[1]);
    currentScore += points;
    scoreValue.textContent = `Puntaje: ${currentScore}`;
}

function updateKPI() {
    const habits = document.querySelectorAll('.habit-item');
    const completedHabits = document.querySelectorAll('.habit-item.completed');
    const kpiValue = document.getElementById('kpi-value');
    const kpi = ((completedHabits.length / habits.length) * 100).toFixed(2);
    kpiValue.textContent = `Tasa de Cumplimiento: ${kpi}%`;
}

function updateStreak(habitItem) {
    let streak = parseInt(habitItem.dataset.streak);
    streak++;
    habitItem.dataset.streak = streak;
    document.getElementById('current-streak').textContent = streak;
}

function updateProgressBar() {
    const habits = document.querySelectorAll('.habit-item');
    const completedHabits = document.querySelectorAll('.habit-item.completed');
    const progressBarFill = document.getElementById('progress-bar-fill');
    const progress = (completedHabits.length / habits.length) * 100;
    progressBarFill.style.width = `${progress}%`;
}

function markMonthlyProgress(habitItem) {
    const habitFrequency = habitItem.dataset.frequency;
    if (!habitItem.classList.contains('completed') && habitFrequency === 'mensual') {
        const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
        let completedDays = 0;

        // Simular el progreso mensual visualmente
        const progressIndicator = document.createElement('div');
        progressIndicator.classList.add('monthly-progress');

        // Evento de clic para completar el hábito mensual
        progressIndicator.addEventListener('click', () => {
            if (!habitItem.classList.contains('completed')) {
                habitItem.classList.add('completed');
                updateScore(10 * daysInMonth); // Añadir puntos por completar todo el hábito mensual
                updateKPI();
                updateProgressBar();
                completedDays = daysInMonth; // Marcar todos los días como completados
            } else {
                habitItem.classList.remove('completed');
                // Aquí podrías implementar una función para restar puntos o deshacer la actualización
                updateScore(-10 * completedDays); // Ejemplo de cómo restar puntos por los días completados
                updateKPI(); // Actualizar el KPI después de restar puntos
                updateProgressBar(); // Actualizar la barra de progreso después de restar puntos
                completedDays = 0; // Reiniciar la cuenta de días completados
            }
        });

        habitItem.appendChild(progressIndicator);
    }
}
