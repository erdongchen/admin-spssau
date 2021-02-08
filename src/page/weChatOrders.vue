 <template>
  <div class="operating">
    <div class="operatingTop">
      <div class="block">
        商户单号
        <el-input
          placeholder="输入商户单号"
          prefix-icon="el-icon-search"
          v-model="input21"
        >
        </el-input>
        <el-button type="primary" class="btnStyle">查询</el-button>
      </div>
    </div>
    <div>
      <div>
        <h2>微信订单信息查询</h2>
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort="{ prop: 'date', order: 'descending' }"
        >
          <el-table-column prop="userId" label="Userid" width="180">
          </el-table-column>
          <el-table-column prop="nickname" label="昵称" width="180">
          </el-table-column>
          <el-table-column prop="merchantsToOrder" label="商户单号" width="180">
          </el-table-column>
          <el-table-column prop="orderType" label="订单类型" width="">
          </el-table-column>
          <el-table-column prop="orderMoney" label="订单金额" width="">
          </el-table-column>
          <el-table-column prop="orderTime" label="下单时间" width="">
          </el-table-column>
          <el-table-column prop="timePayment" label="付款时间" width="">
          </el-table-column>
          <el-table-column prop="paymentStatus" label="付款状态" width="">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
  },
  data() {
    return {
      input21: "",
      tableData: [
        {
          userId: "123456",
          nickname: "123456",
          merchantsToOrder: "王小虎",
          registerDate: "2020-02-02",
          expirationDate: "2020-02-09",
          channel: "上海市普陀区金沙江路 1518 弄",
        },
      ],
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

