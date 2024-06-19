<script setup lang="ts">
import {onMounted, ref, watch} from 'vue';
import axios from '~/Axios/request';
import {ElMessage, ElMessageBox} from "element-plus";
import {reactive} from "@vue/reactivity";

const tableData = ref([])

const value = ref('请选择批次')
const options = ref([])

const tableWidth = ref(['70',
  '100', '100', '110', '100', '80', '80', '100', '102', '100', '110', '110', '110',
  '102', '100',
  '110', '110', '110'])

const filterTag = (value: string, row) => {
  return row.tag === value
}

//进入页面时请求数据
onMounted(async () => {
  try {
    const response = await axios.get('/data/batch');
    const data = response.data.data;
    for (let i = 0; i < data.length; i++) {
      options.value.push({value: data[i], label: data[i]});
    }
    ElMessage.success('请选择批次');
  } catch (error) {
    ElMessage.error('获取数据失败');
  }
});

const option = reactive({
  legend: {
    // 图例
    data: ["Safe", "Warning", "Danger"],
    right: "10%",
    top: "7%",
    orient: "vertical"
  },
  title: {
    // 设置饼图标题，位置设为顶部居中
    text: "该批次下的安全汇总",
    top: "0%",
    left: "center"
  },
  color: ['#67C23A', '#E6A23C', '#F56C6C'],
  series: [
    {
      type: "pie",
      label: {
        show: false,
        formatter: "{b} : {c} ({d}%)" // b代表名称，c代表对应值，d代表百分比
      },
      data: [
        {value: 0, name: "Safe", color: 'green'},
        {value: 0, name: "Warning"},
        {value: 0, name: "Danger"}
      ]
    }
  ]
});

// 上下阙值
const lower_value = ref(0.3)
const upper_value = ref(0.5)
const tmp_lower_value = ref(0.3)
const tmp_upper_value = ref(0.5)
const valueDialogVisible = ref(false)
const isModified = ref(false)

watch([lower_value, upper_value], () => {
  tableData.value.forEach(row => {
    row.tag = row.eresult == null ? 'Safe' :
        (row.eresult < lower_value.value ? 'Danger' :
            (row.eresult < upper_value.value ? 'Warning' :
                'Safe'));
  });
})

// 记录滑块更新状态
const modifiedCheck = () => {
  isModified.value = true;
}

// 退出时检查是否有修改
const closeValueDialog = () => {
  if (isModified.value) {
    ElMessageBox.confirm(
        '你有为保存的上下阙值调整，要退出吗',
        'Warning',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }
    )
        .then(() => {
          valueDialogVisible.value = false;
        })
        .catch(() => {
          // 不做任何
        })
  } else {
    valueDialogVisible.value = false;
  }
}

// 确认更新上下阙值
const modifiedConfirm = () => {
  lower_value.value = tmp_lower_value.value;
  upper_value.value = tmp_upper_value.value;
  valueDialogVisible.value = false;
}

// 打开对话框时，更新slider的值
const openValueDialog = () => {
  tmp_lower_value.value = lower_value.value;
  tmp_upper_value.value = upper_value.value;
}
const handleValueDialogCloser = () => {
  closeValueDialog()
}

const handleSelect = async (value) => {
  try {
    tableData.value = [];
    const response = await axios.get('/data/batch_data?batch=' + value);
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
        eresult: data[i].eresult.toFixed(2),
        rresult: data[i].rresult.toFixed(2),
        tag: data[i].eresult == null ? 'Safe' :
            (data[i].eresult < 0.3 ? 'Danger' :
                (data[i].eresult < 0.5 ? 'Warning' :
                    'Safe')),
        elasticityModulus: data[i].elasticityModulus.toFixed(2),
        structuralAdhesiveStress: data[i].structuralAdhesiveStress.toFixed(2),
        panelDamageArea: data[i].panelDamageArea.toFixed(2),
        structuralAdhesiveDamageLength: data[i].structuralAdhesiveDamageLength.toFixed(2),
        connectorsNumber: data[i].connectorsNumber,
        backBoltsNumber: data[i].backBoltsNumber,
        panelVerticality: data[i].panelVerticality.toFixed(2),
        stitchingWidth: data[i].stitchingWidth.toFixed(2),
        panelSize: data[i].panelSize.toFixed(2),
        Offset_x: data[i].Offset_x.toFixed(2),
        Offset_y: data[i].Offset_y.toFixed(2),
        Offset_z: data[i].Offset_z.toFixed(2),
        flatness: data[i].flatness.toFixed(2),
        stains: data[i].stains.toFixed(2),
        cracks: data[i].cracks.toFixed(2)
      });
    }

    let safe = 0;
    let warning = 0;
    let danger = 0;
    for (let i = 0; i < tableData.value.length; i++) {
      if (tableData.value[i].tag === 'Safe') {
        safe++;
      } else if (tableData.value[i].tag === 'Warning') {
        warning++;
      } else {
        danger++;
      }
    }

    option.series = {
      data: [
        {value: safe, name: "Safe"},
        {value: warning, name: "Warning"},
        {value: danger, name: "Danger"}
      ]
    } //这个是对的，网上不报错的方法是错的
  } catch (error) {
    ElMessage.error('获取结果失败');
  }
};

const blockVisible = ref(false)
</script>

<template>
  <div class="flex-col h-full w-full">
    <div id="TopBar" style="flex: 2; height: 40px;">
      <div class="grow" style="position: relative;"></div>
      <el-button type="primary" @click="blockVisible=true" style="margin-top: 15px; margin-left: 30px;">显示安全汇总
      </el-button>
      <el-button plain @click="valueDialogVisible = true" style="margin-top: 15px; margin-left: 10px;">阙值调整
      </el-button>
      <el-select
          v-model="value"
          placeholder="Select"
          size="large"
          style="width: 30%; float: right; margin-right: 200px; margin-top: 10px; margin-bottom: 10px;"
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
    <div id="content" style=" padding: 30px; position: relative;">
      <div style="float: left; width: 82vw">
        <el-table :data="tableData" stripe height="750" style="width: 100%">
          <el-table-column fixed prop="id" label="数据ID" :width="tableWidth[0]"/>
          <el-table-column fixed prop="rresult" label="粗糙集结果" :width="tableWidth[13]"/>
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
          <el-table-column prop="Offset_x" label="偏移量X" :width="tableWidth[10]"/>
          <el-table-column prop="Offset_y" label="偏移量Y" :width="tableWidth[11]"/>
          <el-table-column prop="Offset_z" label="偏移量Z" :width="tableWidth[12]"/>
          <el-table-column prop="flatness" label="平整度" :width="tableWidth[15]"/>
          <el-table-column prop="stains" label="污渍" :width="tableWidth[16]"/>
          <el-table-column prop="cracks" label="裂缝" :width="tableWidth[17]"/>
        </el-table>
      </div>
    </div>
  </div>
  <div v-show="blockVisible" style="position: absolute; width: 500px; height: 600px; left: calc(50% - 250px); top: calc(50% - 300px);
  background: rgba(225,246,255,0.9); padding-top: 30px;border-radius: 30px; z-index: 999; border: solid black 1px;">
    <div style="width: 500px; height: 530px;">
      <v-chart :option="option" autoresize :loading="false"/>
    </div>
    <div style="padding-left: 222px">
      <el-button type="primary" @click="blockVisible=false">关闭</el-button>
    </div>
  </div>
  <el-dialog v-model="valueDialogVisible" title="阙值调整" width="500" center @open="openValueDialog"
             :before-close="handleValueDialogCloser">
    <template #header>
      阙值调整
    </template>
    <span>
      <div class="slider-demo-block">
        <span class="demonstration">下阙值</span>
        <el-slider v-model="tmp_lower_value" :max="tmp_upper_value" :min="0" :step="0.01" show-input @input="modifiedCheck"/>
      </div>
      <div class="slider-demo-block">
        <span class="demonstration">上阙值</span>
        <el-slider v-model="tmp_upper_value" :max="1" :min="tmp_lower_value" :step="0.01" show-input @input="modifiedCheck"/>
      </div>
    </span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="closeValueDialog">Cancel</el-button>
        <el-button type="primary" @click="modifiedConfirm">Confirm</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped>
</style>