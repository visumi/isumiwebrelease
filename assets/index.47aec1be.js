import{E as e,T as t,F as a,a as r,b as n,c as s,N as l,d as o,e as m,f as i,g as c,H as d,S as u,R as p,h as x}from"./vendor.c4e776ea.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,s)=>{const l=new URL(e,r);if(self[t].moduleMap[l])return a(self[t].moduleMap[l]);const o=new Blob([`import * as m from '${l}';`,`${t}.moduleMap['${l}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){s(new Error(`Failed to import: ${e}`)),n(m)},onload(){a(self[t].moduleMap[l]),n(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("https:/isumi.com.br/assets/");const f=({title:t,icon:a,data:r})=>{const n=a;return e.createElement("div",null,e.createElement(n,{className:"text-6xl text-black mx-auto"}),e.createElement("p",{className:"font-serif font-bold text-black text-3xl mt-2 mb-6 text-center select-none"},t),r.map((t=>e.createElement("div",{key:t.subtitle,className:"mt-6"},e.createElement("p",{className:"font-sans font-semibold text-black text-xl text-center"},t.time),e.createElement("p",{className:"font-sans font-semibold text-black text-xl text-center"},t.subtitle),e.createElement("p",{className:"font-sans font-semibold text-gray-500 text-xl max-w-sm text-center"},t.content)))))};f.defaultProps={};const b=[{subtitle:"Localização",content:"Atualmente estou morando em Campinas-SP"},{subtitle:"Habilidades",content:"Trabalho em grupo, vontade em liderar, dinâmico, artístico"},{subtitle:"Hobby",content:"Jogos de computador, gastronomia, cinema, geografia e aprender sobre novos temas"}],E=[{subtitle:"Universidade Estadual de Campinas",content:"Análise e Desenvolvimento de Sistemas",time:"2017 - 2021"},{subtitle:"FEEC - UNICAMP",content:"Mestrado Incompleto na área de IoT",time:"2021"}],g=[{subtitle:"LaRCom FEEC UNICAMP - Estágio",content:"Líder Técnico de um projeto envolvendo Netsuite da Oracle",time:"2020 - 2021"},{subtitle:"Enforce BTG Pactual - Estágio",content:"Trabalho com desenvolvimento de Sistemas Web utilizando Angular",time:"2020 - Hoje"}],v=[{subtitle:"Linguagens",content:"HTML, CSS, Javascript, Typescript, Node.js, React, Angular, Netsuite, C"},{subtitle:"Idiomas",content:"Inglês Avançado"}],h=()=>e.createElement(t,{appear:!0,show:!0,enter:"transition ease-in-out duration-700 delay-100 transform",enterFrom:"opacity-0",enterTo:"opacity-100"},e.createElement("div",null,e.createElement("div",{className:"space-y-12 mb-8 px-4\n      md:my-4 md:flex md:justify-center md:space-x-4 md:px-8 md:space-y-0 xl:my-40 lg:space-x-10"},e.createElement(f,{title:"Geral",icon:a,data:b}),e.createElement("div",{className:"border-t-2 border-black "}),e.createElement(f,{title:"Formação",icon:r,data:E}),e.createElement("div",{className:"border-t-2 border-black"}),e.createElement(f,{title:"Carreira",icon:n,data:g}),e.createElement("div",{className:"border-t-2 border-black"}),e.createElement(f,{title:"Experiências",icon:s,data:v}))));const N="https://isumi.com.br/assets/home-bg.69cb8c7a.png",y="https://isumi.com.br/assets/contact-bg.581f1558.png",w="https://isumi.com.br/assets/whale.dd3d52d8.svg",k="https://isumi.com.br/assets/nodejs.b7d12c95.svg",j="https://isumi.com.br/assets/angularColor.8be939aa.svg",T="https://isumi.com.br/assets/html5.b860ff21.svg",C="https://isumi.com.br/assets/tailwind.3ba60fef.svg",F="https://isumi.com.br/assets/pbot.32580d6e.png",I="https://isumi.com.br/assets/pbotmob.90c1390f.png",P="https://isumi.com.br/assets/discordColor.e93e0f5d.svg",M="https://isumi.com.br/assets/barber.04486217.png",A="https://isumi.com.br/assets/barbermob.3bf7c16c.png",L=()=>e.createElement("div",{className:"flex flex-grow justify-between"},e.createElement("div",{className:"mx-48 my-72"},e.createElement("p",{className:"font-serif font-black text-black text-6xl"},"Ops! Página não encontrada.")),e.createElement("img",{className:"w-1/3 mr-40",src:w,alt:"Imagem de uma Baleia"})),B=[{to:"/sobre",title:"Sobre"},{to:"/projetos",title:"Projetos"},{to:"/contato",title:"Contato"}],R=()=>e.createElement(t,{appear:!0,show:!0},e.createElement("div",{className:"flex xl:flex-row flex-col mx-auto items-center py-10 xl:pl-48 select-none"},e.createElement("div",{className:"flex-grow"},e.createElement(l,{to:"/"},e.createElement(t.Child,{enter:"transition ease-in-out duration-1000 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0"},e.createElement("h1",{className:"font-serif font-black text-4xl md:pb-0 pb-4 hover:text-gray-700"},"泉isumi")))),e.createElement(t.Child,{enter:"transition ease-in-out duration-1000 transform",enterFrom:"translate-x-full",enterTo:"translate-x-0"},e.createElement("div",{className:"sm:block flex flex-col text-center xl:mx-32 md:pt-4"},B.map((t=>e.createElement(l,{className:"inline-block font-display text-2xl mx-16 sm:py-0 py-1 px-4\n              hover:transition duration-150 ease-in-out\n              transform hover:scale-125",activeClassName:"border-b-2 border-black hover:scale-100 pointer-events-none",to:t.to,key:t.to,exact:!0},t.title))))))),U=()=>e.createElement(t,{appear:!0,show:!0},e.createElement("div",null,e.createElement("div",{className:"flex flex-grow justify-between"},e.createElement(t.Child,{enter:"transition ease-in-out duration-700 delay-100 transform",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition ease-in-out duration-300 transform",leaveFrom:"opacity-100",leaveTo:"opacity-0"},e.createElement("div",{className:"px-4 text-center pt-10\n          md:pt-0 md:px-0 lg:text-left md:mx-48 md:my-8 lg:px-0 xl:my-56 lg:ml-72 xl:ml-48"},e.createElement("p",{className:"font-serif font-black text-black text-6xl"},"Vinícius Isumi"),e.createElement("p",{className:"font-serif font-bold text-gray-800 text-3xl my-2 select-none"},"Desenvolvedor Web"),e.createElement("p",{className:"font-sans font-semibold text-gray-600 text-2xl max-w-md my-2 select-none"},"Formado em Análise de Sistemas pela UNICAMP, atualmente cursando Mestrado e trabalhando com Angular."),e.createElement("div",{className:"flex justify-center space-x-14 pt-4 text-3xl"},e.createElement("a",{href:"mailto: vinicius.isumi@gmail.com"},e.createElement(o,{className:"hover:transition duration-150 ease-in-out\n              transform hover:scale-125 hover:text-aqua-dark"})),e.createElement("a",{href:"https://github.com/visumi",rel:"noreferrer",target:"_blank"},e.createElement(m,{className:"hover:transition duration-150 ease-in-out\n              transform hover:scale-125"})),e.createElement("a",{href:"https://www.instagram.com/isumihm/",rel:"noreferrer",target:"_blank"},e.createElement(i,{className:"hover:transition duration-150 ease-in-out\n              transform hover:scale-125 hover:text-[#C1558B]"})),e.createElement("a",{href:"https://www.linkedin.com/in/vinicius-isumi-9b5831197/",rel:"noreferrer",target:"_blank"},e.createElement(c,{className:"hover:transition duration-150 ease-in-out\n              transform hover:scale-125 hover:text-[#006699]"}))))),e.createElement(t.Child,{enter:"transition ease-in-out duration-1000 delay-100",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0"},e.createElement("div",{className:"xl:flex flex-grow mt-10 xl:justify-center xl:mr-10 hidden"},e.createElement("img",{className:"w-8/12",src:N,alt:"Imagem de fundo"})))),e.createElement(t.Child,{enter:"transition ease-in-out duration-1000 delay-100",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0"},e.createElement("div",{className:"md:flex flex-grow md:justify-center hidden xl:hidden lg:pt-6 xl:pt-0"},e.createElement("img",{className:"w-3/12",src:N,alt:"Imagem de fundo"}))))),_=()=>e.createElement(t,{appear:!0,show:!0,enter:"transition ease-in-out duration-700 delay-100 transform",enterFrom:"opacity-0",enterTo:"opacity-100"},e.createElement("div",null,e.createElement("div",{className:"flex flex-grow justify-between"},e.createElement("div",{className:"pt-6 md:pt-14 lg:pt-12 md:mx-48 md:px-0 lg:my-0 xl:my-48"},e.createElement("div",{className:"flex md:flex-row flex-col"},e.createElement("a",{href:"mailto: vinicius.isumi@gmail.com"},e.createElement(o,{className:"mx-auto hover:transition duration-150 ease-in-out\n              transform hover:scale-125 hover:text-aqua-dark text-4xl"})),e.createElement("p",{className:"font-serif font-semibold text-black text-3xl pl-8 hidden md:block"},"vinicius.isumi@gmail.com"),e.createElement("p",{className:"font-serif text-center font-semibold text-black pl-4 text-3xl md:hidden"},"vinicius.isumi @gmail.com")),e.createElement("div",{className:"flex md:flex-row flex-col pt-12 md:pt-14"},e.createElement("a",{href:"https://www.linkedin.com/in/vinicius-isumi-9b5831197/",rel:"noreferrer",target:"_blank"},e.createElement(c,{className:"mx-auto hover:transition duration-150 ease-in-out\n              transform hover:scale-125 hover:text-[#006699] text-4xl"})),e.createElement("p",{className:"font-serif text-center font-semibold text-black text-3xl md:pl-8"},"Vinicius Isumi")),e.createElement("div",{className:"flex md:flex-row flex-col pt-12 md:pt-14"},e.createElement("a",{href:"https://www.instagram.com/isumihm/",rel:"noreferrer",target:"_blank"},e.createElement(i,{className:"mx-auto hover:transition duration-150 ease-in-out\n              transform hover:scale-125 hover:text-[#C1558B] text-4xl"})),e.createElement("p",{className:"font-serif text-center font-semibold text-black text-3xl md:pl-8"},"isumihm")),e.createElement("div",{className:"flex md:flex-row flex-col pt-12 md:pt-14"},e.createElement("a",{href:"https://github.com/visumi",rel:"noreferrer",target:"_blank"},e.createElement(m,{className:"mx-auto hover:transition duration-150 ease-in-out\n              transform hover:scale-125 text-4xl"})),e.createElement("p",{className:"font-serif text-center font-semibold text-black text-3xl pb-6 md:pl-8"},"visumi"))),e.createElement("div",{className:"xl:flex flex-grow mt-8 justify-center hidden"},e.createElement("img",{className:"w-8/12",src:y,alt:"Imagem de fundo"}))),e.createElement("div",{className:"md:flex flex-grow justify-center hidden xl:hidden"},e.createElement("img",{className:"md:w-4/12 lg:w-3/12",src:y,alt:"Imagem de fundo"})))),O=({title:t,image:a,link:r})=>e.createElement(l,{to:`/projetos/${r}`},e.createElement("div",{className:"flex flex-col h-80 hover:transition duration-500 ease-in-out\n    transform hover:scale-125"},e.createElement("img",{src:a,alt:"Imagem da Box",className:"mt-20 w-20 h-20 self-center my-10"}),e.createElement("p",{className:"font-serif font-bold text-black text-3xl mx-auto mb-2"},t)));O.defaultProps={};const S=()=>e.createElement(t,{appear:!0,show:!0,enter:"transition ease-in-out duration-700 delay-100 transform",enterFrom:"opacity-0",enterTo:"opacity-100"},e.createElement("div",{className:"flex-col\n    flex md:flex-row md:flex-grow md:my-40 justify-center md:space-x-44 mx-auto"},e.createElement(O,{title:"Pancake BOT",image:P,link:"pancakebot"}),e.createElement(O,{title:"Barbershop",image:j,link:"barbershop"}))),q=({title:a,desc:r,image:n,imageMobile:s,langs:l})=>e.createElement(t,{appear:!0,show:!0,enter:"transition ease-in-out duration-[1200ms] transform",enterFrom:"opacity-0",enterTo:"opacity-100"},e.createElement("div",{className:"pt-10"},e.createElement("div",{className:"flex flex-row space-x-6 justify-center"},l.map((t=>e.createElement("div",{key:t.name},e.createElement("img",{src:t.image,alt:`Logo ${t.name}`,className:"w-8 h-8 mx-auto"}),e.createElement("p",{className:"font-serif font-bold text-black text-lg text-center select-none"},t.name))))),e.createElement("p",{className:"font-serif font-bold text-black text-4xl pb-4 pt-2 text-center select-none"},a),e.createElement("p",{className:"font-sans font-semibold text-gray-800 max-w-prose text-center mx-auto text-base px-6"},r),e.createElement("div",{className:"mt-6 justify-center"},e.createElement("div",{className:"w-8/12 mx-auto h-64 hidden\n        sm:block\n        lg:w-5/12"},e.createElement("img",{src:n,alt:`Imagens do Projeto ${a}`,className:"w-full"})),e.createElement("div",{className:"md:hidden"},e.createElement("img",{src:s,alt:`Imagens do Projeto ${a}`,className:"w-full"})))));q.defaultProps={};const $={nodejs:{name:"Node.js",image:k},angular:{name:"Angular",image:j},html5:{name:"HTML",image:T},tailwind:{name:"Tailwind",image:C}},D=[$.nodejs],H=()=>e.createElement(q,{title:"Pancake BOT",langs:D,desc:"Nesse projeto pessoal decidi explorar a biblioteca Discord.js, que possibilita interagir de maneira muito fácil com a API do Discord, uma plataforma de comunicações. Desenvolvi uma integração utlizando a API da Riot Games que permite coletar informações sobre o jogo League of Legends e exibir no chat do Discord. Trabalhei também com a API do Youtube e bibliotecas próprias para reproduzir músicas solicitadas pelos usuários. No geral gosto de usar esse projeto para trabalhar com bibliotecas que sempre tive curiosidade, além de criar funções legais para os servidores que frequento no Discord. ",image:F,imageMobile:I}),z=[$.angular,$.html5],G=()=>e.createElement(q,{title:"Barbershop",langs:z,desc:"Em uma das disciplinas da Faculdade fiquei responsável por desenvolver todo o front-end de um projeto de um gerenciador de uma barbearia. Foi minha primeira experiência com Angular onde tive a oportunidade de criar serviços, autenticadores, componentes e praticar minhas técnicas recém aprendidas durante o estágio. Outra  parte do grupo ficou responsável pelo back-end, houve um excelente trabalho em grupo para entendermos as  necessidades do sistema. O projeto contém funções de cadastro em geral, permissões e gerenciamento para gerentes, além de um sistema de reservas e venda integrado. ",image:M,imageMobile:A}),J=()=>e.createElement(d,null,e.createElement("div",{className:"font-sans antialiased bg-gradient-to-t from-gray-50 to-gray-100\n    min-h-screen overflow-hidden"},e.createElement(R,null),e.createElement(u,null,e.createElement(p,{path:"/sobre"},e.createElement(h,null)),e.createElement(p,{path:"/projetos/pancakebot"},e.createElement(H,null)),e.createElement(p,{path:"/projetos/barbershop"},e.createElement(G,null)),e.createElement(p,{path:"/projetos"},e.createElement(S,null)),e.createElement(p,{path:"/contato"},e.createElement(_,null)),e.createElement(p,{path:"/",exact:!0},e.createElement(U,null)),e.createElement(p,{path:"*"},e.createElement(L,null)))));x.render(e.createElement(e.StrictMode,null,e.createElement(J,null)),document.getElementById("root"));
