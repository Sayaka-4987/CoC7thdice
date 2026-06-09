# CoC7th 规则用临时骰子

> 在线地址：[https://sayaka-4987.github.io/CoC7thdice](https://sayaka-4987.github.io/CoC7thdice/)

基于 React + Ant Design 的轻量跑团辅助工具，主要面向克苏鲁的呼唤（CoC）第 7 版规则，也可用于其他需要随机数的场合。桌面端按钮平铺展示，移动端自动折叠换行，两端均可正常使用。

## 功能

- 人物卡属性生成 — 按指定属性点总和随机生成 5 组九维属性（可选含幸运），已经设计了避免极端的高属性
- 掷骰 — 支持 r3 / r4 / r6 / r8 / r10 / r20 / r100，可指定骰子数量
- 塔罗牌 — 单张抽牌 + 五种牌阵（圣三角、四要素、小十字、六芒星、凯尔特十字）
- 技能检定 — 预设常用技能或手动输入，支持普通检定 / 困难 50% / 极难 20% 三档难度，自动判定大成功与大失败

## 技术栈

- [React](https://reactjs.org/) 17 + [Ant Design](https://ant.design/) 4
- 托管于 GitHub Pages，通过 GitHub Actions 自动构建部署

## 本地开发

```bash
npm install
npm start
```

---

A lightweight TRPG dice helper built with React + Ant Design, primarily for Call of Cthulhu 7th Edition — but usable wherever you need random numbers. Controls lay out flat on desktop and wrap automatically on mobile.

## Features

- Character attribute generation — generates 5 sets of 9 characteristics based on a target point total (luck optional); designed to avoid extreme stat values
- Dice roller — supports r3 / r4 / r6 / r8 / r10 / r20 / r100 with configurable roll count
- Tarot cards — single draw + five spreads (Sacred Triangle, Four Elements, Little Cross, Six-Pointed Star, Celtic Cross)
- Skill checks — pick from common skills or type your own; three difficulty tiers (Regular / Hard 50% / Extreme 20%); automatic critical success/fumble detection

## Tech stack

- [React](https://reactjs.org/) 17 + [Ant Design](https://ant.design/) 4
- Hosted on GitHub Pages, auto-built and deployed via GitHub Actions

## Local development

```bash
npm install
npm start
```
