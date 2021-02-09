'use strict'

const { app, BrowserWindow } = require('electron')
//const IPFS = require('ipfs')


// https://github.com/libp2p/js-libp2p/blob/master/examples/peer-and-content-routing/1.js

//const Libp2p = require('libp2p')
//const TCP = require('libp2p-tcp');
//const Mplex = require('libp2p-mplex');
//const { NOISE } = require('libp2p-noise');
//const KadDHT = require('libp2p-kad-dht');
//const delay = require('delay');

import Libp2p from 'libp2p';


//import { peerRouting, contentRouting } from './libp2p/peer_content_routing';
//import { contentRouting } from './libp2p/peer_content_routing';

//import { peerRouting } from './libp2p/peer_content_routing';

//const { contentRouting } = require('./libp2p/peer_content_routing');

//contentRouting();


import './window';










let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#242424',
    webPreferences: {
      nodeIntegration: false,
      enableRemoteModule: false,
      contextIsolation: true,
      nodeIntegrationInWorker: false,
      nodeIntegrationInSubFrames: false,
      webSecurity: true,
      webviewTag: false,
      webaudio: true,
      preload: './preload',
    },
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.on('close', () => {
    console.log('Closing mainWindow...');
  });


  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', async () => {
  createWindow()

  //try {
  //} catch (err) {
  //  console.error(err)
  //}
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') { app.quit() }
  // stop libp2p
  //const nodeStop = async () => {  
    //await node.stop();
  //}
  //nodeStop;
})

app.on('activate', () => {
  if (mainWindow === null) { createWindow() }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
