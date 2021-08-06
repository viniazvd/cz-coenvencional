const createQuestions = require('./lib/createQuestions')

module.exports = {
  prompter: function({ prompt }, commit) {
    prompt.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'))
    prompt.registerPrompt('maxlength-input', require('inquirer-maxlength-input-prompt'))

    getConfig()
      .then(createQuestions)
      .then(prompt)
      .then(format)
      .then(commit)
  }
}
