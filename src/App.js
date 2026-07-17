/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Checkbox, InputNumber, Button, List, Space, Layout, Select, Statistic, Input, Typography } from 'antd';
import 'moment/locale/zh-cn';
import './App.css';
import { Header } from 'antd/lib/layout/layout';
import { t } from './i18n';

const { Option } = Select;

const App = () => {
  const [language, setLanguage] = useState('zh')
  const [includeLuck, setIncludeLuck] = useState(true)
  const [attrTotal, setAttrTotal] = useState(425)
  const [attribution, setAttribution] = useState(["", "", "", "", ""])
  const [diceNumber, setDiceNumber] = useState(1)
  const [diceValue, setDiceValue] = useState([])
  const [diceMax, setDiceMax] = useState(6)
  const [skillPoint, setSkillPoint] = useState(50)
  const [skillName, setSkillName] = useState(language === 'zh' ? "侦查" : "Spot Hidden")
  const [skillPointRatio, setSkillRatio] = useState(1.0)
  const [skillRes, setSkillRes] = useState('')
  const [useHouseRule, setUseHouseRule] = useState(false)
  
  const skillListZh = [
    "侦查",
    "聆听",
    "图书馆使用",
    "母语",
    "攀爬",
    "闪避",
    "斗殴",
    "锁匠",
    "医学",
    "射击",
    "急救",
    "说服",
    "取悦",
    "话术",
    "恐吓",
    "心理学"
  ]

  const skillListEn = [
    "Spot Hidden",
    "Listen",
    "Library Use",
    "Native Language",
    "Climb",
    "Dodge",
    "Fight",
    "Locksmith",
    "Medicine",
    "Shooting",
    "First Aid",
    "Persuade",
    "Charm",
    "Tactic",
    "Intimidate",
    "Psychology"
  ]

  const skillList = language === 'zh' ? skillListZh : skillListEn

  const [tarotResult, setTarotResult] = useState(language === 'zh' ? `来都来了，抽个牌吧` : `Here you are, draw a card!`)
  const tarotCards = [
    "【0】愚者（The Fool，0）正位：憧憬自然的地方、毫无目的地前行、喜欢尝试挑战新鲜事物、四处流浪、美好的梦想。",
    "【0】愚者（The Fool，0）逆位：冒险的行动、追求可能性、重视梦想、无视物质的损失、离开家园、过于信赖别人、为出外旅行而烦恼。心情空虚、轻率的恋情、无法长久持续的融洽感、不安的爱情旅程、对婚姻感到束缚、彼此忽冷忽热、不顾众人反对坠入爱河、感情不专一。",
    "【1】魔术师（The Magician，I）正位：事情的开始、行动的改变、熟练的技术及技巧、贯彻自己的意志、运用自然的力量来达到野心。",
    "【1】魔术师（The Magician，I）逆位：意志力薄弱、起头困难、走入错误方向、知识不足、被骗与失败。",
    "【2】女祭司（The High Priestess，II）正位：开发内在的神秘潜力、前途将有所变化的预言、深刻地思考、敏锐的洞察力、准确的直觉。",
    "【2】女祭司（The High Priestess，II）逆位：过于洁癖、无知、贪心、目光短浅、自尊心过高、判断偏差、有勇无谋、自命不凡。",
    "【3】女皇（The Empress，III）正位：幸福、成功、收获、无忧无虑、圆满的家庭生活、良好的环境、美貌、艺术、与大自然接触、愉快的旅行、休闲。",
    "【3】女皇（The Empress，III）逆位：不活泼、缺乏上进心、散漫的生活习惯、无法解决的事情、看不到成果、耽于享乐、环境险恶、与家人发生纠纷。",
    "【4】皇帝（The Emperor，IV）正位：光荣、权力、胜利、掌握领导权、坚强的意志、达成目标、父亲的责任、精神上的孤单。",
    "【4】皇帝（The Emperor，IV）逆位：幼稚、无力、独裁、任性、平凡、缺乏自信、行动力不足、意志薄弱、被支配。",
    "【5】教皇（The Hierophant，V）正位：援助、同情、宽宏大量、可信任的人给予的劝告、良好的商量对象、得到精神上的满足、遵守规则、志愿精神。",
    "【5】教皇（The Hierophant，V）逆位：错误的讯息、恶意的规劝、上当、援助中断、愿望无法达成、被人利用、被放弃。",
    "【6】恋人（The Lovers，VI）正位：撮合、爱情、流行、兴趣、充满希望的未来、魅力、增加朋友。",
    "【6】恋人（The Lovers，VI）逆位：禁不起诱惑、纵欲过度、反复无常、友情变淡、厌倦、争吵、华丽的打扮、优柔寡断。",
    "【7】战车（The Chariot，VII）正位：努力获得成功、胜利、克服障碍、行动力、自立、尝试、自我主张、年轻男子、交通工具、旅行运大吉。",
    "【7】战车（The Chariot，VII）逆位：争论失败、发生纠纷、阻滞、违反规则、诉诸暴力、顽固、突然失败、挫折与自私自利。",
    "【8】力量（Strength，VIII）正位：大胆的行动、有勇气的决断、新发展、大转机、异动、以意志力战胜困难、健壮的女性。",
    "【8】力量（Strength，VIII）逆位：胆小、输给强者、经不起诱惑、屈服于权威与常识、缺乏实践便告放弃、虚荣、懦弱、没有耐性。",
    "【9】隐者（The Hermit，IX）正位：隐藏的事实、个别行动、倾听他人的意见、享受孤独、有益的警戒、年长者、避开危险、乡间生活。",
    "【9】隐者（The Hermit，IX）逆位：憎恨孤独、自卑、担心、思想幼稚、过于慎重导致失败、判断偏差、不宜旅行。",
    "【10】命运之轮（The Wheel of Fortune，X）正位：关键性的事件、新的机会、命运的潮流、环境的变化、幸运的开端、状况好转、问题解决、幸运之神降临。",
    "【10】命运之轮（The Wheel of Fortune，X）逆位：时运不济、挫折、计划泡汤、障碍、无法修正方向、往坏处发展、恶性循环、中断。",
    "【11】正义（Justice，XI）正位：公正、中立、诚实、心胸坦荡、表里如一、身兼二职、追求合理化、协调者、与法律有关、光明正大的交往、感情和睦。",
    "【11】正义（Justice，XI）逆位：失衡、偏见、纷扰、诉讼、独断专行、问心有愧、无法两全、表里不一、性格不合、情感波折、无视社会道德的恋情。",
    "【12】倒吊人（The Hanged Man，XII）正位：接受考验、行动受限、牺牲、不畏艰辛、不受利诱、有失必有得、吸取经验教训、浴火重生、广泛学习、奉献的爱。",
    "【12】倒吊人（The Hanged Man，XII）逆位：无谓的牺牲、厄运、不够努力、处于劣势、任性、利己主义、缺乏耐心、受惩罚、逃避爱情、没有结果的恋情。",
    "【13】死神（Death，XIII）正位：失败、接近毁灭、生病、失业、停滞状态、持续损害、交易停止、枯燥的生活、别离、恋情终止。",
    "【13】死神（Death，XIII）逆位：抱有一线希望、起死回生、回心转意、摆脱低迷状态、挽回名誉、身体康复、突然改变计划、逃避现实、与旧情人重逢。",
    "【14】节制（Temperance，XIV）正位：单纯、调整、平顺、互惠互利、好感转化为爱意、纯爱、深爱。",
    "【14】节制（Temperance，XIV）逆位：消耗、下降、疲劳、损失、不安、不融洽、爱情配合度不佳。",
    "【15】恶魔（The Devil，XV）正位：被束缚、堕落、生病、恶意、屈服、欲望的俘虏、不可抗拒的诱惑、颓废的生活、举债度日、不可告人的秘密、私密恋情。",
    "【15】恶魔（The Devil，XV）逆位：逃离束缚、解除困扰、治愈病痛、告别过去、暂停、拒绝诱惑、舍弃私欲、爱恨交加的恋情。",
    "【16】塔（The Tower，XVI）正位：破产、逆境、被开除、急病、致命打击、巨大变动、受牵连、信念崩溃、玩火自焚、纷扰不断、突然分离、破灭的爱。",
    "【16】塔（The Tower，XVI）逆位：困境、内讧、紧迫状态、状况不佳、趋于稳定、骄傲自大将付出代价、背水一战、爱情危机。",
    "【17】星星（The Star，XVII）正位：前途光明、充满希望、想象力、创造力、幻想、满足愿望、水准提高、理想对象、美好的恋情。",
    "【17】星星（The Star，XVII）逆位：挫折、失望、好高骛远、异想天开、仓皇失措、事与愿违、工作不顺、情况悲观、缺少爱的生活。",
    "【18】月亮（The Moon，XVIII）正位：不安、迷惑、动摇、谎言、欺骗、鬼迷心窍、动荡的爱、三角关系。",
    "【18】月亮（The Moon，XVIII）逆位：逃脱骗局、解除误会、状况好转、预知危险、等待、正视爱情裂缝。",
    "【19】太阳（The Sun，XIX）正位：活跃、丰富的生命力、充满生机、精力充沛、工作顺利、贵人相助、幸福的婚姻、健康的交际。",
    "【19】太阳（The Sun，XIX）逆位：消沉、体力不佳、缺乏连续性、意气消沉、生活不安、人际关系不好、感情波动、离婚。",
    "【20】审判（Judgement，XX）正位：复活的喜悦、康复、坦白、好消息、好运气、初露锋芒、复苏的爱、重逢、爱的奇迹。",
    "【20】审判（Judgement，XX）逆位：一蹶不振、幻灭、隐瞒、坏消息、无法决定、缺少目标、没有进展、恋恋不舍。",
    "【21】世界（The World，XXI）正位：完成、成功、完美无缺、连续不断、精神亢奋、拥有毕生奋斗的目标、完成使命、幸运降临、快乐的结束、模范情侣。",
    "【21】世界（The World，XXI）逆位：未完成、失败、准备不足、盲目接受、一时不顺利、半途而废、精神颓废、饱和状态、态度不够融洽、感情受挫。"
  ]

  const SVG = () => <svg t="1642497827253" className="icon"
    viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2306"
    width="25px" height="25px" style={{ display: 'block' }}>
    <path d="M910.145163 0H113.854837A114.143809 114.143809 0 0 0 0 113.854837v796.290326a114.143809 114.143809 0 0 0 113.854837 113.854837h796.290326a114.143809 114.143809 0 0 0 113.854837-113.854837V113.854837A114.259397 114.259397 0 0 0 910.145163 0zM331.797268 331.797268a85.362231 85.362231 0 1 1 0-120.674568 85.188847 85.188847 0 0 1 0 120.674568z m240.540016 240.655605a85.362231 85.362231 0 1 1 0-120.674568A85.188847 85.188847 0 0 1 572.163901 572.510667z m240.655605 240.540016a85.362231 85.362231 0 1 1 0-120.674569 85.188847 85.188847 0 0 1 0.057794 120.732363z" p-id="2307" fill="#FFFFFF"></path></svg>

  // 生成从 1 到 max_value 的随机数
  const randomNumber = (max_value) => {
    let result = Math.floor(Math.random() * (max_value) + 1);
    return result;
  }

  // 不含运气八维或九维属性字符串格式化
  const toAttrString = (arr) => {
    if (language === 'zh') {
      if (arr.length === 9) {
        let res = `力量(STR): ${arr[0]}, 体质(CON): ${arr[1]}, 体型(SIZ): ${arr[2]}, 敏捷(DEX): ${arr[3]}, 外貌(APP): ${arr[4]}, 智力/灵感(INT): ${arr[5]}, 意志(POW): ${arr[6]}, 教育/知识(EDU): ${arr[7]}, 幸运(LUCK): ${arr[8]}`
        return res
      } else {
        let res = `力量(STR): ${arr[0]}, 体质(CON): ${arr[1]}, 体型(SIZ): ${arr[2]}, 敏捷(DEX): ${arr[3]}, 外貌(APP): ${arr[4]}, 智力/灵感(INT): ${arr[5]}, 意志(POW): ${arr[6]}, 教育/知识(EDU): ${arr[7]}`
        return res
      }
    } else {
      if (arr.length === 9) {
        let res = `STR: ${arr[0]}, CON: ${arr[1]}, SIZ: ${arr[2]}, DEX: ${arr[3]}, APP: ${arr[4]}, INT: ${arr[5]}, POW: ${arr[6]}, EDU: ${arr[7]}, LUCK: ${arr[8]}`
        return res
      } else {
        let res = `STR: ${arr[0]}, CON: ${arr[1]}, SIZ: ${arr[2]}, DEX: ${arr[3]}, APP: ${arr[4]}, INT: ${arr[5]}, POW: ${arr[6]}, EDU: ${arr[7]}`
        return res
      }
    }
  }

  // 生成人物九维属性
  const generateAttr = () => {
    let attr = ["", "", "", "", ""]

    let length = includeLuck ? 9 : 8
    let miu = Math.floor(Number(attrTotal) / length / 5) * 5
    let diff = Number(attrTotal) - miu * length

    const normalizeAttrRange = (arr, min = 15, max = 80) => {
      const res = [...arr]
      let overflow = 0
      let deficit = 0

      for (let i = 0; i < res.length; i++) {
        if (res[i] > max) {
          overflow += (res[i] - max)
          res[i] = max
        } else if (res[i] < min) {
          deficit += (min - res[i])
          res[i] = min
        }
      }

      // net > 0 需要补回点数；net < 0 需要扣减点数
      let net = overflow - deficit

      while (net !== 0) {
        const candidates = []
        for (let i = 0; i < res.length; i++) {
          if (net > 0 && res[i] < max) {
            candidates.push(i)
          }
          if (net < 0 && res[i] > min) {
            candidates.push(i)
          }
        }

        if (candidates.length === 0) {
          break
        }

        const idx = candidates[randomNumber(candidates.length) - 1]
        if (net > 0) {
          const room = max - res[idx]
          const delta = Math.min(room, net)
          res[idx] += delta
          net -= delta
        } else {
          const room = res[idx] - min
          const delta = Math.min(room, -net)
          res[idx] -= delta
          net += delta
        }
      }

      return res
    }

    for (let i = 0; i < 5; i++) {
      let arr = new Array(length).fill(miu);
      for (let j = 0; j < 5; j++) {
        // 增加属性方差
        let x = randomNumber(length) - 1
        let y = randomNumber(length) - 1
        while (x === y) {
          y = randomNumber(length) - 1
        }
        arr[x] += 5
        arr[y] -= 5
      }
      // 避免出现人类难以达到的 > 80 属性点
      arr[randomNumber(length) - 1] += diff
      arr = normalizeAttrRange(arr, 15, 80)
      attr[i] = toAttrString(arr)
    }
    console.log(attr)
    setAttribution(attr)
  }

  function handleChange(value) {
    setDiceMax(Number(value))
    setDiceValue([])
  }

  const throwDice = (diceMax, diceNumber) => {
    let diceArr = new Array(diceNumber).fill(1)
    for (let i = 0; i < diceNumber; i++) {
      diceArr[i] = randomNumber(diceMax)
    }
    setDiceValue(diceArr)
  }

  const skillUsingJudge = (skillName, skillPoint, skillPointRatio) => {
    const diceRes = randomNumber(100)
    const isSuccess = diceRes <= skillPoint * skillPointRatio ? true : false
    let result = isSuccess ? t('success', language) : t('failure', language)

    if (useHouseRule) {
      if (diceRes <= 5) {
        result = t('criticalSuccess', language)
      } else if (diceRes >= 96) {
        result = t('criticalFailure', language)
      }
    } else {
      if (diceRes === 1) {
        result = t('criticalSuccess', language)
      } else if (diceRes === 100) {
        result = t('criticalFailure', language)
      } else if (diceRes >= 96 && skillPoint < 50) {
        result = t('criticalFailure', language)
      }
    }
    
    if (language === 'zh') {
      return `您进行了${skillName}${skillPoint * skillPointRatio}检定：1D100=${diceRes}，${result}`
    } else {
      return `You performed ${skillName} check at ${skillPoint * skillPointRatio}: 1D100=${diceRes}, ${result}`
    }
  }

  // 返回指定下标的塔罗牌文本
  const SingleTarotCard = (index) => {
    return tarotCards[index]
  }

  const getTarotCardId = (cardText) => {
    const match = cardText.match(/【(\d+)】/)
    return match ? match[1] : cardText
  }

  // 单张塔罗牌
  const DrawSingleTarotCard = () => {
    let i = randomNumber(tarotCards.length) - 1
    setTarotResult(SingleTarotCard(i))
  }

  // 抽 n 张不重复的牌
  const DrawNonRepeatCards = (n) => {
    const usedCardIds = new Set()
    const res = []

    while (res.length < n) {
      const rand = randomNumber(tarotCards.length) - 1
      const cardId = getTarotCardId(tarotCards[rand])
      if (!usedCardIds.has(cardId)) {
        usedCardIds.add(cardId)
        res.push(rand)
      }
    }

    return res
  }

  // 圣三角牌阵
  const SacredTriangleSpread = () => {
    let cards = DrawNonRepeatCards(3)
    if (language === 'zh') {
      setTarotResult(`过去的经验：${SingleTarotCard(cards[0])}
问题的现状：${SingleTarotCard(cards[1])}
将来的预测：${SingleTarotCard(cards[2])}`)
    } else {
      setTarotResult(`Past Experience: ${SingleTarotCard(cards[0])}
Current Situation: ${SingleTarotCard(cards[1])}
Future Prediction: ${SingleTarotCard(cards[2])}`)
    }
  }

  // 四要素牌阵
  const FourElementsSpread = () => {
    let cards = DrawNonRepeatCards(4)
    if (language === 'zh') {
      setTarotResult(`火（行动力）：${SingleTarotCard(cards[0])}
水（情感）：${SingleTarotCard(cards[1])}
土（现实）：${SingleTarotCard(cards[2])}
风（思想）：${SingleTarotCard(cards[3])}`)
    } else {
      setTarotResult(`Fire (Action): ${SingleTarotCard(cards[0])}
Water (Emotion): ${SingleTarotCard(cards[1])}
Earth (Reality): ${SingleTarotCard(cards[2])}
Wind (Thought): ${SingleTarotCard(cards[3])}`)
    }
  }

  // 小十字牌阵
  const LittleCross = () => {
    let cards = DrawNonRepeatCards(4)
    if (language === 'zh') {
      setTarotResult(`过去：${SingleTarotCard(cards[0])}
现在(左)：${SingleTarotCard(cards[1])}
现在(右)：${SingleTarotCard(cards[2])}
未来：${SingleTarotCard(cards[3])}`)
    } else {
      setTarotResult(`Past: ${SingleTarotCard(cards[0])}
Present (Left): ${SingleTarotCard(cards[1])}
Present (Right): ${SingleTarotCard(cards[2])}
Future: ${SingleTarotCard(cards[3])}`)
    }
  }

  // 六芒星牌阵
  const SixManifoldSpread = () => {
    let cards = DrawNonRepeatCards(7)
    if (language === 'zh') {
      setTarotResult(`起因：${SingleTarotCard(cards[0])}
现状：${SingleTarotCard(cards[1])}
未来：${SingleTarotCard(cards[2])}
对策：${SingleTarotCard(cards[3])}
周遭：${SingleTarotCard(cards[4])}
态度：${SingleTarotCard(cards[5])}
结果：${SingleTarotCard(cards[6])}`)
    } else {
      setTarotResult(`Origin: ${SingleTarotCard(cards[0])}
Present: ${SingleTarotCard(cards[1])}
Future: ${SingleTarotCard(cards[2])}
Countermeasure: ${SingleTarotCard(cards[3])}
Surroundings: ${SingleTarotCard(cards[4])}
Attitude: ${SingleTarotCard(cards[5])}
Result: ${SingleTarotCard(cards[6])}`)
    }
  }

  // 凯尔特十字牌阵
  const CelticCross = () => {
    let cards = DrawNonRepeatCards(10)
    if (language === 'zh') {
      setTarotResult(`问题现状：${SingleTarotCard(cards[0])}
障碍助力：${SingleTarotCard(cards[1])}
理想状况：${SingleTarotCard(cards[2])}
基础条件：${SingleTarotCard(cards[3])}
过去状况：${SingleTarotCard(cards[4])}
未来发展：${SingleTarotCard(cards[5])}
自身现状：${SingleTarotCard(cards[6])}
周围环境：${SingleTarotCard(cards[7])}
希望恐惧：${SingleTarotCard(cards[8])}
最终结果：${SingleTarotCard(cards[9])}`)
    } else {
      setTarotResult(`Question Status: ${SingleTarotCard(cards[0])}
Obstacle or Help: ${SingleTarotCard(cards[1])}
Ideal Status: ${SingleTarotCard(cards[2])}
Basic Condition: ${SingleTarotCard(cards[3])}
Past Status: ${SingleTarotCard(cards[4])}
Future Development: ${SingleTarotCard(cards[5])}
Self Status: ${SingleTarotCard(cards[6])}
Environment: ${SingleTarotCard(cards[7])}
Hope or Fear: ${SingleTarotCard(cards[8])}
Final Result: ${SingleTarotCard(cards[9])}`)
    }
  }

  return (
    <Layout className="layout">
      <Space direction='vertical'>
        <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Space size='middle' align='center'>
            <SVG></SVG>
            <h1 style={{ margin: 0 }}>{t('title', language)}</h1>
          </Space>
          <Button 
            onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
            style={{ marginRight: '20px' }}
          >
            {language === 'zh' ? 'EN' : '中'}
          </Button>
        </Header>
        <Layout style={{ padding: '10px 50px' }} className="content">


          <h2>{t('attrGeneration', language)}</h2>
          <div>
            <Space>
              {t('pointTotal', language)} =
              <InputNumber min={includeLuck ? 135 : 120} max={640} value={attrTotal} onChange={setAttrTotal} />
              <Checkbox
                checked={includeLuck}
                onChange={(e) => {
                  const checked = e.target.checked
                  setIncludeLuck(checked)
                  if (checked && Number(attrTotal) < 135) {
                    setAttrTotal(135)
                  }
                }}
              />{t('includeLuck', language)}
              <Button
                type="primary"
                onClick={() => {
                  generateAttr()
                }}>
                {t('generateBtn', language)}
              </Button>
            </Space>
          </div>
          <div>
            <br />
            <List
              style={{ backgroundColor: '#FFFFFF' }}
              size="small"
              header={<div>{t('generatedResult', language)}</div>}
              bordered
              dataSource={attribution}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          </div>


          <h2><br></br>{t('diceSection', language)}</h2>
          <Space size='middle'>
            <div>
              {t('roll', language)}&nbsp;
              <Select defaultValue="6" style={{ width: 120 }} onChange={handleChange}>
                <Option value="3">{t('r3', language)}</Option>
                <Option value="4">{t('r4', language)}</Option>
                <Option value="6">{t('r6', language)}</Option>
                <Option value="8">{t('r8', language)}</Option>
                <Option value="10">{t('r10', language)}</Option>
                <Option value="20">{t('r20', language)}</Option>
                <Option value="100">{t('r100', language)}</Option>
              </Select>
              ，{language === 'zh' ? '共' : ''}&nbsp;
              <InputNumber min={1} max={10} value={diceNumber} onChange={setDiceNumber} size='small' style={{ width: 50 }} />
              &nbsp;{t('times', language)}
            </div>
            <Button
              type="primary"
              onClick={() => { throwDice(diceMax, diceNumber) }}>
              {t('rollBtn', language)}
            </Button>
          </Space>
          <Space>
            <p><br />{t('rollResult', language)}{diceNumber}{t('diceOf', language)}{diceMax}{t('diceResultText', language)}</p>
            <Statistic value={diceValue.toString()} style={{ color: '#003a8c' }} />
          </Space>

          <h2><br />{t('tarotSection', language)}</h2>
          <Space direction='vertical'>
            <Space wrap>
              <Button type="primary" onClick={() => { DrawSingleTarotCard() }}>
                {t('drawSingleCard', language)}
              </Button>
              <Button type="primary" onClick={() => { SacredTriangleSpread() }}>
                {t('sacredTriangle', language)}
              </Button>
              <Button type="primary" onClick={() => { FourElementsSpread() }}>
                {t('fourElements', language)}
              </Button>
              <Button type="primary" onClick={() => { LittleCross() }}>
                {t('littleCross', language)}
              </Button>
              <Button type="primary" onClick={() => { SixManifoldSpread() }}>
                {t('sixManifold', language)}
              </Button>
              <Button type="primary" onClick={() => { CelticCross() }}>
                {t('celticCross', language)}
              </Button>
            </Space>

            <Typography style={{ whiteSpace: 'pre-wrap' }}>{tarotResult}</Typography>
          </Space>


          <h2><br />{t('skillSection', language)}</h2>
          <Space direction='vertical'>
            <Space wrap>
              {t('skillNameSelection', language)}
              <Select
                defaultValue={language === 'zh' ? "侦查" : "Spot Hidden"}
                style={{ width: 120 }}
                placeholder={t('skillNameSelection', language)}
                onChange={(value) => { setSkillName(value) }}
              >
                {skillList.map(skill => (
                  <Option key={skill}>{skill}</Option>
                ))}
              </Select>
              {t('orInput', language)}
              <Input allowClear value={skillName} onChange={(e) => { setSkillName(e.target.value) }}
                style={{ width: '120px' }} ></Input>
              {t('skillValue', language)}
              <InputNumber min={1} max={100} value={skillPoint} onChange={setSkillPoint} />
              {t('difficulty', language)}
              <Select placeholder={t('difficulty', language)} defaultValue="1.0" onChange={(value) => { setSkillRatio(Number(value)) }}>
                <Option value="1.0">{t('regularSuccess', language)}</Option>
                <Option value="0.5">{t('hardSuccess', language)}</Option>
                <Option value="0.2">{t('extremeSuccess', language)}</Option>
              </Select>
              <Button
                type="primary"
                onClick={() => { setSkillRes(skillUsingJudge(skillName, skillPoint, skillPointRatio)) }}>
                {t('checkBtn', language)}
              </Button>
            </Space>
            <Checkbox
              checked={useHouseRule}
              onChange={(e) => {
                setUseHouseRule(e.target.checked)
                setSkillRes('')
              }}
            >
              {t('useHouseRule', language)}
            </Checkbox>
            <div style={{ fontSize: 'smaller' }}>
              * {t('currentRule', language)}{useHouseRule ? t('houseRule', language) : t('officialRule', language)}
            </div>
            <div>{skillRes}</div>
          </Space>
        </Layout>
      </Space>

      <Layout style={{ textAlign: 'center', padding: '16px 0 24px' }} >
        <p>
          {t('copyright', language)}<br />
          {t('poweredBy', language)}
        </p>
      </Layout>
    </Layout>
  )
}

export default App