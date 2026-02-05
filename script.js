const eyeArt = `
                                ...',;;:cccccccc:;,..
                            ..,;:cccc::::ccccclloooolc;'.
                         .',;:::;;;;:loodxk0kkxxkxxdocccc;;'..
                       .,;;;,,;:coxldKNWWWMMMMWNNWWNNKkdolcccc:,.
                    .',;;,',;lxo:...dXWMMMMMMMMNkloOXNNNX0koc:coo;.
                 ..,;:;,,,:ldl'   .kWMMMWXXNWMMMMXd..':d0XWWN0d:;lkd,
               ..,;;,,'':loc.     lKMMMNl. .c0KNWNK:  ..';lx00X0l,cxo,.
             ..''....'cooc.       c0NMMX;   .l0XWN0;       ,ddx00occl:.
           ..'..  .':odc.         .x0KKKkolcld000xc.       .cxxxkkdl:,..
         ..''..   ;dxolc;'         .lxx000kkxx00kc.      .;looolllol:'..
        ..'..    .':lloolc:,..       'lxkkkkk0kd,   ..':clc:::;,,;:;,'..
        ......   ....',;;;:ccc::;;,''',:loddol:,,;:clllolc:;;,'........
            .     ....'''',,,;;:cccccclllloooollllccc:c:::;,'..
                    .......'',,,,,,,,;;::::ccccc::::;;;,,''...
                      ...............''',,,;;;,,''''''......
                           ............................
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

const enterScreen = document.getElementById('enterScreen');
const mainContent = document.getElementById('mainContent');
const bgMusic = document.getElementById('bgMusic');

enterScreen.addEventListener('click', () => {
    bgMusic.volume = 0.3;
    bgMusic.play();
    
    enterScreen.style.opacity = '0';
    
    setTimeout(() => {
        enterScreen.style.display = 'none';
        mainContent.style.display = 'block';
        
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 50);
        
        setTimeout(typeStory, 1000);
    }, 500);
});

document.getElementById('eye').textContent = eyeArt;

const contentEl = document.getElementById('content');
let lineIndex = 0;

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
        setTimeout(() => {
            hiddenLink.classList.add('visible');
        }, 2000);
    }
}

const hiddenLink = document.getElementById('hiddenLink');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

hiddenLink.addEventListener('click', () => {
    overlay.style.display = 'flex';
    setTimeout(() => {
        overlay.classList.add('active');
    }, 10);
});

closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 400);
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 400);
    }
});
