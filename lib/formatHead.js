const formatScope = scope => scope ? `(${scope}):` : ':'

export default ({ type, scope, subject }, config) => {
  const prelude = `${formatScope(scope)} ${type.emoji}`

  return `${type.name}${prelude} ${subject}`
}
