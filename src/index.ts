import { Plugin, registerPlugin } from "enmity-api/plugins";

const ExamplePlugin: Plugin = {
  name: "BuiltDifferent",
  commands: [],
  patches: [],

  onStart() {
    
  },

  onStop() {

  }
}

registerPlugin(ExamplePlugin);