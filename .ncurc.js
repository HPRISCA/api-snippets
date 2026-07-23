module.exports = {
  reject: [
    // commander 15.x is a new major; pin to 14.x pending a deliberate upgrade.
    'commander',
    // TypeScript 7.x. contains breaking change with openapi-typescript
    'typescript'
  ]
}
