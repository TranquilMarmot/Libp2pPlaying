"use strict";
window.api = {
    send: function (channel, data) {
        ipcRenderer.invoke(channel, data).catch(function (e) { return console.log(e); });
    },
    receive: function (channel, func) {
        console.log("preload-receive called. args: ");
        ipcRenderer.on(channel, function (event) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return func.apply(void 0, args);
        });
    },
    electronIpcSendTo: function (window_id, channel) {
        var arg = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            arg[_i - 2] = arguments[_i];
        }
        ipcRenderer.sendTo(window_id, channel, arg);
    },
    electronIpcSend: function (channel) {
        var arg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            arg[_i - 1] = arguments[_i];
        }
        ipcRenderer.send(channel, arg);
    },
    electronIpcSendSync: function (channel) {
        var arg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            arg[_i - 1] = arguments[_i];
        }
        return ipcRenderer.sendSync(channel, arg);
    },
    electronIpcOn: function (channel, listener) {
        ipcRenderer.on(channel, listener);
    },
    electronIpcOnce: function (channel, listener) {
        ipcRenderer.once(channel, listener);
    },
    electronIpcRemoveListener: function (channel, listener) {
        ipcRenderer.removeListener(channel, listener);
    },
    electronIpcRemoveAllListeners: function (channel) {
        ipcRenderer.removeAllListeners(channel);
    }
};
//# sourceMappingURL=window.js.map