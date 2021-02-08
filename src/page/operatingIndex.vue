 <template>
  <div class="operating">
    <div class="operatingTop">
      <div class="block">
        <el-date-picker
          v-model="value3"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
        <el-button type="primary" class="btnStyle">主要按钮</el-button>
      </div>
    </div>
    <div>
      <div>
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="input2"
        >
        </el-input>
        <h2>运营指标</h2>
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort="{ prop: 'date', order: 'descending' }"
        >
          <el-table-column prop="date" label="日期" sortable width="180">
          </el-table-column>
          <el-table-column prop="channel" label="渠道" sortable width="180">
          </el-table-column>
          <el-table-column prop="registers" label="注册用户数">
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
  },
  data() {
    return {
      value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      input2: "",
      tableData: [
        {
          date: "2016-05-02",
          channel: "王小虎",
          registers: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          channel: "王小虎",
          registers: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          channel: "王小虎",
          registers: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          channel: "王小虎",
          registers: "上海市普陀区金沙江路 1516 弄",
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
      .btnStyle {
        margin-left: 30px;
      }
    }
  }
}
</style>

