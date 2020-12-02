#!/usr/bin/env bash

set -e

# if ! which jq 2>&1 > /dev/null; then
#     echo "Please install 'jq' first"
#     exit 1
# fi

# if ! which graph 2>&1 > /dev/null; then
#     echo "Please install 'graph-cli' first; npm install -g @graphprotocol/graph-cli"
#     exit 1
# fi

jq -c '.[]' ./config/subgraph-config.json | while read i; do

    # Identify the subgraph template   
    echo "🛠 ### Preparing subgraph template for..."
    address=$(echo $i | jq -r .address)
    network=$(echo $i | jq -r .network)
    export GITHUB_USERNAME=$(echo $i | jq -r .GITHUB_USERNAME)
    export SUBGRAPH_NAME=$(echo $i | jq -r .SUBGRAPH_NAME)

    # Display JSON template object
    echo "
        ADDRESS: ${address}
        NETWORK: ${network}
        GITHUB_USERNAME: ${GITHUB_USERNAME}
        SUBGRAPH_NAME: ${SUBGRAPH_NAME}
    "

    # Temp save network template data 
    echo $i > temp.json

    # Create subgraph template using temp.json
    # yarn run mustache temp.json subgraph.template.yaml > subgraph.yaml
    yarn run build-template

    # Build subgraph 
    echo "📦 ### Building subgraph..."
    yarn run build

     # Authenticate access  
    # echo "🔑 ### Authenticate..."
    # yarn run auth

    echo $GITHUB_USERNAME/$SUBGRAPH_NAME

    # Deploy subgraph <GITHUB_USERNAME/SUBGRAPH_NAME>
    echo "🚗 ### Deploying subgraph..."
    GRAPH_DEPLOY="graph deploy --node https://api.thegraph.com/deploy/ --ipfs https://api.thegraph.com/ipfs/ $GITHUB_USERNAME/$SUBGRAPH_NAME"
    echo $("$GRAPH_DEPLOY")
    # echo $GRAPH_DEPLOY

    # GRAPH_DEPLOY=$(graph deploy --node https://api.thegraph.com/deploy/ --ipfs https://api.thegraph.com/ipfs/)
    # echo "$GRAPH_DEPLOY $GITHUB_USERNAME/$SUBGRAPH_NAME

    echo "👏 ### Done.
    
    "
done

echo "🎉 ### Deployment successful!"
