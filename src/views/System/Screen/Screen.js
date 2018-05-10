import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table,Form,
  FormGroup,FormText,FormFeedback,Input,Button,Label, } from 'reactstrap';
import "./Screen.css"



class Screen extends Component {
  
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
                    <h3 className="yellowh" style={{display:'inline'}}>产奶奶牛</h3>
                    <h2 className="yellowh" style={{display:'inline'}} id="milkingcow"></h2>
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
                        <h4 className="greenh" style={{display:'inline'}}>￥</h4><h4 class="greenh" style={{display:'inline'}} id="totalProperty"></h4>
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
                <div id="chart1" className="chart1" ></div>
            </Col>
        </Row>
        <Row className="chart23">
            <span className="row1"></span>
            <span className="row2"></span>
            <span className="col1"></span>
            <span className="col2"></span>
            <Col sm="6" xs="12">
                <div id="chart2" className="chart2" ></div>
            </Col>
            <Col sm="6" xs="12">
                <div id="chart3" className="chart3" ></div>
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
                <Col sm="6" xs="12" className="rightleft" >
                    <span className="row1"></span>
                    <span className="col1"></span>
                    <div className="smalltitle">
                        <span className="bold1"></span>
                        <span className="bold2"></span>
                        <span className="bold3"></span>
                        <span className="bold4"></span>
                        <h4 className="maintitle">奶牛健康信息</h4>
                    </div>
                    <h6 style={{marginTop: '15px'}}>按摩次数 >></h6>
                    {/* <div className="chart4" id="chart4"style="-webkit-tap-highlight-color: transparent;user-select: none;position: relative;zoom: 0.9;text-align: -webkit-center;" ></div> */}
                    <h6 style={{paddingTop: '17px'}}>采奶量 >></h6>
                    {/* <div id="chart5" className="chart5" style="zoom:  0.9;-webkit-tap-highlight-color: transparent;user-select: none;position: relative;text-align: -webkit-center;padding-top: 5px;"></div> */}
                </Col>
                <Col sm="6" xs="12" className="rightright">
                    <span className="row2"></span>
                    <span className="col2"></span>
                    {/* <div id="chart7" className="chart7" style="-webkit-tap-highlight-color: transparent;user-select: none;position: relative;zoom: 0.9;margin-top: 20px;text-align: -webkit-center;"></div>
                    <h6 style=" margin-top: 26px; margin-left: 20px;">奶牛健康指数 >></h6>
                    <div id="chart6" className="chart6" style="-webkit-tap-highlight-color: transparent;user-select: none;position: relative;margin-left: 20px;"></div> */}
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
