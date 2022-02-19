const wheel = document.querySelector('.wheel');
const startButton = document.querySelector('.button');
let degree = 0;

function spin() {
    /* startButton.addEventListener('click', () => {
        // Need to disable button after the user has clicked it
        startButton.style.pointerEvents = 'none';
        
        console.log('I spun');
        
        // Calculate the spin of the circle
        degree = Math.floor(250 + Math.random() * 250);
        
        // Want the wheel to start moving but slow down near the end.
        wheel.style.transition = 'all 10s eas-out';
        wheel.style.transform = `rotate(${degree}degree)`;
        
    });
    */
    
    console.log('I spun');
    wheel.addEventListener('transitionend', () => {
        
    });
}

console.log('What up?');