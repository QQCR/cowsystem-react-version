import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table,Form,
  FormGroup,FormText,FormFeedback,Input,Button,Label, } from 'reactstrap';
import ReactEcharts from 'echarts-for-react';
import "./DrinkHistory.css";




class DrinkHistory extends Component {
  constructor(props) {  
    super(props);
    this.state = {
      option: {
        //backgroundColor: '#0f475f',
        color:["#367fa9","#4A95FF","#5EBEFC","#2EF7F3","#FFFFFF"],
        title : {
            text: '奶牛饮水次数变化',
            subtext: '重要指标',
            textAlign:'left',
            textStyle:{color:"#000",fontSize:"16",fontWeight:"normal"}
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['饮水次数'],
            textStyle:{color:"#000",fontSize:"16",fontWeight:"normal"}
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                axisLine: { show: true,lineStyle:{ color:'#6173A3' }},
                axisLabel:{interval:0,textStyle:{color:'#9ea7c4',fontSize:14} },
                axisTick : {show: false},
                data : {} //需要set 相关很坐标，动态天数
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value} 次'
                },
                axisTick : {show: false},
                splitLine: {show:false},
                axisLabel:{textStyle:{color:'#9ea7c4',fontSize:14} },
                axisLine: { show: true,lineStyle:{ color:'#6173A3'}},
            }
        ]
    }
    }
  }
  render() {
    return (
     <div >
       <h1>饮水次数历史对比</h1>
          <Form action="" method="post" className="formpart">
          <Row>
          <Col xs="3" lg="3">
              <FormGroup >
                <Label htmlFor="timeRange">ID:</Label>
                <Input type="text" id="timeRange" name="timeRange" placeholder="请输入牛的id" />
              </FormGroup>
            </Col>

            <Col xs="3" lg="3">
            <FormGroup >
              <Label htmlFor="rankType" > 查询条件：</Label>
              <Input type="select" id="rankType" name="rankType" >
                <option>按天查询</option>
                <option>按周查询</option>
              </Input>
            </FormGroup>
            </Col>
          
            <Col xs="3" lg="3">
              <FormGroup >
                <Label htmlFor="timeRange">日期选择:</Label>
                <Input type="text" id="timeRange" name="timeRange" />
              </FormGroup>
            </Col>

            <Col xs="3" lg="3">
               <Button type="submit" size="md" color="primary" className="buttondown"> 查询</Button>
            </Col>
            </Row>
          </Form>
        

       <Row>
       
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> 查询结果
              </CardHeader>
              <CardBody>
              <div className="chart-wrapper">
                <ReactEcharts option={this.state.option} />
              </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
     </div>
    );
  }
}

export default DrinkHistory;
