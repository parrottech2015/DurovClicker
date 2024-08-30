document.addEventListener('DOMContentLoaded', () => {
    let clickCount = 0;
    const message = document.getElementById('message');
    const clickCountDisplay = document.getElementById('click-count');

    // Определение координат пальцев на изображении (можно изменить для реальных значений)
    const fingerZones = {
        thumb: {xMin: 50, xMax: 100, yMin: 150, yMax: 200},
        index: {xMin: 120, xMax: 170, yMin: 140, yMax: 190},
        middle: {xMin: 180, xMax: 230, yMin: 140, yMax: 190},
        ring: {xMin: 240, xMax: 290, yMin: 140, yMax: 190},
        pinky: {xMin: 300, xMax: 350, yMin: 150, yMax: 200}
    };

    document.getElementById('durov').addEventListener('click', function(event) {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        clickCount++;

        // Печать координат для отладки
        console.log(`Координаты клика: (${x}, ${y})`);

        // Проверка, на какой палец кликнули
        if (isInZone(x, y, fingerZones.thumb)) {
            message.textContent = 'Ты нажал на большой палец!';
        } else if (isInZone(x, y, fingerZones.index)) {
            message.textContent = 'Ты нажал на указательный палец!';
        } else if (isInZone(x, y, fingerZones.middle)) {
            message.textContent = 'Ты нажал на средний палец!';
        } else if (isInZone(x, y, fingerZones.ring)) {
            message.textContent = 'Ты нажал на безымянный палец!';
        } else if (isInZone(x, y, fingerZones.pinky)) {
            message.textContent = 'Ты нажал на мизинец!';
        } else {
            message.textContent = 'Ты промахнулся!';
        }

        clickCountDisplay.textContent = `Клики: ${clickCount}`;
    });

    // Функция для проверки, находится ли клик внутри зоны пальца
    function isInZone(x, y, zone) {
        return x >= zone.xMin && x <= zone.xMax && y >= zone.yMin && y <= zone.yMax;
    }
});
