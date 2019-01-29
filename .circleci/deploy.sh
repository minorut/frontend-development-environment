#!/bin/sh
REPO_DIR=/tmp/repo
REPO_PUBLIC_DIR=${REPO_DIR}/public
REPO_REVISION_FILE=${REPO_DIR}/revision
DIST_DIR=/var/www/html-releases/fde/`date +%s`
DIST_PUBLIC_DIR=${DIST_DIR}/public
DOCUMENT_ROOT=/var/www/html/fde

cd ${REPO_DIR}
sudo mkdir -p ${DIST_DIR}
sudo cp -R ${REPO_PUBLIC_DIR} ${DIST_DIR}
sudo cp ${REPO_REVISION_FILE} ${DIST_DIR}
sudo chown -R apache:apache ${DIST_PUBLIC_DIR}
find ${DIST_PUBLIC_DIR} -type d -exec sudo chmod 0755 {} +
find ${DIST_PUBLIC_DIR} -type f -exec sudo chmod 0644 {} +
sudo ln -nfs ${DIST_PUBLIC_DIR} ${DOCUMENT_ROOT}
