 <template>
  <div class="operating">
    <div>
      <div>
        <h2>解绑手机号</h2>
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
          <el-table-column prop="operation" label="操作">
            <template slot-scope="scope">
              <el-button
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >解绑</el-button
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

