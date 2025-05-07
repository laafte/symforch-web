#!/bin/bash

if [ $# -ne 1 ]
then
	echo -e "Wrong number of arguments.\nUsage: ./deploy.sh <Samfundet-username>\nExample: ./deploy.sh sigurask"
	exit
fi

echo "Building site:"
hugo

USERNAME=$1
echo "Deploying site with rsync"
rsync -avz ./public/ $USERNAME@cassarossa.samfundet.no:/home/cassarossa/laafte/symforch/web/build --delete