
import { Col, Row } from 'antd';
import Search from './components/Search';
import {useSelector} from "react-redux";
import Images from "./components/Images";
import { Space, Spin } from 'antd';



function App() {
  const aireducer=useSelector(state=>state.aireducer);
  return (
   
    <Row style={{marginTop:"150px"}}>
    <Col span={12}>

      <Search/>
    </Col>
    <Col span={12}>
    {
aireducer.images.length>0?

aireducer.images.map(ele=>(
  <Images url={ele.url}/>
)): <Spin size="large" />

    }
    

    </Col>
  </Row>
  )
}

export default App;
