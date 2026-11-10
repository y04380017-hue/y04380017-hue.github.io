window.PIKO_PROFILE = {
  zh: {
    jobs: [
      {
        n: "01",
        role: "项目实习生",
        org: "公益服务中心",
        dates: "2026.08 - 2026.11",
        pts: [
          "承担公益项目申报、结项材料的合规审核，校验材料完整性与格式规范，识别信息不一致、材料缺失等异常并标记待复核项。",
          "完成项目档案分类梳理、核对与电子化归档维护，建立可追溯的档案台账，降低资料遗失风险与查阅成本。",
          "撰写并整理项目支持文件，整合业务信息形成标准业务文档，支撑项目落地推进。",
          "从实际业务要求出发，尝试开发本地化 AI 工具，构建脱敏数据集，将业务规则解构并形成 AI 工具的运行规则。"
        ]
      },
      {
        n: "02",
        role: "社工实习生",
        org: "社会工作机构",
        dates: "2025.12 - 2026.01",
        pts: [
          "策划并执行福利机构老年人日常活动 8 场，负责方案准备、现场组织及参与者沟通。",
          "借助 AI 辅助收集、整理老年人活动需求信息，形成活动策划草案及物料选购清单、时间安排与场地联系事项，为活动组织执行提供参考。",
          "参与志愿者招募、登记、培训与现场协调。"
        ]
      },
      {
        n: "03",
        role: "社工实习生",
        org: "社会工作机构",
        dates: "2025.07 - 2025.09",
        pts: [
          "通过线上调研与线下走访，整理 3 个社区的基础信息与服务需求，协助策划并执行社区及敬老院活动 10 场。",
          "借助 AI 归纳收集到的老年人及社区服务需求，形成活动方案草案与物料选购、流程时间和场地联系清单，辅助后续筹备与执行。",
          "负责活动摄影、宣传文案与视频制作，完成公众号推文 10 篇、宣传视频 2 条。",
          "参与志愿者招募、联络、分工与培训。"
        ]
      }
    ],
    practices: [
      {
        n: "01",
        role: "摊位运营",
        org: "手账市集代售",
        dates: "2025.08 - 2026.08",
        pts: [
          "全链路运营：代理4位手账创作者完成5场市集运营，维护20余类文创商品价格与库存清单，累计销售额2万元，接待约1000人次顾客。",
          "用户洞察与现场管理：向创作者反馈热销品类与顾客需求，完成布展陈列、销售登记、盘点对账，处理补货与交易异常等突发问题。"
        ]
      },
      {
        n: "02",
        role: "教学秘书助管",
        org: "学院",
        dates: "2024.09 - 2026.06",
        pts: [
          "核对并归档教学文件、学籍资料与成绩报表，维护电子台账。",
          "对接师生需求，协调课程、考试与教学考评，审核学生行政申请材料。"
        ]
      }
    ],
    projects: [
      {
        "kind": "game",
        "title": "白日梦手作房",
        "category": "游戏原型/交互设计",
        "role": "产品设计·AI协作开发",
        "period": "2026.10 - 2026.11",
        "summary": "基于 Unity 的鼠标手账创作原型：在固定坐姿书桌前整理胶带、贴纸和便签，裁切与拼贴素材，并翻阅手账和离型本的独立内页。",
        "metrics": [
          {
            "value": "30",
            "label": "卷陈列胶带"
          },
          {
            "value": "2",
            "label": "本独立离型本"
          },
          {
            "value": "Windows",
            "label": "可下载试玩"
          }
        ],
        "points": [
          "根据功能需求与实际试玩反馈，迭代素材选择与拖放、胶带拉取选长、分类收纳、书本翻页和坐姿环视体验。",
          "负责产品与交互设计，借助 AI 协作推进 Unity 原型开发，将手账、胶带架、抽屉与离型本连接成可操作的创作流程。",
          "对 Windows Demo 进行实际运行与鼠标操作验收，整理操作说明，并通过 GitHub 交付源码与可下载试玩版本。"
        ],
        "image": "assets/daydream-handjournal-cover.png",
        "imageAlt": "白日梦手作房鼠标版的日间全桌面实机画面，可见胶带柜、中央手账、便签收纳和右侧本册。",
        "links": [
          {
            "label": "下载 Windows 鼠标版",
            "href": "https://github.com/y04380017-hue/daydream-handjournal/releases/tag/v0.1.0-mouse",
            "primary": true
          },
          {
            "label": "查看源码",
            "href": "https://github.com/y04380017-hue/daydream-handjournal",
            "primary": false
          }
        ]
      },
      {
        "kind": "product",
        "title": "Encore",
        "category": "产品概念/交互原型",
        "role": "产品设计与交互原型",
        "period": "2026.11",
        "summary": "以“让一次相遇，有下一次”为目标的活动回访产品概念。将形式与同行偏好、原组私下成行和个人纪念连接为可点击体验；当前为使用虚构数据的本地交互原型。",
        "metrics": [
          {
            "value": "3",
            "label": "个统一产品入口"
          },
          {
            "value": "2",
            "label": "条独立偏好轴"
          },
          {
            "value": "HTML",
            "label": "离线交互 Demo"
          }
        ],
        "points": [
          "梳理活动散场后的再次参与路径，将活动形式与同行关系分开采集，并把原组再聚、熟面孔、新朋友与暂停参与统一为单一推荐流程。",
          "设计三人私下确认成行、双方互选后才揭示、私密排除和明确分享范围，避免公开个人拒绝、单向好感或未回复情况。",
          "借助 AI 协作完成单文件 HTML 原型，将选图做邮票、留言、草稿、纪念信封、行程与签到串联；使用本地虚构数据演示，不涉及真实预订。"
        ],
        "image": "assets/encore-cover.png",
        "imageAlt": "Encore 项目展示封面，以米色、黄色、红色与暖橙色呈现邮票纪念和下一次相见的产品概念。",
        "links": [
          {
            "label": "体验交互 Demo",
            "href": "encore.html",
            "primary": true
          },
          {
            "label": "查看产品结构",
            "href": "encore-product-structure.md",
            "primary": false
          }
        ]
      }
    ],
    contact: {
      email: "svt04061107@126.com"
    }
  },
  en: {
    jobs: [
      {
        n: "01",
        role: "Project Intern",
        org: "公益服务中心",
        dates: "2026.08 - 2026.11",
        pts: [
          "Reviewed nonprofit project application and closeout materials for compliance, checked completeness and formatting, and flagged inconsistent information, missing documents and other issues for further review.",
          "Organized, checked and maintained digital project archives and created traceable records to reduce the risk of lost documents and the effort needed to retrieve them.",
          "Drafted and organized project support documents, consolidating operational information into standardized business documents to support project delivery.",
          "Attempted to develop local AI tools based on actual business requirements, building a de-identified dataset and breaking down business rules into operating rules for the tools."
        ]
      },
      {
        n: "02",
        role: "Social Work Intern",
        org: "Social Work Organization",
        dates: "2025.12 - 2026.01",
        pts: [
          "Planned and delivered 8 daily activities for older adults at a welfare institution, including activity preparation, on-site organization and participant communication.",
          "Used AI to assist with collecting and organizing information on older adults’ activity needs and to draft activity plans, materials purchasing lists, schedules and venue contact tasks as references for organizing and delivering activities.",
          "Supported volunteer recruitment, registration, training and on-site coordination."
        ]
      },
      {
        n: "03",
        role: "Social Work Intern",
        org: "Social Work Organization",
        dates: "2025.07 - 2025.09",
        pts: [
          "Compiled background information and service needs for 3 communities through online research and in-person visits, and helped plan and deliver 10 activities in communities and nursing homes.",
          "Used AI to summarize collected needs of older adults and community services and to draft activity plans and checklists for materials purchasing, activity timing and venue contacts, supporting subsequent preparation and delivery.",
          "Handled event photography, promotional writing and video production, completing 10 WeChat public account posts and 2 promotional videos.",
          "Supported volunteer recruitment, communication, task allocation and training."
        ]
      }
    ],
    practices: [
      {
        n: "01",
        role: "Booth Operations",
        org: "Journaling Market Consignment Sales",
        dates: "2025.08 - 2026.08",
        pts: [
          "End-to-end operations: Represented 4 journaling creators at 5 markets, maintained pricing and inventory lists for over 20 categories of creative products, generated RMB 20,000 in total sales and served approximately 1,000 customer visits.",
          "Customer insights and on-site management: Shared best-selling product categories and customer needs with creators, handled booth setup and displays, sales records, inventory counts and account reconciliation, and resolved restocking issues and transaction exceptions."
        ]
      },
      {
        n: "02",
        role: "Teaching Administration Assistant",
        org: "学院",
        dates: "2024.09 - 2026.06",
        pts: [
          "Checked and archived teaching documents, student records and grade reports, and maintained electronic registers.",
          "Coordinated faculty and student requests, courses, examinations and teaching evaluations, and reviewed students’ administrative application materials."
        ]
      }
    ],
    projects: [
      {
        "kind": "game",
        "title": "白日梦手作房 · Daydream Handjournal",
        "category": "Game Prototype / Interaction Design",
        "role": "Product Design · AI-assisted Development",
        "period": "2026.10 - 2026.11",
        "summary": "A Unity mouse-controlled journaling prototype for arranging washi tape, stickers and sticky notes at a seated desk, cutting and placing materials, and browsing journals and separate sticker release books.",
        "metrics": [
          {
            "value": "30",
            "label": "Washi tapes on display"
          },
          {
            "value": "2",
            "label": "Independent sticker release books"
          },
          {
            "value": "Windows",
            "label": "Downloadable demo"
          }
        ],
        "points": [
          "Iterated selection and dragging, tape length control, storage, page turning and seated camera views from project requirements and hands-on playtest feedback.",
          "Designed product flows and interactions and worked with AI on a Unity prototype connecting journals, tape racks, drawers and sticker release books.",
          "Ran the Windows demo and native mouse interaction checks, documented controls, and delivered source code and a downloadable build through GitHub."
        ],
        "image": "assets/daydream-handjournal-cover.png",
        "imageAlt": "Daytime in-game view of the full Daydream Handjournal desk, showing the tape cabinet, central journal, note storage and notebooks.",
        "links": [
          {
            "label": "Download for Windows",
            "href": "https://github.com/y04380017-hue/daydream-handjournal/releases/tag/v0.1.0-mouse",
            "primary": true
          },
          {
            "label": "Source code",
            "href": "https://github.com/y04380017-hue/daydream-handjournal",
            "primary": false
          }
        ]
      },
      {
        "kind": "product",
        "title": "Encore",
        "category": "Product / Interaction Prototype",
        "role": "Product Design & Interactive Prototyping",
        "period": "2026.11",
        "summary": "A product concept for helping people return after a shared activity. It connects format and company preferences, private group commitments and personal keepsakes in a clickable local prototype with fictional data.",
        "metrics": [
          {
            "value": "3",
            "label": "Unified product entry points"
          },
          {
            "value": "2",
            "label": "Independent preference axes"
          },
          {
            "value": "HTML",
            "label": "Offline interactive demo"
          }
        ],
        "points": [
          "Mapped the post-event return journey, separated activity-format preferences from who guests want to meet, and combined group reunions, familiar faces, new guests and pausing into one recommendation flow.",
          "Designed private three-person confirmation, mutual-only reveals, private exclusions and explicit sharing scopes to avoid exposing declines, one-sided interest or unanswered invitations.",
          "Worked with AI to build a self-contained HTML prototype connecting photo-to-stamp creation, notes, drafts, activity envelopes, plans and check-in. All event and booking data is fictional and local."
        ],
        "image": "assets/encore-cover.png",
        "imageAlt": "Encore project cover using beige, yellow, red and warm orange to present personal stamp keepsakes and the next shared activity.",
        "links": [
          {
            "label": "Try interactive demo",
            "href": "encore.html",
            "primary": true
          },
          {
            "label": "Product structure",
            "href": "encore-product-structure.md",
            "primary": false
          }
        ]
      }
    ],
    contact: {
      email: "svt04061107@126.com"
    }
  }
};
