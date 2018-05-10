import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table,Form,
  FormGroup,FormText,FormFeedback,Input,Button,Label, } from 'reactstrap';
import "./DrinkHistory.css"



class DrinkHistory extends Component {
  
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
               <h1>add chart here</h1>
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
