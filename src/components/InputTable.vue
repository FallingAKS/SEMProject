<template>
  <div class="content">
    <el-form
        ref="editableForm"
        :model="editRow"
        :rules="rules"
        label-width="0"
        :show-message="true"
        class="editable-table">
      <el-table :data="tableData">
        <el-table-column
            v-for="(column, index) in columns"
            :key="index"
            :label="column.label"
            :prop="column.prop"
            align="center">
          <template #default="{ row, $index }">
            <div v-if="$index === editIndex" class="validate-info">
              <el-form-item :prop="column.prop">
                <el-input v-model="editRow[column.prop]"/>
              </el-form-item>
            </div>
            <span v-else>
              <span>{{ row[column.prop] }}</span>
            </span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template #default="{ row, $index }">
            <el-form-item>
              <template v-if="$index === editIndex">
                <el-button type="success" size="mini" plain @click="save">保存</el-button>
                <el-button type="info" size="mini" plain @click="cancel">取消</el-button>
              </template>
              <template v-else>
                <el-button
                    type="primary"
                    size="mini"
                    plain
                    @click="edit(row, $index)">
                  修改
                </el-button>
                <el-popconfirm
                    title="是否确认删除？"
                    @confirm="deleteRow($index)"
                    style="margin-left: 10px;">
                  <el-button slot="reference" type="danger" size="mini" plain>删除</el-button>
                </el-popconfirm>
              </template>
            </el-form-item>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
    <el-form
        ref="addForm"
        :model="addRow"
        :rules="rules"
        label-width="0"
        :show-message="true"
        class="add-table">
      <el-table :data="[addRow]" :show-header="false">
        <el-table-column
            v-for="(column, index) in columns"
            :key="index"
            :label="column.label"
            :prop="column.prop"
            align="center">
          <template #default="{ row }" class="validate-info">
            <div class="validate-info">
              <el-form-item :prop="column.prop">
                <el-input v-model="addRow[column.prop]"/>
              </el-form-item>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200px" align="center">
          <template #default="{ row }">
            <el-form-item>
              <el-button type="success" size="mini" plain @click="add(row)">新增</el-button>
            </el-form-item>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表格数据
      tableData: [
        {
          username: '张三',
          address: '北京'
        },
        {
          username: '李四',
          address: '上海'
        }
      ],
      //配置列
      columns: [
        {
          label: '用户名',
          prop: 'username'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ],
      // 规则
      rules: {
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        address: [{required: true, message: '请输入地址', trigger: 'blur'}],
      },
      // 当前编辑行下标
      editIndex: -1,
      // 当前编辑行
      editRow: {
        username: '',
        address: ''
      },
      // 新增行
      addRow: {
        username: '',
        address: ''
      }
    }
  },
  methods: {
    save() {
      this.$refs.editableForm.validate((valid) => {
        if (valid) {
          this.tableData.splice(this.editIndex, 1, { ...this.editRow })
          this.editIndex = -1
          this.$message.success('修改成功')
        }
        return valid
      })
    },
    cancel() {
      this.editIndex = -1
    },
    edit(row, index) {
      if (this.editIndex > -1) {
        this.$message.warning('请先完成修改中的行')
        return
      }
      this.editRow = {...row}
      this.editIndex = index
    },
    add(row) {
      if (this.editIndex > -1) {
        this.$message.warning('请先完成修改中的行')
        return
      }
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          this.addRow = {}
          this.tableData.push({ ... row})
          this.$message.success('新增成功')
        }
        return valid
      })
    },
    deleteRow(index) {
      this.tableData.splice(index, 1)
      this.$message.success('删除成功!');
    }
  }
}
</script>

<style scoped>
.content {
  padding: 20px;
  /deep/ .el-form-item {
    margin-bottom: 0;
  }
}

.validate-info {
  /deep/ .el-form-item {
    margin: 18px 0;
  }
}

.editable-table {
  /deep/ .el-table__empty-block {
    display: none;
  }
}

.editable-table, .add-table {
  width: 60%;
  margin: 0 auto;
}
</style>
