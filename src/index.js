import Splash from 'splash';
import SplashJPG from 'resources/splash.jpg';

function installEngine() {
    return new Promise((resolve, reject) => {
        const scriptLoader = document.createElement('script');
        scriptLoader.addEventListener('load', () => resolve(scriptLoader));
        scriptLoader.addEventListener('error', (e) => reject(e));
        scriptLoader.src = new URL('./common/cocos2d', import.meta.url);
        document.body.appendChild(scriptLoader);
    });
}

function startup() {
    const splash = new Splash({ backgroundImage: SplashJPG });
    splash.render();

    installEngine()
        .then(() => import('game'))
        .then((Game) => Game.start())
        .then(() => {
            splash.signalProgress(0.5);
        });
}

startup();
