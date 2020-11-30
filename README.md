# Test project installation

1: Clone project
 
```sh
cd /my/path/test-work
git clone git@github.com:artesx/test-ts.git .
```
2: Install Docker and docker-compose https://docs.docker.com/install/ https://docs.docker.com/compose/install/


#### Launch project

```sh
cd /my/path/test-work
docker-compose up --build
```

The application will run on port 12000

For gpaphql playground use http://localhost:12000/graphql