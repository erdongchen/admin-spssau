import Mock from "mockjs";
// 设置全局延时，没有延时的话，有时候会检测不到数据变化
Mock.setup({
  timeout: '300-600'
});

const url = {
  innerlogin: "http://20181024Mock.com/api/user/auth/innerlogin",
  tableDataTwo: "http://20181024Mock.com/mode1/tableDataTwo",
  tableDataThi: "http://20181024Mock.com/mode1/tableDataThi"
};
let userData={
  code: 0,
  data: {
      expireTime: '2021-09-23 12:10:54',
      hint:'',
      id: 1202037,
      member: true,
      memberType: 0,
      replyHint: 0,
      username: '+8618310645328'
  },
  index: 0,
  message:'ok',
  messageEn: 'ok',
  methodId: null,
  methodName: null
}
let userLIst = [
  //user属性：id、姓名、密码、级别（普通员工1、管理员0）、状态（0在职，1失效）
  {id:1, username:'568952575',password:'11111111',level:'0',statue:'0'},
  {id:2, username:'15296721564',password:'11111111',level:'1',statue:'0'},
  {id:3, username:'249198366',password:'11111111',level:'1',statue:'0'}
];
module.export = [
  Mock.mock(url.innerlogin,'post',(params)=>userData)
  // Mock.mock(url.tableDataOne, {F
  //   "dataSource|5": [
  //     {
  //       "key|+1": 1,
  //       "mockTitle|1": ["哑巴", "Butter-fly", "肆无忌惮", "摩天大楼", "初学者"],
  //       "mockContent|1": [
  //         "你翻译不了我的声响",
  //         "数码宝贝主题曲",
  //         "摩天大楼太稀有",
  //         "像海浪撞破了山丘"
  //       ],
  //       "mockAction|1": ["下载", "试听", "喜欢"]
  //     }
  //   ]
  // })
];
