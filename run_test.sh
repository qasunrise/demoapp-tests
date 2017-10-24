#!/usr/bin/env bash
CURR_DIR_NAME=$(dirname $0)
PATH_TO_SCRIPT=$(readlink $0) # follow symlink
DIR_NAME=$(dirname $PATH_TO_SCRIPT)
CWD=$(pwd)
./node_modules/.bin/codeceptjs run --config=$CURR_DIR_NAME/$DIR_NAME/codecept.json --override "$(node $CURR_DIR_NAME/$DIR_NAME/configure.js)" --reporter mochawesome 
