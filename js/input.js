let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 }
const moveSound = new Audio('./music/move.mp3')
const btn = document.querySelectorAll('button');
btn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e.currentTarget.dataset.id);
        if (e.currentTarget.dataset.id === 'w') {
            switch (e.currentTarget.dataset.id) {
                case 'w':
                    if (lastInputDirection.y !== 0) break
                    moveSound.play();
                    inputDirection = { x: 0, y: -1 }
                    break
            }
        } else if (e.currentTarget.dataset.id === 's') {
            switch (e.currentTarget.dataset.id) {
                case 's':
                    if (lastInputDirection.y !== 0) break
                    moveSound.play();
                    inputDirection = { x: 0, y: 1 }
                    break
            }
        } else if (e.currentTarget.dataset.id === 'd') {
            switch (e.currentTarget.dataset.id) {
                case 'd':
                    if (lastInputDirection.x !== 0) break
                    moveSound.play();
                    inputDirection = { x: 1, y: 0 }
                    break
            }
        } else if (e.currentTarget.dataset.id === 'a') {
            switch (e.currentTarget.dataset.id) {
                case 'a':
                    if (lastInputDirection.x !== 0) break
                    moveSound.play();
                    inputDirection = { x: -1, y: 0 }
                    break
            }
        }
    });
});
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break
            moveSound.play();
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            moveSound.play();
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            moveSound.play();
            inputDirection = { x: 1, y: 0 }
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            moveSound.play();
            inputDirection = { x: -1, y: 0 }
            break
        case 'w':
            if (lastInputDirection.y !== 0) break
            moveSound.play();
            inputDirection = { x: 0, y: -1 }
            break
        case 's':
            if (lastInputDirection.y !== 0) break
            moveSound.play();
            inputDirection = { x: 0, y: 1 }
            break
        case 'd':
            if (lastInputDirection.x !== 0) break
            moveSound.play();
            inputDirection = { x: 1, y: 0 }
            break
        case 'a':
            if (lastInputDirection.x !== 0) break
            moveSound.play();
            inputDirection = { x: -1, y: 0 }
            break
        default:
            break
    }
})
window.addEventListener('keypress', (e) => {
    switch (e.key) {
        case '8':
            if (lastInputDirection.y !== 0) break
            moveSound.play();
            inputDirection = { x: 0, y: -1 }
            break
        case '2':
            if (lastInputDirection.y !== 0) break
            moveSound.play();
            inputDirection = { x: 0, y: 1 }
            break
        case '6':
            if (lastInputDirection.x !== 0) break
            moveSound.play();
            inputDirection = { x: 1, y: 0 }
            break
        case '4':
            if (lastInputDirection.x !== 0) break
            moveSound.play();
            inputDirection = { x: -1, y: 0 }
            break
        default:
            break
    }
})
export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}