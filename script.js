const eyeArt = `
           _ . - = - . _
       . "  \\  \\   /  /  " .
     ,  \\                 /  .
   . \\   _,.--~=~"~=~--.._   / .
  ;  _.-"  / \\ !   ! / \\  "-._  .
 / ,"     / ,\` .---. \`, \\     ". \\
/.'   \`~  |   /:::::\\   |  ~\`   '.\\
\\\`.  \`~   |   \\:::::/   | ~\`  ~ .'/
 \\ \`.  \`~ \\ \`, \`~~~' ,\` /   ~\`.' /
  .  "-._  \\ / !   ! \\ /  _.-"  .
   ./    "=~~.._  _..~~=\`"    \\.
     ,/         ""          \\,
       . _/             \\_ . 
          " - ./. .\\. - "
`;

const story = [
    "they found him in his room on march 16th.",
    "",
    "the boy was eight years old. his mother said he'd been talking to someone for weeks. someone named alex. she thought it was an imaginary friend.",
    "",
    "the doctors diagnosed him with early-onset schizophrenia three months before. prescribed medication. his mother said he stopped taking it.",
    "",
    "he spent hours on the old computer in the basement. playing games on abandoned servers. she didn't think much of it.",
    "",
    "the last thing he told her: 'alex says i can stay with him. he's been alone for so long.'",
    "",
    "they found the server logs on the computer. player 'alex' last connected march 16, 2022 at 00:11. disconnected at 00:11. connected again at 00:11.",
    "",
    "the boy died at 03:47 am.",
    "",
    "the server is still running.",
];

document.getElementById('eye').textContent = eyeArt;

const contentEl = document.getElementById('content');
let lineIndex = 0;

// Start music
const bgMusic = document.getElementById('bgMusic');
bgMusic.volume = 0.3;
bgMusic.play().catch(() => {
    // If autoplay is blocked, play on first user interaction
    document.addEventListener('click', () => {
        bgMusic.play();
    }, { once: true });
});

function typeStory() {
    if (lineIndex < story.length) {
        const p = document.createElement('p');
        p.textContent = story[lineIndex];
        p.style.opacity = '0';
        contentEl.appendChild(p);
        
        setTimeout(() => {
            p.style.transition = 'opacity 1s';
            p.style.opacity = '1';
        }, 50);
        
        lineIndex++;
        setTimeout(typeStory, 1800);
    } else {
        // Show button when story is complete
        setTimeout(() => {
            hiddenLink.classList.add('visible');
        }, 2000);
    }
}

setTimeout(typeStory, 1000);

// Hidden link functionality
const hiddenLink = document.getElementById('hiddenLink');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

hiddenLink.addEventListener('click', () => {
    overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('active');
    }
});
