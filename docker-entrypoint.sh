#!/bin/sh

set -e

yarn sequelize db:migrate

yarn sequelize db:seed:all --debug

node src/server.js