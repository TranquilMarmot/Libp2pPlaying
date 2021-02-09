interface Window {
  api: {
    send: (channel: string, ...arg: any) => void;
    receive: (channel: string, func: (event: any, ...arg: any) => void) => void;
    // https://github.com/frederiksen/angular-electron-boilerplate/blob/master/src/preload/preload.ts
    // https://www.electronjs.org/docs/all#ipcrenderersendtowebcontentsid-channel-args
    electronIpcSendTo: (
      window_id: string,
      channel: string,
      ...arg: any
    ) => void;
    electronIpcSend: (channel: string, ...arg: any) => void;
    electronIpcOn: (
      channel: string,
      listener: (event: any, ...arg: any) => void
    ) => void;
    electronIpcSendSync: (channel: string, ...arg: any) => void;
    electronIpcOnce: (
      channel: string,
      listener: (event: any, ...arg: any) => void
    ) => void;
    electronIpcRemoveListener: (
      channel: string,
      listener: (event: any, ...arg: any) => void
    ) => void;
    electronIpcRemoveAllListeners: (channel: string) => void;
  };
}

window.api = {
  send: (channel, data) => {
    ipcRenderer.invoke(channel, data).catch((e) => console.log(e));
  },
  receive: (channel, func) => {
    console.log("preload-receive called. args: ");
    ipcRenderer.on(channel, (event, ...args) => func(event, ...args));
  },
  electronIpcSendTo: (window_id: string, channel: string, ...arg: any) => {
    ipcRenderer.sendTo(window_id, channel, arg);
  },
  electronIpcSend: (channel: string, ...arg: any) => {
    ipcRenderer.send(channel, arg);
  },
  electronIpcSendSync: (channel: string, ...arg: any) => {
    return ipcRenderer.sendSync(channel, arg);
  },
  electronIpcOn: (
    channel: string,
    listener: (event: any, ...arg: any) => void
  ) => {
    ipcRenderer.on(channel, listener);
  },
  electronIpcOnce: (
    channel: string,
    listener: (event: any, ...arg: any) => void
  ) => {
    ipcRenderer.once(channel, listener);
  },
  electronIpcRemoveListener: (
    channel: string,
    listener: (event: any, ...arg: any) => void
  ) => {
    ipcRenderer.removeListener(channel, listener);
  },
  electronIpcRemoveAllListeners: (channel: string) => {
    ipcRenderer.removeAllListeners(channel);
  },
};
