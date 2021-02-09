// https://github.com/libp2p/js-libp2p/blob/master/examples/peer-and-content-routing/1.js

const Libp2p = require('libp2p')
const TCP = require('libp2p-tcp');
const Mplex = require('libp2p-mplex');
const { NOISE } = require('libp2p-noise');
const KadDHT = require('libp2p-kad-dht');
const delay = require('delay');


export const createNode = async () => {
  const node = await Libp2p.create({
    addresses: {
      listen: ['/ip4/0.0.0.0/tcp/0']
    },
    modules: {
      transport: [TCP],
      streamMuxer: [Mplex],
      connEncryption: [NOISE],
      dht: KadDHT
    },
    config: {
      dht: {
        enabled: true
      }
    }
  })
  await node.start()
  return node
}

