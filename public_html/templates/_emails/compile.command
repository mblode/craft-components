#!/bin/sh

cd -- "$(dirname "$BASH_SOURCE")"

mjml ./*.mjml -o .
