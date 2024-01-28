import React from 'react';
import { Tabs } from 'antd';
import BookingMovie from './BookingMovie';
import TabPane from 'antd/es/tabs/TabPane';
import ResultBooking from './ResultBooking';
import { useDispatch, useSelector } from 'react-redux';
import { setSwitchBackToTab } from '../../Redux/bookingSlice';

const TabDatVe = () => {
  let { switchTab } = useSelector(state => state.bookingSlice);
  let dispatch = useDispatch();
  // console.log("🚀 ~ TabDatVe ~ switchTab:", switchTab)
  const onChange = async(key) => {
    // console.log(key);
    await dispatch(setSwitchBackToTab(key));

  };
  return <Tabs defaultActiveKey="1" activeKey={switchTab} className='container' onChange={onChange}>
  <TabPane tab="01 - CHOOSE YOUR SEATS & BOOK YOUR TICKETS" key="1">
      <BookingMovie/>
  </TabPane>
  <TabPane tab="02 - TICKETS RESULTS" key="2">
      <ResultBooking/>
  </TabPane>
  </Tabs>;
}
export default TabDatVe;