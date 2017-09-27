<template>
    <el-row>
        <div class="panel">
            <panel-title :title="$route.meta.title"></panel-title>
            <div class="panel-body">
                <charts :options="optionA" style="height: 600px"></charts>

            </div>
        </div>
        <el-col :span="24">
            <div class="panel" style="">
                <panel-title title="控制面板"></panel-title>
                <div class="panel-body">
                    <div class="block">
                        <span class="demonstration">默认</span>
                        <el-slider v-model="value1"></el-slider>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
</template>


<script>
import { panelTitle, charts } from 'components'
import axios from 'axios'

export default {
    data() {
        return {
            optionA: null,
            optionB: null,
        }

    },

    created() {




    },
    mounted() {

        this.create_all_charts();


    },
    methods: {


        create_all_charts() {
            this.create_chartsA();


        },
        create_chartsA() {
            this.optionA = {
                calculable: true,
                title: {
                    text: '哈尔滨'
                },

                legend: {

                },
                graphic: {
                    elements: [{
                        type: 'image',
                        draggable: true,

                        style: {
                            image: 'http://10.30.16.182/images/background/0/common.jpg',
                        }
                    }

                    ]


                },

                grid: {
                    x2: 10,
                    y2: 50,

                    height: '80%',
                    width: 400,
                    right: '10%',
                    tooltip: {
                        show: true
                    }
                },

                legend: {
                    data: ["最高温", "最低温"]
                },
                xAxis: {
                    data: ["周一", "周二"],
                    boundaryGap: ['1%', '20%'],
                    axisTick: {
                        length: 5,
                        inside: true
                    },
                    plitNumber: 2,
                    interval: 20
                },

                yAxis: {

                    min: 0,//最小值
                    max: 25,
                    splitNumber: 5,
                    minInterval: 2,

                },
                series: [
                    {
                        type: 'map',
                        map: 'hlj',
                        draggble: true,
                        zLevel: -1,
                        zoom: 0.6,
                        left: '0%',
                        top: '0%',

                        data: [{
                            name: '哈尔滨', selected: true
                        }],
                        markPoint: {

                            symbol: 'pin',
                            symbolSize: 50
                        }
                    },
                    {
                        name: '最高温',
                        type: 'bar',
                        data: [12.5, 8],
                        barWidth: 50,/*柱体宽度*/
                        barGap: '-60%',

                        label: {
                            normal: {
                                show: true,
                                position: 'insideTop',
                                color: '#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgb(239,191,45)',
                                borderColor: '#fff',
                                borderWidth: 1,
                                barBorderRadius: [5, 5, 0, 0]
                            }

                        }
                    },
                    {
                        name: '最低温',
                        type: 'bar',
                        barWidth: 50,
                        data: [8, 6],

                        label: {
                            normal: {
                                show: true,
                                position: 'insideTop',
                                color: '#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgb(99,175,238)',
                                borderColor: '#fff',
                                borderWidth: 1,
                                barBorderRadius: [5, 5, 0, 0]
                            }
                        },


                    }
                ],
                toolbox: {
                    show: true,
                    feature: {
                        dataView: { show: true, readOnly: false },
                        magicType: { show: true, type: ['line', 'bar'] },
                        restore: { show: true },
                        saveAsImage: {
                            type: 'png', show: true,
                            title: '可右键保存图片',
                            excludeComponents: ['toolbox'],/*图片不包括的部分*/
                        }

                    }
                }
            };
        },
        create_chartsB() {
            this.optionB = {

                series: []
            }

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
