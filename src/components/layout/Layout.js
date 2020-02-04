import React, {Component} from 'react';
import '../../css/Layout.css'
import { Container, Row, Col } from 'reactstrap';
import TopNavigation from "./TopNavigation";

class Layout extends Component {
    render() {
        const renderPage = () => {
            return this.props.children;
        };
        return (
            <div className='main-layout'>
                <TopNavigation/>
                <div>
                <Container className="main-layout-page-wrapper themed-container">
                    <Row>
                        <Col className="content" sm="15" md={{ size: 8, offset: 2}}>
                            {renderPage()} {/*Every page is wrapped with this layout */}
                        </Col>
                    </Row>

                </Container>
                </div>
            </div>
        );
    }
}

export default Layout;