export type WorkLanguage = 'zh' | 'en'

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export type WorkItem = WorkListItem

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export type WorksCopy = WorksLang

export const WORKS: Record<WorkLanguage, WorksLang> = {
  "zh": {
    "title": "项目经历",
    "closeLabel": "返回",
    "openLabel": "展开作品",
    "hint": "继续下滑",
    "awardsLabel": "项目成果",
    "visitLabel": "查看完整项目",
    "detailPlaceholder": "项目详情",
    "phImageLabel": "项目预览",
    "phButtonLabel": "打开项目",
    "countLabel": (n: number) => `${n} 个项目`,
    "sections": [
      {
        "id": "project-1",
        "no": "01",
        "title": "私域触达与转化优化",
        "tagline": "用户分层｜卖点包装｜转化测试｜AI复盘",
        "items": [
          {
            "name": "AI资讯产品私域触达与转化优化",
            "meta": "AI Information Product Insights & Brand Promotion",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "需求调研：用户反馈与价格问卷，规划分阶段沟通",
              "品牌内容：100+条内容，协助达人筛选与上线跟踪",
              "活动执行：线上拉新、线下推广及渠道内容A/B测试",
              "效果复盘：AI看板；注册较前周+50%，首次专题创建率相对约+15%"
            ]
          }
        ]
      },
      {
        "id": "project-2",
        "no": "02",
        "title": "用户需求与内容促活",
        "tagline": "需求归类｜社群答疑｜内容促活｜体验反馈",
        "items": [
          {
            "name": "AI教育产品用户需求与内容促活",
            "meta": "AI Education User Needs & Content Activation",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "用户洞察：整理100+条反馈，识别需求与使用障碍",
              "产品传播：输出30+篇指南、FAQ、教程及场景案例",
              "推广落地：高校活动与物料准备，东南亚合作跟进",
              "反馈迭代：10条建议，期间核心功能使用率提升30%"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "新品卖点与渠道联动",
        "tagline": "新品调研｜社媒素材｜上线排期｜数据复盘",
        "items": [
          {
            "name": "ZUS Coffee新品卖点与渠道联动",
            "meta": "ZUS Coffee Product Messaging & Channel Coordination",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "新品调研：结合消费者偏好与竞品内容提炼卖点",
              "社媒执行：50条Instagram内容，拍摄剪辑与英文文案",
              "渠道协同：线上首发及FamilyMart宣传素材与排期",
              "内容复盘：15+次复盘，协同带动账号粉丝增长1.1w+"
            ]
          }
        ]
      }
    ]
  },
  "en": {
    "title": "Project Experience",
    "closeLabel": "Back",
    "openLabel": "Open case",
    "hint": "Scroll to continue",
    "awardsLabel": "Outcomes",
    "visitLabel": "View full case",
    "detailPlaceholder": "Project details",
    "phImageLabel": "Project preview",
    "phButtonLabel": "Open project",
    "countLabel": (n: number) => `${n} projects`,
    "sections": [
      {
        "id": "project-1",
        "no": "01",
        "title": "Owned-channel Marketing & Conversion",
        "tagline": "Campaign Planning · Content · Creators · AI Reviews",
        "items": [
          {
            "name": "AI Information Product Insights & Brand Promotion",
            "meta": "From User Needs to Content, Campaigns & Performance Review",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "Research: user feedback and pricing surveys informed messages by user stage",
              "Content: 100+ posts plus creator screening and launch tracking",
              "Execution: online acquisition, offline promotion and channel content tests",
              "Review: AI dashboard; registrations +50% versus prior week, first-topic rate approximately +15% relatively"
            ]
          }
        ]
      },
      {
        "id": "project-2",
        "no": "02",
        "title": "User Needs & Content Activation",
        "tagline": "User Insights · Communication · Materials · Partnerships",
        "items": [
          {
            "name": "AI Education User Needs & Content Activation",
            "meta": "Research, Product Communication & University Promotion",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "Insights: classified 100+ feedback items to identify needs and barriers",
              "Communication: 30+ guides, FAQs, tutorials and use cases",
              "Execution: university events, materials and Southeast Asia partnerships",
              "Iteration: over 10 suggestions; core-feature usage increased 30% during the period"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "Product Messaging & Channel Coordination",
        "tagline": "Consumer Insights · Social Content · Launch · Channels",
        "items": [
          {
            "name": "ZUS Coffee Product Messaging & Channel Coordination",
            "meta": "New-Product Messages, Instagram & Retail Communication",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "Research: consumer preferences and competitor content shaped launch messages",
              "Content: 50 Instagram posts, shooting, editing and English copy",
              "Channels: online launch and FamilyMart assets and schedules",
              "Review: 15+ reviews; contributed to 11k+ account follower growth"
            ]
          }
        ]
      }
    ]
  }
}


export const WORKS_CONTENT = WORKS

export const SECTION_COVERS: Record<string, string> = {
  'project-1': `${import.meta.env.BASE_URL}works/covers/sohu-dashboard.png`,
  'project-2': `${import.meta.env.BASE_URL}works/covers/education-pilot.png`,
  'project-4': `${import.meta.env.BASE_URL}works/covers/zus-everywhere.jpg`,
}
