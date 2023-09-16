const input_search = document.querySelector('#inputSearch');
const res_answer = document.querySelector('#resAnswer');

input_search.addEventListener('input', () => {
    const searchTerm = input_search.value.toLowerCase();
    let foundAnswers = [];

    for (const item of dataArray) {
        const question = item.question.toLowerCase();

        if (question.includes(searchTerm.trim())) {
            foundAnswers.push(item);
        }
    }

    if (foundAnswers.length > 0) {
        res_answer.textContent = '';
        for (const item of foundAnswers) {
            res_answer.innerHTML += `<br><p>Питання: ${item.question}<br><span style="color: green;">Віповідь: ${item.answer}</span></p><br>`;
        }
    } else {
        res_answer.innerHTML = '<p style="color: yellow">Співпадіння не знайдено!</p>';
    }

    // Очистка поля ввода через 10 секунды
    clearTimeout(input_search.timer); // Очистим предыдущий таймер, если он существует
    input_search.timer = setTimeout(() => {
        input_search.value = '';
        res_answer.textContent = ''; // Опционально, чтобы очистить результаты поиска
    }, 10000);
});


input_search.addEventListener('keydown', (event) => {
    if (event.key === " " && input_search.selectionStart === 0) {
        event.preventDefault();
    }
});

// Добавляем обработчик для очистки результата при пустом поле ввода
input_search.addEventListener('input', () => {
    if (input_search.value.trim() === '') {
        res_answer.textContent = '';
    }
});