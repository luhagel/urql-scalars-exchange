# URQL Scalars Exchange

urql exchange to allow mapping of custom scalar types

## Example

```sh
pnpm add urql-scalars-exchange
```

or

```
npm install --save urql-scalars-exchange
```

Define a custom scalar like `Json` in your schema via:

```gql
scalar Json
```

Download the introspection query from your endpoint. See the [urql docs](https://formidable.com/open-source/urql/docs/graphcache/schema-awareness/#getting-your-schema) for a script to download the schema from your endpoint.

Or, you can use an introspection `.ts` file genereated by `graphql-codegen` or `gql.tada`.

Configure the exchange like so

```js
import customScalarsExchange from 'urql-scalars-exchange'
import schema from '../schema.json'
// or `import { schema } from '../introspection.ts`

const scalarsExchange = customScalarsExchange({
	schema: schema,
	scalars: {
		Json(value) {
			return JSON.parse(value)
		},
	},
})
```

Finally add the exchange to your urql client like so

```js
const client = createClient({
	url: 'http://localhost:1234/graphql',
	exchanges: [dedupExchange, scalarsExchange, fetchExchange],
})
```

## FAQ

### Should this exchange be listed before or after the cache exchange?

This exchange should be listed before any cache exchange. Cache exchanges
should represent the the data as returned by the endpoint.

## Local Development

Below is a list of commands you will probably find useful.

### `npm run build` or `pnpm build`

Bundles the package to the `dist` folder. The package is optimized and bundled
with Rollup into multiple formats (CommonJS, UMD, and ES Module).

### `npm test` or `pnpm test`

Runs the test watcher (vitest) in an interactive mode.

## Acknowledgements

This project is an updated fork of the `urql-custom-scalars-exchange` project.

I have incorporated the changes made in the following PRs, so credit goes to the respective authors (thanks !):

- https://github.com/clentfort/urql-custom-scalars-exchange/pull/27 @mvarendorff
- https://github.com/clentfort/urql-custom-scalars-exchange/pull/25 @OzTK
- https://github.com/clentfort/urql-custom-scalars-exchange/pull/23 @DarryQueen

and @rwe for offering some advice and review on those PRs.
