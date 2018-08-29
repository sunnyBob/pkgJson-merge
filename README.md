# 合并 package.json

### usage
安装
> npm i pkgjson-merge -g

根目录下执行
> pkg-merge --options

根目录下必须存在package.json文件
目前options支持:
> - --exclude 指定排除合并的文件夹，例如 pkg-merge --exclude a,b(多个目录`,`隔开)
> - --tabSize 指定package.json文件当前的tabSize,默认为2
