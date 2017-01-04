Quick Start
===========

1. Install or Upgrade docker
    - visit https://docker.com/ and download and install the latest stable version of docker.

2. Login to docker-container which is installed nodejs and yarn
    >yarn
   This will install all node dependencies for the project.

3. Run
    >npm start
   and open http://localhost:3000 in the browser

4. Congrats your up in running. Editting any JS file will trigger a hot reload.

* Install eslint
  + export PKG=eslint-config-airbnb;
  + npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"

Thanks!
