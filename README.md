# qirui-music
### 学习react 模仿网易云和qq音乐UI做的一个音乐网站

>求求你STAR一下吧 救救孩子把

- [后台](https://github.com/Binaryify/NeteaseCloudMusicApi)(Binaryify大佬，膜拜大佬)
- [源码地址](https://github.com/Qirui-pig/qirui-music)
- [项目预览](http://1.15.105.80:3000)（服务器小拉,如果没有东西 多半是挂了）

#### 技术栈
- React：采用最新Hooks的语法
- Redux：管理公共组件状态量 配合immutable.js
- React-router-config：管理单页面应用路由
- axios：发起http请求
- css-in-js：styled-components
- Craco：自动化构建工具
- ES6：采用ES6语法
- Live2d：一个插件
- Aplayer：音频播放 部分引用
- Dplayer：视频播放
- Express：Express做静态资源服务器


#### 功能介绍
- 基本功能
    - 首页推荐页
    - 排行榜
    - 歌单及歌单详情页:歌单介绍详情,歌单评论
    - 主播电台主页 电台tab页 及电台详情页(暂无电台详情歌曲)
    - 歌手及歌手详情页
    - 专辑及专辑详情页
    - 视频及mv播放详情页
    - 音乐播放 

#### 项目构成
<pre>                 
├── build            		   // 项目build目录
├── craco.config.js        // 项目配置文件
├── package.json      		 // 项目配置文件
├── public       			     // 放置静态资源
├── src                		 // 生产目录
│   ├── api       			   // api请求
│   ├── assets             // 图片资源
│   ├── common          	 // 公共的数据资源
│   ├── components     		 // 各种组件
│   ├── pages          		 // 页面
│   ├── router   		       // 路由配置器
│   ├── store           	 // redux状态管理器
│   ├── utils         	   // 工具函数
│   ├── App.js         	   // 主页面
│   └── index.js       	   // 入口
</pre>