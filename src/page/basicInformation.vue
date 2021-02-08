 <template>
  <div class="operating">
    <div class="operatingTop">
      <div class="block">
        属性方式：
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="input21"
        >
        </el-input>
        <el-button type="primary" class="btnStyle">主要按钮</el-button>
      </div>
    </div>
    <div>
      <div>
        <h2>基本信息查询</h2>
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort="{ prop: 'date', order: 'descending' }"
        >
          <el-table-column prop="userId" label="Userid" width="180">
          </el-table-column>
          <el-table-column prop="outerUserId" label="outerUserid" width="180">
          </el-table-column>
          <el-table-column prop="userName" label="用户名" width="180">
          </el-table-column>
          <el-table-column prop="registerDate" label="注册时间" width="">
          </el-table-column>
          <el-table-column prop="expirationDate" label="到期时间" width="">
          </el-table-column>
          <el-table-column prop="channel" label="渠道" width="">
          </el-table-column>
        </el-table>
      </div>
      <div>
        <h2>交易信息</h2>
        <el-table
          :data="tableDealData"
          style="width: 100%"
          :default-sort="{ prop: 'date', order: 'descending' }"
        >
          <el-table-column prop="numbers" label="编号" sortable width="180">
          </el-table-column>
          <el-table-column
            prop="orderNumber"
            label="订单号"
            sortable
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="timePayment"
            label="付款时间"
            sortable
            width="180"
          >
          </el-table-column>
          <el-table-column prop="orderType" label="订单类型" sortable width="">
          </el-table-column>
          <el-table-column prop="money" label="金额" sortable width="">
          </el-table-column>
          <el-table-column prop="look" label="抬头" sortable width="">
          </el-table-column>
          <el-table-column prop="tfn" label="税号" sortable width="">
          </el-table-column>
          <el-table-column prop="content" label="内容" sortable width="">
          </el-table-column>
          <el-table-column prop="express" label="快递信息" sortable width="">
          </el-table-column>
          <el-table-column prop="mailbox" label="邮箱" sortable width="">
          </el-table-column>
          <el-table-column prop="invoice" label="处理开票" sortable width="">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  data() {
    return {
      value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      input21: "",
      tableData: [
        {
          userId: "123456",
          outerUserId: "123456",
          userName: "王小虎",
          registerDate: "2020-02-02",
          expirationDate: "2020-02-09",
          channel: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      tableDealData: [
        {
          numbers: "123456",
          orderNumber: "123456",
          timePayment: "王小虎",
          orderType: "2020-02-02",
          money: "2020-02-09",
          look: "上海市普陀区金沙江路 1518 弄",
          tfn: "上海市普陀区金沙江路 1518 弄",
          content: "上海市普陀区金沙江路 1518 弄",
          express: "上海市普陀区金沙江路 1518 弄",
          mailbox: "上海市普陀区金沙江路 1518 弄",
          invoice: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      currentPage1: 4,
    };
  },
};
</script>

<style lang="scss" scoped>
// 运营指标
.operating {
  .operatingTop {
    height: 52px;
    border: 1px solid #d9d9d9;
    margin-bottom: 20px;
    line-height: 52px;
    .block {
      .el-input {
        width: 230px;
      }
      .btnStyle {
        margin-left: 30px;
      }
    }
  }
}
</style>

