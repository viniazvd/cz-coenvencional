const formatScope = scope => scope ? `(${scope}):` : ':'

module.exports = ({ type, scope, subject }, config) => {
  const prelude = `${formatScope(scope)} ${type.emoji}`

  return `${type.name}${prelude} ${subject}`
}
