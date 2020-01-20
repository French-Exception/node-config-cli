# About

Configuration CLI gives you command line interface over Configuration files

# Installation

## As a global package
```typescript
npm install -g @frenchex/config-cli
```

## As a dependency

You better use the ```api``` version of this software : @frenchex/config-api

https://github.com/french-exception/node-config-api

https://www.npmjs.com/package/@frenchex/config-api

```typescript
npm install --save @frenchex/config-api
```


# Example

```bash
env=dev frenchex-config get "foo.bar" --config ./test-res/js.js --env env
env=dev frenchex-config set "foo.bar" "my_value_%env%" --config ./test-res/js.js --env env
```
