const generateDefaults = require('../common')

module.exports = {
  name: 'component',
  alias: ['c'],
  description: 'Creates a class component',
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { info }
    } = toolbox

    const { path, extension, name } = generateDefaults(parameters)

    await generate({
      template: 'component.js.ejs',
      target: `${path}.js`,
      props: { name }
    })

    info(`Generated file at ${path}.js`)
  }
}
