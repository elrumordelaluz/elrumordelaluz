---
title: 'Useful Console snippets'
date: '2019-02-06'
tags: ['snippets', 'mongodb', 'mongo']
path: '/blog/mongodb-snippets'
---

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

### Definetly Uninstall MongoDB

1. Delete Package

```bash
yum erase $(rpm -qa | grep mongodb-org)
```

1. Delete related folders

```bash
sudo rm -r /var/log/mongodb
sudo rm -r /var/lib/mongo
```
