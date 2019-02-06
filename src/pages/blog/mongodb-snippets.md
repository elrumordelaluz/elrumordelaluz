---
title: 'Useful MongoDB snippets'
date: '2019-02-06'
tags: ['snippets', 'mongodb', 'mongo']
path: '/blog/mongodb-snippets'
---

# Install

### Install [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/) _Community Edition_ on CentOS 7

1. Configure `yum` Package Manager creating a `.repo` file:

```bash
vim /etc/yum.repos.d/mongodb-org-4.0.repo　
```

2. Fill that file with:

```bash
[mongodb-org-4.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc
```

3. Install

```bash
yum install -y mongodb-org
```

4. Start as `systemctl` service

```bash
sudo service mongod start
```

5. Check service

```bash
systemctl status mongod.service
```

### Definetly Uninstall MongoDB from CentOS 7

After lots of try/catch I arrived to this one that lets reinstall a clen new version without side effects.

1. Delete Package

```bash
yum erase $(rpm -qa | grep mongodb-org)
```

1. Delete related folders

```bash
sudo rm -r /var/log/mongodb
sudo rm -r /var/lib/mongo
```

### Concurrent versions of MongoDB in OSX

# Dupm, Restore and related

### Dump a specific _Database_

```bash
mongodump --db my_db --out ./my_dump_folder
```

### Restore that specific _Database_

Use `--db` in case we run the command from inside the `/my_dump_folder` folder (`cd my_dump_folder`). Use `--drop` to drop the _Database_ before restore it.

```bash
mongorestore --drop --db my_db .
```

### Copy dump from local into _Server_

The flah `-P` is optional in case need to pass a specific `PORT`.

```bash
scp -rP [PORT] my_dump_folder [user]@[IP]:~/[location]
```
