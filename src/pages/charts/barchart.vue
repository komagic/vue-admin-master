<template>
    <el-row>
        <div class="panel">
            <panel-title :title="$route.meta.title"></panel-title>
            <div class="panel-body">
                <charts :options="optionA" style="height: 700px"></charts>
            </div>
        </div>
       
    </el-row>
</template>


<script>
 import {panelTitle, charts} from 'components'
export default {
data(){
      return {
        optionA: null
        
      }
      
    },
    created(){
      this.create_all_charts()
    },

    methods:{
        create_all_charts(){
            setTimeout(this.create_chartsA, 500)
        }
    }
}
</script>

