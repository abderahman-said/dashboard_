import Image from "next/image";
import styles from "./page.module.css";
import { LuShoppingCart } from "react-icons/lu";
import illustrations from "../../public/img/illustrations/illustration-john-light.png"
import six from "../../public/img/avatars/6.png"
import v3d from "../../public/img/icons/misc/3d-illustration.png"
import finance from "../../public/img/icons/misc/finance-app-design.png"
import square from "../../public/img/icons/misc/4-square.png"
import delta from "../../public/img/icons/misc/delta-web-app.png"
import google from "../../public/img/icons/brands/google.png"
import face from "../../public/img/icons/brands/facebook-rounded.png"
import ins from "../../public/img/icons/brands/instagram-rounded.png"
import reddit from "../../public/img/icons/brands/reddit-rounded.png"
import pdf from "../../public/img/icons/misc/pdf.png"
import one from "../../public/img/avatars/1.png"
import tn from "../../public/img/avatars/5.png"
import vs from "../../public/img/vs.png"
import th from "../../public/img/avatars/12.png"
import visitsByDayChart from "../../public/img/dd.png"
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlineAdd, MdOutlineKeyboardArrowRight, MdOutlineMoreVert } from "react-icons/md";
import { IoArrowUpOutline } from "react-icons/io5";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import ChartSession from "../app/home/ChartSession/page"
import ChartPerformance from "../app/home/ChartPerformance/page"
import { SlHandbag } from "react-icons/sl";
import TotalTransactions from "../app/home/TotalTransactions/page"
import TotalRevenue from "../app/home/TotalRevenue/page"
import WeeklySalesChart from "../app/home/WeeklySalesChart/page"


import ecommerce from "../../public/img/icons/misc/ecommerce-website.png"
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

import { FaChartPie } from "react-icons/fa";
import { RiLinksLine } from "react-icons/ri";
export default function Home() {
  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row g-6">
          <div className="col-md-12 col-xxl-8">
            <div className="card h-100">
              <div className="d-flex h-100 align-items-center row">
                <div className="col-md-6 order-2 order-md-1">
                  <div className="card-body">
                    <h4 className="card-title mb-4">تهانينا <span className="fw-bold">جون!</span> 🎉</h4>
                    <p className="mb-0">لقد حققت 68% 😎 أكثر في المبيعات اليوم.</p>
                    <p>تحقق من شارتك الجديدة في ملفك الشخصي.</p>
                    <a href="javascript:;" className="btn btn-primary">عرض الملف الشخصي</a>
                  </div>
                </div>
                <div className="col-md-6 text-center text-md-end order-1 order-md-2">
                  <div className="card_body_img_left    ">
                    <Image
                      src={illustrations}
                      height="186"
                      className="scaleX-n1-rtl"
                      alt="عرض الملف الشخصي"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-sm-6">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                  <div className="avatar">
                    <div className="avatar-initial bg-label-primary rounded-3">
                      <LuShoppingCart />
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="mb-0 text-success me-1">+22%</p>
                    <IoIosArrowUp />
                  </div>
                </div>
                <div className="card-info mt-5">
                  <h5 className="mb-1">155k</h5>
                  <p>إجمالي الطلبات</p>
                  <div className="badge bg-label-secondary rounded-pill">آخر 4 أشهر</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-sm-6">
            <div className="card h-100">
              <div className="card-header pb-0">
                <div className="d-flex align-items-center mb-1 flex-wrap">
                  <h5 className="mb-0 me-1">$38.5k</h5>
                  <p className="mb-0 text-success">+62%</p>
                </div>
                <span className="d-block card-subtitle">الجلسات</span>
              </div>
              <div className="card-body">
                <ChartSession />
              </div>
            </div>
          </div>
          <div className="col-12 col-xxl-8">
            <div className="card h-100">
              <div className="row row-bordered g-0 h-100">
                <div className="col-md-7 col-12 order-2 order-md-0">
                  <div className="card-header">
                    <h5 className="mb-0">إجمالي المعاملات</h5>
                  </div>
                  <div className="card-body">
                    <TotalTransactions />
                  </div>
                </div>
                <div className="col-md-5 col-12">
                  <div className="card-header">
                    <div className="d-flex justify-content-between">
                      <h5 className="mb-1">تقرير</h5>
                      <div className="dropdown">
                        <button
                          className="btn btn-text-secondary rounded-pill text-muted border-0 p-1"
                          type="button"
                          id="totalTransaction"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false">
                          <MdOutlineMoreVert />
                        </button>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="totalTransaction">
                          <a className="dropdown-item" href="#">تحديث</a>
                          <a className="dropdown-item" href="#">مشاركة</a>
                          <a className="dropdown-item" href="#">تحديث</a>
                        </div>
                      </div>
                    </div>
                    <p className="mb-0 card-subtitle">المعاملات في الشهر الماضي $234.40k</p>
                  </div>
                  <div className="card-body pt-6">
                    <div className="row">
                      <div className="col-6 border-end">
                        <div className="d-flex flex-column align-items-center">
                          <div className="avatar">
                            <div className="avatar-initial bg-label-success rounded-3">
                              <FaChartPie />
                            </div>
                          </div>
                          <p className="mt-3 mb-1">هذا الأسبوع</p>
                          <h6 className="mb-0">+82.45%</h6>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex flex-column align-items-center">
                          <div className="avatar">
                            <div className="avatar-initial bg-label-primary rounded-3">
                              <HiOutlineCurrencyDollar />
                            </div>
                          </div>
                          <p className="mt-3 mb-1">هذا الأسبوع</p>
                          <h6 className="mb-0">-24.86%</h6>
                        </div>
                      </div>
                    </div>
                    <hr className="my-5" />
                    <div className="d-flex justify-content-around align-items-center flex-wrap gap-2">
                      <div>
                        <p className="mb-1">الأداء</p>
                        <h6 className="mb-0">+94.15%</h6>
                      </div>
                      <div>
                        <button className="btn btn-primary" type="button">عرض التقرير</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xxl-4 col-md-6">
            <div className="card h-100">
              <div className="card-header">
                <div className="d-flex justify-content-between">
                  <h5 className="mb-1">الأداء</h5>
                  <div className="dropdown">
                    <button
                      className="btn btn-text-secondary rounded-pill text-muted border-0 p-1"
                      type="button"
                      id="performanceDropdown"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      <MdOutlineMoreVert />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="performanceDropdown">
                      <a className="dropdown-item" href="#">آخر 28 يومًا</a>
                      <a className="dropdown-item" href="#">الشهر الماضي</a>
                      <a className="dropdown-item" href="#">العام الماضي</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
              <ChartPerformance />
              </div>
            </div>
          </div>
          {/*  */}

          <div className="col-md-6 col-xxl-4">
            <div className="card h-100">
              <div className="card-header d-flex align-items-center justify-content-between">
                <h5 className="card-title m-0 me-2">إحصائيات المشروع</h5>
                <div className="dropdown">
                  <button
                    className="btn btn-text-secondary rounded-pill text-muted border-0 p-1"
                    type="button"
                    id="projectStatus"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <MdOutlineMoreVert />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="projectStatus">
                    <a className="dropdown-item" href="#">آخر 28 يومًا</a>
                    <a className="dropdown-item" href="#">الشهر الماضي</a>
                    <a className="dropdown-item" href="#">العام الماضي</a>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between p-4 border-bottom">
                <p className="mb-0 fs-xsmall">الاسم</p>
                <p className="mb-0 fs-xsmall">الميزانية</p>
              </div>
              <div className="card-body">
                <ul className="p-0 m-0">
                  <li className="d-flex align-items-center mb-6">
                    <div className="avatar avatar-md flex-shrink-0 me-4">
                      <div className="avatar-initial bg-light-gray rounded-3">
                        <div>
                          <Image src={v3d} alt="User" className="h-25" />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-1">3D Illustration</h6>
                        <small>رسم توضيحي باستخدام Blender</small>
                      </div>
                      <div className="badge bg-label-primary rounded-pill">$6,500</div>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-6">
                    <div className="avatar avatar-md flex-shrink-0 me-4">
                      <div className="avatar-initial bg-light-gray rounded-3">
                        <div>
                          <Image src={finance} alt="User" className="h-25" />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-1">تصميم تطبيق مالي</h6>
                        <small>مجموعة أدوات Figma</small>
                      </div>
                      <div className="badge bg-label-primary rounded-pill">$4,290</div>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-6">
                    <div className="avatar avatar-md flex-shrink-0 me-4">
                      <div className="avatar-initial bg-light-gray rounded-3">
                        <div>
                          <Image src={square} alt="User" className="h-25" />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-1">4 Square</h6>
                        <small>تطبيق أندرويد</small>
                      </div>
                      <div className="badge bg-label-primary rounded-pill">$44,500</div>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-6">
                    <div className="avatar avatar-md flex-shrink-0 me-4">
                      <div className="avatar-initial bg-light-gray rounded-3">
                        <div>
                          <Image src={delta} alt="User" className="h-25" />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-1">تطبيق Delta ويب</h6>
                        <small>لوحة معلومات React</small>
                      </div>
                      <div className="badge bg-label-primary rounded-pill">$12,690</div>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="avatar avatar-md flex-shrink-0 me-4">
                      <div className="avatar-initial bg-light-gray rounded-3">
                        <div>
                          <Image src={ecommerce} alt="User" className="h-25" />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-1">موقع تجارة إلكترونية</h6>
                        <small>Vue + Laravel</small>
                      </div>
                      <div className="badge bg-label-primary rounded-pill">$10,850</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xxl-4">
            <div className="row g-4">
              <div className="col-md-6 col-sm-6">
                <div className="card h-100">
                  <div className="card-header pb-xl-8">
                    <div className="d-flex align-items-center mb-1 flex-wrap">
                      <h5 className="mb-0 me-1">$42.5k</h5>
                      <p className="mb-0 text-danger">-22%</p>
                    </div>
                    <span className="d-block card-subtitle">الإيرادات الإجمالية</span>
                  </div>
                  <div className="card-body">
                  <Image src={vs} alt="User" className="w-100" height={100} />

                  </div>
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                      <div className="avatar">
                        <div className="avatar-initial bg-label-success rounded-3">
                          <SlHandbag />
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 text-success me-1">+38%</p>
                        <IoArrowUpOutline />
                      </div>
                    </div>
                    <div className="card-info mt-5 mt-xl-8">
                      <h5 className="mb-1">$13.4k</h5>
                      <p>إجمالي المبيعات</p>
                      <div className="badge bg-label-secondary rounded-pill">آخر ستة أشهر</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                      <div className="avatar">
                        <div className="avatar-initial bg-label-info rounded-3">
                          <RiLinksLine />
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 text-success me-1">+62%</p>
                        <IoArrowUpOutline />
                      </div>
                    </div>
                    <div className="card-info mt-5 mt-xl-8">
                      <h5 className="mb-1">142.8k</h5>
                      <p>إجمالي الانطباعات</p>
                      <div className="badge bg-label-secondary rounded-pill">آخر سنة واحدة</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="card h-100">
                  <div className="card-header pb-xl-7">
                    <div className="d-flex align-items-center mb-1 flex-wrap">
                      <h5 className="mb-0 me-1">$67.1k</h5>
                      <p className="mb-0 text-success">+49%</p>
                    </div>
                    <span className="d-block card-subtitle">نظرة عامة</span>
                  </div>
                  <div className="card-body pb-xl-8">
                    <div id="overviewChart" className="d-flex align-items-center"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xxl-4 col-md-6">
            <div className="card h-100">
              <div className="card-header">
                <div className="d-flex justify-content-between">
                  <h5 className="mb-1">مبيعات الدول</h5>
                  <div className="dropdown">
                    <button
                      className="btn btn-text-secondary rounded-pill text-muted border-0 p-1"
                      type="button"
                      id="salesCountryDropdown"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      <MdOutlineMoreVert />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="salesCountryDropdown">
                      <a className="dropdown-item" href="#">آخر 28 يومًا</a>
                      <a className="dropdown-item" href="#">الشهر الماضي</a>
                      <a className="dropdown-item" href="#">العام الماضي</a>
                    </div>
                  </div>
                </div>
                <p className="mb-0 card-subtitle">إجمالي مبيعات $42,580</p>
              </div>
              <div className="card-body pb-1 px-0">
              <TotalRevenue />
              </div>
            </div>
          </div>

          <div className="col-12 col-xxl-8">
            <div className="card h-100">
              <div className="card-header d-flex justify-content-between">
                <div>
                  <h5 className="card-title mb-1">أهم مصادر الإحالة</h5>
                  <p className="card-subtitle mb-0">عدد المبيعات</p>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-text-secondary rounded-pill text-muted border-0 p-1"
                    type="button"
                    id="earningReportsTabsId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <MdOutlineMoreVert />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="earningReportsTabsId">
                    <a className="dropdown-item" href="#">عرض المزيد</a>
                    <a className="dropdown-item" href="#">حذف</a>
                  </div>
                </div>
              </div>
              <div className="card-body pb-0">
                <ul className="nav nav-tabs nav-tabs-widget pb-6 gap-4 mx-1 d-flex flex-nowrap" role="tablist">
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link btn active d-flex flex-column align-items-center justify-content-center"
                      role="tab"
                      data-bs-toggle="tab"
                      data-bs-target="#navs-orders-id"
                      aria-controls="navs-orders-id"
                      aria-selected="true">
                      <div className="avatar avatar-sm">
                        <Image src={google} alt="User" />
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link btn d-flex flex-column align-items-center justify-content-center"
                      role="tab"
                      data-bs-toggle="tab"
                      data-bs-target="#navs-sales-id"
                      aria-controls="navs-sales-id"
                      aria-selected="false">
                      <div className="avatar avatar-sm">
                        <Image src={face} alt="User" />
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link btn d-flex flex-column align-items-center justify-content-center"
                      role="tab"
                      data-bs-toggle="tab"
                      data-bs-target="#navs-profit-id"
                      aria-controls="navs-profit-id"
                      aria-selected="false">
                      <div className="avatar avatar-sm">
                        <Image src={ins} alt="User" />
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link btn d-flex flex-column align-items-center justify-content-center"
                      role="tab"
                      data-bs-toggle="tab"
                      data-bs-target="#navs-income-id"
                      aria-controls="navs-income-id"
                      aria-selected="false">
                      <div className="avatar avatar-sm">
                        <Image src={reddit} alt="User" />
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link btn d-flex align-items-center justify-content-center disabled"
                      role="tab"
                      data-bs-toggle="tab"
                      aria-selected="false">
                      <div className="avatar avatar-sm">
                        <div className="avatar-initial bg-label-secondary text-body rounded">
                          <MdOutlineAdd />
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content p-0">
                <div className="tab-pane fade show active" id="navs-orders-id" role="tabpanel">
                  <div className="table-responsive text-nowrap">
                    <table className="table border-top">
                      <thead>
                        <tr>
                          <th className="bg-transparent border-bottom">اسم المنتج</th>
                          <th className="bg-transparent border-bottom">الحالة</th>
                          <th className="text-end bg-transparent border-bottom">الربح</th>
                          <th className="text-end bg-transparent border-bottom">الإيرادات</th>
                        </tr>
                      </thead>
                      <tbody className="table-border-bottom-0">
                        <tr>
                          <td>حملة التسويق عبر البريد الإلكتروني</td>
                          <td>
                            <div className="badge bg-label-primary rounded-pill">نشط</div>
                          </td>
                          <td className="text-success fw-medium text-end">+24%</td>
                          <td className="text-end fw-medium">$42,857</td>
                        </tr>
                        <tr>
                          <td>Google Workspace</td>
                          <td>
                            <div className="badge bg-label-success rounded-pill">مكتمل</div>
                          </td>
                          <td className="text-danger fw-medium text-end">-12%</td>
                          <td className="text-end fw-medium">$850</td>
                        </tr>
                        <tr>
                          <td>برنامج الشراكة</td>
                          <td>
                            <div className="badge bg-label-primary rounded-pill">نشط</div>
                          </td>
                          <td className="text-success fw-medium text-end">+24%</td>
                          <td className="text-end fw-medium">$5,576</td>
                        </tr>
                        <tr>
                          <td>Google Adsense</td>
                          <td>
                            <div className="badge bg-label-info rounded-pill">قيد المسودة</div>
                          </td>
                          <td className="text-success fw-medium text-end">+0%</td>
                          <td className="text-end fw-medium">0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tab-pane fade" id="navs-sales-id" role="tabpanel">
                  <div className="table-responsive text-nowrap">
                    <table className="table border-top">
                      <thead>
                        <tr>
                          <th className="bg-transparent border-bottom">اسم المنتج</th>
                          <th className="bg-transparent border-bottom">الحالة</th>
                          <th className="text-end bg-transparent border-bottom">الربح</th>
                          <th className="text-end bg-transparent border-bottom">الإيرادات</th>
                        </tr>
                      </thead>
                      <tbody className="table-border-bottom-0">
                        <tr>
                          <td>Facebook Adsense</td>
                          <td>
                            <div className="badge bg-label-info rounded-pill">قيد المسودة</div>
                          </td>
                          <td className="text-success fw-medium text-end">+5%</td>
                          <td className="text-end fw-medium">$5</td>
                        </tr>
                        <tr>
                          <td>برنامج الشراكة</td>
                          <td>
                            <div className="badge bg-label-primary rounded-pill">نشط</div>
                          </td>
                          <td className="text-danger fw-medium text-end">-24%</td>
                          <td className="text-end fw-medium">$5,576</td>
                        </tr>
                        <tr>
                          <td>حملة التسويق عبر البريد الإلكتروني</td>
                          <td>
                            <div className="badge bg-label-warning rounded-pill">تحذير</div>
                          </td>
                          <td className="text-success fw-medium text-end">+5%</td>
                          <td className="text-end fw-medium">$2,857</td>
                        </tr>
                        <tr>
                          <td>Facebook Workspace</td>
                          <td>
                            <div className="badge bg-label-success rounded-pill">مكتمل</div>
                          </td>
                          <td className="text-danger fw-medium text-end">-12%</td>
                          <td className="text-end fw-medium">$850</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tab-pane fade" id="navs-profit-id" role="tabpanel">
                  <div className="table-responsive text-nowrap">
                    <table className="table border-top">
                      <thead>
                        <tr>
                          <th className="bg-transparent border-bottom">اسم المنتج</th>
                          <th className="bg-transparent border-bottom">الحالة</th>
                          <th className="text-end bg-transparent border-bottom">الربح</th>
                          <th className="text-end bg-transparent border-bottom">الإيرادات</th>
                        </tr>
                      </thead>
                      <tbody className="table-border-bottom-0">
                        <tr>
                          <td>برنامج الشراكة</td>
                          <td>
                            <div className="badge bg-label-primary rounded-pill">نشط</div>
                          </td>
                          <td className="text-danger fw-medium text-end">-24%</td>
                          <td className="text-end fw-medium">$5,576</td>
                        </tr>
                        <tr>
                          <td>Instagram Adsense</td>
                          <td>
                            <div className="badge bg-label-info rounded-pill">قيد المسودة</div>
                          </td>
                          <td className="text-success fw-medium text-end">+5%</td>
                          <td className="text-end fw-medium">$5</td>
                        </tr>
                        <tr>
                          <td>Instagram Workspace</td>
                          <td>
                            <div className="badge bg-label-success rounded-pill">مكتمل</div>
                          </td>
                          <td className="text-danger fw-medium text-end">-12%</td>
                          <td className="text-end fw-medium">$850</td>
                        </tr>
                        <tr>
                          <td>حملة التسويق عبر البريد الإلكتروني</td>
                          <td>
                            <div className="badge bg-label-danger rounded-pill">تحذير</div>
                          </td>
                          <td className="text-danger fw-medium text-end">-5%</td>
                          <td className="text-end fw-medium">$857</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tab-pane fade" id="navs-income-id" role="tabpanel">
                  <div className="table-responsive text-nowrap">
                    <table className="table border-top">
                      <thead>
                        <tr>
                          <th className="bg-transparent border-bottom">اسم المنتج</th>
                          <th className="bg-transparent border-bottom">الحالة</th>
                          <th className="text-end bg-transparent border-bottom">الربح</th>
                          <th className="text-end bg-transparent border-bottom">الإيرادات</th>
                        </tr>
                      </thead>
                      <tbody className="table-border-bottom-0">
                        <tr>
                          <td>Reddit Workspace</td>
                          <td>
                            <div className="badge bg-label-warning rounded-pill">قيد المعالجة</div>
                          </td>
                          <td className="text-danger fw-medium text-end">-12%</td>
                          <td className="text-end fw-medium">$850</td>
                        </tr>
                        <tr>
                          <td>برنامج الشراكة</td>
                          <td>
                            <div className="badge bg-label-primary rounded-pill">نشط</div>
                          </td>
                          <td className="text-danger fw-medium text-end">-24%</td>
                          <td className="text-end fw-medium">$5,576</td>
                        </tr>
                        <tr>
                          <td>Reddit Adsense</td>
                          <td>
                            <div className="badge bg-label-info rounded-pill">قيد المسودة</div>
                          </td>
                          <td className="text-success fw-medium text-end">+5%</td>
                          <td className="text-end fw-medium">$5</td>
                        </tr>
                        <tr>
                          <td>حملة التسويق عبر البريد الإلكتروني</td>
                          <td>
                            <div className="badge bg-label-success rounded-pill">مكتمل</div>
                          </td>
                          <td className="text-success fw-medium text-end">+50%</td>
                          <td className="text-end fw-medium">$857</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-xxl-4 col-md-6">
            <div className="card h-100">
              <div className="card-header">
                <div className="d-flex justify-content-between">
                  <h5 className="mb-1">المبيعات الأسبوعية</h5>
                  <div className="dropdown">
                    <button
                      className="btn btn-text-secondary rounded-pill text-muted border-0 p-1"
                      type="button"
                      id="weeklySalesDropdown"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      <MdOutlineMoreVert />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="weeklySalesDropdown">
                      <a className="dropdown-item" href="#">تحديث</a>
                      <a className="dropdown-item" href="#">تحديث</a>
                      <a className="dropdown-item" href="#">مشاركة</a>
                    </div>
                  </div>
                </div>
                <p className="mb-0 card-subtitle">إجمالي 85.4 ألف مبيعات</p>
              </div>
              <div className="card-body">
                <div className="row mb-7 mb-xl-12">
                  <div className="col-6 d-flex align-items-center gap-3">
                    <div className="avatar">
                      <div className="avatar-initial bg-label-primary rounded">
                        <MdOutlineMoreVert />
                      </div>
                    </div>
                    <div className="ms-3 d-flex flex-column">
                      <p className="mb-0">صافي الدخل</p>
                      <h6 className="mb-0">$438.5K</h6>
                    </div>
                  </div>
                  <div className="col-6 d-flex align-items-center gap-3">
                    <div className="avatar">
                      <div className="avatar-initial bg-label-warning rounded">
                        <PiCurrencyCircleDollar />
                      </div>
                    </div>
                    <div className="ms-3 d-flex flex-column">
                      <p className="mb-0">النفقات</p>
                      <h6 className="mb-0">$22.4K</h6>
                    </div>
                  </div>
                </div>
                 <WeeklySalesChart />
              </div>
            </div>
          </div>

          <div className="col-12 col-xxl-4 col-md-6">
            <div className="card h-100">
              <div className="card-header">
                <div className="d-flex justify-content-between">
                  <h5 className="mb-1">الزيارات حسب اليوم</h5>
                  <div className="dropdown">
                    <button
                      className="btn btn-text-secondary rounded-pill text-muted border-0 p-1"
                      type="button"
                      id="visitsByDayDropdown"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      <MdOutlineMoreVert />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="visitsByDayDropdown">
                      <a className="dropdown-item" href="#">تحديث</a>
                      <a className="dropdown-item" href="#">تحديث</a>
                      <a className="dropdown-item" href="#">مشاركة</a>
                    </div>
                  </div>
                </div>
                <p className="mb-0 card-subtitle">إجمالي 248.5 ألف زيارة</p>
              </div>
              <div className="card-body pt-xl-5">
              <Image src={visitsByDayChart} alt="img" height={300} className="w-100" />
                 
                <div className="d-flex justify-content-between mt-6">
                  <div>
                    <h6 className="mb-0">أكثر يوم زيارة</h6>
                    <p className="mb-0 small">إجمالي 62.4 ألف زيارة يوم الخميس</p>
                  </div>
                  <div className="avatar">
                    <div className="avatar-initial bg-label-warning rounded">
                      <MdOutlineKeyboardArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-xxl-8">
            <div className="card h-100">
              <div className="card-header">
                <div className="d-flex justify-content-between">
                  <h5 className="mb-0">جدول النشاط</h5>
                </div>
              </div>
              <div className="card-body pt-4">
                <ul className="timeline card-timeline mb-0">
                  <li className="timeline-item timeline-item-transparent">
                    <span className="timeline-point timeline-point-primary"></span>
                    <div className="timeline-event">
                      <div className="timeline-header mb-3">
                        <h6 className="mb-0">تم دفع 12 فاتورة</h6>
                        <small className="text-muted">منذ 12 دقيقة</small>
                      </div>
                      <p className="mb-2">تم دفع الفواتير للشركة</p>
                      <div className="d-flex align-items-center mb-1">
                        <div className="badge bg-lighter rounded-3">
                          <Image src={pdf} alt="img" width="15" className="me-2" />
                          <span className="h6 mb-0">invoices.pdf</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-item timeline-item-transparent">
                    <span className="timeline-point timeline-point-success"></span>
                    <div className="timeline-event">
                      <div className="timeline-header mb-3">
                        <h6 className="mb-0">اجتماع مع العميل</h6>
                        <small className="text-muted">منذ 45 دقيقة</small>
                      </div>
                      <p className="mb-2">اجتماع مشروع مع جون @10:15 صباحًا</p>
                      <div className="d-flex justify-content-between flex-wrap gap-2">
                        <div className="d-flex flex-wrap align-items-center">
                          <div className="avatar avatar-sm me-2">
                            <Image src={one} alt="Avatar" width="15" className="rounded-circle me-2" />
                          </div>
                          <div>
                            <p className="mb-0 small fw-medium">ليستر مكارثي (عميل)</p>
                            <small>الرئيس التنفيذي لشركة ThemeSelection</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-item timeline-item-transparent">
                    <span className="timeline-point timeline-point-info"></span>
                    <div className="timeline-event">
                      <div className="timeline-header mb-3">
                        <h6 className="mb-0">إنشاء مشروع جديد للعميل</h6>
                        <small className="text-muted">منذ يومين</small>
                      </div>
                      <p className="mb-2">6 أعضاء في المشروع</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap border-top-0 p-0">
                          <div className="d-flex flex-wrap align-items-center">
                            <ul className="list-unstyled users-list d-flex align-items-center avatar-group m-0 me-2">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                title="فيني موسطوي"
                                className="avatar pull-up">
                                <Image className="rounded-circle" src={tn} alt="Avatar" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                title="ألين ريسكي"
                                className="avatar pull-up">
                                <Image className="rounded-circle" src={th} alt="Avatar" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                title="جولي روسينيول"
                                className="avatar pull-up">
                                <Image className="rounded-circle" src={six} alt="Avatar" />
                              </li>
                              <li className="avatar">
                                <span
                                  className="avatar-initial rounded-circle pull-up text-heading"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="bottom"
                                  title="3 المزيد"
                                >+3</span>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
