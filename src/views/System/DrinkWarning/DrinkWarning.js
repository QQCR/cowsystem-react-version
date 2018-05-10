import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table,Form,
  FormGroup,FormText,FormFeedback,Input,Button,Label, } from 'reactstrap';
import "./DrinkWarning.css"



class DrinkWarning extends Component {
  
  render() {
    return (
     <div >
        <h1>饮水不足预警</h1>
        <Row>
          <Col xs="4" lg="4">
            <Card className="card-accent-danger">
              <CardHeader>
                 <h2 className="danger" >非常紧急</h2>
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>所属牛棚</th>
                    <th>处理</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td><Button color="primary">添加到待办事项</Button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>1</td>
                    <td><Button color="primary">添加到待办事项</Button></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>1</td>
                    <td><Button color="primary">添加到待办事项</Button></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>1</td>
                    <td><Button color="primary">添加到待办事项</Button></td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        
          <Col xs="4" lg="4">
          <Card className="card-accent-warning">
              <CardHeader>
                 <h2 className="warning">紧急</h2>
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>所属牛棚</th>
                    <th>处理</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td><Button color="primary">添加到待办事项</Button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>1</td>
                    <td><Button color="primary">添加到待办事项</Button></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>1</td>
                    <td><Button color="primary">添加到待办事项</Button></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>1</td>
                    <td><Button color="primary">添加到待办事项</Button></td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>

          <Col xs="4" lg="4">
          <Card className="card-accent-primary">
              <CardHeader>
                 <h2 className="primary">需要注意</h2>
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>所属牛棚</th>
                    <th>处理</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td><Button color="primary">添加到待办事项</Button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>1</td>
                    <td><Button color="primary">添加到待办事项</Button></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>1</td>
                    <td><Button color="primary">添加到待办事项</Button></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>1</td>
                    <td><Button color="primary">添加到待办事项</Button></td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          
         </Row>
         
          
        

     </div>
    );
  }
}

export default DrinkWarning;
