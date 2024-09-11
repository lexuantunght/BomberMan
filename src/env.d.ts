/// <reference types="vite/client" />
/// <reference types="common/cocos2d" />

interface ImportMetaEnv {
    readonly VITE_APP_VERSION: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare var __DEV__: boolean;
declare var __PLATFORM__: 'win32' | 'darwin' | 'web';
