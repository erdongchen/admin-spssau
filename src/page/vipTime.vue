 <template>
  <div class="operating">
    <div>
      <div>
        <h2>会员时间处理</h2>
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort="{ prop: 'date', order: 'descending' }"
        >
          <el-table-column prop="userId" label="User id">
            <template slot-scope="scope">
              <el-input
                v-model="scope.row.userId"
                placeholder="输入User id"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="numberDays" label="天数处理">
            <template slot-scope="scope">
              <el-input
                v-model="scope.row.numberDays"
                placeholder="0"
              ></el-input
              >天
            </template>
          </el-table-column>
          <el-table-column prop="vipType" label="会员类型">
            <template slot-scope="scope">
              <el-select v-model="scope.row.vipType" placeholder="请选择">
                <el-option
                  v-for="item in tableData.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="operation" label="操作">
            <template slot-scope="scope">
              <el-button
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >确认</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {},
  data() {
    return {
      input21: "",
      tableData: [
        {
          userId: "123456",
          numberDays: "123456",
          options: [
            {
              value: "选项1",
              label: "黄金糕",
            },
            {
              value: "选项2",
              label: "双皮奶",
            },
            {
              value: "选项3",
              label: "蚵仔煎",
            },
            {
              value: "选项4",
              label: "龙须面",
            },
            {
              value: "选项5",
              label: "北京烤鸭",
            },
          ],
          value: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
// 运营指标
.operating {
}
</style>

