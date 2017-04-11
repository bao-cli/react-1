import React, { Component } from 'react';
import { Layout,Row, Col } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import { IndexHeader } from '../../common/header.js';
import ImgIndex from '../../common/imgIndex.js';
import MainMenu from './menu.js';
import MainContent from './main.js';
import './index.less';

export default class HomeRecommend extends Component {
	constructor (props) {
		super(props);
		this.state={

		}
	}
	render() {
		return (<div>
		    <Layout>
		       <IndexHeader />
		       <Content>
		          <Row>
		            <Col span={6} >
		               <ImgIndex />
		            </Col>
		            <Col span={4} >
		               <MainMenu />
		            </Col>
		            <Col span={14}>
		               <MainContent />
		            </Col>
		          </Row>
		       </Content>
		     </Layout>
		</div>);
	}
}