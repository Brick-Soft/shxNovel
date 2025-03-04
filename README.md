
# :warning: RoadMap

一个视觉小说框架。此项目仍处于极早期开发阶段，请稍后再来！

- [ ] Traditional
  - [x] SPA Wrapper with **barba**
    - [x] use Transition
    - [x] use Route
    - [x] support User Animation
  - [ ] Components with **Lit**
    - [ ] Gallery
      - [ ] Background
      - [ ] Music
    -  [ ] Setting
       -  [ ] normal
       -  [ ] scene
       -  [ ] sound, character
       -  [ ] text
    -  [ ] GalGame
       -  [ ] User Interact Paradigm
       -  [ ] todo
       -  [ ] todo
       -  [ ] todo
- [ ] Scene with **Three**
  - [ ] Render
    - [ ] On-demand rendering
    - [ ] Hookable Render Loop
  -  [ ] Scene Objects
     -  [ ] motion animation
     -  [ ] shader animation
  -  [ ] Timeline with **Anime**
     -  [ ] Replay
     -  [ ] Fast
  -  [ ] Parser
     -  [ ] motion
     -  [ ] sound
- [ ] Persistency
  - [ ] StroyBus
  - [ ] Visited Dialogue
  - [ ] Backlog
  - [ ] Save


----

<h1 align="center"> shxNovel </h1>

<h3 align="center"> Tauri 2 + ESNext + Vite 6 </h3>

## 简单介绍

项目名称来源于「神户小鸟」的拼音首字母。

我们的目标是制作一个视觉小说项目模版，具有较好的可扩展性，能简单地支持用户插件，一定程度上开箱即用。  

我们的项目实现或集成了较多的功能，并且内置了一些平凡算法，包括：
* 支持按需渲染、离屏渲染、后处理的简易管线，以及一些着色器包装。
* 演出时间轴，复杂动画，分支跳跃，存档。
* 脚本转译器，自定义指令，解析时 hook。
* 复杂华丽的页面切换动画，页面路由。

## 文档（WIP）

<!-- 如果不打算写代码，请参阅 [脚本文档](http://124.220.97.4/docs/command/format)。

我们鼓励您大幅度修改我们的代码，请参阅 [开发文档](http://124.220.97.4/docs/intro)。

我们主要采用珂朵莉树（颜色段合并）的平凡方法来存放数据，完成持久化，您可以阅读我们的文章 [1](http://124.220.97.4/blog/persistent-1)，[2](http://124.220.97.4/blog/persistent-2)，[3](http://124.220.97.4/blog/persistent-3)。希望可以帮到其他项目的开发者，也欢迎大家提出更好的算法。 -->

## 下载与使用

**下载** 请直接克隆储存库，随后安装依赖。
```
git clone
npm i
```

**使用** 运行
```
npx tauri dev
```

## 技术栈

我们采用非主流的混合技术栈
* 采用 tauri2 完成跨平台，支持 `Windows`, `Linux`, `macOS`, `Android`, `IOS`。    
* 页面元素主要使用 Web Component 标准，避免过度水合。
  * 原生语法，开发/学习成本较低，组件黑盒化。
  * 可以较低成本地引入现代流行框架。
* 通过 Pjax 实现 SPA，按需分片加载，可以用本地 IO 降低加载负担。
* 使用 Three.js，很好用，很难用。

在项目初期，我们目前处于 JavaScript 和 Typescript 的混合使用阶段。   
* 我们使用 Typescript **不是**为了用类型体操换取健壮的提示，   
  **而是**为了使用位于 ESNext 的提案特性，如装饰器等。

## 许可与依赖

* shxNovel
  * 使用 MIT License 进行许可。
* 运行时 **(run-time)** 依赖以下开源项目：
  * [tauri](https://github.com/tauri-apps/tauri) Apache-2.0, MIT licenses
  * [howler](https://github.com/goldfire/howler.js) MIT license
  * [barba](https://github.com/barbajs/barba) MIT license
  * [three](https://github.com/mrdoob/three.js) MIT license
  * [typewriterjs](https://github.com/tameemsafi/typewriterjs) MIT license
  * [anime]() Mit license
  * [lit](https://github.com/lit/lit) BSD-3-Clause license
  * [material-web](https://github.com/material-components/material-web) Apache-2.0 license
  * [shoelace](https://github.com/shoelace-style/shoelace) MIT license
* 构建时 **(build-time)** 依赖以下开源项目：
  *  [tauri](https://github.com/tauri-apps/tauri) Apache-2.0, MIT licenses
  * [vite](https://github.com/vitejs/vite) MIT license
  * [node-glob](https://github.com/isaacs/node-glob) ISC license
  * [TypeScript](https://github.com/microsoft/TypeScript) Apache-2.0 license


## 已知问题

### A

由于我们依赖大量项目，因此健壮性更多地受到上游的影响，随着上游项目的完善，该项目也会不断增强。 