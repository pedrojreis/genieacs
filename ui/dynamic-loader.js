"use strict";

let codeMirror;
let yaml;

function loadCodeMirror() {
  if (codeMirror) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const promises = [
      import(/* webpackChunkName: "codemirror" */ "codemirror"),
      import(/* webpackChunkName: "codemirror" */ "codemirror/mode/javascript/javascript")
    ];
    Promise.all(promises)
      .then(modules => {
        codeMirror = modules[0];
        resolve();
      })
      .catch(reject);
  });
}

function loadYaml() {
  if (yaml) return Promise.resolve();

  return new Promise((resolve, reject) => {
    import(/* webpackChunkName: "yaml" */ "yaml")
      .then(module => {
        yaml = module;
        resolve();
      })
      .catch(reject);
  });
}

export { loadCodeMirror, codeMirror, loadYaml, yaml };
