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
  import  axios  from 'axios'
  import  * as echarts from 'echarts';
axios.get('../../static/map/黑龙江省.json').then(function (data) {
                echarts.registerMap('hlj',data);
                
            });

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
            setTimeout(this.create_chartsA, 10)
            
            
        },
        create_chartsA(){
        this.optionA =  {
            calculable : true,
            title: {
                text: '哈尔滨'
            },
            
            legend:{
                
            },
            graphic:{
                elements:[{
                    type:'image',
                    draggable:true,
                    
                    style:{
                        image:'http://10.30.16.182/images/background/0/common.jpg',
                    }
                }
               
                ]

                
            },
            
            grid:{
                height:'50%',
                width:'40%',
                right:'10%'
            },
            tooltip: {},
            legend: {
                data:["最高温","最低温"]
            },
            xAxis: {
                data: ["周一","周二"],
                boundaryGap:['1%'],
                axisTick:{
                    length:5,
                    inside:true
                },
               plitNumber:2
            },
           
            yAxis: {
              
               min:0,//最小值
               max:25,
               splitNumber:5,
               minInterval:2,

                },
            series: [
            {
                name: '最高温',
                type: 'bar',
                data: [12.5,8],
                barWidth:30,
                barGap:'-60%',
                
                label:{
                    normal:{
                        show:true,
                        position:'insideTop',
                        color:'#fff'
                    }
                },
                itemStyle:{
                normal:{
                    color:'rgb(239,191,45)',
                    borderColor:'#fff',
                    borderWidth:1,
                    barBorderRadius:[5, 5, 0, 0]
                }
                
            }
            },
            {
            name: '最低温',
            type: 'bar',
            barWidth:30, 
            data: [8, 6],
            
             label:{
                    normal:{
                        show:true,
                        position:'insideTop',
                        color:'#fff'
                    }
                },
              itemStyle:{
                normal:{
                    color:'rgb(99,175,238)',
                    borderColor:'#fff',
                    borderWidth:1,
                    barBorderRadius:[5, 5, 0, 0]
                }
        },}
            ],
            toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage:{type:'jpeg',show:true,title:'可点击右键保存图片'}
            
        }
    }
        };
      }
    },
    
    components: {
      panelTitle,
      charts
    }
}
</script>

<style>


</style>
