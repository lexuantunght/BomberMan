import 'reflect-metadata';

export function start() {
    const config = {
        debugMode: 1,
        frameRate: 60,
        id: 'gameCanvas',
        renderMode: 1,
        jsList: [],
        showFPS: __DEV__,
    };
    cc.game.run(config, () => {
        cc.view.enableRetina(cc.sys.os === cc.sys.OS_IOS ? true : false);
        cc.view.adjustViewPort(true);
        cc.view.resizeWithBrowserSize(true);
        cc.view.setDesignResolutionSize(960, 640, cc.ResolutionPolicy.NO_BORDER);
    });
}
