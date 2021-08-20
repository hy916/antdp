(this["webpackJsonp@example/website"]=this["webpackJsonp@example/website"]||[]).push([[13],{588:function(n,o,r){"use strict";r.r(o),r.d(o,"default",(function(){return s}));var e=r(207),t=r(7);function s(){return Object(t.jsx)(e.a,{source:"@antdp/user-login\n---\n\n\u767b\u5f55\u754c\u9762\n\n## Installation\n\n```bash\nnpm i @antdp/user-login --save\n```\n\n## Basic Usage\n\n```jsx\nimport UserLogin from '@antdp/user-login';\nimport logo from './logo.svg';\n\nexport default (props) => {\n  return (\n    <UserLogin\n      logo={logo}\n      projectName=\"Ant Design\"\n      loading={props.loading}\n      onFinish={(values) => {\n        props.dispatch({\n          type: 'global/login',\n          payload: { password: values.password, phone: values.username },\n        });\n      }}\n      formBtns={[\n        {\n          label: '\u767b\u5f55',\n          attr: {\n            type: 'primary',\n            htmlType: 'submit',\n            style: {\n              marginRight: 20,\n            },\n          },\n        },\n        {\n          label: '\u91cd\u7f6e',\n          attr: {\n            type: 'primary',\n          },\n        },\n      ]}\n    />\n  )\n};\n```\n\n## Props\n\n```typescript\nimport React from 'react';\nimport { FormProps, FormItemProps } from 'antd/lib/form';\nimport { InputProps } from 'antd/lib/input';\n\n\nexport interface formItem extends FormItemProps {\n  inputProps?: InputProps;\n}\n\nexport interface UserLoginProps extends FormProps{\n  /**\n   * \u9879\u76eelogo\n   */\n  logo?: JSX.Element;\n  /**\n   * \u9879\u76ee\u540d\u79f0\n   */\n  projectName?: string;\n  className?: string;\n  loading?: boolean;\n  formItems?: formItem[];\n}\n```"})}}}]);
//# sourceMappingURL=13.5c136441.chunk.js.map