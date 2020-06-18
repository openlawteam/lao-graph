# LAO Graph

> Graph definition for The LAO

## Redeploying a subgraph

### Multiple Ethereum networks setup

Managing different network deployments for the contracts, is currently setup using config files in `/config/`, providing the addresses for each network:

For example, `/config/rinkeby-local.json`:

```
{
  "network": "rinkeby",
  "address": "0xAc665BE1E44cC4EeC388E34C3899C271FeE847F4"
}
```

A template manifest `subgraph.template.yaml` has been created, which uses the mustache templating system with variable placeholders {{network}} and {{address}}. To deploy the subgraph for mainnet or Rinkeby (local/dev) simply run one of the following commands:

```
# Mainnet:
yarn prepare:mainnet && yarn deploy

# Rinkeby (localhost):
yarn rinkeby-local && yarn deploy

# Rinkeby (develop):
yarn rinkeby-dev && yarn deploy
```

See (https://thegraph.com/docs/deploy-a-subgraph#redeploying-a-subgraph)[here] for more information
