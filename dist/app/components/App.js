import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader';
// https://github.com/libp2p/js-libp2p/blob/master/examples/libp2p-in-the-browser/index.js
var items = [
    React.createElement("div", { key: 0 }, "first"),
    React.createElement("div", { key: 1 }, "second")
];
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
//},
//}
// https://github.com/electron/electron/issues/21437#issuecomment-573522360
var getFileExtension = function (filepath) {
    var baseName = filepath.split(/[\\/]/).pop(); // extracts file name from full path
    var pos = baseName.lastIndexOf("."); // gets the last position of `.`
    if (baseName === "" || pos < 1) { // if the file name is empty or ...
        return ""; // the dot not found (-1) or comes first (0)
    }
    else {
        return baseName.slice(pos + 1); // extracts extension ignoring "."
    }
};
function App() {
    var _a = useState("A-Type"), win = _a[0], setWin = _a[1];
    var filePath_1 = '/home/marco/Downloads/Art21Costituzione.jpg';
    var filePath_2 = '/home/marco/Downloads/VitaminaCAlimenti.pdf';
    var filePaths = ['/home/marco/Downloads/Art21Costituzione.jpg', '/home/marco/Downloads/VitaminaCAlimenti.pdf'];
    // https://github.com/electron/electron/issues/7193
    // https://medium.com/jspoint/working-with-files-i-o-in-an-electron-application-b4d2de403f54
    // IMPORTANT: 
    // https://www.electronjs.org/docs/api/file-object
    // https://github.com/feross/drag-drop
    // https://medium.com/@650egor/simple-drag-and-drop-file-upload-in-react-2cb409d88929
    // https://github.com/react-dnd/react-dnd
    function handleSecondWindowType(fp) {
        var fileExtens = getFileExtension(fp);
        if (fileExtens.includes('jpg')) {
            setWin("A-Type");
            // https://stackoverflow.com/questions/53753181/webcontents-send-and-ipcrenderer-on-not-working
            //window.api.send('open-type-A-window', '');
            //window.api.electronIpcOn('window-A-opened', (event, args) => {
            //console.log("Window ID Just Opened: ", args);
            //if (args === 'ok') {
            //console.log("I can now send the filepath to the second window");
            //window.api.electronIpcSend('window-A-channel', filePath_1);
            //}
            //});
        }
    }
    useEffect(function () {
        //handleSecondWindowType(filePath_1);
    }, []);
    var sendFilePathFunct = function () {
        // https://stackoverflow.com/questions/53753181/webcontents-send-and-ipcrenderer-on-not-working
        if (win === "A-Type") {
            window.api.send('open-type-A-window', '');
            // https://stackoverflow.com/questions/53753181/webcontents-send-and-ipcrenderer-on-not-working
            window.api.electronIpcOn('window-A-opened', function (event, args) {
                console.log("Window ID Just Opened: ", args);
                if (args === 'ok') {
                    console.log("I can now send the filepath to the second window");
                    window.api.electronIpcSend('window-A-channel', filePath_1);
                }
            });
            window.api.electronIpcOn('window-A-channel', function (event, args) {
                console.log("App.tsx-Message from main.ts: ", args);
            });
        }
    };
    return (React.createElement("div", { className: 'container' },
        React.createElement("h2", { className: 'heading' }, "Multiple Selective Windows Communication"),
        React.createElement("p", null,
            React.createElement("button", { id: "sendFilePath", onClick: function () {
                    sendFilePathFunct();
                } }, "Send File Path to the Second Window"))));
}
export default hot(module)(App);
//# sourceMappingURL=App.js.map