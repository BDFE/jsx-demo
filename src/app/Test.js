import * as React from 'react';
import 'vis-ui/lib/index.css';     // 一次性引入
import { Button } from 'vis-ui';
import 'dui-react/lib/index.css';     // 一次性引入
import { ButtonGroup } from 'dui-react';
import { Tabs } from 'dui-react';
const Group = Button.Group;

class App extends React.Component {
  render() {
    return (
      <div >
        hello
        <Tabs
          defaultActiveKey={'ns'}
          data={[
            { name: '南北通行相位', key: 'ns', index: 0, imageUrl: '' },
            { name: '东西通行相位', key: 'ew', index: 1, imageUrl: '' },
          ]}
          tabStyle={{ padding: '0px 15px' }}
          showDivider={true}
          dividerStyle={{ width: '1px', color: '#858fa5' }}
          acitiveColor={'#F5533D'}
          defaultColor={'#858fa5'}
          onChange={(key, item) => {
          }}
        />
        <ButtonGroup
          data={[{ 0: '实时' }, { 1: '昨日' }, { 2: '7日内' }]}
          onClick={(index, item) => {
            console.log('test buttonGroup', index, item);
            // self.setState({ testkey: '' });
          }}
          divider={
            <div style={{
              width: '2px',
              height: '25px',
              background: 'gray'
            }} />
          }
          defaultActiveKey={1}
          // activeKey={this.state.activeKey || 0}
          buttonStyle={{ border: 'none' }}
          groupStyle={{ color: 'white' }}
          defaultBgColor='#21232C'
          activeBgColor='#F5533D'
          defaultFontColor='#8690A6'
          activeFontColor='white'
        />
        <Group>
          <Button type="primary">按钮1</Button>
          <Button type="primary">按钮2</Button>
          <Button type="primary" onMouseEnter={(e) => { console.log(e.target) }}>按钮3</Button>
          <Button type="primary" onClick={(e) => { console.log(e) }}>按钮4</Button>
        </Group>
      </div>
    );
  }
}

export default App;
