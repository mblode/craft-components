import Vue from 'vue';
import 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  // The relative path of the components folder
  '../vue',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Strip the leading `./` and extension from the filename
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})

window.Events = new Vue();

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate, {
    events: 'change|blur',
    classes: true,
    classNames: {
        invalid: 'is-invalid'
    },
    inject: false
});

window.Events = new Vue();

window.flash = function (message, type) {
    Events.$emit('flash', message, type);
};

const app = new Vue({
    el: '#app',
    delimiters: ['${', '}']
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByTagName('body')[0].classList.remove('preload');
});
