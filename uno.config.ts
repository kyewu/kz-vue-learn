import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  rules: [['m-1', { margin: '0.25rem' }]],
  shortcuts: {
    'btn-green': 'text-white bg-green-500 hover:bg-green-700'
  },
  presets: [
    presetWind(), // use tailwind css preset for UnoCSS,
    presetAttributify(),
    presetIcons({
      // use icon preset for UnoCSS, install icon/json files manually
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    })
  ],
  transformers: [
    // <div class="hover:(bg-gray-400 font-medium) font-(light mono)"/>
    // transfor to <div class="hover:bg-gray-400 hover:font-medium font-light font-mono"/>
    transformerVariantGroup(),
    transformerDirectives()
  ]
})
