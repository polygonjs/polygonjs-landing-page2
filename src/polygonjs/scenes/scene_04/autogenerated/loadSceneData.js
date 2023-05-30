import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1685480417272",
  root: "1684622508824",
  nodes: {
    geo1: "1684623137677",
    "geo1/MAT": "1684618262298",
    "geo1/MAT/meshStandardBuilder_GROUND": "1685480417272",
    "geo1/MAT/meshStandardBuilder_PLAYER": "1685480417272",
    "geo1/MAT/meshStandardBuilder_BLOCKS": "1685480417272",
    "geo1/physicsPlayer1": "1684677476810",
    "geo1/cameraControls_PLAYER1": "1684664308093",
    "geo1/physicsWorld1": "1684622347434",
    lights: "1684622582531",
    cameras: "1684618262298",
    "cameras/cameraControls1": "1684623137677",
    env: "1684706453144",
    "env/MAT": "1684706453144",
    "env/MAT/meshLambertBuilder_INSTANCES": "1685480417272",
  },
  shaders: {
    "/geo1/MAT/meshStandardBuilder_GROUND": {
      vertex: "1685480417272",
      fragment: "1685480417272",
      "customDepthMaterial.vertex": "1684618414151",
      "customDepthMaterial.fragment": "1684618414151",
      "customDistanceMaterial.vertex": "1684618414151",
      "customDistanceMaterial.fragment": "1684618414151",
      "customDepthDOFMaterial.vertex": "1684618414151",
      "customDepthDOFMaterial.fragment": "1684618414151",
    },
    "/geo1/MAT/meshStandardBuilder_PLAYER": {
      vertex: "1684618414151",
      fragment: "1684618414151",
      "customDepthMaterial.vertex": "1684618414151",
      "customDepthMaterial.fragment": "1684618414151",
      "customDistanceMaterial.vertex": "1684618414151",
      "customDistanceMaterial.fragment": "1684618414151",
      "customDepthDOFMaterial.vertex": "1684618414151",
      "customDepthDOFMaterial.fragment": "1684618414151",
    },
    "/geo1/MAT/meshStandardBuilder_BLOCKS": {
      vertex: "1684618414151",
      fragment: "1684618414151",
      "customDepthMaterial.vertex": "1684618414151",
      "customDepthMaterial.fragment": "1684618414151",
      "customDistanceMaterial.vertex": "1684618414151",
      "customDistanceMaterial.fragment": "1684618414151",
      "customDepthDOFMaterial.vertex": "1684618414151",
      "customDepthDOFMaterial.fragment": "1684618414151",
    },
    "/env/MAT/meshLambertBuilder_INSTANCES": {
      vertex: "1684618414151",
      fragment: "1684618414151",
      "customDepthMaterial.vertex": "1684618414151",
      "customDepthMaterial.fragment": "1684618414151",
      "customDistanceMaterial.vertex": "1684618414151",
      "customDistanceMaterial.fragment": "1684618414151",
      "customDepthDOFMaterial.vertex": "1684618414151",
      "customDepthDOFMaterial.fragment": "1684618414151",
    },
  },
  jsFunctionBodies: {
    "/geo1/physicsPlayer1": "1684677476810",
    "/geo1/physicsWorld1": "1684618414151",
  },
};

export const loadSceneData_scene_04 = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "scene_04",
    urlPrefix: sceneDataRoot + "/scene_04",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
