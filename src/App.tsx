import React from 'react';
import Flow from "./flow";

import {Layout} from 'antd';

const {Header, Content} = Layout;

function App() {
    return (
        <Layout className={'layout'}>
            <Header/>
            <Content>
                <Flow/>
            </Content>
        </Layout>
    );
}

export default App;
