type SoundName = "flip" | "good" | "fail" | "fulltrack" | "game-over";

const audioPaths: Record<SoundName, string> = {
    flip: "./assets/audios/flip.mp3",
    good: "./assets/audios/good.mp3",
    fail: "./assets/audios/fail.mp3",
    fulltrack: "./assets/audios/fulltrack.mp3",
    "game-over": "./assets/audios/game-over.mp3",
};

const sounds: Record<SoundName, HTMLAudioElement> = {
    flip: new Audio(audioPaths.flip),
    good: new Audio(audioPaths.good),
    fail: new Audio(audioPaths.fail),
    fulltrack: new Audio(audioPaths.fulltrack),
    "game-over": new Audio(audioPaths["game-over"]),
};

sounds.fulltrack.loop = true;

function playSound(sound: SoundName): void {
    const audio = sounds[sound];
    if (!audio) return;

    if (sound === "fulltrack") {
        audio.volume = 0.35;
        audio.loop = true;
    }

    audio.currentTime = 0;
    void audio.play().catch(() => { });
}

function stopSound(sound: SoundName): void {
    const audio = sounds[sound];
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
}

function playBackground(): void {
    playSound("fulltrack");
}

function stopBackground(): void {
    stopSound("fulltrack");
}

export { playSound, playBackground, stopBackground };