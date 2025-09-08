// 完整题库配置
const fullQuizData = {
  // 4道必出题目（带推文链接）
  mandatory: [
      {
          question: "外国游客以高额报酬请 15 岁的小红拍摄国内某军事基地周边照片，小红正确做法是",
          options: ["欣然接受，既能赚钱又好玩", "拒绝拍摄，但不向任何人说", "先假装答应，拍摄后举报", "严词拒绝，并立即拨打 12339 国家安全机关举报电话"],
          answer: 3,
          tweet: "   ",
          tweetUrl: "https://weibo.com/5053469079/5155641573246964?sourceType=weixin&from=10F2195010&wm=20005_0002&featurecode=newtitle&s_channel=4&s_trans=7939849962_5155641573246964",
          explanation: "《预防未成年人犯罪法》第三十八条严禁参与危害国家安全活动；《反间谍法》第二十一条明确，公民应保守国家秘密，抵制间谍行为 。",
          reference: "    "
      },
      {
        question: "以下哪项属于“严重不良行为”？",
        options: ["逃学一天", "殴打他人致轻微伤", "考试作弊", "顶撞老师"],
        answer: 1,
        tweet: "      ",
        tweetUrl: "https://weibo.com/ttarticle/x/m/show/id/2309405156460731695334?_wb_client_=1&s_channel=4&s_trans=7939849962_",
        explanation: "严重不良行为包括暴力、吸毒、参加犯罪团伙等，需公安机关介入。",
        reference: "    "
    },{
      question: "你认为父母的首要责任是",
      options: ["满足子女物质需求", "预防和制止不良行为", "安排课外补习班", "代子女承担法律责任"],
      answer: 1,
      tweet: "        ",
      tweetUrl: "https://weibo.com/ttarticle/x/m/show/id/2309405156460731695334?_wb_client_=1&s_channel=4&s_trans=7939849962_",
      explanation: "家庭教育应以行为矫正和品德培养为核心。",
      reference: "        "
  },{
    question: "在离异家庭中，不与子女同住的父亲应",
    options: ["仅支付抚养费", "定期了解子女行为表现", "完全不管不问", "诋毁另一方家长"],
    answer: 1,
    tweet: "       ",
    tweetUrl: "https://weibo.com/ttarticle/x/m/show/id/2309405156460731695334?_wb_client_=1&s_channel=4&s_trans=7939849962_",
    explanation: "未共同生活父母仍需履行监护职责。",
    reference: "      "
},],
  // 8道单选题
  singleChoice: [
    {
      "question": "以下哪项属于\"不良行为\"？",
      "options": ["考试不及格", "偶尔吸烟", "多次旷课", "与父母争吵"],
      "answer": 2,
      "explanation": "不良行为包括旷课、夜不归宿、打架斗殴等，吸烟也属于不良行为，但\"偶尔\"未达\"多次\"标准。",
      "reference": "第28条"
    },
    {
      "question": "以下哪项属于\"严重不良行为\"？",
      "options": ["逃学一天", "殴打他人致轻微伤", "考试作弊", "顶撞老师"],
      "answer": 1,
      "explanation": "严重不良行为包括暴力、吸毒、参加犯罪团伙等，需公安机关介入。",
      "reference": "第38条"
    },
    {
      "question": "小张被同学在微信群传播谣言羞辱，正确的做法是：",
      "options": ["找人殴打对方", "保存证据并报告老师", "自己也造谣报复"],
      "answer": 1,
      "explanation": "依法维权是正确途径。",
      "reference": "第20条"
    },
    {
      "question": "关于未成年人网络行为，错误的是？",
      "options": ["可以参与网络赌博", "不得传播暴力信息", "警惕网络诈骗"],
      "answer": 0,
      "explanation": "参与网络赌博属于违法行为。",
      "reference": "第50条"
    },
    {
      "question": "《预防未成年人犯罪法》的主要立法目的是？",
      "options": [
        "惩罚未成年人违法犯罪行为",
        "预防和矫治未成年人不良行为",
        "替代家庭和学校教育",
        "限制未成年人自由"
      ],
      "answer": 1,
      "explanation": "该法强调\"预防为主、教育矫治\"，而非单纯惩罚。",
      "reference": "第1条"
    },
    {
      "question": "预防未成年人犯罪的基本原则是？",
      "options": [
        "教育为主，惩罚为辅",
        "打击为主，预防为辅",
        "家庭责任优先",
        "社会干预优先"
      ],
      "answer": 0,
      "explanation": "法律强调\"教育和保护相结合，预防为主、提前干预\"。",
      "reference": "第二条"
    },
    {
      "question": "根据《预防未成年人犯罪法》，已满（）周岁的未成年人实施严重暴力犯罪，应当负刑事责任？",
      "options": ["12", "14", "16", "18"],
      "answer": 0,
      "explanation": "2021年修订后，12周岁以上犯故意杀人、故意伤害致人死亡等严重犯罪，可追究刑事责任。",
      "reference": "第17条"
    },
    {
      "question": "小张被高年级学生堵在厕所索要钱财，正确的做法是？",
      "options": [
        "当场反抗并大声呼救",
        "先保证安全，事后报告老师或家长",
        "隐瞒事实以免报复",
        "找朋友帮忙殴打对方"
      ],
      "answer": 1,
      "explanation": "优先确保人身安全，事后通过合法途径解决。",
      "reference": "第35条"
    },
    {
      "question": "根据《预防未成年人犯罪法》，以下哪项属于校园欺凌行为？",
      "options": [
        "同学间因意见不合争吵",
        "长期恶意散布同学谣言",
        "体育竞赛中合理冲撞",
        "拒绝与某同学组队合作"
      ],
      "answer": 1,
      "explanation": "欺凌需具备\"恶意、重复性、权力不对等\"特征，B项符合。",
      "reference": "第20条"
    },
    {
      "question": "遭遇校园欺凌时，正确做法是？",
      "options": ["忍气吞声", "告诉老师或家长", "自行报复"],
      "answer": 1,
      "explanation": "学校需建立欺凌防控机制，学生应及时求助。",
      "reference": "第三十九条"
    },
    {
      "question": "未成年人不得实施以下哪种网络行为？",
      "options": [
        "使用社交软件与同学聊天",
        "在论坛发表健康的学习心得",
        "传播暴力恐怖游戏视频",
        "浏览正规新闻网站"
      ],
      "answer": 2,
      "explanation": "禁止传播暴力、淫秽等违法信息。",
      "reference": "第50条"
    },
    {
      "question": "未成年人实施网络诈骗可能面临",
      "options": [
        "公安机关训诫",
        "送专门学校矫治",
        "刑事处罚",
        "以上都可能"
      ],
      "answer": 3,
      "explanation": "根据情节轻重采取不同措施。",
      "reference": "第38条、第41条"
    },
    {
      "question": "小明每天玩游戏6小时以上，父母应该？",
      "options": [
        "没收手机并打骂",
        "设置使用时长并培养其他兴趣",
        "放任不管",
        "每天多给零花钱鼓励少玩"
      ],
      "answer": 1,
      "explanation": "科学引导优于简单禁止。",
      "reference": "第16条、第51条"
    },
    {
      "question": "你在社交平台被恶意PS丑照传播，应该？",
      "options": [
        "同样PS对方照片报复",
        "保存证据并联系平台删除",
        "花钱找人删帖",
        "退网不再使用"
      ],
      "answer": 1,
      "explanation": "依法维权是正确途径。",
      "reference": "第20条、第50条"
    },
    {
      "question": "你认为父母的首要责任是",
      "options": [
        "满足子女物质需求",
        "预防和制止不良行为",
        "安排课外补习班",
        "代子女承担法律责任"
      ],
      "answer": 1,
      "explanation": "家庭教育应以行为矫正和品德培养为核心。",
      "reference": "第16条"
    },
    {
      "question": "在离异家庭中，不与子女同住的父亲应",
      "options": [
        "仅支付抚养费",
        "定期了解子女行为表现",
        "完全不管不问",
        "诋毁另一方家长"
      ],
      "answer": 1,
      "explanation": "未共同生活父母仍需履行监护职责。",
      "reference": "第16条"
    },
    {
      "question": "对于未成年人的不良行为干预措施不包括？",
      "options": ["心理辅导", "社区服务", "专门矫治", "训导教育"],
      "answer": 2,
      "explanation": "专门矫治适用于严重不良行为。",
      "reference": "第三十一条"
    },
    {
      "question": "未成年人犯罪被判处五年以下有期徒刑，其犯罪记录如何处理？",
      "options": [
        "永久封存",
        "公开可查",
        "封存但司法机关可查询",
        "视情况而定"
      ],
      "answer": 0,
      "explanation": "犯罪记录依法永久封存，司法机关办案需要可查询。",
      "reference": "第五十九条"
    },
    {
      "question": "刑满释放的未成年人在复学、升学方面享有？",
      "options": ["优先权利", "同等权利", "限制权利", "特殊照顾"],
      "answer": 1,
      "explanation": "未成年人在复学、升学、就业等方面不受歧视。",
      "reference": "第五十八条"
    },
    {
      "question": "当朋友怂恿你一起偷窃时，你会：",
      "options": ["拒绝并离开", "犹豫但参与", "主动策划"],
      "answer": 0,
      "explanation": "主动拒绝犯罪行为是法律意识的体现，多次参与可能构成严重不良行为。",
      "reference": "第三十八条"
    },
    {
      "question": "在网吧被陌生人邀请参与赌博，你会：",
      "options": ["立刻离开", "旁观但不参与", "尝试小赌"],
      "answer": 0,
      "explanation": "参与赌博属于不良行为，多次参与可能升级为严重不良行为。",
      "reference": "第二十八条"
    },
    {
      "question": "当父母批评你时，正确的做法是：",
      "options": ["冷静沟通", "顶嘴反驳", "摔门离开"],
      "answer": 0,
      "explanation": "与监护人有效沟通是解决问题的合理方式。",
      "reference": "第十六条"
    },
    {
      "question": "发现未成年人吸烟，你应该怎么做？",
      "options": ["劝阻并通知家长", "一起吸烟", "视而不见"],
      "answer": 0,
      "explanation": "任何人发现不良行为都应及时干预。",
      "reference": "第二十九条"
    },
    {
      "question": "如果父母发现你偷拿家中钱财，父母应首先？",
      "options": [
        "体罚惩戒",
        "了解动机并严肃教育",
        "报警处理",
        "不予理会"
      ],
      "answer": 1,
      "explanation": "应先查明原因再针对性教育。",
      "reference": "第16条"
    },
    {
      "question": "小明多次实施欺凌的未成年人，公安机关可采取？",
      "options": [
        "刑事拘留",
        "送入专门学校矫治",
        "罚款1000元",
        "社区服务令"
      ],
      "answer": 1,
      "explanation": "未达犯罪标准的欺凌者适用矫治教育。",
      "reference": "第41条、第45条"
    },
    {
      "question": "《预防未成年人犯罪法》适用于哪个年龄段的未成年人？",
      "options": ["12周岁以下", "12-18周岁", "14-18周岁", "16周岁以下"],
      "answer": 1,
      "explanation": "该法适用于未满18周岁的未成年人，但部分条款（如刑事责任年龄）有特殊规定。",
      "reference": "第2条"
    },
    {
      "question": "14岁的小红多次偷窃，公安机关应如何处理？",
      "options": ["刑事处罚", "责令家长管教", "送入专门学校", "社区矫正"],
      "answer": 1,
      "explanation": "不满16周岁的严重不良行为未成年人，可由家长管教或送入专门学校。",
      "reference": "第四十一条"
    },
    {
      "question": "未成年人在参与网络活动时，应该做到",
      "options": [
        "合理控制上网时间，避免沉迷",
        "不浏览不良信息",
        "随意在网上发布他人隐私信息",
        "不参与网络赌博等违法活动"
      ],
      "answer": 3,
      "explanation": "网络活动应遵守法律法规，不能随意发布他人隐私信息，参与网络赌博更是违法犯罪行为。",
      "reference": "第二十八条"
    },
    {
      "question": "小明在网上看到有人散布\"国家军事演习是作秀\"的谣言，他应该",
      "options": [
        "点赞转发，让更多人看到",
        "置之不理，当作没看见",
        "向网信部门举报，并告知老师家长",
        "与发布者争论，然后自己也编造类似谣言"
      ],
      "answer": 2,
      "explanation": "传播有害信息属于不良行为；公民有义务及时报告危害国家安全活动的线索。",
      "reference": "第28条、《国家安全法》第七十七条"
    },
    {
      "question": "外国游客以高额报酬请15岁的小红拍摄国内某军事基地周边照片，小红正确做法是",
      "options": [
        "欣然接受，既能赚钱又好玩",
        "拒绝拍摄，但不向任何人说",
        "先假装答应，拍摄后举报",
        "严词拒绝，并立即拨打12339国家安全机关举报电话"
      ],
      "answer": 3,
      "explanation": "严禁参与危害国家安全活动；公民应保守国家秘密，抵制间谍行为。",
      "reference": "第38条、《反间谍法》第二十一条"
    },
    {
      "question": "同学小王长期嘲笑你的家庭背景，今天又当众撕毁你的课本。此时你产生\"找社会大哥教训他\"的念头，这时你该想到：",
      "options": [
        "以暴制暴才能树立威信",
        "未成年人不得组织参加暴力团体",
        "只要不打死人就没事",
        "未成年人不需承担法律责任"
      ],
      "answer": 1,
      "explanation": "以暴制暴可能引发更严重的违法犯罪行为。未成年人不得组织或参加暴力性团体。遭遇欺凌应通过老师、家长或法律途径解决。",
      "reference": "第16条"
    },
    {
      "question": "你在网吧认识的朋友提议\"搞点快钱\"，让你负责把风。此时最该考虑的是：",
      "options": [
        "任何组织个人不得教唆未成年人违法犯罪",
        "把风不算直接犯罪",
        "朋友肯定不会出卖你",
        "金额小就构不成犯罪"
      ],
      "answer": 0,
      "explanation": "把风行为属于共同犯罪，即使未直接实施也可能承担法律责任。禁止任何人教唆未成年人违法犯罪，未成年人需警惕他人诱导。",
      "reference": "第28条"
    },
    {
      "question": "因不满班主任批评，你在网络发布其伪造的淫秽图片。这种行为违反：",
      "options": [
        "不得传播淫秽暴力信息",
        "老师有错在先可以理解",
        "网络匿名查不到",
        "删除后就不违法"
      ],
      "answer": 0,
      "explanation": "传播伪造的淫秽图片可能构成侮辱罪或传播淫秽物品罪，明确禁止未成年人传播此类信息，网络匿名并非免责理由。",
      "reference": "第24条"
    },
    {
      "question": "看到商店老板在打瞌睡，同伴提议\"拿几包烟试试\"，这时你意识到：",
      "options": [
        "偷窃属严重不良行为",
        "没监控就可以尝试",
        "未成年最多批评教育",
        "商品有保险不怕丢"
      ],
      "answer": 0,
      "explanation": "偷窃无论金额大小均属违法行为，将其列为\"严重不良行为\"，未成年人可能被矫治教育或治安处罚。",
      "reference": "第15条"
    },
    {
      "question": "父母离婚后无人管你，为生存打算加入盗窃团伙。此时应寻求：",
      "options": [
        "民政部门对困境儿童有救助义务",
        "犯罪是生存唯一出路",
        "只要不伤人就没事",
        "14岁以下不担刑责"
      ],
      "answer": 0,
      "explanation": "困境未成年人可向民政部门或公安机关求助，规定了国家对困境儿童的救助义务，犯罪绝非唯一出路。",
      "reference": "第41条"
    },
    {
      "question": "被校园欺凌者威胁长期要钱，产生\"带刀防身\"想法时，应当知道：",
      "options": [
        "学校应建立欺凌防控制度",
        "持刀属于严重不良行为",
        "先动手才能自保",
        "刀具不算凶器"
      ],
      "answer": 1,
      "explanation": "携带刀具可能升级冲突并构成\"严重不良行为\"，要求学校建立防欺凌机制，应通过正当途径保护自己。",
      "reference": "第20条"
    },
    {
      "question": "为\"兄弟义气\"参与群殴致人轻伤，可能面临：",
      "options": [
        "可送专门学校进行矫治教育",
        "只要不承认就没事",
        "主犯承担责任即可",
        "赔钱就能免除处罚"
      ],
      "answer": 0,
      "explanation": "已满14周岁故意伤害需负刑责，未达刑责年龄者可能被送至专门学校矫治，明确了矫治教育措施。",
      "reference": "第45条"
    },
    {
      "question": "网友教你用父母手机充值游戏后申请退款套现，这种行为属于：",
      "options": [
        "网络服务需防未成年人沉迷",
        "智能时代的生财之道",
        "民事纠纷不构成犯罪",
        "虚拟财产不受保护"
      ],
      "answer": 0,
      "explanation": "通过欺骗手段套现可能构成诈骗，要求网络服务提供者防止未成年人沉迷，但未成年人仍需遵守法律。",
      "reference": "第29条"
    },
    {
      "question": "因不满考试成绩，你准备烧毁教师办公室。此时需明白：",
      "options": [
        "纵火等行为需立即报警",
        "发泄情绪是基本人权",
        "火灾未遂就不违法",
        "学校会隐瞒事故"
      ],
      "answer": 0,
      "explanation": "纵火是危害公共安全的犯罪行为，即使未遂也需承担法律责任，规定对此类行为应立即报警。",
      "reference": "第38条"
    },
    {
      "question": "被判处社区矫正期间，你最应该：",
      "options": [
        "司法机关应开展法治教育",
        "假装配合应付检查",
        "趁机认识更多\"同道\"",
        "未成年人记录不存档"
      ],
      "answer": 0,
      "explanation": "社区矫正是法律给予的改正机会，要求司法机关开展法治教育，积极配合才能避免更严重后果。",
      "reference": "第53条"
    }  ],
  // 4道多选题
  multipleChoice: [
    {
      "question": "以下哪些行为可能被认定为\"不良行为\"？",
      "options": ["强行索要同学财物", "偷窃价值50元的物品", "参与网络赌博", "吸烟但未成瘾"],
      "answer": [0, 1, 2, 3],
      "explanation": "以上均属典型不良行为，但需结合频率和情节综合判断。",
      "reference": "第28条、第29条"
    },
    {
      "question": "以下哪些行为可能构成欺凌？",
      "options": [
        "在社交平台公开同学隐私照片",
        "强迫同学代写作业",
        "给同学起侮辱性绰号并长期使用",
        "因误会推搡同学后主动道歉"
      ],
      "answer": [0, 1, 2],
      "explanation": "D属偶发冲突，不构成欺凌；A、B、C均属语言、网络或权力欺凌",
      "reference": "第20条"
    },
    {
      "question": "你在微信群看到同学被恶意P图丑化，应该",
      "options": [
        "转发增加热度",
        "保存证据并私信安慰受害者",
        "联系群主删除并报告学校",
        "视而不见"
      ],
      "answer": [1, 2],
      "explanation": "旁观者亦有责任阻止欺凌扩散。",
      "reference": "第50条"
    },
    {
      "question": "你目睹同学被围殴，但害怕报复，此时应",
      "options": [
        "录像后匿名发送给老师",
        "立即离开现场",
        "拨打110并说明地点",
        "号召其他同学一起阻止"
      ],
      "answer": [0, 2],
      "explanation": "匿名举报或报警均属合法帮助方式",
      "reference": "第20条"
    },
    {
      "question": "张三在学校多次欺凌其他同学，他的家长可能承担什么责任？",
      "options": [
        "赔礼道歉",
        "赔偿医疗费",
        "接受家庭教育指导",
        "代子女接受刑事处罚"
      ],
      "answer": [0, 1, 2],
      "explanation": "家长需承担民事赔偿，但不可替代子女刑责。",
      "reference": "第16条、第61条"
    },
    {
      "question": "李四携带刀具上学，学校发现正确的处理方式是？",
      "options": [
        "没收刀具并批评教育",
        "立即开除学籍",
        "通知公安机关介入",
        "隐瞒不报"
      ],
      "answer": [0, 2],
      "explanation": "需结合情节判断，若存在暴力威胁应报警。",
      "reference": "第31条、第36条"
    },
    {
      "question": "\"严重不良行为\"的矫治措施包括？",
      "options": [
        "送入专门学校",
        "司法社工跟踪帮教",
        "刑事处罚",
        "强制戒毒"
      ],
      "answer": [0, 1, 3],
      "explanation": "C项仅适用于构成犯罪的情形。",
      "reference": "第38条、第45条"
    },
    {
      "question": "如果你正在遭遇网络暴力，可向哪些主体求助？",
      "options": [
        "网络平台",
        "学校",
        "公安机关",
        "未成年人保护组织"
      ],
      "answer": [0, 1, 2, 3],
      "explanation": "构建多元保护网络。",
      "reference": "第50条"
    },
    {
      "question": "未成年人网络行为的基本要求包括？",
      "options": [
        "不泄露个人隐私",
        "不参与网络赌博",
        "可适当网络谩骂",
        "不转发未经证实的信息"
      ],
      "answer": [0, 1, 3],
      "explanation": "网络言行同样受法律约束。",
      "reference": "第50条、第51条"
    },
    {
      "question": "当发现身边同学有不良行为时，正确的做法有",
      "options": [
        "及时告知老师或家长",
        "与同学一起参与",
        "对其进行劝阻",
        "视而不见"
      ],
      "answer": [0, 2],
      "explanation": "发现同学不良行为要积极干预。",
      "reference": "第十七条"
    },
    {
      "question": "以下哪些行为可能会导致未成年人走上犯罪道路",
      "options": [
        "长期与不良社会青年交往",
        "经常出入不适宜未成年人的场所",
        "观看积极向上的影视作品",
        "不听从父母和老师的教导，我行我素"
      ],
      "answer": [0, 1, 3],
      "explanation": "与不良社会青年交往、出入不适宜场所、不听教导我行我素都可能使未成年人接触不良影响，增加犯罪风险。观看积极向上影视作品有利于未成年人成长。",
      "reference": "第二十八条"
    },
    {
      "question": "你认为对未成年人进行预防犯罪教育的重要意义的有",
      "options": [
        "帮助未成年人树立正确的价值观和法律意识",
        "降低未成年人犯罪的可能性",
        "促进未成年人健康成长",
        "让未成年人害怕法律，不敢做任何事"
      ],
      "answer": [0, 1, 2],
      "explanation": "预防犯罪教育旨在培养未成年人正确观念，增强法律意识，减少犯罪，促进健康成长。让未成年人害怕法律而不敢做任何事不是教育目的。",
      "reference": "第一条"
    },
    {
      "question": "当未成年人发现自己有不良行为倾向时，应该",
      "options": [
        "及时自我反思，努力改正",
        "继续放任自流，觉得无所谓",
        "寻求老师、家长或专业人士的帮助",
        "隐瞒自己的行为，不让别人知道"
      ],
      "answer": [0, 2],
      "explanation": "未成年人发现自身不良行为倾向应积极面对，自我反思改正并寻求帮助。放任自流和隐瞒行为会使问题加重。",
      "reference": "第二十八条"
    },
    {
      "question": "未成年人在面对他人教唆自己实施违法犯罪行为时，应该",
      "options": [
        "坚决拒绝",
        "及时向老师、家长或公安机关报告",
        "考虑一下，如果有好处就参与",
        "表面答应，实际不行动"
      ],
      "answer": [0, 1],
      "explanation": "未成年人面对教唆应坚决抵制并报告，不能因利益诱惑参与。表面答应实际不行动也可能存在风险且未从根本上解决问题。",
      "reference": "第六十五条"
    },
    {
      "question": "小明参与赌博，社区发现其行为后可以",
      "options": [
        "向公安机关报告",
        "联系其父母",
        "组织普法教育活动",
        "罚款警示"
      ],
      "answer": [0, 1, 2],
      "explanation": "社区需建立多方联动机制。",
      "reference": "第48条"
    }  ],
  // 4道判断题
  trueFalse: [
    {
      "question": "未成年人吸烟属于《预防未成年人犯罪法》规定的不良行为。",
      "answer": 0,
      "explanation": "未成年人吸烟属于不良行为。",
      "reference": "第28条"
    },
    {
      "question": "学生张三组织赌博，学校发现应当立即向公安机关报告。",
      "answer": 0,
      "explanation": "学校发现违法犯罪行为应当报告。",
      "reference": "第36条"
    },
    {
      "question": "未成年人多次盗窃但未达刑事立案标准，仍可被认定为\"严重不良行为\"。",
      "answer": 0,
      "explanation": "即使不构成犯罪，重复实施违法行为仍属严重不良行为。",
      "reference": "第38条"
    },
    {
      "question": "未成年人犯罪案件一律不公开审理。",
      "answer": 0,
      "explanation": "保护未成年人隐私是基本原则。",
      "reference": "第59条"
    },
    {
      "question": "不良行为未成年人可自愿申请进入专门学校接受矫治。",
      "answer": 0,
      "explanation": "体现\"教育为主、惩罚为辅\"原则。",
      "reference": "第45条"
    },
    {
      "question": "未成年人可以应网友要求发送个人私密照片。",
      "answer": 1,
      "explanation": "此行为可能构成\"隔空猥亵\"违法犯罪。",
      "reference": "第50条"
    },
    {
      "question": "帮网友\"解封\"诈骗账号赚零花钱不构成违法。",
      "answer": 1,
      "explanation": "此行为可能构成帮助信息网络犯罪活动罪。",
      "reference": "第50条"
    },
    {
      "question": "小强因被同学嘲笑，打算放学后报复对方，这种想法是否正常？",
      "answer": 1,
      "explanation": "报复行为可能触犯法律，应通过合法途径解决矛盾。",
      "reference": "第三十九条"
    },
    {
      "question": "小明觉得抽烟能显得自己成熟，这种想法是否正确？",
      "answer": 1,
      "explanation": "吸烟属于不良行为，可能引发其他更严重的问题。",
      "reference": "第二十八条"
    },
    {
      "question": "15岁的小红多次偷窃，是否会被追究刑事责任？",
      "answer": 1,
      "explanation": "不满16周岁的严重不良行为未成年人，可由家长管教或送入专门学校。",
      "reference": "第四十一条"
    },
    {
      "question": "张三有严重不良行为，学校发现其家长管教不当，但无权干预。",
      "answer": 1,
      "explanation": "学校应提供必要家庭教育指导。",
      "reference": "第18条"
    },
    {
      "question": "张三有严重不良行为，学校可强制要求他接受心理辅导。",
      "answer": 0,
      "explanation": "学校有权采取非惩罚性矫治措施。",
      "reference": "第31条"
    },
    {
      "question": "未成年人偶尔饮酒不属于不良行为。",
      "answer": 1,
      "explanation": "未成年人饮酒均属不良行为，无论频率。",
      "reference": "第28条"
    },
    {
      "question": "只要未造成身体伤害，言语嘲讽不属于校园欺凌。",
      "answer": 1,
      "explanation": "语言暴力、孤立等均属欺凌形式。",
      "reference": "第20条"
    },
    {
      "question": "《预防未成年人犯罪法》仅适用于已经犯罪的未成年人。",
      "answer": 1,
      "explanation": "该法不仅针对犯罪未成年人，还涵盖不良行为预防和早期干预。",
      "reference": "第1条"
    },
    {
      "question": "有犯罪倾向的未成年人，不可能再改变，注定会走上犯罪道路。",
      "answer": 1,
      "explanation": "强调预防和教育，通过多种措施可以帮助有犯罪倾向的未成年人改变。",
      "reference": "第一条"
    },
    {
      "question": "与社会上具有不良习性的人交往，不会影响自己。",
      "answer": 1,
      "explanation": "与社会上具有不良习性的人交往属于不良行为。",
      "reference": "第二十八条"
    },
    {
      "question": "观看、收听色情、淫秽的音像制品、读物等，只要不传播就没事。",
      "answer": 1,
      "explanation": "阅览、观看或者收听宣扬淫秽、色情等内容属于不良行为。",
      "reference": "第二十八条"
    },
    {
      "question": "只要不被警察抓到，做一些小偷小摸的事没关系。",
      "answer": 1,
      "explanation": "盗窃、哄抢等属于严重不良行为。",
      "reference": "第三十八条"
    },
    {
      "question": "专门学校是用来惩罚有严重不良行为未成年人的地方。",
      "answer": 1,
      "explanation": "专门学校是进行教育和矫治的场所，并非惩罚之地。",
      "reference": "第四十三条"
    },
    {
      "question": "参与赌博只要不是经常参与，就不会有问题。",
      "answer": 1,
      "explanation": "无论频次多少，参与赌博都不被允许。",
      "reference": "第二十八条"
    },
    {
      "question": "偶尔强行向他人索要少量财物，不是什么严重的事。",
      "answer": 1,
      "explanation": "强行索要他人财物行为性质恶劣，触碰法律红线。",
      "reference": "第三十八条"
    },
    {
      "question": "携带管制刀具只要不伤人，就不算违法。",
      "answer": 1,
      "explanation": "携带管制刀具本身就是严重不良行为。",
      "reference": "第三十八条"
    },
    {
      "question": "多次旷课、逃学只是学习态度问题，和法律无关。",
      "answer": 1,
      "explanation": "多次旷课、逃学属于不良行为范畴。",
      "reference": "第二十八条"
    },
    {
      "question": "未成年人偶尔吸烟、饮酒没什么大不了，不属于不良行为。",
      "answer": 1,
      "explanation": "吸烟、饮酒属于未成年人的不良行为。",
      "reference": "第二十八条"
    },
    {
      "question": "在网络上转发未经证实的\"国家机密\"信息，只是好奇，不算违法。",
      "answer": 1,
      "explanation": "传播有害信息属于不良行为；编造、传播虚假信息扰乱网络秩序的行为需承担法律责任。",
      "reference": "第28条、《网络安全法》"
    }   ]
};

// 随机抽题配置
const quizConfig = {
  mandatoryCount: 4,    // 必出4道
  singleChoiceCount: 8, // 随机8道单选
  multipleChoiceCount: 4,// 随机4道多选
  trueFalseCount: 4     // 随机4道判断
};

// JPG图片资源配置（需准备对应的图片文件）
const feedbackImages = {
  excellent: "./images/feedback-excellent.jpg",  // 90-100分
  good: "./images/feedback-good.jpg",           // 70-89分
  average: "./images/feedback-average.jpg",     // 50-69分
  poor: "./images/feedback-poor.jpg"            // 0-49分
};

// 游戏状态管理
const gameState = {
  currentQuestionIndex: 0,
  score: 0,
  currentQuizType: 'mandatory',
  quizTypes: ['mandatory', 'singleChoice', 'multipleChoice', 'trueFalse'],
  selectedAnswers: [],
  quizData: {}
};

// DOM元素引用
const elements = {
  question: document.getElementById('question'),
  optionsContainer: document.getElementById('options-container'),
  resultText: document.getElementById('result-text'),
  explanation: document.getElementById('explanation'),
  reference: document.getElementById('reference'),
  nextButton: document.getElementById('next-btn'),
  submitButton: document.getElementById('submit-btn'),
  score: document.getElementById('score'),
  currentQuestion: document.getElementById('current-question'),
  totalQuestions: document.getElementById('total-questions'),
  quizType: document.getElementById('quiz-type'),
  questionContainer: document.getElementById('question-container'),
  resultContainer: document.getElementById('result-container'),
  finalContainer: document.getElementById('final-container'),
  finalScore: document.getElementById('final-score'),
  totalPossible: document.getElementById('total-possible'),
  correctRate: document.getElementById('correct-rate'),
  feedbackTitle: document.getElementById('feedback-title'),
  feedbackContent: document.getElementById('feedback-content'),
  restartButton: document.getElementById('restart-btn'),
  tweetContainer: document.getElementById('tweet-container'),
  tweetContent: document.getElementById('tweet-content'),
  tweetLink: document.getElementById('tweet-link'),
  feedbackImage: document.getElementById('feedback-image')
};

// 初始化游戏
function initGame() {
  // 预加载反馈图片
  preloadImages();
  
  // 初始化题库
  gameState.quizData = {
      mandatory: [...fullQuizData.mandatory],
      singleChoice: getRandomQuestions(fullQuizData.singleChoice, quizConfig.singleChoiceCount),
      multipleChoice: getRandomQuestions(fullQuizData.multipleChoice, quizConfig.multipleChoiceCount),
      trueFalse: getRandomQuestions(fullQuizData.trueFalse, quizConfig.trueFalseCount)
  };

  // 初始化事件监听
  elements.nextButton.addEventListener('click', nextQuestion);
  elements.submitButton.addEventListener('click', submitAnswer);
  elements.restartButton.addEventListener('click', restartQuiz);
  
  // 开始游戏
  resetGameState();
  showQuestion();
}

// 图片预加载
function preloadImages() {
  console.log("正在预加载反馈图片...");
  Object.values(feedbackImages).forEach(url => {
      const img = new Image();
      img.src = url;
  });
}

// 从题库中随机抽取题目
function getRandomQuestions(questionPool, count) {
  const poolCopy = [...questionPool];
  const result = [];
  count = Math.min(count, poolCopy.length);
  
  for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * poolCopy.length);
      result.push(poolCopy[randomIndex]);
      poolCopy.splice(randomIndex, 1);
  }
  return result;
}

// 重置游戏状态
function resetGameState() {
  gameState.currentQuestionIndex = 0;
  gameState.score = 0;
  gameState.currentQuizType = 'mandatory';
  gameState.selectedAnswers = [];
  elements.score.textContent = `得分: 0`;
}

// 显示题目
function showQuestion() {
  gameState.selectedAnswers = [];
  
  const currentQuestion = gameState.quizData[gameState.currentQuizType][gameState.currentQuestionIndex];
  
  // 更新UI
  elements.question.textContent = currentQuestion.question;
  elements.optionsContainer.innerHTML = '';
  elements.currentQuestion.textContent = gameState.currentQuestionIndex + 1;
  elements.totalQuestions.textContent = gameState.quizData[gameState.currentQuizType].length;
  elements.quizType.textContent = getQuizTypeName(gameState.currentQuizType);
  
  // 显示/隐藏推文
  if (currentQuestion.tweet) {
      elements.tweetContent.textContent = currentQuestion.tweet;
      elements.tweetLink.href = currentQuestion.tweetUrl || '#';
      elements.tweetContainer.classList.remove('hidden');
  } else {
      elements.tweetContainer.classList.add('hidden');
  }
  
  // 生成选项
  if (gameState.currentQuizType === 'trueFalse') {
      createOptionButtons(['正确', '错误']);
      elements.submitButton.classList.add('hidden');
  } else if (gameState.currentQuizType === 'multipleChoice') {
      createOptionButtons(currentQuestion.options);
      elements.submitButton.classList.remove('hidden');
  } else {
      createOptionButtons(currentQuestion.options);
      elements.submitButton.classList.add('hidden');
  }
  
  // 显示题目容器
  elements.questionContainer.classList.remove('hidden');
  elements.resultContainer.classList.add('hidden');
  elements.finalContainer.classList.add('hidden');
}

// 创建选项按钮
function createOptionButtons(options) {
  options.forEach((text, index) => {
      const button = document.createElement('button');
      button.textContent = text;
      button.classList.add('option-btn');
      
      button.addEventListener('click', () => {
          if (gameState.currentQuizType === 'multipleChoice') {
              button.classList.toggle('selected');
              const answerIndex = index;
              if (button.classList.contains('selected')) {
                  gameState.selectedAnswers.push(answerIndex);
              } else {
                  gameState.selectedAnswers = gameState.selectedAnswers.filter(item => item !== answerIndex);
              }
          } else {
              selectAnswer(index);
          }
      });
      
      elements.optionsContainer.appendChild(button);
  });
}

// 提交答案（多选题专用）
function submitAnswer() {
  if (gameState.currentQuizType === 'multipleChoice' && gameState.selectedAnswers.length === 0) {
      alert('请至少选择一个答案');
      return;
  }
  checkAnswer();
}

// 检查答案
function checkAnswer() {
  const currentQuestion = gameState.quizData[gameState.currentQuizType][gameState.currentQuestionIndex];
  let isCorrect = false;

  if (gameState.currentQuizType === 'multipleChoice') {
      const selected = [...gameState.selectedAnswers].sort();
      const correct = [...currentQuestion.answer].sort();
      isCorrect = JSON.stringify(selected) === JSON.stringify(correct);
  } else {
      isCorrect = gameState.selectedAnswers[0] === currentQuestion.answer;
  }

  // 更新结果
  if (isCorrect) {
      gameState.score++;
      elements.resultText.textContent = "✓ 回答正确";
      elements.resultText.style.color = "#4CAF50";
  } else {
      elements.resultText.textContent = "✗ 回答错误";
      elements.resultText.style.color = "#F44336";
  }

  elements.score.textContent = `得分: ${gameState.score}`;
elements.explanation.textContent = `法律依据: ${currentQuestion.reference}\n\n${currentQuestion.explanation}`;
elements.reference.textContent = "";
      
  // 显示结果
  elements.questionContainer.classList.add('hidden');
  elements.resultContainer.classList.remove('hidden');
}

// 选择答案（单选题/判断题）
function selectAnswer(selectedIndex) {
  gameState.selectedAnswers = [selectedIndex];
  checkAnswer();
}

// 下一题
function nextQuestion() {
  gameState.currentQuestionIndex++;
  
  if (gameState.currentQuestionIndex < gameState.quizData[gameState.currentQuizType].length) {
      showQuestion();
  } else {
      const nextTypeIndex = gameState.quizTypes.indexOf(gameState.currentQuizType) + 1;
      
      if (nextTypeIndex < gameState.quizTypes.length) {
          gameState.currentQuizType = gameState.quizTypes[nextTypeIndex];
          gameState.currentQuestionIndex = 0;
          showQuestion();
      } else {
          showFinalResults();
      }
  }
}

// 显示最终结果
function showFinalResults() {
  const totalQuestions = quizConfig.mandatoryCount + 
                       quizConfig.singleChoiceCount + 
                       quizConfig.multipleChoiceCount + 
                       quizConfig.trueFalseCount;
  const correctRate = Math.round((gameState.score / totalQuestions) * 100);
  
  // 根据得分提供反馈
  let feedbackTitle, feedbackContent, ratingClass;
  
  if (correctRate >= 90) {
      feedbackTitle = "优秀！";
      feedbackContent = "您对《预防未成年人犯罪法》掌握得非常透彻，法律意识很强！";
      ratingClass = "excellent";
  } else if (correctRate >= 70) {
      feedbackTitle = "良好";
      feedbackContent = "您对法律知识有较好的了解，但还有提升空间，建议复习错题部分。";
      ratingClass = "good";
  } else if (correctRate >= 50) {
      feedbackTitle = "一般";
      feedbackContent = "您掌握了一部分法律知识，建议系统学习相关法律法规。";
      ratingClass = "average";
  } else {
      feedbackTitle = "需要加强";
      feedbackContent = "您的法律知识有待提高，建议认真学习《预防未成年人保护法》全文。";
      ratingClass = "poor";
  }
  
  // 设置反馈图片
  setFeedbackImage(ratingClass);
  
  // 更新UI
  elements.finalScore.textContent = gameState.score;
  elements.totalPossible.textContent = totalQuestions;
  elements.correctRate.textContent = `${correctRate}%`;
  elements.feedbackTitle.textContent = feedbackTitle;
  elements.feedbackTitle.className = ratingClass;
  elements.feedbackContent.textContent = feedbackContent;
  
  // 显示最终界面
  elements.questionContainer.classList.add('hidden');
  elements.resultContainer.classList.add('hidden');
  elements.finalContainer.classList.remove('hidden');
}

// 设置反馈图片
function setFeedbackImage(ratingClass) {
  const img = new Image();
  img.src = feedbackImages[ratingClass];
  
  img.onload = () => {
      elements.feedbackImage.style.backgroundImage = `url('${feedbackImages[ratingClass]}')`;
  };
  
  img.onerror = () => {
      console.warn(`图片加载失败: ${feedbackImages[ratingClass]}`);
      elements.feedbackImage.style.backgroundColor = 
          getComputedStyle(document.documentElement)
              .getPropertyValue(`--${ratingClass}-bg`);
  };
}

// 重新开始测试
function restartQuiz() {
  initGame();
}

// 获取题型名称
function getQuizTypeName(type) {
  const typeNames = {
      mandatory: ' ',
      singleChoice: '单选题',
      multipleChoice: '多选题',
      trueFalse: '判断题'
  };
  return typeNames[type] || '';
}

// 启动游戏
window.addEventListener('DOMContentLoaded', initGame);

// 调试用路径验证（正式环境可删除）
function validateImagePaths() {
  console.group("图片路径验证");
  Object.entries(feedbackImages).forEach(([type, path]) => {
      const img = new Image();
      img.onload = () => console.log(`✅ ${type}: ${path}`);
      img.onerror = () => console.error(`❌ ${type}: ${path}`);
      img.src = path;
  });
  console.groupEnd();
}
setTimeout(validateImagePaths, 1000);