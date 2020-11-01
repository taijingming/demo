import React from 'react';
import { Input, Button, Checkbox, Modal, Upload } from 'antd';
import Buzhoucss from "./buzhou.module.scss"
import { UploadOutlined, DownloadOutlined } from '@ant-design/icons';
import XLSX from 'xlsx';
// import ExcelUtil from "../updown.js"
// function importExcel(file) {
//     // 获取上传的文件对象
//     const { files } = file.target;
//     // 通过FileReader对象读取文件
//     const fileReader = new FileReader();
//     fileReader.onload = event => {
//         try {
//             const { result } = event.target;
//             // 以二进制流方式读取得到整份excel表格对象
//             const workbook = XLSX.read(result, { type: 'binary' });
//             let data = []; // 存储获取到的数据
//             // 遍历每张工作表进行读取（这里默认只读取第一张表）
//             for (const sheet in workbook.Sheets) {
//                 if (workbook.Sheets.hasOwnProperty(sheet)) {
//                     // 利用 sheet_to_json 方法将 excel 转成 json 数据
//                     data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
//                     // break; // 如果只取第一张表，就取消注释这行
//                 }
//             }
//             console.log(data);
//         } catch (e) {
//             // 这里可以抛出文件类型错误不正确的相关提示
//             console.log('文件类型不正确');
//             return;
//         }
//     };
//     // 以二进制方式打开文件
//     fileReader.readAsBinaryString(files[0]);

// }

class Second extends React.Component {
    constructor(arg) {
        super(arg)
        this.upload1 = function (file) {
            console.log(99999999999999, file);
            // 获取上传的文件对象
            const { files } = file;
            // 通过FileReader对象读取文件
            const fileReader = new FileReader();
            fileReader.onload = event => {
                try {
                    const { result } = event.target;
                    // 以二进制流方式读取得到整份excel表格对象
                    const workbook = XLSX.read(result, { type: 'binary' });
                    let data = []; // 存储获取到的数据
                    // 遍历每张工作表进行读取（这里默认只读取第一张表）
                    for (const sheet in workbook.Sheets) {
                        if (workbook.Sheets.hasOwnProperty(sheet)) {
                            // 利用 sheet_to_json 方法将 excel 转成 json 数据
                            data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
                            break; // 如果只取第一张表，就取消注释这行
                        }
                    }
                    console.log(data, 9999);
                }
                catch (e) {
                    // 这里可以抛出文件类型错误不正确的相关提示
                    console.log('文件类型不正确');
                    return;
                }
            };
            // 以二进制方式打开文件
            fileReader.readAsBinaryString(files[0]);
        }
    }
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {

        const { Search } = Input;
        return (
            <div id={Buzhoucss.buzhoubox}>
                <div className={Buzhoucss.btnbox}>
                    <Button type="primary"
                        className={Buzhoucss.btnbox}
                        onClick={this.showModal}>
                        导入收获地址</Button>
                    <Modal
                        title="导入收获地址"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        okText="确认"
                        cancelText="取消"
                        onCancel={this.handleCancel}
                    >
                        <div className={Buzhoucss.sendbox}>
                            <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                onChange={this.upload1} >
                                <Button icon={<UploadOutlined />}>选择文件</Button>
                            </Upload>
                            <Button className={Buzhoucss.send}>上传</Button>
                            <br />
                        </div>
                        <div>
                            <br />
                            <Button shape="round" icon={<DownloadOutlined />} size="Default" href="https://fe.imdada.cn/crane/release/static/%E5%8D%B3%E6%97%B6%E9%80%81%E6%89%B9%E9%87%8F%E5%8F%91%E5%8D%95%E6%A8%A1%E7%89%88.xlsx">下载标准版</Button>
                        </div>
                        <div className={Buzhoucss.tipInfo}>
                            <p>尊敬的客户，您好！</p>
                            <p>1.上传文件格式必须为excel格式（.xlsx或.xls），大小不能超过1MB;</p>
                            <p>2.您所导入内容必须严格按照模板字段顺序正确填写；</p>
                            <p>3.模板表头字段不允许修改（包括列名、列数、顺序），否则将会导入失败；</p>
                            <p>4.收货地址导入不能超过100条。</p>
                        </div>
                    </Modal>
                    <Button className={Buzhoucss.btn}>下载标准版</Button>
                    <br />
                    <br />
                </div>
                <div className={Buzhoucss.search}>
                    <Search
                        className={Buzhoucss.mysearch}
                        placeholder="输入姓名/电话/地址"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                        size="large"
                        allowClear
                    />
                    <Checkbox>只显示错误的</Checkbox>
                </div>
                <div className={Buzhoucss.shouhuoInfo}>
                    <table>
                        <thead>
                            <tr>
                                <th>收货人姓名电话</th>
                                <th>详细地址</th>
                                <th>物品重量</th>
                                <th>距离</th>
                                <th>运费券</th>
                                <th>运费</th>
                                <th>能否下单</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>

            </div>
        )
    }
}
export default Second