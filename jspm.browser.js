SystemJS.config({
  paths: {
    "github:*": "/beta/jspm_packages/github/*",
    "npm:*": "/beta/jspm_packages/npm/*",
    "troxel/": "/beta/coffee/"
  },
  depCache: {
    "github:mrdoob/three.js@r71/examples/js/postprocessing/EffectComposer.js": [
      "three"
    ],
    "github:mrdoob/three.js@r71/examples/js/postprocessing/MaskPass.js": [
      "three"
    ],
    "github:mrdoob/three.js@r71/examples/js/postprocessing/RenderPass.js": [
      "three"
    ],
    "github:mrdoob/three.js@r71/examples/js/postprocessing/ShaderPass.js": [
      "three"
    ],
    "github:mrdoob/three.js@r71/examples/js/shaders/CopyShader.js": [
      "three"
    ],
    "github:mrdoob/three.js@r71/examples/js/shaders/FXAAShader.js": [
      "three"
    ],
    "github:mrdoob/three.js@r71/examples/js/shaders/SSAOShader.js": [
      "three"
    ],
    "github:twbs/bootstrap@3.3.6/dist/js/bootstrap.js": [
      "jquery"
    ],
    "github:twitter/typeahead.js@0.11.1/dist/typeahead.jquery.js": [
      "jquery"
    ],
    "troxel/Controls.coffee": [
      "three"
    ],
    "troxel/Editor.coffee": [
      "three",
      "stats",
      "./Troxel.io.coffee",
      "jquery",
      "./Renderer.coffee"
    ],
    "troxel/JSON.io.coffee": [
      "./IO.coffee"
    ],
    "troxel/Magica.io.coffee": [
      "./IO.coffee"
    ],
    "troxel/Main.coffee!github:chrmoritz/system-coffee@0.2.0/coffee.js": [
      "bootstrap/dist/css/bootstrap.css",
      "bootstrap/dist/css/bootstrap-theme.css",
      "./Main.css",
      "./IO.coffee",
      "./Troxel.io.coffee",
      "./JSON.io.coffee",
      "./Qubicle.io.coffee",
      "./Magica.io.coffee",
      "./Zoxel.io.coffee",
      "./Editor.coffee",
      "./TroveCreationsLint.coffee",
      "three",
      "jszip",
      "typeahead",
      "bootstrap",
      "bluebird"
    ],
    "troxel/Qubicle.io.coffee": [
      "./IO.coffee"
    ],
    "troxel/Renderer.coffee": [
      "three",
      "three/examples/js/shaders/SSAOShader",
      "three/examples/js/shaders/FXAAShader",
      "three/examples/js/shaders/CopyShader",
      "three/examples/js/postprocessing/ShaderPass",
      "three/examples/js/postprocessing/RenderPass",
      "three/examples/js/postprocessing/MaskPass",
      "three/examples/js/postprocessing/EffectComposer",
      "./Controls.coffee",
      "jquery"
    ],
    "troxel/Troxel.io.coffee": [
      "./IO.coffee"
    ],
    "troxel/Zoxel.io.coffee": [
      "./IO.coffee"
    ]
  }
});