import Player from '@vimeo/player';
import { throttle } from 'lodash';

const vimeo_player = document.getElementById('vimeo-player');
const storageTimer = localStorage.getItem('videoplayer-current-time');
const player = new Player(vimeo_player);

function updater() {
    player.getCurrentTime()
        .then(data => {
            localStorage.setItem('videoplayer-current-time', data);
        });
}

const throttledUpdater = throttle(updater, 1000);

player.on('timeupdate', throttledUpdater);

if (storageTimer === null) {
    player.setCurrentTime(0);
} else {
    player.setCurrentTime(storageTimer);
}