import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table,Form,
  FormGroup,FormText,FormFeedback,Input,Button,Label, } from 'reactstrap';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';
import "./Screen.scss"



class Screen extends Component {

    constructor(props) {  
        super(props);
        //1
        var xData = function() {
            var data = [];
            for (var i = 1; i < 13; i++) {
                data.push(i + "月份");
            }
            return data;
        }();
        //4
        var dataAxis = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'];
        var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125];
        var yMax = 500;
        var dataShadow = [];
        for (var i = 0; i < data.length; i++) {
            dataShadow.push(yMax);
        }
        //7
        var category = [];
        var dottedBase = +new Date();
        var lineData = [];
        var barData = [];

        for (var i = 0; i < 10; i++) {
            var date = new Date(dottedBase += 1000 * 3600 * 24);
            category.push([
                date.getFullYear(),
                date.getMonth() + 1,
                date.getDate()
            ].join('-'));
            var b = Math.random() * 200;
            var d = Math.random() * 200;
            barData.push(b)
            lineData.push(d + b);
        }
        
        this.state = {
        option1: {
            "title": {
                textStyle: {
                    color: '#ccc',
                    fontSize: '22'
                },
                subtextStyle: {
                    color: '#90979c',
                    fontSize: '16',
        
                },
            },
            "tooltip": {
                "trigger": "axis",
                padding:10,
                "axisPointer": {
                    "type": "shadow",
                    
                },
                formatter: function (params) {
                    var res='<div><p>时间：'+params[0].name+'</p></div>' 
                    for(var i=0;i<params.length;i++){
                    res+='<p>'+params[i].seriesName+':'+params[i].data+'</p>'
                    }
                    return res;
                },
                textStyle: {
                    fontSize:10,
                    color: "#ccc",
                    width:100
                }
            },
            "grid": {
                "borderWidth": 0,
                "top":50,
                "bottom": 60,
                textStyle: {
                    color: "#ccc"
                }
            },
            "legend": {
                x: '12%',
                bottom: '78%',
                itemWidth:50,
                textStyle: {
                    color: ['#fdff13','#77d38a']
                },
                orient: 'vertical',
                "data": ['总产奶量', '产奶奶牛量']
            },
             
        
            "calculable": true,
            "xAxis": [{
                "type": "category",
                "axisLine": {
                    lineStyle: {
                        color: '#90979c'
                    }
                },
                "splitLine": {
                    "show": false
                },
                "axisTick": {
                    "show": false
                },
                "splitArea": {
                    "show": false
                },
                "axisLabel": {
                    "interval": 0,
        
                },
                "data": xData,
            }],
            "yAxis": [{
                "type": "value",
                "splitLine": {
                    "show": false
                },
                "axisLine": {
                    lineStyle: {
                        color: '#90979c'
                    }
                },
                "axisTick": {
                    "show": false
                },
                "axisLabel": {
                    "interval": 0,
        
                },
                "splitArea": {
                    "show": false
                },
        
            }],
            "series": [
                {
                    "name": "产奶奶牛量",
                    "type": "bar",
                    "stack": "总量",
                    "itemStyle": {
                        "normal": {
                            // "color": "rgba(0,191,183,1)",
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#74d491'
                                }, {
                                    offset: 1,
                                    color: '#63e1c7'
                                }]
                            ),
                            "barBorderRadius": 0,
                            "label": {
                                "show": true,
                                "position": "top",
                                color:"#a3f596",
                                formatter: function(p) {
                                    return p.value > 0 ? (p.value) : '';
                                }
                            }
                        }
                    },
                    "data": [
                        327,
                        1776,
                        507,
                        1200,
                        800,
                        482,
                        204,
                        1390,
                        1001,
                        951,
                        381,
                        220
                    ]
                }, {
                    "name": "总产奶量",
                    "type": "line",
                    "stack": "总量",
                    symbolSize:8,
                    symbol:'circle',
                    "itemStyle": {
                        "normal": {
                            "color": "rgba(252,230,48,1)",          
                            "barBorderRadius": 0,
                            "label": {
                                "show": true,
                                "position": "top",
                                formatter: function(p) {
                                    return p.value > 0 ? (p.value) : '';
                                }
                            }
                        }
                    },
                    lineStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 1, color: '#62e2cc' 
                            }, {
                                offset: 0, color: '#fdff13' 
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    },
                    "data": [
                        1036,
                        3693,
                        2962,
                        3810,
                        2519,
                        1915,
                        1748,
                        4675,
                        6209,
                        4323,
                        2865,
                        4298
                    ]
                },
            ]
        },
        option2: {
            title:{
                text:"奶牛年龄",
                bottom: '10%',
                left: '35%',
                textStyle: {color:"#fff"}
            },
            color: ["#ffe500", "#77d38a", "#3edef7"],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            legend: {
                data : ['6-8岁','0-2岁','2-4岁'],
                left:20,
                top:20,
                orient: 'vertical',
                textStyle: {
                    color: ["#ffe500", "#77d38a", "#3edef7"],
                }
            },
            calculable: true,
            series: [{
                name: '奶牛年龄',
                type: 'funnel',
                left: 50,
                right: 25,
                min: 0,
                maxSize: '100%',
                sort: 'ascending',
                gap: 0,
                label: {
                    normal: {
                        show: false,
                        position: 'left'
                    },
                },
                labelLine: {
                    normal: {
                        length: 10,
                        lineStyle: {
                            width: 1,
                            type: 'solid'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#333333',
                        borderWidth: 1
                    }
                },
                data: [{
                        value: 10,
                        name: '6-8岁'
                    },
                    {
                        value: 20,
                        name: '0-2岁'
                    },
                    {
                        value: 30,
                        name: '2-4岁'
                    }
                ]
            }]
        },
        option3:{
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
                {
                    name:'奶牛数量',
                    type:'pie',
                    radius: ['45%', '60%'],
                    avoidLabelOverlap: false,
                    labelLine: {
                        normal: {
                            show: true
                        }
                    },
                    
                    data:[
                        {value:310, name:'产后21天',label:{show:true,position:'outside'},itemStyle:{color:'#ffe500'}},
                        {value:234, name:'干奶期',label:{show:true,position:'outside'},itemStyle:{color:'#57a36b'}},
                        {value:135, name:'病牛',label:{show:true,position:'outside'},itemStyle:{color:'#77d38a'}},
                        {value:1548, name:'正常牛',label:{show:true,position:'outside'},itemStyle:{color:'#3edef7'}},
                        {name:'奶牛数量（头）',label:{show:true,position:'center'},itemStyle:{color:'#fff'}},
                    ]
                }
            ],
            
        },
        option4:{
            tooltip:{
                trigger:'axis',
                formatter: "{a} <br/>{b} : {c}"
            },
            grid:{
                top:10,
                bottom:30
            },
            xAxis: {
                data:  dataAxis,
                axisLabel: {
                    inside:false,
                    textStyle: {
                        color: '#ccc'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false, 
                },
                axisLabel: {
                    textStyle: {
                        color: '#ccc'
                    }
                }
            },
            dataZoom: [{
                type: 'inside'
            }],
            series: [{
                name: '按摩次数',
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                offset: 0,
                                color: '#ffe500'
                            }, {
                                offset: 1,
                                color: '#77d38a'
                            }]
                        ),
                        barBorderRadius: 0,
                    },
                },
                data: data
            }],
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}'
                }
            },
        },
        option5:{
            tooltip:{
                trigger:'axis',
                formatter: "{a} <br/>{b} : {c}"
            },
            grid:{
                top:10,
                bottom:30,
            },
            xAxis: {
                type:'category',
                boundaryGap:false,
                splitLine:{
                    show:false,
                    interval:'auto'
                },
                axisTick: {
                    show: false
               },
                axisLine:{
                    lineStyle:{color:'#ccc'}
                },
                //x轴数据
                data: ['1-11', '1-12', '1-13', '1-14', '1-15', '1-16', '1-17','1-18', '1-19', '1-20', '1-21', '1-22', '1-23', '1-24','1-25']
            },
            yAxis: {
                axisLine:{
                    show:false,
                    lineStyle:{color:'#ccc'}
                },
            },
            color:[],//自定义线条颜色，你可以设置多个颜色，使用时默认从第一个开始   如果不设置color则有它默认颜色
            // series里面的数据  如果是固定的线条 你只需要改变data数据就ok  
            // 如果不是确定有多少折线  建议吧整个serise数据替换掉   例如：series:[{...}{...}{...},...]配置项和下面一样
            series: [{
                name:'采奶量',
                type: 'line',
                data:[150,220, 182, 191, 234, 290, 330, 310,600,700,220, 182, 191, 234, 290],
                areaStyle:{
                    normal:{
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0, [{
                                offset: 0,
                                color: '#3edef7'
                            }, {
                                offset: 1,
                                color: '#77d38a'
                            }]
                        ),
                    }
                }
            }]
        },
        option6:{
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            grid:{
                top:10,
                bottom:30
            },
            legend: {     
                data:['不健康','较健康','非常健康'],
                selectedMode:false,  //图例禁止点击
                top:0,
                left:-15,
                orient:'vertical',
                itemWidth:23,
                itemHeight:10,
                textStyle: {
                    color: ['#ffe500','#77d38a', '#3edef7'],
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'sans-serif',
                    fontSize: 13,
                },
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    radius:'80%',
                    title:{
                        show: false,
                        offsetCenter: ['-100%', '-100%'],
                        textStyle: {
                            color: '#ffffff',
                            fontSize: 16,
                            fontFamily: 'Microsoft YaHei'
                        }
                    },
                    detail: {formatter:'{value}%',fontSize:15},
                    data: [{value: 20, name: '奶牛健康指数'}],
                    axisLine: {    
                        show:false,// 坐标轴线  
                        lineStyle: {       // 属性lineStyle控制线条样式  
                            color: [[0.2, '#ffe500'], [0.8, '#77d38a'], [1, '#3edef7']],
                            width: 15
                        }  
                    },
                    splitLine: {
                        show:false,
                        length:12
                    },
                    pointer: {
                        width:5
                    }
                    
                },
                {
                    name:'不健康',
                    type:'gauge',
                    radius:'80%',
                    axisLine: {            // 坐标轴线  
                        lineStyle: {       // 属性lineStyle控制线条样式  
                            color: [[0.2, '#ffe500'], [0.8, '#77d38a'], [1, '#3edef7']],
                            width: 15
                            }  
                    },
                    itemStyle: {
                        normal: {
                            color: '#ffe500',  //这里的图例要注意，颜色设置和仪表盘的颜色对应起来
                        }
                    },
                    splitLine: {
                        show:false,
                        length:12
                    },
                    detail: {show:false,formatter:'{value}%'},
                    
                },
                {
                    name:'较健康',
                    type:'gauge',
                    radius:'80%',
                    axisLine: {            // 坐标轴线  
                        lineStyle: {       // 属性lineStyle控制线条样式  
                            color: [[0.2, '#ffe500'], [0.8, '#77d38a'], [1, '#3edef7']],
                            width: 15
                            }  
                    },
                    itemStyle: {
                        normal: {
                            color: '#77d38a',
                        }
                    },
                    splitLine: {
                        show:false,
                        length:12
                    },
                    detail: {show:false,formatter:'{value}%'},
                    
                },
                {
                   name:'非常健康',
                   type:'gauge',
                   radius:'80%',
                   axisLine: {            // 坐标轴线  
                        lineStyle: {       // 属性lineStyle控制线条样式  
                            color: [[0.2, '#ffe500'], [0.8, '#77d38a'], [1, '#3edef7']],
                            width: 15
                            }  
                    },
                    detail: {show:false,formatter:'{value}%'},
                    itemStyle: {
                       normal: {
                           color: '#3edef7',
                        }
                    },
                    splitLine: {
                        show:false,
                        length:12
                    },
                   
               }
            ]
        },
        option7:{
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        show: true,
                        backgroundColor: '#333'
                    }
                },
                formatter: function (params) {
                    var res='<div><p>时间：'+params[0].name+'</p></div>' 
                    for(var i=0;i<params.length;i++){
                    res+='<p>'+params[i].seriesName+':'+params[i].data+'</p>'
                    }
                    return res;
                },
            },
            legend: {
                data: ['进食次数', '饮水次数'],
                textStyle: {
                    color: ['#3edef7','#ffe500']
                },
                x: '10%',
                bottom: '90%',
            },
            xAxis: {
                data: category,
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                },
                axisTick: {
                    show: false
               }    
            },
            yAxis: {
                splitLine: {show: false},
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                },
                axisTick: {
                    show: false
               }    
            },
            series: [{
                name: '进食次数',
                type: 'line',
                showAllSymbol: true,
                symbol: 'circle',
                symbolSize: 7,
                data: lineData,
                itemStyle: {
                    color: '#ffe500'
                }
            }, {
                name: '饮水次数',
                type: 'bar',
                itemStyle: {
                    normal: {
                        barBorderRadius: 0,
                        color: new echarts.graphic.LinearGradient(
                            0, 1, 0, 0,
                            [
                                {offset: 0, color: '#3edef7'},
                                {offset: 1, color: '#77d38a'}
                            ]
                        )
                    }
                },
                data: barData
            }]
        }
        }
      }
  render() {
    return (
     <div >
        <Row className="wrapperBody">
          <Col sm="6" xs="12" className="lefrarea">
            <Row className="lefttop">
            <span className="row1"></span>
            <span className="row2"></span>
            <span className="col1"></span>
            <span className="col2"></span>
            <Col sm="5" xs="12" className="lefttextarea">
                <div className="titlearea">
                    <span className="bold1"></span>
                    <span className="bold2"></span>
                    <span className="bold3"></span>
                    <span className="bold4"></span>
                    <h2 className="maintitle">奶牛AI监测系统</h2>
                </div>
                <div className="subtitle">
                    <h3 className="yellowh" style={{display:'inline',fontSize:'20px'}}>产奶奶牛</h3>
                    <h2 className="yellowh" style={{display:'inline',fontSize:'20px'}} id="milkingcow"></h2>
                    <h2 className="yellowh" style={{display:'inline'}}>/</h2>
                    <h3 className="yellowh" style={{display:'inline'}} id="totalcow"></h3>
                </div>
            </Col>
            <Col sm="7" xs="12" className="righttextpart">
                <Row>
                    <Col sm="3"> 
                        <div className="slopingside"></div> 
                    </Col>
                    <Col sm="4"> 
                        <h3 className="greenh" >资产价值</h3> 
                    </Col>
                    <Col sm="5">
                        <h4 className="greenh" >奶牛资产（元）</h4>
                        <h4 className="greenh" style={{display:'inline'}}>￥</h4><h4 className="greenh" style={{display:'inline'}} id="totalProperty"></h4>
                    </Col>    
                </Row>   
            </Col>
        </Row>
        <Row className="chart1area">
            <span className="row1"></span>
            <span className="row2"></span>
            <span className="col1"></span>
            <span className="col2"></span>
            <Col sm="6" xs="12" className="table-style lefttextpart">
                <div className="video">
                <div className="videopart">
                    <h5>摄像头实时监测</h5>
                    <div className="vedioHolder" id="vedioHolder">
                    </div>
                </div>
                </div>
            </Col>
            <Col sm="6" xs="12" className=" lefttextpart">
                <div className="chart1" ><ReactEcharts option={this.state.option1} /></div>
            </Col>
        </Row>
        <Row className="chart23">
            <span className="row1"></span>
            <span className="row2"></span>
            <span className="col1"></span>
            <span className="col2"></span>
            <Col sm="6" xs="12">
                <div className="chart2" ><ReactEcharts option={this.state.option2} /></div>
            </Col>
            <Col sm="6" xs="12">
                <div className="chart3" ><ReactEcharts option={this.state.option3} /></div>
            </Col>
        </Row>
    </Col>
    <Col sm="6" xs="12" className="rightarea">
        <div className="righttop">
            <div className="cowarea row">
                <span className="row1"></span>
                <span className="row2"></span>
                <span className="col1"></span>
                <span className="col2"></span>
                <Col sm="3" xs="3" className="pictext1">
                    <h4 className="blueh" style={{fontSize: '15px'}}>昨日采奶量(L)</h4><h4 className="centerh"id="yestermilking">1</h4>
                    <h4 className="blueh" style={{fontSize: '15px'}}>昨日按摩次数</h4><h4 className="centerh"id="yesterknead">1</h4>
                </Col>
                <Col sm="6" xs="6">
                    <Row>
                        <Col sm="4" xs="4" className="linepic1">
                            <img src="assets/img/line1.png"  height="65px" />
                        </Col>
                        <Col sm="5" xs="5" className="cowpic">
                            <img src="assets/img/cow.png" height="105px" />
                            <div className="cowtext" id="cowValue"></div>
                            <div className="form-group col-xs-12 ">
                                <div className="select2cus">
                                    <div className="form-content">
                                        <select type="text" className="form-control" id="inputID" placeholder="请输入牛的编号">
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm="3" xs="3" className="linepic2">
                            <img src="assets/img/line2.png" height="65px"/>
                        </Col>
                    </Row>
                </Col>
                <Col sm="3" xs="3" className="pictext2">
                    <h4 className="blueh" style={{fontSize: '15px'}}>昨日饮水次数</h4><h4 className="centerh"id="yesterdrink">1</h4>
                    <h4 className="blueh" style={{fontSize: '15px'}}>昨日进食次数</h4><h4 className="centerh"id="yesterfood">1</h4>
                </Col>

            </div>
        </div>
        <div className="rightbottom">
            <Row>
                <Col sm="6" xs="12" className="rightleft" style={{paddingTop: '25px'}}>
                    <span className="row1"></span>
                    <span className="col1"></span>
                    <div className="smalltitle">
                        <span className="bold1"></span>
                        <span className="bold2"></span>
                        <span className="bold3"></span>
                        <span className="bold4"></span>
                        <h4 className="maintitle">奶牛健康信息</h4>
                    </div>
                    <h6 style={{marginTop: '29px'}}>按摩次数 >></h6>
                    <div className="chart4" ><ReactEcharts option={this.state.option4} /></div>
                    {/* <div className="chart4" id="chart4"style="-webkit-tap-highlight-color: transparent;user-select: none;position: relative;zoom: 0.9;text-align: -webkit-center;" ></div> */}
                    <h6 style={{paddingTop: '17px',marginBottom:'0px'}}>采奶量 >></h6>
                    <div className="chart5" ><ReactEcharts option={this.state.option5} /></div>
                    {/* <div id="chart5" className="chart5" style="zoom:  0.9;-webkit-tap-highlight-color: transparent;user-select: none;position: relative;text-align: -webkit-center;padding-top: 5px;"></div> */}
                </Col>
                <Col sm="6" xs="12" className="rightright">
                    <span className="row2"></span>
                    <span className="col2"></span>
                    <div className="chart7" ><ReactEcharts option={this.state.option7} /></div>
                    {/* <div id="chart7" className="chart7" style="-webkit-tap-highlight-color: transparent;user-select: none;position: relative;zoom: 0.9;margin-top: 20px;text-align: -webkit-center;"></div> */}
                    <h6 style={{marginTop: '0px', marginLeft: '20px'}}>奶牛健康指数 >></h6>
                    <div className="chart6" ><ReactEcharts option={this.state.option6} /></div>
                    {/* <div id="chart6" className="chart6" style="-webkit-tap-highlight-color: transparent;user-select: none;position: relative;margin-left: 20px;"></div> */}
                </Col>
            </Row>
        </div>
    </Col>
    </Row> 
        

     </div>
    );
  }
}

export default Screen;
