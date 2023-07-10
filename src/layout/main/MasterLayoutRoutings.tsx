import MasterLayout from './MasterLayout';
import i18n from '@core/utils/i18n';
import Home from 'pages/Home';
import Contact from 'pages/Contact';
import React from "react";
import {CreateTicket} from "../../pages/CreateTicket";
import {CreateAppointmentByService} from "../../pages/CreateAppointmentByService";
import {CreateAppointmentByDoctor} from "../../pages/CreateAppointmentByDoctor";
import {PatientList} from "../../pages/PatientList";
import {AppointmentList} from "../../pages/AppointmentList";
import {TicketList} from "../../pages/TicketList";
import {Profile} from "../../pages/Profile";

// import {lazyMinLoadTime} from "../../@core/components/LazyLoaderDelay";
// const PatientList = lazyMinLoadTime(() => import('pages/PatientList').then(({ PatientList }) => ({ default: PatientList })));
// const TicketList = lazyMinLoadTime(() => import('pages/TicketList').then(({ TicketList }) => ({ default: TicketList })));
// const AppointmentList = lazyMinLoadTime(() => import('pages/AppointmentList').then(({ AppointmentList }) => ({ default: AppointmentList })));
// const CreateTicket = lazyMinLoadTime(() => import('pages/CreateTicket').then(({ CreateTicket }) => ({ default: CreateTicket })));
// const CreateAppointmentByService = lazyMinLoadTime(() => import('pages/CreateAppointmentByService').then(({ CreateAppointmentByService }) => ({ default: CreateAppointmentByService })));
// const CreateAppointmentByDoctor = lazyMinLoadTime(() => import('pages/CreateAppointmentByDoctor').then(({ CreateAppointmentByDoctor }) => ({ default: CreateAppointmentByDoctor })));
// const Profile = lazyMinLoadTime(() => import('pages/Profile').then(({ Profile }) => ({ default: Profile })));

const masterLayoutRoutings = [
    {
        element: <MasterLayout />,
        path: '/',
        children: [
            {
                path: '/trang-chu',
                element: <Home />,
                title: i18n.t('page.myTaskTitle'),
                loginRequired: false,
                permissions: [],
            },
            // {
            //     path: '/lien-he',
            //     element: <Contact />,
            //     title: i18n.t('page.myTaskTitle'),
            //     loginRequired: false,
            //     permissions: [],
            // },
            {
                path: '/lay-so-thu-tu',
                element: <CreateTicket />,
                title: 'Lấy Số Thứ Tự',
                loginRequired: true,
                permissions: [],
            },
            // {
            //     path: '/dat-kham-dich-vu',
            //     element: <CreateAppointmentByService />,
            //     title: 'Đặt Khám Dịch Vụ',
            //     loginRequired: true,
            //     permissions: [],
            // },
            // {
            //     path: '/dat-kham-bac-si',
            //     element: <CreateAppointmentByDoctor />,
            //     title: 'Đặt Khám Bác Sĩ',
            //     loginRequired: true,
            //     permissions: [],
            // },
            {
                path: '/danh-sach-benh-nhan',
                element: <PatientList />,
                title: 'Danh Sách Bệnh Nhân',
                loginRequired: true,
                permissions: [],
            },
            // {
            //     path: '/danh-sach-cuoc-hen',
            //     element: <AppointmentList />,
            //     title: 'Danh Sách Cuộc Hẹn',
            //     loginRequired: true,
            //     permissions: [],
            // },
            {
                path: '/danh-sach-so-thu-tu',
                element: <TicketList />,
                title: 'Danh Sách Số Thứ Tự',
                loginRequired: true,
                permissions: [],
            },
            {
                path: '/tai-khoan',
                element: <Profile />,
                title: 'Tài Khoản',
                loginRequired: true,
                permissions: [],
            },
        ],
    },
];

export default masterLayoutRoutings;
