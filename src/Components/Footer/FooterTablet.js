import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { footerSliceAction } from "../../Redux/footerSlice";

export default function FooterTablet() {
  let { infoRap } = useSelector((state) => state.footerSlice);
  // console.log("🚀 ~ FooterDesktop ~ infoRap:", infoRap);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(footerSliceAction());
  }, []);
  let renderPartners = () =>
    infoRap.map((logo) => (
      <ul>
        <li>
          <img alt="" src={logo.logo} className="w-10" />
        </li>
      </ul>
    ));

  return (
    <div className="container footerDesktop mt-8">
      <div className="flex justify-between footerPolicy">
        <div className="policy">
          <h3>CyberMovie</h3>
          <ul>
            <li>Introduce</li>
            <li>Recruitment</li>
            <li>For partners</li>
          </ul>
        </div>
        <div className="policy">
          <h3>Terms of use</h3>
          <ul>
            <li>General Terms</li>
            <li>Payment policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="policy">
          <h3>Partners</h3>
          <p className="grid grid-cols-3 space-x-3">
          {renderPartners()}
          </p>
        </div>
        <div className="policy">
          <h3>Customer Care</h3>
          <ul>
            <li>Hotline: 094.145.1394</li>
            <li>Work time: 8:00 - 22:30 (including Saturday and Sunday)</li>
            <li>Support email: info@cybermovie.edu.vn</li>
          </ul>
        </div>
      </div>
      <div className="footerCertificate">
        <div className="flex justify-between space-x-8">
        <div>
        <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 logo"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                />
              </svg>
        </div>
        <div>
          <h3>CYBER MOVIE VIETNAM COMPANY LIMITED</h3>
          <p>Business Registration Certificate: 0349896940, first registered on December 24, 2023 issued by the Department of Planning and Investment of Ho Chi Minh City</p>
          <p>Hotline: 1900 6017</p>
          <p>COPYRIGHT 2023 CYBER MOVIE VIETNAM CO., LTD. ALL RIGHTS RESERVED</p>
        </div>
        </div>
      </div>     
    </div>
  );
}
