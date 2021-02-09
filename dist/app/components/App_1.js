var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader';
// https://github.com/libp2p/js-libp2p/blob/master/examples/libp2p-in-the-browser/index.js
import Libp2p from 'libp2p';
import Websockets from 'libp2p-websockets';
import WebRTCStar from 'libp2p-webrtc-star';
import { NOISE } from 'libp2p-noise';
import Mplex from 'libp2p-mplex';
import Bootstrap from 'libp2p-bootstrap';
//import MulticastDNS from 'libp2p-mdns';
document.addEventListener('DOMContentLoaded', function () { return __awaiter(void 0, void 0, void 0, function () {
    function log(txt) {
        console.info(txt);
        output.textContent += txt.trim() + "\n";
    }
    var libp2p, status, output;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, Libp2p.create({
                    addresses: {
                        // Add the signaling server address, along with our PeerId to our multiaddrs list
                        // libp2p will automatically attempt to dial to the signaling server so that it can
                        // receive inbound connections from other peers
                        listen: [
                            '/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star',
                            '/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star'
                        ]
                    },
                    modules: {
                        transport: [Websockets, WebRTCStar],
                        connEncryption: [NOISE],
                        streamMuxer: [Mplex],
                        //peerDiscovery: [MulticastDNS]
                        peerDiscovery: [Bootstrap]
                    },
                    config: {
                        peerDiscovery: (_a = {},
                            // The `tag` property will be searched when creating the instance of your Peer Discovery service.
                            // The associated object, will be passed to the service when it is instantiated.
                            _a[Bootstrap.tag] = {
                                enabled: true,
                                list: [
                                    '/dnsaddr/bootstrap.libp2p.io/p2p/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN',
                                    '/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb',
                                    '/dnsaddr/bootstrap.libp2p.io/p2p/QmZa1sAxajnQjVM8WjWXoMbmPd7NsWhfKsPkErzpm9wGkp',
                                    '/dnsaddr/bootstrap.libp2p.io/p2p/QmQCU2EcMqAqQPR2i9bChDtGNJchTbq5TbXJJ16u19uLTa',
                                    '/dnsaddr/bootstrap.libp2p.io/p2p/QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt',
                                    // https://github.com/ipfs/js-ipfs/tree/master/examples/browser-exchange-files#use-your-own-libp2p-webrtc-star-signaling-server
                                    '/dnsaddr/ip4/127.0.0.1/tcp/9090/wss/p2p-webrtc-star'
                                ]
                            },
                            _a),
                    }
                })
                // https://github.com/libp2p/js-libp2p/blob/master/examples/libp2p-in-the-browser/index.js
                // UI elements
            ];
            case 1:
                libp2p = _b.sent();
                status = document.getElementById('status');
                output = document.getElementById('output');
                output.textContent = '';
                //const mdns = new MulticastDNS();
                // Listen for new peers
                libp2p.on('peer:discovery', function (peerId) {
                    log("Found peer " + peerId.toB58String());
                });
                // Listen for new connections to peers
                libp2p.connectionManager.on('peer:connect', function (connection) {
                    log("Connected to " + connection.remotePeer.toB58String());
                });
                // Listen for peers disconnecting
                libp2p.connectionManager.on('peer:disconnect', function (connection) {
                    log("Disconnected from " + connection.remotePeer.toB58String());
                });
                return [4 /*yield*/, libp2p.start()];
            case 2:
                _b.sent();
                status.innerText = 'libp2p started!';
                log("libp2p id is " + libp2p.peerId.toB58String());
                // Export libp2p to the window so you can play with the API
                // @ts-ignore
                window.libp2p = libp2p;
                return [2 /*return*/];
        }
    });
}); });
var items = [
    React.createElement("div", { key: 0 }, "first"),
    React.createElement("div", { key: 1 }, "second")
];
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
        React.createElement("div", { id: "status" }),
        React.createElement("div", { id: "output" }),
        React.createElement("p", null,
            React.createElement("button", { id: "sendFilePath", onClick: function () {
                    sendFilePathFunct();
                } }, "Send File Path to the Second Window"))));
}
export default hot(module)(App);
//# sourceMappingURL=App_1.js.map