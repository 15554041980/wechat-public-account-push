/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxc5a5475f91b8958a',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'ba997a5dd401d5826d7e00b7c043f75e',
  
  PROVINCE: '北京',
  CITY: '丰台区',

  USERS: [
    {
      // 想要发送的人的名字
      name: '琴宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ofkwa6kLlA72fyXRZoMgDjaejZH8',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'qrILeD-ayh0hie43AlBzvp5tzwtb8QdZJZxARUU18j0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '4-14',
      festivals: [
        
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '琴琴', year: '2000', date: '04-14',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '09-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-23' },
        // 第一次见面
        { keyword: 'marry_day', date: '2022-09-01' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '洋洋',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ofkwa6uUWqsvwXY9yAdDJejBjygA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'qrILeD-ayh0hie43AlBzvp5tzwtb8QdZJZxARUU18j0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '1-09',
      festivals: [
        
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '琴琴', year: '2003', date: '01-09',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '09-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-23' },
        // 第一次见面
        { keyword: 'marry_day', date: '2022-09-01' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '娜娜',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ofkwa6vlNKzUU2lXRekDnkuvX7Rg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Db2eyCe3ZClNy_EIbN0NBNFqhiLX86Cm96YQmgno4tg',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '9-09',
      festivals: [
        
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '娜娜', year: '2002', date: '09-09',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '09-01',
        },
      ],
      // 从我们遇见到现在已经有xxxx天了的配置
      customizedDateList: [
        // 第一次见面
        { keyword: 'marry_day', date: '2022-09-01' },
      ],
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '9wMQvo2dRT-kDYAE6YlDK-RyfjxxJ1ip5fhNhn7WHOY',

  CALLBACK_USERS: [
    {
      name: '主人',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ofkwa6uUWqsvwXY9yAdDJejBjygA',
    }
  ],

}

module.exports = USER_CONFIG

