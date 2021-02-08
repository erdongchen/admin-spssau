 <template>
  <div class="operating">
    <div class="operatingTop">
      <div class="block">
        搜索
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="input21"
        >
        </el-input>
      </div>
    </div>
    <div>
      <div>
        <h2>交易信息</h2>
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort="{ prop: 'date', order: 'descending' }"
        >
          <el-table-column prop="numbers" label="编号" sortable width="180">
          </el-table-column>
          <el-table-column prop="userName" label="用户名" sortable width="180">
          </el-table-column>
          <el-table-column
            prop="timePayment"
            label="付款时间"
            sortable
            width="180"
          >
          </el-table-column>
          <el-table-column prop="look" label="抬头" sortable width="">
          </el-table-column>
          <el-table-column prop="tfn" label="税号" sortable width="">
          </el-table-column>
          <el-table-column prop="content" label="内容" sortable width="">
          </el-table-column>
          <el-table-column prop="money" label="金额" sortable width="">
          </el-table-column>
          <el-table-column prop="express" label="快递信息" sortable width="">
          </el-table-column>
          <el-table-column prop="mailbox" label="邮箱" sortable width="">
          </el-table-column>
          <el-table-column prop="operation" label="操作" sortable width="">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData4)"
                type="text"
                size="small"
              >
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage1"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
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
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  },
  data() {
    return {
      value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      input21: "",
      tableData: [
        {
          numbers: "123456",
          userName: "123456",
          timePayment: "王小虎",
          look: "上海市普陀区金沙江路 1518 弄",
          tfn: "上海市普陀区金沙江路 1518 弄",
          content: "上海市普陀区金沙江路 1518 弄",
          money: "2020-02-09",
          express: "上海市普陀区金沙江路 1518 弄",
          mailbox: "上海市普陀区金沙江路 1518 弄",
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

