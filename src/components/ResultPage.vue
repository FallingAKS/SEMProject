<script setup lang="ts">
import {ArrowLeft} from '@element-plus/icons-vue'
import {ref} from 'vue';

const tableData = ref([
  {
    id: 1,
    elasticityModulus: 210,
    structuralAdhesiveStress: 0.5,
    panelDamageArea: 0.5,
    structuralAdhesiveDamageLength: 0.5,
    connectorsNumber: 0.5,
    backBoltsNumber: 0.5,
    panelVerticality: 0.5,
    stitchingWidth: 0.5,
    panelSize: 0.5,
    eresult: 0.5,
    rresult: 0.5
  },
  {
    id: 2,
    elasticityModulus: 210,
    structuralAdhesiveStress: 0.5,
    panelDamageArea: 0.5,
    structuralAdhesiveDamageLength: 0.5,
    connectorsNumber: 0.5,
    backBoltsNumber: 0.5,
    panelVerticality: 0.5,
    stitchingWidth: 0.5,
    panelSize: 0.5,
    eresult: 0.5,
    rresult: 0.5
  },
  {
    id: 3,
    elasticityModulus: 210,
    structuralAdhesiveStress: 0.5,
    panelDamageArea: 0.5,
    structuralAdhesiveDamageLength: 0.5,
    connectorsNumber: 0.5,
    backBoltsNumber: 0.5,
    panelVerticality: 0.5,
    stitchingWidth: 0.5,
    panelSize: 0.5,
    eresult: 0.5,
    rresult: 0.5
  },
  {
    id: 4,
    elasticityModulus: 210,
    structuralAdhesiveStress: 0.5,
    panelDamageArea: 0.5,
    structuralAdhesiveDamageLength: 0.5,
    connectorsNumber: 0.5,
    backBoltsNumber: 0.5,
    panelVerticality: 0.5,
    stitchingWidth: 0.5,
    panelSize: 0.5,
    eresult: 0.5,
    rresult: 0.5
  },
  {
    id: 5,
    elasticityModulus: 210,
    structuralAdhesiveStress: 0.5,
    panelDamageArea: 0.5,
    structuralAdhesiveDamageLength: 0.5,
    connectorsNumber: 0.5,
    backBoltsNumber: 0.5,
    panelVerticality: 0.5,
    stitchingWidth: 0.5,
    panelSize: 0.5,
    eresult: 0.5,
    rresult: 0.5
  },
  {
    id: 6,
    elasticityModulus: 210,
    structuralAdhesiveStress: 0.5,
    panelDamageArea: 0.5,
    structuralAdhesiveDamageLength: 0.5,
    connectorsNumber: 0.5,
    backBoltsNumber: 0.5,
    panelVerticality: 0.5,
    stitchingWidth: 0.5,
    panelSize: 0.5,
    eresult: 0.5,
    rresult: 0.5
  },
  {
    id: 7,
    elasticityModulus: 210,
    structuralAdhesiveStress: 0.5,
    panelDamageArea: 0.5,
    structuralAdhesiveDamageLength: 0.5,
    connectorsNumber: 0.5,
    backBoltsNumber: 0.5,
    panelVerticality: 0.5,
    stitchingWidth: 0.5,
    panelSize: 0.5,
    eresult: 0.5,
    rresult: 0.5
  },
  {
    id: 8,
    elasticityModulus: 210,
    structuralAdhesiveStress: 0.5,
    panelDamageArea: 0.5,
    structuralAdhesiveDamageLength: 0.5,
    connectorsNumber: 0.5,
    backBoltsNumber: 0.5,
    panelVerticality: 0.5,
    stitchingWidth: 0.5,
    panelSize: 0.5,
    eresult: 0.5,
    rresult: 0.5
  },
  {
    id: 9,
    elasticityModulus: 210,
    structuralAdhesiveStress: 0.5,
    panelDamageArea: 0.5,
    structuralAdhesiveDamageLength: 0.5,
    connectorsNumber: 0.5,
    backBoltsNumber: 0.5,
    panelVerticality: 0.5,
    stitchingWidth: 0.5,
    panelSize: 0.5,
    eresult: 0.5,
    rresult: 0.5
  },
  {
    id: 10,
    elasticityModulus: 210,
    structuralAdhesiveStress: 0.5,
    panelDamageArea: 0.5,
    structuralAdhesiveDamageLength: 0.5,
    connectorsNumber: 0.5,
    backBoltsNumber: 0.5,
    panelVerticality: 0.5,
    stitchingWidth: 0.5,
    panelSize: 0.5,
    eresult: 0.5,
    rresult: 0.5
  },
  {
    id: 11,
    elasticityModulus: 210,
    structuralAdhesiveStress: 0.5,
    panelDamageArea: 0.5,
    structuralAdhesiveDamageLength: 0.5,
    connectorsNumber: 0.5,
    backBoltsNumber: 0.5,
    panelVerticality: 0.5,
    stitchingWidth: 0.5,
    panelSize: 0.5,
    eresult: 0.5,
    rresult: 0.5
  },
  {
    id: 12,
    elasticityModulus: 210,
    structuralAdhesiveStress: 0.5,
    panelDamageArea: 0.5,
    structuralAdhesiveDamageLength: 0.5,
    connectorsNumber: 0.5,
    backBoltsNumber: 0.5,
    panelVerticality: 0.5,
    stitchingWidth: 0.5,
    panelSize: 0.5,
    eresult: 0.5,
    rresult: 0.5
  },
  {
    id: 13,
    elasticityModulus: 210,
    structuralAdhesiveStress: 0.5,
    panelDamageArea: 0.5,
    structuralAdhesiveDamageLength: 0.5,
    connectorsNumber: 0.5,
    backBoltsNumber: 0.5,
    panelVerticality: 0.5,
    stitchingWidth: 0.5,
    panelSize: 0.5,
    eresult: 0.5,
    rresult: 0.5
  },
  {
    id: 14,
    elasticityModulus: 210,
    structuralAdhesiveStress: 0.5,
    panelDamageArea: 0.5,
    structuralAdhesiveDamageLength: 0.5,
    connectorsNumber: 0.5,
    backBoltsNumber: 0.5,
    panelVerticality: 0.5,
    stitchingWidth: 0.5,
    panelSize: 0.5,
    eresult: 0.5,
    rresult: 0.5
  },
  {
    id: 15,
    elasticityModulus: 210,
    structuralAdhesiveStress: 0.5,
    panelDamageArea: 0.5,
    structuralAdhesiveDamageLength: 0.5,
    connectorsNumber: 0.5,
    backBoltsNumber: 0.5,
    panelVerticality: 0.5,
    stitchingWidth: 0.5,
    panelSize: 0.5,
    eresult: 0.5,
    rresult: 0.5
  },
  {
    id: 16,
    elasticityModulus: 210,
    structuralAdhesiveStress: 0.5,
    panelDamageArea: 0.5,
    structuralAdhesiveDamageLength: 0.5,
    connectorsNumber: 0.5,
    backBoltsNumber: 0.5,
    panelVerticality: 0.5,
    stitchingWidth: 0.5,
    panelSize: 0.5,
    eresult: 0.5,
    rresult: 0.5
  },
]);

const currentPage1 = ref(5)
const currentPage2 = ref(5)
const currentPage3 = ref(5)
const currentPage4 = ref(4)
const pageSize2 = ref(100)
const pageSize3 = ref(100)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const value = ref('请选择批次')
const options = [
  {
    value: '1',
    label: '第 1 批次：2021-09-01 12:00:00'
  },
  {
    value: '2',
    label: '第 2 批次：2021-09-01 13:00:00'
  },
  {
    value: '3',
    label: '第 3 批次：2021-09-01 13:04:00'
  },
  {
    value: '4',
    label: '第 4 批次：2021-09-01 13:08:00'
  },
  {
    value: '5',
    label: '第 5 批次：2021-09-01 13:12:00'
  },
  {
    value: '6',
    label: '第 6 批次：2021-09-01 13:16:00'
  },
  {
    value: '7',
    label: '第 7 批次：2021-09-01 13:20:00'
  },
  {
    value: '8',
    label: '第 8 批次：2021-09-01 13:24:00'
  },
  {
    value: '9',
    label: '第 9 批次：2021-09-01 13:28:00'
  },
  {
    value: '10',
    label: '第 10 批次：2021-09-01 13:32:00'
  },
  {
    value: '11',
    label: '第 11 批次：2021-09-01 13:36:00'
  },
  {
    value: '12',
    label: '第 12 批次：2021-09-01 13:40:00'
  },
  {
    value: '13',
    label: '第 13 批次：2021-09-01 13:44:00'
  },
  {
    value: '14',
    label: '第 14 批次：2021-09-01 13:48:00'
  },
  {
    value: '15',
    label: '第 15 批次：2021-09-01 13:52:00'
  },
  {
    value: '16',
    label: '第 16 批次：2021-09-01 13:56:00'
  },
  {
    value: '17',
    label: '第 17 批次：2021-09-01 14:00:00'
  },
  {
    value: '18',
    label: '第 18 批次：2021-09-01 14:04:00'
  },
]

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header style="height: 40px;">
        <el-row>
          <el-col :span="20">
            <el-button :icon="ArrowLeft" type="success">返回</el-button>
          </el-col>
          <el-col :span="4">
            <!--todo: 搜索框，八嘎，不写了-->
<el-select
      v-model="value"
      placeholder="Select"
      size="large"
      style="width: 340px; margin-left: -120px;"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
          </el-col>
        </el-row>
      </el-header>

      <el-main>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="id" label="数据ID" width="100"/>
          <el-table-column prop="elasticityModulus" label="弹性模量" width="124"/>
          <el-table-column prop="structuralAdhesiveStress" label="结构胶应力" width="124"/>
          <el-table-column prop="panelDamageArea" label="面板损伤面积" width="124"/>
          <el-table-column prop="structuralAdhesiveDamageLength" label="结构胶损伤长度" width="124"/>
          <el-table-column prop="connectorsNumber" label="连接件数量" width="124"/>
          <el-table-column prop="backBoltsNumber" label="背面螺栓数量" width="124"/>
          <el-table-column prop="panelVerticality" label="面板垂直度" width="124"/>
          <el-table-column prop="stitchingWidth" label="拼缝宽度" width="124"/>
          <el-table-column prop="panelSize" label="面板尺寸" width="124"/>
          <el-table-column prop="eresult" label="熵权法结果" width="150"/>
          <el-table-column prop="rresult" label="粗糙集结果" width="150"/>
        </el-table>

<br/>
  <el-row>
    <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="16"><el-pagination
            v-model:current-page="currentPage3"
            v-model:page-size="pageSize3"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="prev, pager, next, jumper"
            :total="1000"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        /></el-col>
  </el-row>

      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.demo-pagination-block {
  width: 96%;
  margin: 0 auto;
}
</style>