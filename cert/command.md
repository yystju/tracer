```
openssl genrsa -out server.key 2048
openssl req -new -x509 -key server.key -out server.pem -days 1095
```
_注: 若你正使用windows，最简便方案是安装git-scm, 然后使用其所带的bash执行以下命令。_
