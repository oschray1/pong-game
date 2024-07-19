class KeyboardService {
    static bindKeys() {
        document.addEventListener('keydown', (e) => {
            const key = e.key;

            if (key == 'w') {
                player.moveUpOneStep();
            } else if (key == 's') {
                player.moveDownOneStep();
            }

            if (key == 'ArrowUp') {
                opponent.moveUpOneStep();
            } else if (key == 'ArrowDown') {
                opponent.moveDownOneStep();
            }
        });
    }
}

KeyboardService.bindKeys();