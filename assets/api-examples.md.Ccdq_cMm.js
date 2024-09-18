import{u as r,c as o,m as s,t as e,p as n,a2 as c,a,o as i}from"./chunks/framework.BToX8gBf.js";const D=c(`<h1 id="runtime-api-examples" tabindex="-1">Runtime API Examples <a class="header-anchor" href="#runtime-api-examples" aria-label="Permalink to &quot;Runtime API Examples&quot;">​</a></h1><p>This page demonstrates usage of some of the runtime APIs provided by VitePress.</p><p>The main <code>useData()</code> API can be used to access site, theme, and page data for the current page. It works in both <code>.md</code> and <code>.vue</code> files:</p><div class="language-md line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#C792EA;"> setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> useData</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;font-style:italic;"> from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">vitepress</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#89DDFF;"> {</span><span style="color:#BABED8;"> theme</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> page</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> frontmatter </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;"> =</span><span style="color:#82AAFF;"> useData</span><span style="color:#BABED8;">()</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">## </span><span style="color:#FFCB6B;">Results</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">Theme Data</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">pre</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">{{ theme }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">pre</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">### Page Data</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">pre</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">{{ page }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">pre</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">### Page Frontmatter</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">pre</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">{{ frontmatter }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">pre</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="results" tabindex="-1">Results <a class="header-anchor" href="#results" aria-label="Permalink to &quot;Results&quot;">​</a></h2><h3 id="theme-data" tabindex="-1">Theme Data <a class="header-anchor" href="#theme-data" aria-label="Permalink to &quot;Theme Data&quot;">​</a></h3>`,6),m=s("h3",{id:"page-data",tabindex:"-1"},[a("Page Data "),s("a",{class:"header-anchor",href:"#page-data","aria-label":'Permalink to "Page Data"'},"​")],-1),F=s("h3",{id:"page-frontmatter",tabindex:"-1"},[a("Page Frontmatter "),s("a",{class:"header-anchor",href:"#page-frontmatter","aria-label":'Permalink to "Page Frontmatter"'},"​")],-1),d=s("h2",{id:"more",tabindex:"-1"},[a("More "),s("a",{class:"header-anchor",href:"#more","aria-label":'Permalink to "More"'},"​")],-1),u=s("p",null,[a("Check out the documentation for the "),s("a",{href:"https://vitepress.dev/reference/runtime-api#usedata",target:"_blank",rel:"noreferrer"},"full list of runtime APIs"),a(".")],-1),B=JSON.parse('{"title":"Runtime API Examples","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"api-examples.md","filePath":"api-examples.md"}'),h={name:"api-examples.md"},A=Object.assign(h,{setup(y){const{site:b,theme:l,page:p,frontmatter:t}=r();return(_,g)=>(i(),o("div",null,[D,s("pre",null,e(n(l)),1),m,s("pre",null,e(n(p)),1),F,s("pre",null,e(n(t)),1),d,u]))}});export{B as __pageData,A as default};
