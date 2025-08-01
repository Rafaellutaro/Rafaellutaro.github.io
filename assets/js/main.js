/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillContent = document.getElementsByClassName('skills__content'),
      skillHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillContent.length; i++) {
        skillContent[i].className = 'skills__content skills__close';
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        })

        target.classList.add('qualification__active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active');
        })
        tab.classList.add('qualification__active');

    })
})

/*==================== SERVICES MODAL ====================*/

const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/

let swiperPortfolio = new Swiper(".portfolio__container", {
      cssMode: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

/*==================== TESTIMONIAL ====================*/

let swiperTestimonial = new Swiper(".testimonial__container", {
      loop: true,
      grabcursor: true,
      spacebetween: 48,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },

      breakpoints: {
        568: {
          slidesPerView: 2,
        },
      },
    });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 

function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL UP ====================*/ 

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// ========================== TRANSLATIONS =======================

const translations = {
    'en': {
      'titulo': "Rafael's Portfolio",
      'frontEnd.nome': "Rafael dos Santos Alves Pires",
      'frontEnd.header1': "Home",
      'frontEnd.header2': "About",
      'frontEnd.header3': "Skills",
      'frontEnd.header4': "Services",
      'frontEnd.header5': "Portfolio",
      'frontEnd.header6': "Contact",
      'frontEnd.header7': "Language",
      'contact' : "contact-me",
      'home.title': "Hi, I'm Rafael",
      'home.subtitle': "Developer",
      'home.description': "I'm a developer with experience in web and mobile systems. I've worked with Flutter, Node.js, PHP, PostgreSQL, and integrations like Mercado Pago, RevenueCat, and Stripe. I'm also familiar with Linux, Nginx, and cloud deployments like Amazon EC2.",
      'home.scroll': "Scroll Down",
      'about.title': "About Me",
      'about.subtitle': "Introduction",
      'about.description': "I like understanding what’s behind every piece of code — not just making things work, but knowing why. Over time, I’ve worked on all kinds of projects, from mobile apps to full systems with databases, APIs, and Linux servers. I prefer clean and simple solutions and love learning new things on my own.",
      'about.info.name1': "Years of <br> Experience",
      'about.info.name2': "Completed <br> Projects",
      'about.info.name3': "Companies <br> Worked At",
      'about.download': "Download CV",
      'skill.section.title': "Skills",
      'skill.section.subtitle': "My technical level <br><br> 0%/40% = Basic <br> 41%/70% = Intermediate <br> 71%/100% = Advanced",
      'skill.title1': "Languages",
      'skill.subtitle1': "Over 7 years",
      'skill.name1': "English",
      'skill.name1.1': "Japanese",
      'skill.name1.2': "Portuguese - Brazil",
      'skill.title2': "Backend Developer",
      'skill.subtitle2': "Over 5 years",
      'skill.name2': "PHP",
      'skill.name2.1': "Node.js",
      'skill.name2.2': "Python",
      'skill.name2.3': "ASP.NET",
      'skill.title3': "Frontend Developer",
      'skill.subtitle3': "Over 5 years",
      'skill.name3': "JavaScript",
      'skill.name3.1': "HTML",
      'skill.name3.2': "CSS",
      'skill.name3.3': "Flutter",
      'qualification.section.title': "Qualifications",
      'qualification.section.subtitle': "My personal journey",
      'qualification.button1': "Education",
      'qualification.button2': "Work",
      'qualification.title1': "Information Technology Management",
      'qualification.subtitle1': "Fatec - Itaquaquecetuba - University",
      'qualification.title2': "TOEIC",
      'qualification.subtitle2': "Fatec - Itaquaquecetuba - University",
      'qualification.title3': "Software Engineer",
      'qualification.subtitle3': "Éboli Tecnologia - Unpaid Intern <br> Frontend | Backend | Server",
      'services.section.title': "Services",
      'services.section.subtitle': "What I Offer",
      'services.title1': "Frontend <br> Developer",
      'services.title2': "Backend <br> Developer",
      'services.title3': "Linux <br> Server",
      'services.lermais': "Read More",
      'services.detail1': "I develop functional and visually appealing interfaces with user experience in mind.",
      'services.detail1.1': "I create responsive and intuitive layouts using Flutter for mobile, and HTML, CSS and JavaScript for the web.",
      'services.detail1.2': "I care about code organization and fidelity to the design, ensuring easy maintenance.",
      'services.detail1.3': "I balance aesthetics and usability to create clean and practical interfaces.",
      'services.detail2': "I have experience with authentication, data security, and validation in web and mobile systems.",
      'services.detail2.1': "I work with relational databases like PostgreSQL and MySQL, focusing on clean structure and efficient queries.",
      'services.detail2.2': "I integrate third-party APIs like Mercado Pago, Stripe, and RevenueCat, using webhooks for real-time communication.",
      'services.detail2.3': "I design scalable and maintainable back-end systems with clean, modular code.",
      'services.detail3': "I configure Linux servers to host web applications, with a focus on stability and security.",
      'services.detail3.1': "I work with web servers like Nginx and Apache, including HTTPS setup with Certbot and Let’s Encrypt.",
      'services.detail3.2': "I deploy on Amazon EC2, including firewall setup, access control and performance optimization.",
      'services.detail3.3': "I install and configure ERPs, CRMs, and databases on Linux. I’ve also worked with Asterisk.",
      'services.detail3.4': "I create test environments using VirtualBox and VMs to support development, backup and replication.",
      'portfolio.section.title': "Portfolio",
      'portfolio.section.subtitle': "Recent Projects",
      'portfolio.title1': "Honkai",
      'portfolio.description1': "An online manga store created as my college thesis. <br> PHP | Html | MySQL | Webhook | JS | CSS | API",
      'portfolio.button1': "Video",
      'portfolio.title2': "MyTask",
      'portfolio.description2': "An online notepad created as a college assignment. <br> ASP.NET | HTML | Access | CSS | API",
      'portfolio.button2': "Video",
      'portfolio.title3': "Talkie-In",
      'portfolio.description3': "Project I helped develop during an internship. <br> Flutter | Asterisk | WebSocket | PostgreSQL | API",
      'portfolio.button3': "Download",
      'portfolio.title4': "Fatecanos for a day",
      'portfolio.description4': "This project was developed at the request of a university professor. <br> Html | Css | NodeJs | access | API",
      'portfolio.button4': "GitHub",
      'future.title': "Future Projects",
      'future.description': "I'm always open to new ideas and collaborations. If you have a project in mind, let’s build it together!",
      'future.button': "Contact Me",
      'contact.section.title': "Contact",
      'contact.section.subtitle': "Get in Touch",
      'contact.title1': "Phone",
      'contact.title2': "Email",
      'contact.title3': "Location",
      'contact.subtitle3': "Brazil",
      'footer.title': "Rafael",
      'footer.subtitle': "Developer",
      'footer.link1': "Services",
      'footer.link2': "Portfolio",
      'footer.link3': "Contact",
      'footer.source': "Source code:"
    },
    // portuguese - brazilian
    'pt-br': {
    'titulo': "Portifólio do Rafael",
    'frontEnd.nome': "Rafael dos Santos Alves Pires",
    'frontEnd.header1': "Home",
    'frontEnd.header2': "Sobre",
    'frontEnd.header3': "Habilidades",
    'frontEnd.header4': "Serviços",
    'frontEnd.header5': "Portifólio",
    'frontEnd.header6': "Contato",
    'frontEnd.header7': "Idioma",
    'home.title': "Oi, eu sou o Rafael",
    'home.subtitle': "Desenvolvedor",
    'home.description': "Sou desenvolvedor com experiência em sistemas web e mobile. Já trabalhei com Flutter, Node.js, PHP, PostgreSQL e integrações como Mercado Pago, RevenueCat e Stripe. Tenho familiaridade com Linux, Nginx, e deploys em nuvem como o Amazon EC2.",
    'home.scroll': "Rolar para Baixo",
    'about.title': "Sobre mim",
    'about.subtitle': "Minha introdução",
    'about.description': "Gosto de entender o que está por trás de cada coisa que programo — não só fazer funcionar, mas entender o porquê. Com o tempo, fui me envolvendo em projetos variados, desde apps mobile até sistemas completos com banco de dados, APIs e servidores Linux. Prefiro soluções simples e organizadas, e estou sempre buscando aprender algo novo por conta própria.",
    'about.info.name1': "Anos de <br> Experiência",
    'about.info.name2': "Projetos <br> Completos",
    'about.info.name3': "Empresas <br> que Trabalhei",
    'about.download': "Baixar Currículo",
    'skill.section.title': "Habilidades",
    'skill.section.subtitle': "Minha habilidade técnica <br><br> 0%/40% = Básico <br> 41%/70% = Intermediário <br> 71%/100% = Avançado",
    'skill.title1': "Idiomas",
    'skill.subtitle1': "Mais de 7 anos",
    'skill.name1': "Inglês",
    'skill.name1.1': "Japonês",
    'skill.name1.2': "Português - Brasileiro",
    'skill.title2': "Desenvolvedor Backend",
    'skill.subtitle2': "Mais de 5 anos",
    'skill.name2': "PHP",
    'skill.name2.1': "Node.js",
    'skill.name2.2': "Python",
    'skill.name2.3': "ASP.NET",
    'skill.title3': "Desenvolvedor Frontend",
    'skill.subtitle3': "Mais de 5 anos",
    'skill.name3': "JavaScript",
    'skill.name3.1': "HTML",
    'skill.name3.2': "CSS",
    'skill.name3.3': "Flutter",
    'qualification.section.title': "Qualificações",
    'qualification.section.subtitle': "Minha jornada pessoal",
    'qualification.button1': "Educação",
    'qualification.button2': "Trabalho",
    'qualification.title1': "Gestão da Tecnologia da Informação",
    'qualification.subtitle1': "Fatec - Itaquaquecetuba - Universidade",
    'qualification.title2': "TOEIC",
    'qualification.subtitle2': "Fatec - Itaquaquecetuba - Universidade",
    'qualification.title3': "Engenheiro de Software",
    'qualification.subtitle3': "Éboli Tecnologia - Estagiário não remunerado <br> Frontend | Backend | Servidor",
    'services.section.title': "Serviços",
    'services.section.subtitle': "O que eu ofereço",
    'services.title1': "Desenvolvedor <br> Frontend",
    'services.title2': "Desenvolvedor <br> Backend",
    'services.title3': "Servidor <br> Linux",
    'services.lermais': "Ler mais",
    'services.detail1': "Desenvolvo interfaces funcionais e visualmente agradáveis, sempre pensando na experiência do usuário.",
    'services.detail1.1': "Crio layouts responsivos e intuitivos usando Flutter para mobile, e HTML, CSS e JavaScript para web.",
    'services.detail1.2': "Me preocupo com a organização do código e a fidelidade ao design, garantindo facilidade de manutenção.",
    'services.detail1.3': "Busco equilibrar estética e usabilidade, criando interfaces que sejam bonitas e práticas ao mesmo tempo.",
    'services.detail2': "Tenho experiência com autenticação, segurança de dados e validação de informações em sistemas web e mobile.",
    'services.detail2.1': "Trabalho com bancos de dados relacionais como PostgreSQL e MySQL, sempre focando em estrutura limpa e consultas eficientes.",
    'services.detail2.2': "Integro APIs de terceiros como Mercado Pago, Stripe e RevenueCat, utilizando webhooks para garantir comunicação em tempo real.",
    'services.detail2.3': "Estruturo o back-end pensando em escalabilidade e manutenção, com código limpo e bem dividido.",
    'services.detail3': "Realizo a configuração de servidores Linux para hospedagem de aplicações web, com foco em estabilidade e segurança.",
    'services.detail3.1': "Tenho experiência com servidores web como Nginx e Apache, além de configurar HTTPS com Certbot e Let's Encrypt.",
    'services.detail3.2': "Faço deploys em nuvem com Amazon EC2, incluindo gerenciamento de acesso, firewall e otimização do ambiente.",
    'services.detail3.3': "Instalo e configuro sistemas como ERPs, CRMs, bancos de dados em ambiente Linux. Já tive experiência com Asterisk.",
    'services.detail3.4': "Crio ambientes de teste com VirtualBox e VMs, facilitando desenvolvimento, backup e replicação de sistemas.",
    'portfolio.section.title': "Portifólio",
    'portfolio.section.subtitle': "Projetos Recentes",
    'portfolio.title1': "Honkai",
    'portfolio.description1': "Uma loja de mangás online criada como meu TCC para a faculdade. <br> PHP | Html | MySQL | Webhook | JS | CSS | API",
    'portfolio.button1': "Vídeo",
    'portfolio.title2': "MyTask",
    'portfolio.description2': "Um bloco de notas online criado como AAP para a faculdade. <br> ASP.NET | HTML | Access | CSS | API",
    'portfolio.button2': "Vídeo",
    'portfolio.title3': "Talkie-In",
    'portfolio.description3': "Projeto que ajudei no desenvolvimento durante estágio. <br> Flutter | Asterisk | WebSocket | PostgreSQL | API",
    'portfolio.button3': "Baixar",
    'portfolio.title4': "Fatecanos por um dia",
    'portfolio.description4': "Projeto desenvolvido pelo pedido de um professor da Fatec de Itaquaquecetuba. <br> Html | Css | NodeJs | access | API",
    'portfolio.button4': "GitHub",
    'future.title': "Projetos Futuros",
    'future.description': "Estou sempre aberto a novos projetos e colaborações. Se você tem uma ideia ou um projeto em mente, não hesite em entrar em contato comigo. Vamos trabalhar juntos para dar vida à sua visão!",
    'future.button': "Contate-me",
    'contact': "Contate-me",
    'contact.section.title': "Contato",
    'contact.section.subtitle': "Entre em Contato",
    'contact.title1': "Celular",
    'contact.title2': "Email",
    'contact.title3': "Localização",
    'contact.subtitle3': "Brasil",
    'footer.title': "Rafael",
    'footer.subtitle': "Desenvolvedor",
    'footer.link1': "Serviços",
    'footer.link2': "Portifólio",
    'footer.link3': "Contato",
    'footer.source': "Código fonte:"
  },
  // japanese language
  'ja': {
    'titulo': "ラファエルのポートフォリオ",
    'frontEnd.nome': "ラファエル・ドス・サントス・アルヴェス・ピレス",
    'frontEnd.header1': "ホーム",
    'frontEnd.header2': "自己紹介",
    'frontEnd.header3': "スキル",
    'frontEnd.header4': "サービス",
    'frontEnd.header5': "ポートフォリオ",
    'frontEnd.header6': "連絡先",
    'frontEnd.header7': "言語",
    'home.title': "こんにちは、ラファエルです",
    'home.subtitle': "開発者",
    'home.description': "私はWebとモバイルシステムの開発経験を持つ開発者です。Flutter、Node.js、PHP、PostgreSQLなどを使用し、Mercado Pago、RevenueCat、Stripeとの統合も行ってきました。LinuxやNginx、Amazon EC2などのクラウドデプロイも扱っています。",
    'home.scroll': "下にスクロール",
    'about.title': "私について",
    'about.subtitle': "自己紹介",
    'about.description': "私は、ただ動かすだけでなく、なぜ動くのかを理解するのが好きです。モバイルアプリからデータベース、API、Linuxサーバーを含むシステムまで、様々なプロジェクトに携わってきました。シンプルで整理された解決策を好み、常に自分で新しいことを学び続けています。",
    'about.info.name1': "経験 <br> 年数",
    'about.info.name2': "完了した <br> プロジェクト",
    'about.info.name3': "勤務した <br> 企業",
    'about.download': "履歴書をダウンロード",
    'skill.section.title': "スキル",
    'skill.section.subtitle': "技術レベル <br><br> 0%/40% = 基本 <br> 41%/70% = 中級 <br> 71%/100% = 上級",
    'skill.title1': "言語",
    'skill.subtitle1': "7年以上",
    'skill.name1': "英語",
    'skill.name1.1': "日本語",
    'skill.name1.2': "ポルトガル語（ブラジル）",
    'skill.title2': "バックエンド開発者",
    'skill.subtitle2': "5年以上",
    'skill.name2': "PHP",
    'skill.name2.1': "Node.js",
    'skill.name2.2': "Python",
    'skill.name2.3': "ASP.NET",
    'skill.title3': "フロントエンド開発者",
    'skill.subtitle3': "5年以上",
    'skill.name3': "JavaScript",
    'skill.name3.1': "HTML",
    'skill.name3.2': "CSS",
    'skill.name3.3': "Flutter",
    'qualification.section.title': "資格",
    'qualification.section.subtitle': "私のキャリア",
    'qualification.button1': "教育",
    'qualification.button2': "仕事",
    'qualification.title1': "情報技術管理",
    'qualification.subtitle1': "Fatec - Itaquaquecetuba - 大学",
    'qualification.title2': "TOEIC",
    'qualification.subtitle2': "Fatec - Itaquaquecetuba - 大学",
    'qualification.title3': "ソフトウェアエンジニア",
    'qualification.subtitle3': "Éboli Tecnologia - 無給インターン <br> フロントエンド | バックエンド | サーバー",
    'services.section.title': "サービス",
    'services.section.subtitle': "提供内容",
    'services.title1': "フロントエンド <br> 開発者",
    'services.title2': "バックエンド <br> 開発者",
    'services.title3': "Linux <br> サーバー",
    'services.lermais': "もっと見る",
    'services.detail1': "ユーザー体験を重視した、機能的で美しいインターフェースを作成します。",
    'services.detail1.1': "Flutter（モバイル）、HTML、CSS、JavaScript（Web）でレスポンシブで直感的なレイアウトを構築します。",
    'services.detail1.2': "コードの整理とデザインの忠実性を大切にし、保守性を意識しています。",
    'services.detail1.3': "美しさと使いやすさを両立させたUIを作るように心がけています。",
    'services.detail2': "Webやモバイルアプリにおける認証、データセキュリティ、バリデーションの実装経験があります。",
    'services.detail2.1': "PostgreSQLやMySQLなどのリレーショナルデータベースに精通しています。",
    'services.detail2.2': "Mercado Pago、Stripe、RevenueCatなどのAPIをWebhookでリアルタイム連携します。",
    'services.detail2.3': "保守しやすく、拡張可能なバックエンド構成を心がけています。",
    'services.detail3': "Linuxサーバー上にWebアプリケーションを安定・安全に構築します。",
    'services.detail3.1': "NginxやApacheでのWebサーバー構築、Let's EncryptによるHTTPS化に対応可能です。",
    'services.detail3.2': "Amazon EC2を使ったクラウドデプロイにも対応しています。",
    'services.detail3.3': "ERP、CRM、データベース、AsteriskなどをLinuxで構築した経験があります。",
    'services.detail3.4': "VirtualBoxや仮想マシンを使って、開発・バックアップ・複製環境を整備します。",
    'portfolio.section.title': "ポートフォリオ",
    'portfolio.section.subtitle': "最近のプロジェクト",
    'portfolio.title1': "Honkai",
    'portfolio.description1': "大学の卒業プロジェクトとして作成したオンライン漫画ストア。<br> PHP | Html | MySQL | Webhook | JS | CSS | API",
    'portfolio.button1': "動画",
    'portfolio.title2': "MyTask",
    'portfolio.description2': "大学の課題で作成したオンラインメモ帳。<br> ASP.NET | HTML | Access | CSS | API",
    'portfolio.button2': "動画",
    'portfolio.title3': "Talkie-In",
    'portfolio.description3': "インターン中に開発に関わったプロジェクト。<br> Flutter | Asterisk | WebSocket | PostgreSQL | API",
    'portfolio.button3': "ダウンロード",
    'portfolio.title4': "大学生の日常",
    'portfolio.description4': "このプロジェクトは、ある教授からの依頼で開発しました。 <br> Html | Css | NodeJs | access | API",
    'portfolio.button4': "GitHub",
    'future.title': "将来のプロジェクト",
    'future.description': "新しいアイデアやコラボを常に歓迎しています。あなたのビジョンを一緒に形にしましょう！",
    'future.button': "お問い合わせ",
    'contact': "お問い合わせ",
    'contact.section.title': "連絡先",
    'contact.section.subtitle': "ご連絡はこちらへ",
    'contact.title1': "電話番号",
    'contact.title2': "メール",
    'contact.title3': "所在地",
    'contact.subtitle3': "ブラジル",
    'footer.title': "ラファエル",
    'footer.subtitle': "開発者",
    'footer.link1': "サービス",
    'footer.link2': "ポートフォリオ",
    'footer.link3': "連絡先",
    'footer.source': "ソースコード:"
  }
  };

  function changeLanguage(lang) {
    localStorage.setItem('siteLanguage', lang);

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = translations[lang]?.[key];
      if (translation) {
        el.innerHTML = translation;
      }
    });

    document.body.style.visibility = 'visible';

    const nav = document.querySelector(".nav");
    const navMenu = document.querySelector(".nav__menu");
    const footer = document.querySelector(".footer__container");

    if (lang == "ja"){
        nav.classList.add("nav__japanese");
        navMenu.classList.add("nav__menu-japanese");
        footer.classList.add("footer__japanese");
    } else{
        nav.classList.remove("nav__japanese");
        navMenu.classList.remove("nav__menu-japanese");
        footer.classList.remove("footer__japanese");
    }
  }

  // Restore saved language on page load
    document.addEventListener("DOMContentLoaded", () => {
        const savedLang = localStorage.getItem('siteLanguage') || 'pt-br';
        changeLanguage(savedLang);
  });

  // open a pop up

  const languageButton = document.querySelector(".change__language");
  const languageModal = document.querySelector(".language__modal");
  const languageClose = document.querySelector(".language__modal-close");

  languageButton.addEventListener("click", (e) => {
    e.preventDefault();
    languageModal.classList.add("language__open");
  });

  languageClose.addEventListener("click", () => {
    languageModal.classList.remove("language__open");
  })


