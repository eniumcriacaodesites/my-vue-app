/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";
import * as components from 'vuetify/components'

import { VuetifyDateAdapter } from "vuetify/labs/date/adapters/vuetify";

import * as directives from 'vuetify/directives'

export default createVuetify({
   components,
   directives,
   icons: {
      defaultSet: 'mdi'
   },
   date: {
      adapter: VuetifyDateAdapter
   }
})