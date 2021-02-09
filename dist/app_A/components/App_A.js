import React from 'react';
import { hot } from 'react-hot-loader';
//declare interface Window {
//api: {
//send: (channel: string, ...arg: any) => void;
//receive: (channel: string, func: (event: any, ...arg: any) => void) => void;
// https://github.com/frederiksen/angular-electron-boilerplate/blob/master/src/preload/preload.ts
// https://www.electronjs.org/docs/all#ipcrenderersendtowebcontentsid-channel-args
//electronIpcSendTo: (window_id: string, channel: string, ...arg: any) => void;
//electronIpcSend: (channel: string, ...arg: any) => void;
//electronIpcOn: (channel: string, listener: (event: any, ...arg: any) => void) => void;
//electronIpcSendSync: (channel: string, ...arg: any) => void;
//electronIpcOnce: (channel: string, listener: (event: any, ...arg: any) => void) => void;
//electronIpcRemoveListener:  (channel: string, listener: (event: any, ...arg: any) => void) => void;
//electronIpcRemoveAllListeners: (channel: string) => void;
//}
//}
// https://github.com/electron/electron/issues/21437#issuecomment-573522360
var filePath = '';
function App() {
    window.api.electronIpcOn("window-A-channel", function (event, args) {
        console.log("App_A-window.api.electronIpcOn-args: ", args);
        filePath = args;
    });
    window.api.electronIpcSend("from-window-A", "This is the Type-A-Window Talking!");
    console.log("filePath: ", filePath);
    return (React.createElement("div", { className: 'container' },
        React.createElement("h1", { className: 'heading' }, "A-TYPE WINDOW")));
}
export default hot(module)(App);
//# sourceMappingURL=App_A.js.map