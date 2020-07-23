#!/bin/bash

aws \
  --profile tellnes \
  s3 sync \
  public \
  s3://tellnes/symforch/web/ \
  --acl public-read \

