const wrap = require('wrap-ansi')
const truncate = require('cli-truncate')

const formatIssues = issues =>
  issues ? 'Closes ' + (issues.match(/#\d+/g) || []).join(', closes ') : ''

module.exports = answers => {
  const { columns } = process.stdout

  const head = truncate(answers.subject, columns)
  const body = wrap(answers.body || '', columns)
  const breaking = answers.breakingBody && answers.breakingBody.trim().length
    ? wrap(`BREAKING CHANGE: ${answers.breakingBody.trim()}`, columns)
    : ''
  const footer = formatIssues(answers.issues)

  return [head, body, breaking, footer]
    .filter(Boolean)
    .join('\n\n')
    .trim()
}