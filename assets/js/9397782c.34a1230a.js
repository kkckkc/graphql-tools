(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),i=(n(0),n(262)),s={id:"schema-stitching",title:"Schema Stitching",sidebar_label:"Schema Stitching"},c={unversionedId:"schema-stitching",id:"schema-stitching",isDocsHomePage:!1,title:"Schema Stitching",description:"Schema stitching (@graphql-tools/stitch) creates a single GraphQL gateway schema from multiple underlying GraphQL services. Unlike schema merging, which simply combines local schema instances, stitching builds a combined proxy layer that delegates requests through to underlying service APIs. As of GraphQL Tools v7, stitching is a comparable alternative to Apollo Federation with automated query planning, merged types, and declarative schema directives.",source:"@site/docs/schema-stitching.md",slug:"/schema-stitching",permalink:"/docs/schema-stitching",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/schema-stitching.md",version:"current",sidebar_label:"Schema Stitching"},o=[{value:"Topics",id:"topics",children:[]},{value:"Basic example",id:"basic-example",children:[]}],l={toc:o};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Schema stitching (",Object(i.b)("inlineCode",{parentName:"p"},"@graphql-tools/stitch"),") creates a single GraphQL gateway schema from multiple underlying GraphQL services. Unlike ",Object(i.b)("a",{parentName:"p",href:"/docs/merge-schemas"},"schema merging"),", which simply combines local schema instances, stitching builds a combined proxy layer that delegates requests through to underlying service APIs. As of GraphQL Tools v7, stitching is a comparable alternative to ",Object(i.b)("a",{parentName:"p",href:"https://www.apollographql.com/docs/federation/"},"Apollo Federation")," with automated query planning, merged types, and declarative schema directives."),Object(i.b)("h2",{id:"topics"},"Topics"),Object(i.b)("p",null,"Browse the following documentation topics to learn about stitching libraries, or review the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/gmac/schema-stitching-handbook"},"Schema Stitching Handbook")," for working examples of major stitching features."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/stitch-combining-schemas"},"Combining multiple schemas")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/stitch-type-merging"},"Merging types across schemas")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/stitch-type-merging"},"Schema extensions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/stitch-directives-sdl"},"Stitching directives SDL"))),Object(i.b)("h2",{id:"basic-example"},"Basic example"),Object(i.b)("p",null,'Given two self-contained subschemas, a single "stitched" schema can be built that delegates (or, proxies) relevant portions of a request to each subservice:'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { makeExecutableSchema } from '@graphql-tools/schema';\nimport { stitchSchemas } from '@graphql-tools/stitch';\nimport { stitchingDirectives } from '@graphql-tools/stitching-directives';\n\nconst postsService = makeExecutableSchema({\n  typeDefs: `\n    type Post {\n      id: ID!\n      message: String!\n      author: User\n    }\n\n    type User {\n      id: ID!\n      posts: [Post]\n    }\n\n    type Query {\n      post(id: ID!): Post\n      users(ids: [ID!]!): [User]! @merge(keyField: \"id\")\n    }\n  `,\n  resolvers: {\n    // ...\n  }\n});\n\nconst usersService = makeExecutableSchema({\n  typeDefs: `\n    type User {\n      id: ID!\n      username: String!\n      email: String!\n    }\n\n    type Query {\n      users(ids: [ID!]!): [User]! @merge(keyField: \"id\") @canonical\n    }\n  `,\n  resolvers: {\n    // ...\n  }\n});\n\nconst { stitchingDirectivesTransformer } = stitchingDirectives({\n  // options...\n});\n\nconst gatewaySchema = stitchSchemas({\n  subschemaConfigTransforms: [stitchingDirectivesTransformer],\n  subschemas: [\n    { schema: postsSchema, batch: true },\n    { schema: usersSchema, batch: true },\n  ]\n});\n")),Object(i.b)("p",null,"Using the stitched proxy schema, data may be requested interchangeably from any service in the same request:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},'query {\n  users(ids: ["1", "2"]) {\n    username\n    email\n    posts {\n      message\n      author {\n        username\n        email\n      }\n    }\n  }\n}\n')))}m.isMDXComponent=!0},262:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,b=p["".concat(s,".").concat(u)]||p[u]||h[u]||i;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);