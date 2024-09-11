function installEngine() {
    return new Promise((resolve, reject) => {
        const scriptLoader = document.createElement('script');
        scriptLoader.addEventListener('load', () => resolve(scriptLoader));
        scriptLoader.addEventListener('error', (e) => reject(e));
        scriptLoader.src = new URL('./common/cocos2d', import.meta.url);
        document.body.appendChild(scriptLoader);
    });
}

installEngine()
    .then(() => import('game'))
    .then((Game) => Game.start());
