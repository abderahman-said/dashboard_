
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
import NavMobile from "../Navmobile/page";
const Nav = () => {
    return (
        <>
            <nav className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme" id="layout-navbar">
                <div className="container w-100 fluid nav_between">
                    <div className="navbar-brand app-brand demo d-none d-xl-flex py-0 me-6">
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

                        <a href="#;" className="layout-menu-toggle menu-link text-large ms-auto d-xl-none">
                            <i className="ri-close-fill align-middle"></i>
                        </a>
                    </div>
                    <aside id="layout-menu" className="layout-menu-horizontal menu-horizontal menu bg-menu-theme flex-grow-0">
                        <div className="container-xxl d-flex h-100">
                            <ul className="menu-inner">
                                <li className="menu-item active">
                                    <a href="#" className="menu-link menu-toggle">
                                        <FaHome />
                                        <div data-i18n="Dashboards">لوحات التحكم</div>
                                    </a>
                                    <ul className="menu-sub">
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
                                </li>

                                <li className="menu-item">
                                    <a href="#" className="menu-link menu-toggle">
                                        <MdDashboard />
                                        <div data-i18n="Layouts">التخطيطات</div>
                                    </a>

                                    <ul className="menu-sub">
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
                                </li>

                                <li className="menu-item">
                                    <a href="#" className="menu-link menu-toggle">
                                        <IoIosApps />
                                        <div data-i18n="Apps">التطبيقات</div>
                                    </a>
                                    <ul className="menu-sub">
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
                                </li>

                                <li className="menu-item">
                                    <a href="#" className="menu-link menu-toggle">
                                        <FiArchive />
                                        <div data-i18n="Components">المكونات</div>
                                    </a>
                                    <ul className="menu-sub">
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
                                </li>

                                <li className="menu-item">
                                    <a href="#" className="menu-link menu-toggle">
                                        <RiPagesLine />
                                        <div data-i18n="Forms">النماذج</div>
                                    </a>
                                    <ul className="menu-sub">
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
                                </li>

                                <li className="menu-item">
                                    <a href="#" className="menu-link menu-toggle">
                                        <RiTableLine />
                                        <div data-i18n="Tables">الجداول</div>
                                    </a>
                                    <ul className="menu-sub">
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
                                </li>

                                <li className="menu-item">
                                    <a href="#" className="menu-link menu-toggle">
                                        <RiDonutChartLine />
                                        <div data-i18n="Charts & Maps">الرسوم البيانية والخرائط</div>
                                    </a>
                                    <ul className="menu-sub">
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
                                </li>
                            </ul>
                        </div>
                    </aside>



                    <div className="navbar-nav-right d-flex   " id="navbar-collapse">
                        
                            <NavMobile />
                            

                        <ul className="navbar-nav flex-row align-items-center">
                            <li className="nav-item navbar-search-wrapper me-1 me-xl-0">
                                <a className="nav-link btn btn-text-secondary rounded-pill search-toggler fw-normal" href="#;">
                                    <IoSearch />
                                </a>
                            </li>
                            <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-1 me-xl-0">
                                <a className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow" href="#;" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                    <RiStarSmileLine />
                                </a>
                                <div className="dropdown-menu  py-0">
                                    <div className="dropdown-menu-header border-bottom py-50">
                                        <div className="dropdown-header d-flex align-items-center py-2">
                                            <h6 className="mb-0 me-auto">اختصارات</h6>
                                            <a href="#" className="btn btn-text-secondary rounded-pill btn-icon dropdown-shortcuts-add text-heading" data-bs-toggle="tooltip" data-bs-placement="top" title="إضافة اختصارات"><i className="ri-add-line ri-24px"></i></a>
                                        </div>
                                    </div>
                                    <div className="dropdown-shortcuts-list scrollable-container">
                                        <div className="row row-bordered overflow-visible g-0">
                                            <div className="dropdown-shortcuts-item col">
                                                <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                    <i className="ri-calendar-line ri-26px text-heading"></i>
                                                </span>
                                                <a href="app-calendar.html" className="stretched-link">التقويم</a>
                                                <small className="mb-0">المواعيد</small>
                                            </div>
                                            <div className="dropdown-shortcuts-item col">
                                                <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                    <i className="ri-file-text-line ri-26px text-heading"></i>
                                                </span>
                                                <a href="app-invoice-list.html" className="stretched-link">تطبيق الفواتير</a>
                                                <small className="mb-0">إدارة الحسابات</small>
                                            </div>
                                        </div>
                                        <div className="row row-bordered overflow-visible g-0">
                                            <div className="dropdown-shortcuts-item col">
                                                <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                    <i className="ri-user-line ri-26px text-heading"></i>
                                                </span>
                                                <a href="app-user-list.html" className="stretched-link">تطبيق المستخدمين</a>
                                                <small className="mb-0">إدارة المستخدمين</small>
                                            </div>
                                            <div className="dropdown-shortcuts-item col">
                                                <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                    <i className="ri-computer-line ri-26px text-heading"></i>
                                                </span>
                                                <a href="app-access-roles.html" className="stretched-link">إدارة الأدوار</a>
                                                <small className="mb-0">الأذونات</small>
                                            </div>
                                        </div>
                                        <div className="row row-bordered overflow-visible g-0">
                                            <div className="dropdown-shortcuts-item col">
                                                <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                    <i className="ri-pie-chart-2-line ri-26px text-heading"></i>
                                                </span>
                                                <a href="index.html" className="stretched-link">لوحة القيادة</a>
                                                <small className="mb-0">تحليلات</small>
                                            </div>
                                            <div className="dropdown-shortcuts-item col">
                                                <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                    <i className="ri-settings-4-line ri-26px text-heading"></i>
                                                </span>
                                                <a href="pages-account-settings-account.html" className="stretched-link">الإعدادات</a>
                                                <small className="mb-0">إعدادات الحساب</small>
                                            </div>
                                        </div>
                                        <div className="row row-bordered overflow-visible g-0">
                                            <div className="dropdown-shortcuts-item col">
                                                <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                    <i className="ri-question-line ri-26px text-heading"></i>
                                                </span>
                                                <a href="pages-faq.html" className="stretched-link">الأسئلة الشائعة</a>
                                                <small className="mb-0">الأسئلة الشائعة والمقالات</small>
                                            </div>
                                            <div className="dropdown-shortcuts-item col">
                                                <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                    <i className="ri-tv-2-line ri-26px text-heading"></i>
                                                </span>
                                                <a href="modal-examples.html" className="stretched-link">النوافذ المنبثقة</a>
                                                <small className="mb-0">نوافذ مفيدة</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-4 me-xl-1">
                                <a className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow" href="#;" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                    <FaBell />
                                    <span className="position-absolute top-0 start-50 translate-middle-y badge badge-dot bg-danger mt-2 border"></span>
                                </a>
                            </li>
                            <li className="nav-item navbar-dropdown dropdown-user dropdown">
                                <a className="nav-link dropdown-toggle hide-arrow" href="#;" data-bs-toggle="dropdown">
                                    <div className="avatar avatar-online">
                                        <Image src={one} alt className="rounded-circle" />
                                    </div>
                                </a>
                                <ul className="dropdown-menu" dir="ltr">
                                    <li>
                                        <a className="dropdown-item" href="pages-account-settings-account.html">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar avatar-online">
                                                        <Image src={one} alt className="rounded-circle" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <span className="fw-medium d-block small">جون دو</span>
                                                    <small className="text-muted">مشرف</small>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="dropdown-divider"></div>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="pages-profile-user.html">
                                            <FaUserAlt /><span className="align-middle">ملفي الشخصي</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="pages-account-settings-account.html">
                                            <IoMdSettings /><span className="align-middle">الإعدادات</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="pages-account-settings-billing.html">
                                            <span className="d-flex align-items-center align-middle">
                                                <LuFileText />
                                                <span className="flex-grow-1 align-middle">الفوترة</span>
                                                <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger">4</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="dropdown-divider"></div>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="pages-pricing.html">
                                            <AiOutlineDollar /><span className="align-middle">التسعير</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="pages-faq.html">
                                            <MdOutlineQuestionMark /><span className="align-middle">الأسئلة الشائعة</span>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="d-grid px-4 pt-2 pb-1">
                                            <a className="btn btn-sm btn-danger d-flex" href="auth-login-cover.html" target="_blank">
                                                <small className="align-middle">تسجيل خروج</small>
                                                <FiLogOut />
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </div>

                </div>
            </nav>

        </>
    )
}
export default Nav;