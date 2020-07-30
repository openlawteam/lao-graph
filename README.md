# LAO Graph

> Graph definition for The LAO

## Redeploying a subgraph

### Multiple Ethereum networks setup

Managing different network deployments for the contracts, is currently setup using config files in `/config/`, providing the addresses for each network:

For example, `/config/local.json`:

```
{
  "network": "rinkeby",
  "address": "0xAc665BE1E44cC4EeC388E34C3899C271FeE847F4"
}
```

A template manifest `subgraph.template.yaml` has been created, which uses the mustache templating system with variable placeholders `{{network}}` and `{{address}}`. To deploy the subgraph for mainnet or Rinkeby (local/dev) simply run one of the following commands:

```
# Mainnet:
yarn prepare:mainnet && graph deploy --node https://api.thegraph.com/deploy/ --ipfs https://api.thegraph.com/ipfs/ sophiacodes/the-lao

# Rinkeby (localhost):
yarn prepare:local && graph deploy --node https://api.thegraph.com/deploy/ --ipfs https://api.thegraph.com/ipfs/ sophiacodes/the-lao-localhost

# Rinkeby (develop):
yarn prepare:rinkeby && graph deploy --node https://api.thegraph.com/deploy/ --ipfs https://api.thegraph.com/ipfs/ sophiacodes/the-lao-rinkeby
```

Any changes to `mapping.ts`, `schema.ts` or `schema.graphql` will require a rebuild, use `yarn build`. Then prepare and deploy using one of the above yarn commands.

See [here](https://thegraph.com/docs/deploy-a-subgraph#redeploying-a-subgraph) for more information
