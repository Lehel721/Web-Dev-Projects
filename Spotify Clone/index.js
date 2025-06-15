const songIds = [
    'UkVRAJEJ',
    'rjkrTnma',
    '57CrrdjC',
    'ohUsQ-U0',
    '1ZDlyUiL'
];

function updatecard(SongData, cardNo) {
    const card = document.getElementById(`card${cardNo}`); 

    const songname = card.querySelector('b');
    const artistname = card.querySelector('p');
    const songimage = card.querySelector('img');

    songname.textContent = SongData.name;                          
    artistname.textContent = "Various Artists"; 
  

    card.dataset.songId = SongData.id;
    card.dataset.audioUrl = SongData.downloadUrl[0].url; 
}

async function Songs() {
    try {
        for (let i = 0; i < songIds.length; i++) { 
            const songid = songIds[i];
            const cardnumber = i + 1;

            let songresponse = await fetch(`https://saavn.dev/api/songs/${songid}`); 
            let songDetails = await songresponse.json();

            updatecard(songDetails.data[0], cardnumber);
        }
    } catch (error) {
        console.log('error', error);
    }
}

function Click() {
    for (let i = 1; i <= 5; i++) {
        const card = document.getElementById(`card${i}`);

        card.addEventListener('click', () => {
            const playaudio = card.dataset.audioUrl;
            const songName = card.querySelector('b').textContent;
            const imageUrl = card.querySelector('img').src;

            playSong(playaudio, songName, imageUrl);
        });
        card.style.cursor = 'pointer';
    }
}

function playSong(audioUrl, songName, imageUrl) {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseButton = document.querySelector('.play-pause-button');
    
    // Set audio source before playing
    audioPlayer.src = audioUrl;
    
    document.querySelector('.song-title').textContent = songName;
    document.querySelector('.song-image').style.backgroundImage = `url(${imageUrl})`;
    
    audioPlayer.play();
    updatePlayButtonState(true);
}

function updatePlayButtonState(isPlaying) {
    const playPauseButton = document.querySelector('.play-pause-button');
    
    if (isPlaying) {
        playPauseButton.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M5.5 3.5A1.5 1.5 0 0 1 7 2h2a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 9 14H7a1.5 1.5 0 0 1-1.5-1.5v-9z"/>
            </svg>
        `;
    } else {
        playPauseButton.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="m3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.287V1.713z"/>
            </svg>
        `;
    }
}

function setupPlaybarControls() {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseButton = document.querySelector('.play-pause-button');
    
    playPauseButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            updatePlayButtonState(true);
        } else {
            audioPlayer.pause();
            updatePlayButtonState(false);
        }
    });
}

async function start() {
    try {
        await Songs();
        Click();
        setupPlaybarControls();
    } catch (error) {
        console.log('error', error);
    }
}

start();
