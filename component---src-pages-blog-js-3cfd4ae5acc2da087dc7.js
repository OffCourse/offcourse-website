webpackJsonp([0xc19374f83753],{448:function(e,t,a){!function(t,a){e.exports=a()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,n=Object.getOwnPropertyNames,r=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,o=u&&u(Object);return function i(c,f,d){if("string"!=typeof f){if(o){var s=u(f);s&&s!==o&&i(c,s,d)}var p=n(f);r&&(p=p.concat(r(f)));for(var m=0;m<p.length;++m){var h=p[m];if(!(e[h]||t[h]||d&&d[h])){var g=l(f,h);try{a(c,h,g)}catch(e){}}}return c}return c}})},200:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(1),i=n(o),c=a(55),f=function(e){function t(a){r(this,t);var n=l(this,e.call(this,a));return n.handleInputChange=n.handleInputChange.bind(n),n.handleSubmit=n.handleSubmit.bind(n),n.state={email:""},n}return u(t,e),t.prototype.handleInputChange=function(e){var t,a=e.target,n=a.name,r=a.value;this.setState((t={},t[n]=r,t))},t.prototype.handleSubmit=function(){var e=this.state.email;alert("We need to submit "+e+" to mailing list"),this.setState({email:""})},t.prototype.render=function(){var e=this.state.email;return i.default.createElement("div",{className:"ui large action input"},i.default.createElement("input",{id:"email",name:"email",onChange:this.handleInputChange,placeholder:"E-mail",type:"text",value:e}),i.default.createElement(c.Button,{positive:!0,onClick:this.handleSubmit},"JOIN"))},t}(o.Component);t.default=f,e.exports=t.default},201:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(200);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(r).default}}),e.exports=t.default},413:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=a(1),u=n(l),o=a(2),i=n(o),c=a(374),f=n(c),d=a(373),s=n(d),p=a(55);a(584);var m={excerpt:i.default.string.isRequired,featuredImage:i.default.object.isRequired,path:i.default.string.isRequired,title:i.default.string.isRequired},h={featuredImage:void 0},g=function(e){var t=e.excerpt,a=e.featuredImage,n=e.path,l=e.title;return u.default.createElement("div",{className:"PostCard"},u.default.createElement("div",{className:"Postcard__img"},u.default.createElement(s.default,{sizes:r({},a.childImageSharp.sizes,{aspectRatio:16/9})})),u.default.createElement("div",{className:"PostCard__body"},u.default.createElement(f.default,{to:n},u.default.createElement("h3",null,l),u.default.createElement("p",null,t)),u.default.createElement(p.Button,{positive:!0,onClick:function(){(0,c.navigateTo)(n)}},"READ MORE")))};g.propTypes=m,g.defaultProps=h,t.default=g,e.exports=t.default},414:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(413);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(r).default}}),e.exports=t.default},584:function(e,t){},883:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var r=a(1),l=n(r),u=(a(55),a(173)),o=n(u),i=a(201),c=n(i),f=a(361),d=n(f),s=a(414),p=n(s),m=a(174),h=n(m),g=function(e){var t=e.data,a=t.allMarkdownRemark.edges;return l.default.createElement("div",null,l.default.createElement(d.default,{title:"Blog",subtitle:"Learn more about how we learn"}),l.default.createElement(h.default,{backgroundColor:"offwhite"},l.default.createElement("div",{className:"ui stackable grid container"},l.default.createElement("div",{className:"two column row"},a.map(function(e){var t=e.node,a=t.excerpt,n=t.frontmatter,r=n.featuredImage,u=n.path,o=n.title;return l.default.createElement("div",{className:"column"},l.default.createElement(p.default,{excerpt:a,featuredImage:r,path:u,title:o}))})))),l.default.createElement(h.default,null,l.default.createElement(o.default,{action:l.default.createElement(c.default,null),title:"Sign up for the newsletter to get all of our updates directly in your mailbox"})))};t.default=g;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-blog-js-3cfd4ae5acc2da087dc7.js.map