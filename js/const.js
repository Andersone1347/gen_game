/* Вопросы с ответами и изменение счета */
const questions = [
    [
        "Ваша любимая вайфа в Игре",
        ["Яэ Мико", "Ёимия", "Джинн", "Гань Юй", "Е Лань"],
        [
            "this.score.taldarim++",
            "this.score.protoss++",
            "this.score.zerg++",
            "this.score.terran++",
            "this.score.primal++"
        ]
    ],
    [
        "Любимое время года",
        ["Лето", "Осень-Весна", "Зима"],
        [
            "this.score.protoss++; this.score.terran--",
            "this.score.primal++; this.score.protoss--; this.score.terran--",
            "this.score.terran++; this.score.protoss--"
        ]
    ],
    [
        "Топ 1 пиро дамагер",
        ["Дилюк", "Ёимия", "Ху Тао"],
        [
            "this.score.protoss--",
            "this.score.protoss--",
            "this.score.protoss++"
        ]
    ],

    [
        "Какая связка персонажей выглядит сильнее на ваш взгляд",
        ["Тарталья под Сян Лин", "Ху Тао под Син Цю", "Аяка под Беннетом"],
        [
            "this.score.primal++; this.score.protoss--; this.score.terran--", 
            "this.score.protoss++; this.score.terran--", 
            "this.score.terran++; this.score.protoss--"
        ]
    ],
    [
        "В какой стихии больше вайф?(риторический вопрос)",
        ["Крио"],
        [
            "this.score.terran++"
        ]
    ],
    [
        "Под реакцию вейп лучше подходят персонажи какой стихии?",
        ["Анемо", "Дендро", "Крио"],
        [
            "this.score.zerg+=2; this.score.protoss--; this.score.terran--", 
            "this.score.protoss++; this.score.terran--; this.score.zerg-=2", 
            "this.score.terran++; this.score.protoss--; this.score.zerg-=2"
        ]
    ],
    [
        "Более симпотичный персонаж для вас",
        ["Сяо", "Аято", "Дилюк"],
        [
            "this.score.zerg++; this.score.protoss--", 
            "this.score.primal++; this.score.protoss--", 
            "this.score.protoss++; this.score.zerg--"
        ]
    ],
    [
        "Более жданный для вас архонт",
        ["Гидро", "Дендро", "Пиро", "Крио"],
        [
            "this.score.primal++; this.score.protoss--; this.score.terran--", 
            "this.score.zerg++; this.score.protoss--; this.score.terran--", 
            "this.score.protoss++; this.score.terran--; this.score.zerg--", 
            "this.score.terran++; this.score.protoss--; this.score.zerg--"
        ]
    ],
    [
        "Что Дилюк делает с ледяными статуями(мобы под крио+гидро)",
        ["Плавит", "Разбивает"],
        [
            "this.score.terran++", 
            "this.score.terran--"
        ]
    ],
    [
        "Какам реакция сильнее?",
        ["Пиро+Гидро", "(Пиро+Гидро или Гидро+Пиро) + Анемо", "Гидро+Пиро"],
        [
            "this.score.primal++; this.score.protoss--", 
            "this.score.zerg++; this.score.protoss--", 
            "this.score.protoss++; this.score.zerg--"
        ]
    ],
    [
        "С чем Дендро лучше сочетаеться?",
        ["Гидро", "Анемо", "Пиро"],
        [
            "this.score.primal++; this.score.protoss--", 
            "this.score.zerg++; this.score.protoss--", 
            "this.score.protoss++; this.score.zerg--"
        ]
    ],
    [
        "Кто более сильный архонт",
        ["Чжун Ли", "Венти", "Райден"],
        [
            "this.score.terran++; this.score.zerg--", 
            "this.score.zerg++; this.score.terran--", 
            "this.score.taldarim++; this.score.terran--; this.score.zerg--"
        ]
    ],
    [
        "Кто из персонажей выше в таблицы бездны",
        ["Райден", "Беннет", "Казуха"],
        [
            "this.score.taldarim++; this.score.zerg--", 
            "this.score.protoss++; this.score.zerg--", 
            "this.score.zerg++; this.score.protoss--"
        ]
    ],
    [
        "Кто из персонажей выше в тир листе(пиро персонажи)",
        ["Ёимия", "Дилюк", "Сян Лин", "Тома"],
        [
            "this.score.protoss--", 
            "this.score.protoss-=2", 
            "this.score.protoss++", 
            "this.score.protoss-=3"
        ]
    ],
    [
        "Какая реакция важнее для лучше Физ.урона",
        ["Электро", "Крио"],
        [
            "this.score.taldarim++; this.score.terran--", 
            "this.score.terran++"
        ]
    ],
    [
        "Каких персонажей в игре больше",
        ["Анемо", "Крио", "Пиро"],
        [
            "this.score.zerg++; this.score.protoss--; this.score.terran--", 
            "this.score.terran++; this.score.protoss--; this.score.zerg--", 
            "this.score.protoss++; this.score.terran--; this.score.zerg--"
        ]
    ],
    [
        "Кто на ваш взгляд более полезный 4* крио персонаж",
        ["Чунь Юнь", "Розария", "Диона"],
        [
            "this.score.terran--", 
            "this.score.terran--", 
            "this.score.terran++"
        ]
    ],
    [
        "Кто на ваш взгляд более полезный 4* пиро персонаж",
        ["Тома", "Синь янь", "Беннет", "Янь Фэй"],
        [
            "this.score.protoss--", 
            "this.score.protoss--", 
            "this.score.protoss++", 
            "this.score.protoss--"
        ]
    ],
    [
        "В какой стихии больше персонажей мужского пола",
        ["Крио", "Анемо", "Пиро"],
        [
            "this.score.terran++; this.score.zerg--; this.score.protoss--", 
            "this.score.zerg++; this.score.protoss--; this.score.terran--", 
            "this.score.protoss++; this.score.terran--; this.score.zerg--"
        ]
    ],
    [
        "Каких персонажей больше в тир листе ss+ ранга",
        ["Пиро", "Крио"],
        [
            "this.score.protoss++; this.score.terran--", 
            "this.score.terran++; this.score.protoss--"
        ]
    ],
    [
        "Как зовут Пиро архонта",
        ["Вельзевул", "Мурата"],
        [
            "this.score.protoss--", 
            "this.score.protoss++"
        ]
    ],
    [
        "Какой стихией лучше закрывать реакцию Таяние",
        ["Пиро", "Крио", "Нет разницы"],
        [
            "this.score.protoss++; this.score.terran--", 
            "this.score.terran++; this.score.protoss--", 
            "this.score.primal++; this.score.protoss--; this.score.terran--"
        ]
    ],
    [
        "Какой из крио персонажей может больше всего выдать DMG за один удар",
        ["Гань Юй", "Эола", "Аяка"],
        [
            "this.score.terran++", 
            "this.score.terran+=2", 
            "this.score.terran--"
        ]
    ],
    [
        "Какие персонажи более желанны гео дамагерам",
        ["Крио", "Пиро", "Электро"],
        [
            "this.score.terran++; this.score.protoss--", 
            "this.score.protoss++; this.score.zerg--", 
            "this.score.taldarim++; this.score.zerg--"
        ]
    ],
    [
        "В какой стихии более весёлые(подбуханые) персонажи",
        ["Пиро", "Крио", "Анемо"],
        [
            "this.score.protoss++; this.score.terran--; this.score.zerg-=2", 
            "this.score.terran++; this.score.protoss--; this.score.zerg-=2", 
            "this.score.zerg+=2; this.score.protoss--; this.score.terran--"
        ]
    ]
];
/* Данные для экранов резултата для каждой расы */
const results = {
    'zerg': {
        name: "Анемо",
        description: "Скиллы и атаки, заряженные Анемо-элементом, помогают фармить ресурсы и взаимодействовать с различными элементами на просторах Тейвата. Активация ветряных мельниц. Достаточно атаковать конструкцию в виде ветряной мельницы, чтобы запустить воздушный поток. Некоторые нужны, чтобы взлететь повыше, другие же сразу переносят персонажа на планере к спрятанным сокровищам. Активация ветряной мельницы в Genshin Impact. Фарм семян одуванчика. Атакуйте эти цветы, чтобы развеять их и собрать семена одуванчика .Фарм семян одуванчика в Genshin Impact.",
        quote1: "Лучшие персонажи:",
        quote2: "Казуха, Венти, Сахароза.",
        author: "",
        points: "100"
    },
    'primal': {
        name: "Гидро",
        description: "Аналогичную ценность для исследования мира Genshin Impact имеют и Гидро-навыки. Тушение пожаров. Добирайтесь в горящие области без затруднений, удаляя огонь Гидро-атаками или скиллами. Фарм пылающих цветов. Наряду с Крио туманными цветками существуют огненные растения, которые придется потушить Гидро-атакой прежде, чем получится собрать их тычинки. Удаление загрязнений. Гидро-стихия помогает бороться с некоторыми видами мусора, как и Анемо. Это знание потребуется вам в ряде сюжетных квестов и поручений.",
        quote1: "Лучшие персонажи:",
        quote2: "Елань, Син Цю, Аято.",
        author: "",
        points: "120"
    },
    'terran': {
        name: "Крио",
        description: "Эту стихию можно считать одной из самых универсальных. Фарм пылающих цветков. Вместе с Гидро-скиллами Крио тушит огонь этих растений, также позволяя собирать тычинки. Фарм пылающих цветков в Genshin Impact. Создание ледяных мостов. Крио-персонажи буквально могут ходить по воде. Используйте активный навык, атакующий по площади, чтобы заморозить часть воды перед собой. Переместитесь на край ледяной площадки и по кулдауну повторите данное действие. Ледяные мосты на воде в Genshin Impact. Подобным способом можно добраться до удаленных частей Тейвата вроде секретного острова на востоке от Мондштадта. Отключение огненных ловушек. Атакуйте Крио-стихией механизм в подземельях, чтобы временно остановить его работу и пройти через огненное препятствие.",
        quote1: "Лучшие персонажи:",
        quote2: "Аяка, Козочка, Диона",
        author: "",
        points: "90"
    },
    'infested': {
        name: "Дендро",
        description: "Нам мало что известно про эту стихию но определенно в паре с электро это одна их лучших стихий",
        quote1: "Лучшие персонажи:",
        quote2: "Тиграни, Аль-Хаим, Кусанали",
        author: "",
        points: "160"
    },
    'protoss': {
        name: "Пиро",
        description: "Объектов, которые можно поджечь в целях собственной выгоды, на карте Тейвата еще больше. Сжигание шипов и щитов. Лоза, оплетающая сундуки и вызываемая шамачурлами, а также деревянные щиты в руках хиличурлов – прекрасно горят от Пиро-атак. Сжигание шипов в Genshin Impact. Можно иногда использовать для уборки мусора, но на винокурне «Рассвет» вы рискуете сжечь снопы сена вместе с ненужной листвой. Разморозка льда. Ударьте (выстрелите) в ледяную глыбу или сугроб, чтобы высвободить сундук, кабана или даже противника, который замаскировался на Драконьем Хребте.  Растопка льда на Драконьем Хребте в Genshin Impact. Розжиг костров и факелов. Подойдите к котлу, факелу или другому источнику огня. Используйте заряженную Пиро-атаку или активный скилл, чтобы поджечь эти элементы. Розжиг факелов в Genshin Impact. При дожде реакция не будет работать, т.к. огонь сразу тухнет. Фарм Электро-кристаллов и туманных цветков.",
        quote1: "Лучшие персонажи:",
        quote2: "Ху Тао, Беннет, Сян Лин.",
        author: "",
        points: "80"
    },
    'taldarim': {
        name: "Электро",
        description: "В ограниченном количестве игрокам может понадобиться и Электро-стихия. С ее помощью активируются не только элементы, но и электрические цепи, которые можно встретить во время прохождения разных подземелий. До появления Дендро, на данный момент это сейчас одна из сильнейших реакций в игре.",
        quote1: "Лучшие персонажи:",
        quote2: "Райден, Сара, Яэ Мико",
        author: "",
        points: "140"
    },
    'hybrid': {
        name: "Гео",
        description: "В данном случае особую ценность играют Гео-персонажи, умеющие создавать тяжелые каменные блоки. Благо у всех игроков в распоряжении есть Путешественник, резонирующий со статуями Гео Архонта. Разбивание твердых предметов. Сбивайте каменные щиты, руду и прочие объекты, атакуя их Гео-стихией. Активация нажимных пластин. Гео-Путешественник или Чжун Ли прекрасно подходят для того, чтобы одновременно активировать 2-3 нажимные пластины. Прижмите свободные переключатели каменными блоками для получения спрятанных сокровищ.",
        quote1: "Лучшие персонажи:",
        quote2: "Чжун Ли, Альбедо, Итто",
        author: "",
        points: "200"
    }
}