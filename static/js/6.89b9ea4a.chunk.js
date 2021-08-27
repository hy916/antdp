(this["webpackJsonp@example/website"]=this["webpackJsonp@example/website"]||[]).push([[6],{623:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return a}));var r=e(253),o=e(5);function a(){return Object(o.jsx)("div",{children:Object(o.jsx)(r.a,{source:"@antdp/authorized\n---\n\n[![npm](https://img.shields.io/npm/v/@antdp/authorized.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/authorized)\n\n\u901a\u8fc7\u5224\u65ad\u662f\u5426\u8fdb\u5165\u4e3b\u754c\u9762\u8fd8\u662f\u767b\u5f55\u754c\u9762\u3002\n\n## Installation\n\n```bash\nnpm i @antdp/authorized --save\n```\n\n## Basic Usage\n\n```jsx\nimport React from 'react';\nimport BasicLayout from '@antdp/basic-layouts';\nimport UserLogin from '@antdp/user-login';\nimport Authorized from '@antdp/authorized';\n\n// \u5165\u53e3\u9875\u9762\nconst UserLayout = (props) => {\n  return (\n    <Authorized authority={!props.token} redirectPath=\"/login\">\n      <UserLogin />\n    </Authorized>\n  )\n};\n\n// \u767b\u5f55\u9875\u9762\nconst Layout = (props) => {\n  return (\n    <Authorized authority={!props.token} redirectPath=\"/\">\n      <BasicLayout />\n    </Authorized>\n  )\n};\n```\n\n## Component Interface\n\n```typescript\ninterface AuthorizedProps {\n  /**\n   * \u51c6\u5165\u6743\u9650/\u6743\u9650\u5224\u65ad\n   */\n  authority?: boolean;\n  /**\n   * \u6743\u9650\u5f02\u5e38\u65f6\u91cd\u5b9a\u5411\u7684\u9875\u9762\u8def\u7531\n   */\n  redirectPath?: string;\n  children?: React.ReactNode;\n}\n/**\n * @description: \u9875\u9762\u6743\u9650\n * @param {Array} menuRouter \u539f\u59cb routes.json \u6587\u4ef6\u4e2d\u8def\u7531\n * @param {string} path \u5f53\u524d\u8def\u5f84\n * @return {*}\n */\ntype GetAuthorizedPageProps = (menuRouter: Array<any>, path: string) => boolean\n// \u6309\u94ae\u6743\u9650\ninterface AuthorizedBtnProps {\n  // \u6743\u9650\u8def\u5f84\n  path?: string,\n  // \u5c55\u793a\u5185\u5bb9\n  children?: React.ReactNode\n}\n```"})})}}}]);
//# sourceMappingURL=6.89b9ea4a.chunk.js.map