import React from 'react';
import { Steps, Button, message } from 'antd';
import First from "./buzhou/first"
import Second from "./buzhou/second"
import Ordercss from "./order.module.scss"
const { Step } = Steps;

const steps = [
    {
        title: '发货地址',
        content: <div className={Ordercss.buzhou1}>< First /></div>,
    },
    {
        title: '收获地址',
        content: <div className={Ordercss.buzhou1}>< Second /></div>,
    },
    {
        title: '确认信息',
        content: 'third',
    },
    {
        title: '下单成功',
        content: 'Last-content',
    },
];

class Buzhout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const { current } = this.state;
        return (
            <div className={Ordercss.buzhoutiao}>
                <Steps current={current} >
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>下一步 </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>下单 </Button>
                    )}
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>上一步 </Button>
                    )}
                </div>
            </div>
        );
    }
}

export default Buzhout