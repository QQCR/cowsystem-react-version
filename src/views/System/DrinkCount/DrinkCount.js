import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table,Form,
  FormGroup,FormText,FormFeedback,Input,Button,Label, } from 'reactstrap';
import "./DrinkCount.css"

class DrinkCount extends Component {
  render() {
    return (
     <div >
       <h1>饮水次数排名</h1>
          <Form action="" method="post" className="formpart">
          <Row>
            <Col xs="3" lg="3">
            <FormGroup >
              <Label htmlFor="rankType" >按天/周排名:</Label>
              <Input type="select" id="rankType" name="rankType" >
                <option>按天</option>
                <option>按周</option>
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
              <FormGroup className="mb-4 mr-sm-4 mb-sm-0">
                <Label htmlFor="rankType">按升序/降序排名:</Label>
                <Input type="select" id="rankType" name="rankType" >
                  <option>升序</option>
                  <option>降序</option>
                </Input>
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
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Username</th>
                    <th>Date registered</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Vishnu Serghei</td>
                    <td>2012/01/01</td>
                    <td>Member</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Zbyněk Phoibos</td>
                    <td>2012/02/01</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="danger">Banned</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Einar Randall</td>
                    <td>2012/02/01</td>
                    <td>Admin</td>
                    <td>
                      <Badge color="secondary">Inactive</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Félix Troels</td>
                    <td>2012/03/01</td>
                    <td>Member</td>
                    <td>
                      <Badge color="warning">Pending</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Aulus Agmundr</td>
                    <td>2012/01/21</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
     </div>
    );
  }
}

export default DrinkCount;
