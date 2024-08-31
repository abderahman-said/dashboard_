
"use client"
import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { MdDashboard, MdMenu, MdOutlineQuestionMark } from "react-icons/md";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { RiDonutChartLine } from "react-icons/ri";
import { RiTableLine } from "react-icons/ri";
import { IoIosApps, IoMdSettings } from "react-icons/io";
import { RiPagesLine } from "react-icons/ri";
import { FiArchive, FiLogOut } from "react-icons/fi";
import { AiOutlineDollar, AiOutlineDollarCircle } from "react-icons/ai";
import { RiStarSmileLine } from "react-icons/ri";
import one from "/public/img/avatars/1.png"
import { LuFileText } from "react-icons/lu";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Accordion } from "react-bootstrap";

const NavMobile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <button className="menu_mobile" onClick={handleShow}>
        <MdMenu />
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> 
          <a href="index.html" className="app-brand-link gap-2">
                            <span className="app-brand-logo demo">
                                <span style={{ color: "var(--bs-primary)" }}>
                                    <svg width="268" height="150" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M30.0944 2.22569C29.0511 0.444187 26.7508 -0.172113 24.9566 0.849138C23.1623 1.87039 22.5536 4.14247 23.5969 5.92397L30.5368 17.7743C31.5801 19.5558 33.8804 20.1721 35.6746 19.1509C37.4689 18.1296 38.0776 15.8575 37.0343 14.076L30.0944 2.22569Z"
                                            fill="currentColor" />
                                        <path
                                            d="M30.171 2.22569C29.1277 0.444187 26.8274 -0.172113 25.0332 0.849138C23.2389 1.87039 22.6302 4.14247 23.6735 5.92397L30.6134 17.7743C31.6567 19.5558 33.957 20.1721 35.7512 19.1509C37.5455 18.1296 38.1542 15.8575 37.1109 14.076L30.171 2.22569Z"
                                            fill="url(#paint0_linear_2989_100980)"
                                            fill-opacity="0.4" />
                                        <path
                                            d="M22.9676 2.22569C24.0109 0.444187 26.3112 -0.172113 28.1054 0.849138C29.8996 1.87039 30.5084 4.14247 29.4651 5.92397L22.5251 17.7743C21.4818 19.5558 19.1816 20.1721 17.3873 19.1509C15.5931 18.1296 14.9843 15.8575 16.0276 14.076L22.9676 2.22569Z"
                                            fill="currentColor" />
                                        <path
                                            d="M14.9558 2.22569C13.9125 0.444187 11.6122 -0.172113 9.818 0.849138C8.02377 1.87039 7.41502 4.14247 8.45833 5.92397L15.3983 17.7743C16.4416 19.5558 18.7418 20.1721 20.5361 19.1509C22.3303 18.1296 22.9391 15.8575 21.8958 14.076L14.9558 2.22569Z"
                                            fill="currentColor" />
                                        <path
                                            d="M14.9558 2.22569C13.9125 0.444187 11.6122 -0.172113 9.818 0.849138C8.02377 1.87039 7.41502 4.14247 8.45833 5.92397L15.3983 17.7743C16.4416 19.5558 18.7418 20.1721 20.5361 19.1509C22.3303 18.1296 22.9391 15.8575 21.8958 14.076L14.9558 2.22569Z"
                                            fill="url(#paint1_linear_2989_100980)"
                                            fill-opacity="0.4" />
                                        <path
                                            d="M7.82901 2.22569C8.87231 0.444187 11.1726 -0.172113 12.9668 0.849138C14.7611 1.87039 15.3698 4.14247 14.3265 5.92397L7.38656 17.7743C6.34325 19.5558 4.04298 20.1721 2.24875 19.1509C0.454514 18.1296 -0.154233 15.8575 0.88907 14.076L7.82901 2.22569Z"
                                            fill="currentColor" />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_2989_100980"
                                                x1="5.36642"
                                                y1="0.849138"
                                                x2="10.532"
                                                y2="24.104"
                                                gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stop-opacity="1" />
                                                <stop offset="1" stop-opacity="0" />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint1_linear_2989_100980"
                                                x1="5.19475"
                                                y1="0.849139"
                                                x2="10.3357"
                                                y2="24.1155"
                                                gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stop-opacity="1" />
                                                <stop offset="1" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                            </span>
                            <span className="app-brand-text demo menu-text fw-semibold">Materialize</span>
                        </a>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <a href="#" className="menu-link menu-toggle">
                    <FaHome />
                    <div data-i18n="Dashboards">لوحات التحكم</div>
                  </a>

                </Accordion.Header>
                <Accordion.Body>
                  <ul className="menu_sub-mobile">
                    <li className="menu-item">
                      <a href="app-ecommerce-dashboard.html" className="menu-link">
                        <div data-i18n="eCommerce">التجارة الإلكترونية</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="dashboards-crm.html" className="menu-link">
                        <div data-i18n="CRM">إدارة علاقات العملاء</div>
                      </a>
                    </li>
                    <li className="menu-item active">
                      <a href="index.html" className="menu-link">
                        <div data-i18n="Analytics">تحليلات</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="app-logistics-dashboard.html" className="menu-link">
                        <div data-i18n="Logistics">الخدمات اللوجستية</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="app-academy-dashboard.html" className="menu-link">
                        <div data-i18n="Academy">الأكاديمية</div>
                      </a>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <a href="#" className="menu-link menu-toggle">
                    <MdDashboard />
                    <div data-i18n="Layouts">التخطيطات</div>
                  </a>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="menu_sub-mobile">
                    <li className="menu-item">
                      <a href="layouts-without-menu.html" className="menu-link">
                        <div data-i18n="Without menu">بدون قائمة</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="../vertical-menu-template/" className="menu-link" target="_blank">
                        <div data-i18n="Vertical">عمودي</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="layouts-fluid.html" className="menu-link">
                        <div data-i18n="Fluid">سائل</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="layouts-container.html" className="menu-link">
                        <div data-i18n="Container">الحاوية</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="layouts-blank.html" className="menu-link">
                        <div data-i18n="Blank">فارغ</div>
                      </a>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <a href="#" className="menu-link menu-toggle">
                    <IoIosApps />
                    <div data-i18n="Apps">التطبيقات</div>
                  </a>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="menu_sub-mobile">
                    <li className="menu-item">
                      <a href="app-email.html" className="menu-link">
                        <div data-i18n="Email">البريد الإلكتروني</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="app-chat.html" className="menu-link">
                        <div data-i18n="Chat">الدردشة</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="app-calendar.html" className="menu-link">
                        <div data-i18n="Calendar">التقويم</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="app-kanban.html" className="menu-link">
                        <div data-i18n="Kanban">كانبان</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="#;" className="menu-link">
                        <div data-i18n="eCommerce">التجارة الإلكترونية</div>
                      </a>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              {/*  */}

              



              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <a href="#" className="menu-link menu-toggle">
                    <FiArchive />
                    <div data-i18n="Components">المكونات</div>
                  </a>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="menu_sub-mobile">
                    <li className="menu-item">
                      <a href="#;" className="menu-link">
                        <div data-i18n="Cards">البطاقات</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="menu-link">
                        <div data-i18n="User interface">واجهة المستخدم</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="menu-link">
                        <div data-i18n="Extended UI">واجهة المستخدم الموسعة</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="icons-ri.html" className="menu-link">
                        <div data-i18n="Icons">الأيقونات</div>
                      </a>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>


              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <a href="#" className="menu-link menu-toggle">
                    <RiPagesLine />
                    <div data-i18n="Forms">النماذج</div>
                  </a>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="menu_sub-mobile">
                    <li className="menu-item">
                      <a href="#;" className="menu-link">
                        <div data-i18n="Form Elements">عناصر النموذج</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="#;" className="menu-link">
                        <div data-i18n="Form Layouts">تخطيطات النموذج</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="#;" className="menu-link">
                        <div data-i18n="Form Wizard">معالج النماذج</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="form-validation.html" className="menu-link">
                        <div data-i18n="Form Validation">التحقق من صحة النموذج</div>
                      </a>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  <a href="#" className="menu-link menu-toggle">
                    <RiTableLine />
                    <div data-i18n="Tables">الجداول</div>
                  </a>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="menu_sub-mobile">
                    <li className="menu-item">
                      <a href="tables-basic.html" className="menu-link">
                        <div data-i18n="Tables">الجداول</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="#;" className="menu-link">
                        <div data-i18n="Datatables">جداول البيانات</div>
                      </a>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  <a href="#" className="menu-link menu-toggle">
                    <RiDonutChartLine />
                    <div data-i18n="Charts & Maps">الرسوم البيانية والخرائط</div>
                  </a>
                </Accordion.Header>
                <Accordion.Body>
                <ul className="menu_sub-mobile">
                    <li className="menu-item">
                      <a href="#;" className="menu-link">
                        <div data-i18n="Charts">الرسوم البيانية</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="maps-leaflet.html" className="menu-link">
                        <div data-i18n="Leaflet Maps">خرائط Leaflet</div>
                      </a>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              










              {/*  */}
            </Accordion>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  )
}
export default NavMobile;


