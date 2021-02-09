// https://github.com/libp2p/js-libp2p/blob/master/examples/peer-and-content-routing/1.js

const Libp2p = require('libp2p')
const TCP = require('libp2p-tcp');
const Mplex = require('libp2p-mplex');
const { NOISE } = require('libp2p-noise');
const KadDHT = require('libp2p-kad-dht');
const delay = require('delay');
const CID = require('cids');
const all = require('it-all');

import { createNode } from './node_creation';

//;(async () => {
//
//})();

//let node1, node2, node3;

//export const peerRouting = async () => {
  //const [node1, node2, node3] = await Promise.all([
    //createNode(),
    //createNode(),
    //createNode()
  //])
  //node1.peerStore.addressBook.set(node2.peerId, node2.multiaddrs)
  //node2.peerStore.addressBook.set(node3.peerId, node3.multiaddrs)

  //await Promise.all([
    //node1.dial(node2.peerId),
    //node2.dial(node3.peerId)
  //])

  // The DHT routing tables need a moment to populate
  //await delay(100)

  //const peer = await node1.peerRouting.findPeer(node3.peerId)

  //console.log('Found it, multiaddrs are:')
  //peer.multiaddrs.forEach((ma) => console.log(`${ma.toString()}/p2p/${peer.id.toB58String()}`))
//}

//export const createNode = async () => {
export const contentRouting = async () => {
  const [node1, node2, node3] = await Promise.all([
    createNode(),
    createNode(),
    createNode()
  ])
  node1.peerStore.addressBook.set(node2.peerId, node2.multiaddrs)
  node2.peerStore.addressBook.set(node3.peerId, node3.multiaddrs)

  await Promise.all([
    node1.dial(node2.peerId),
    node2.dial(node3.peerId)
  ])

  // Wait for onConnect handlers in the DHT
  await delay(100)

  const cid = new CID('QmTp9VkYvnHyrqKQuFPiuZkiX9gPcqj6x5LJ1rmWuSySnL')
  await node1.contentRouting.provide(cid)

  console.log('Node %s is providing %s', node1.peerId.toB58String(), cid.toBaseEncodedString())

  // wait for propagation
  await delay(300)

  const providers = await all(node3.contentRouting.findProviders(cid, { timeout: 3000 }))

  console.log('Found provider:', providers[0].id.toB58String())

}

