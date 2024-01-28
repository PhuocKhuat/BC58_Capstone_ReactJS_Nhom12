import React from 'react';
import { Tabs } from 'antd';
import BookingMovie from './BookingMovie';
import TabPane from 'antd/es/tabs/TabPane';
import ResultBooking from './ResultBooking';
const onChange = (key) => {
  console.log(key);
};
const TabDatVe = () => <Tabs defaultActiveKey="1" className='container' onChange={onChange}>
<TabPane tab="01 - CHOOSE YOUR SEAT & THANH TOÁN" key="1">
    <BookingMovie/>
</TabPane>
<TabPane tab="02 - TICKETS RESULTS" key="2">
    <ResultBooking/>
</TabPane>
</Tabs>;
export default TabDatVe;