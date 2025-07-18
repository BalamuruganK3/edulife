let isRunning = false;
let intervalId;

document.getElementById('startButton').addEventListener('click', () => {
    if (!isRunning) {
        startBreathingCycle();
    }
});

document.getElementById('resetButton').addEventListener('click', () => {
    resetBreathingCycle();
});

function startBreathingCycle() {
    isRunning = true;
    const circle = document.getElementById('circle');

    // Start the animation immediately
    circle.style.transition = 'none'; // Disable transition for immediate effect
    circle.style.width = '200px';
    circle.style.height = '200px';
    
    // Wait a short period to ensure the size change is applied
    setTimeout(() => {
        circle.style.transition = 'width 4s ease-in-out, height 4s ease-in-out'; // Enable transition
        circle.style.width = '100px';
        circle.style.height = '100px';
    }, 50);

    // Set the interval to continue the breathing cycle
    intervalId = setInterval(() => {
        circle.style.width = '200px';
        circle.style.height = '200px';

        setTimeout(() => {
            circle.style.width = '100px';
            circle.style.height = '100px';
        }, 4000); // Duration of inhale/exhale
    }, 8000); // Total cycle duration (inhale + exhale)
}

function resetBreathingCycle() {
    isRunning = false;
    clearInterval(intervalId);
    document.getElementById('circle').style.transition = 'none'; // Disable transition
    document.getElementById('circle').style.width = '100px';
    document.getElementById('circle').style.height = '100px';
    setTimeout(() => {
        document.getElementById('circle').style.transition = 'width 4s ease-in-out, height 4s ease-in-out'; // Re-enable transition
    }, 50);
}
