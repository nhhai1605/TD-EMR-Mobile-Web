import MasterLayout from './MasterLayout';
import i18n from '@core/utils/i18n';
import Home from 'pages/Home';
import Contact from 'pages/Contact';
import React from "react";
import PatientList from "pages/PatientList";
import TicketList from 'pages/TicketList';
import AppointmentList from "pages/AppointmentList";
import CreateTicket from "pages/CreateTicket";
import CreateAppointmentByService from "pages/CreateAppointmentByService";
import CreateAppointmentByDoctor from "pages/CreateAppointmentByDoctor";

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
            {
                path: '/lien-he',
                element: <Contact />,
                title: i18n.t('page.myTaskTitle'),
                loginRequired: false,
                permissions: [],
            },
            {
                path: '/lay-phieu-kham',
                element: <CreateTicket />,
                title: 'Lấy Phiếu Khám',
                loginRequired: true,
                permissions: [],
            },
            {
                path: '/dat-kham-dich-vu',
                element: <CreateAppointmentByService />,
                title: 'Đặt Khám Dịch Vụ',
                loginRequired: true,
                permissions: [],
            },
            {
                path: '/dat-kham-bac-si',
                element: <CreateAppointmentByDoctor />,
                title: 'Đặt Khám Bác Sĩ',
                loginRequired: true,
                permissions: [],
            },
            {
                path: '/danh-sach-benh-nhan',
                element: <PatientList />,
                title: 'Danh Sách Bệnh Nhân',
                loginRequired: true,
                permissions: [],
            },
            {
                path: '/danh-sach-cuoc-hen',
                element: <AppointmentList />,
                title: 'Danh Sách Cuộc Hẹn',
                loginRequired: true,
                permissions: [],
            },
            {
                path: '/danh-sach-phieu-kham',
                element: <TicketList />,
                title: 'Danh Sách Phiếu Khám',
                loginRequired: true,
                permissions: [],
            },
        ],
    },
];

export default masterLayoutRoutings;
