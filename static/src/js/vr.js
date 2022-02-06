import {Gltf2Node} from '/odooxr-base/static/src/js/render/nodes/gltf2.js';
import {SkyboxNode} from '/odooxr-base/static/src/js/render/nodes/skybox.js';
import {setupScene, initXR} from '/odooxr-base/static/src/js/vr.js';

setupScene((scene) => {
  let solarSystem = new Gltf2Node({url: '/odooxr-base/static/media/gltf/space/space.gltf'});
  scene.addNode(solarSystem);
  scene.addNode(new SkyboxNode({url: '/odooxr-base/static/media/textures/milky-way-4k.png'}));
})

export function initXRPortal() {
  odoo.define('odooxr-website.portal', ["web.core"], function(require) {
     "use strict";

     var core = require('web.core');

     $(document).ready(() => {
       console.info("Starting XR environment")
       initXR();
     });
  })
}
