# install


npm install -g typescript
tsc -V 

1). 生成配置文件tsconfig.json
    tsc --init
2). 修改tsconfig.json配置
    "outDir": "./js",
    "strict": false,    
3). 启动监视任务: 
    终端 -> 运行任务 -> 监视tsconfig.json