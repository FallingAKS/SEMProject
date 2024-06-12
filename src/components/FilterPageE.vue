<script setup lang="ts">
import {onMounted, ref} from 'vue';
import axios from 'axios';
import {ElMessage} from "element-plus";

const tableData = ref([])

const value = ref('请选择批次')
const options = ref([])

const tableWidth = ref(['70',
  '100', '100', '110', '100', '80', '80', '100', '102', '100', '100', '100', '100',
  '100', '100'])

const filterTag = (value: string, row) => {
  return row.tag === value
}

//进入页面时请求数据
onMounted(async () => {
  try {
    const response = await axios.get('http://106.15.7.192:8000/data/batch');
    const data = response.data.data;
    for (let i = 0; i < data.length; i++) {
      options.value.push({ value: data[i], label: data[i] });
    }
    ElMessage.success('请选择批次');
  } catch (error) {
    ElMessage.error('获取数据失败');
  }
});

const handleSelect = async (value) => {
  try {
    tableData.value = [];
    const response = await axios.get('http://106.15.7.192:8000/evalu/eresult?batch=' + value);
    let preData = response.data
    let dataObject;
    if (typeof preData === 'string') {
      preData = preData.replaceAll('NaN', 'null');
      dataObject = JSON.parse(preData);
    } else {
      dataObject = preData;
    }
    let data = dataObject.data;

    for (let i = 0; i < data.length; i++) {
      tableData.value.push({
        id: data[i].id,
        eresult: data[i].eresult,
        tag: data[i].eresult == null ? 'Safe' :
          (data[i].eresult < 0.5 ? 'Safe' :
            (data[i].eresult < 0.7 ? 'Warning' :
              'Danger'))
      });
    }

    const preDataResponse = await axios.get('http://106.15.7.192:8000/data/batch_data?batch=' + value);
    preData = preDataResponse.data;
    if (typeof preData === 'string') {
      preData = preData.replaceAll('NaN', 'null');
      dataObject = JSON.parse(preData);
    } else {
      dataObject = preData;
    }
    data = dataObject.data;

    for (let i = 0; i < data.length; i++) {
      tableData.value[i].elasticityModulus = data[i].elasticityModulus;
      tableData.value[i].structuralAdhesiveStress = data[i].structuralAdhesiveStress;
      tableData.value[i].panelDamageArea = data[i].panelDamageArea;
      tableData.value[i].structuralAdhesiveDamageLength = data[i].structuralAdhesiveDamageLength;
      tableData.value[i].connectorsNumber = data[i].connectorsNumber;
      tableData.value[i].backBoltsNumber = data[i].backBoltsNumber;
      tableData.value[i].panelVerticality = data[i].panelVerticality;
      tableData.value[i].stitchingWidth = data[i].stitchingWidth;
      tableData.value[i].panelSize = data[i].panelSize;
    }
    console.log(tableData);
  } catch (error) {
    ElMessage.error('获取结果失败');
  }
};

</script>

<template>
  <div class="flex-col h-full w-full">
    <div id="TopBar" style="flex: 2;">
      <div class="grow" style="position: relative;"></div>
      <el-select
          v-model="value"
          placeholder="Select"
          size="large"
          style="width: 20%; float: right; margin-right: 200px; margin-top: 10px; margin-bottom: 10px;"
          @change="handleSelect"
      >
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </div>
    <div id="content" style="flex: 8; padding: 30px">
      <el-table :data="tableData" stripe height="750" style="width: 90%">
        <el-table-column fixed prop="id" label="数据ID" :width="tableWidth[0]"/>
        <el-table-column fixed prop="eresult" label="熵权法结果" :width="tableWidth[13]"/>
        <el-table-column fixed
                         :width="tableWidth[14]"
                         prop="tag"
                         label="Tag"
                         width="100"
                         :filters="[
        { text: 'Safe', value: 'Safe' },
        { text: 'Warning', value: 'Warning' },
        { text: 'Danger', value: 'Danger' }
      ]"
                         :filter-method="filterTag"
                         filter-placement="bottom-end"
        >
          <template #default="scope">
            <el-tag
                :type="scope.row.tag === 'Safe' ? 'success' : (scope.row.tag === 'Warning' ? 'warning' : 'danger')"
                disable-transitions
            >{{ scope.row.tag }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="elasticityModulus" label="弹性模量" :width="tableWidth[1]"/>
        <el-table-column prop="structuralAdhesiveStress" label="结构胶应力" :width="tableWidth[2]"/>
        <el-table-column prop="panelDamageArea" label="面板损伤面积" :width="tableWidth[3]"/>
        <el-table-column prop="structuralAdhesiveDamageLength" label="结构胶损伤长度" :width="tableWidth[4]"/>
        <el-table-column prop="connectorsNumber" label="连接件数量" :width="tableWidth[5]"/>
        <el-table-column prop="backBoltsNumber" label="背面螺栓数量" :width="tableWidth[6]"/>
        <el-table-column prop="panelVerticality" label="面板垂直度" :width="tableWidth[7]"/>
        <el-table-column prop="stitchingWidth" label="拼缝宽度" :width="tableWidth[8]"/>
        <el-table-column prop="panelSize" label="面板尺寸" :width="tableWidth[9]"/>
        <el-table-column prop="panelSize" label="偏移量X" :width="tableWidth[10]"/>
        <el-table-column prop="panelSize" label="偏移量Y" :width="tableWidth[11]"/>
        <el-table-column prop="panelSize" label="偏移量Z" :width="tableWidth[12]"/>
      </el-table>
    </div>
  </div>
</template>

<style scoped>

</style>