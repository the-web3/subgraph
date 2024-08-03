#!/bin/bash

export CONTRACT=0xB11eDbA5850567B6c5fBf053aA5ab02B9Fa5Bee3
cast call $CONTRACT "registry()" --rpc-url http://localhost:8546
cast call $CONTRACT "serviceManager()" --rpc-url http://localhost:8546

