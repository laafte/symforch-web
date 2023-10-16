#!/bin/bash

if [ $# -ne 1 ]
then
	echo -e "Wrong number of arguments.\nUsage: ./deploy.sh <Samfundet-username>\nExample: ./deploy.sh sigurask"
	exit
fi
USERNAME=$1
echo "Running scp -r ./build/* $USERNAME@cassarossa.samfundet.no:/home/cassarossa/laafte/symforch/web/build"
scp -r ./build/* $USERNAME@cassarossa.samfundet.no:/home/cassarossa/laafte/symforch/web/build

