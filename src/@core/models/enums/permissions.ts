export enum ePermission 
{
    mView = 1,
    mAdd = 2,
    mEdit = 3,
    mDelete = 4,
    mReport = 5,
    mPrint = 6,
    mFull = 7,
}
export enum eModules 
{
    mHome = 1,
    mPatient = 2,
    mConsultation = 3,
    mParaClinical = 4,
    mPharmacy = 5,

    mTransaction_Management = 6,

    mConfiguration_Management = 7,
    mSystem_Management = 8,
    mResources = 9,
    mResources_Maintenance = 10,

    mAppointment_System = 11,
    mUserAccount = 12,


    mKhoaDuoc = 14,
    mTransaction = 15,
    mModulesGen = 16,
    mClinicManagement = 17,
    mCLSLaboratory = 18,
    mCLSImaging = 19,
    mKhoPhong = 20,

    mAdmin = 21,
    mYVu_Management = 22,
    mCount = 25,
    mMedicalExamination = 26
}

export enum ePatient 
{
    mRegister = 1,//"Đăng Ký Dich Vu", 
    mProcessPayment = 2, //"Tính tiền"

    mReceivePatient = 5,//"Nhan Benh Bao Hiem

    mKiemToan = 9,//Kiem Toan
    mReportPaymentReceipt = 10,// Bao Cao Thu Tien
    mRegSummary = 11,//Tong ket


    mBaoCaoCLSSo = 16,
    mBaoCaoDanhSachDangKyBHYT = 17,
    mBaoCaoNhanhKhuKhamBenh = 18,
    mBaoCaoBangKeThuPhiXN = 19,
    mBaoCaomBaoCaoBangKeThuPhiXN_HA = 20,
    mBaoCaoTongHopDoanhThuPK = 21,

    mBaoCaoPhieuNopTien = 23,

    mAdmin = 22,

    mPMFile = 24, //Hồ sơ bệnh án.

    mReceiveInPatient = 6, // Nhận bệnh nội trú
    mReceiveInPatient_HI = 25, //Nhận bệnh nội trú BHYT
    mTemp02 = 26, //In Mẫu 02
    mXacNhanLaiBH = 13, //Xác nhận lại BH
    mInPatientAdmission = 7,//Nhap Vien
    mInPatientAdmissionManage = 15,//Quan Ly Benh Nhan Noi Tru
    mReCalcBillingInvoice = 27, //Tính lại bill
    mInPatientRegister = 3, //Tạo bill
    mInPatientProcessPayment = 4,//Tính tiền nội trú
    mInPatientSettlement = 28, //Quyết toán bill
    mChuyenKhoa = 14, // Chuyển Khoa
    mDischarge = 8,//Xuat Vien
    mSuggestAdvanceMoney = 29, //Đề nghị tạm ứng
    mSuggestPayment = 30, // Đề nghị thanh toán
    mAdvanceMoney = 12, // Tạm ứng
    mInPatientPayment = 31, //Thanh Toán
    mReportAdvanceMoney = 32, //Báo cáo thu tiền tạm ứng
    mReportRepayAdvanceMoney = 33, //Báo cáo thanh toán cho bệnh nhân
    mReportPatientSettlement = 34, //Báo cáo quyết toán 
    mInPatientRegister_TV = 35, //Tạo bill (dành cho phòng tài vụ).
    mInPatientSettlement_TV = 36, //Quyết Toán (dành cho phòng tài vụ).
    mReportOutwardMedDeptInflow = 37, //Báo cáo thu tiền bán thuốc Khoa Dược
    mSuggestAdvanceMoney_TV = 38, //Đề nghị tạm ứng (dành cho phòng tài vụ).
    mSuggestPayment_TV = 39, // Đề nghị thanh toán (dành cho phòng tài vụ).
    mDischarge_BS = 40,//Xuat Vien (dành cho Bác Sĩ).
    mRptNotPayCashAdvance = 41,//Báo cáo bệnh nhân chưa đóng tiền tạm ứng
    mRptInPtImportExportDept = 42, //Báo cáo nhập xuất khoa.
    mRptPtAreTreated = 43,//Báo cáo bệnh nhân đang điều trị.
    mReportAdvanceMoneyForBill = 44, //Báo cáo thu tiền tạm ứng Bill
    mHighTechBillingInvoice = 45, //Tạo bill

    mNhanBenhCSKH = 46,
    mCount = 47,
}

export enum oRegistrionEx 
{
    //dang ky dich vu
    mDangKyDV_DichVu_Them = 11,

    mDangKyDV_DichVuDaTT_ChinhSua = 1,
    mDangKyDV_DichVuDaTT_Luu = 2,
    mDangKyDV_DichVuDaTT_TraTien = 3,
    mDangKyDV_DichVuDaTT_In = 4,
    mDangKyDV_DichVuDaTT_LuuTraTien = 5,

    mDangKyDV_DichVuMoi_ChinhSua = 6,
    mDangKyDV_DichVuMoi_Luu = 7,
    mDangKyDV_DichVuMoi_TraTien = 8,
    mDangKyDV_DichVuMoi_In = 9,
    mDangKyDV_DichVuMoi_LuuTraTien = 10,
    mDangKyDV_DichVuMoi_GanSTT = 12,

    mDangKyDV_DangKyMoi = 20,
    mDangKyDV_ChuyenSangNoiTru = 21,
    mDangKyDV_HenBenh = 22,
    mDangKyDV_HuyDangKy = 23,

    //Tinh Tien
    mTinhTien_DichVuDaTT_ChinhSua = 25,
    mTinhTien_DichVuDaTT_Luu = 26,
    mTinhTien_DichVuDaTT_TraTien = 27,
    mTinhTien_DichVuDaTT_In = 28,
    mTinhTien_DichVuDaTT_LuuTraTien = 33,

    mTinhTien_DichVuMoi_ChinhSua = 29,
    mTinhTien_DichVuMoi_Luu = 30,
    mTinhTien_DichVuMoi_TraTien = 31,
    mTinhTien_DichVuMoi_In = 32,
    mTinhTien_DichVuMoi_LuuTraTien = 34,

    //Dang Ky Noi Tru
    mDangKyNoiTru_LoadBill = 35,
    mDangKyNoiTru_BillMoi = 36,
    mDangKyNoiTru_ThemDV = 37,
    mDangKyNoiTru_SuaDV = 38,
    mDangKyNoiTru_XemChiTiet = 39,

    mDangKyNoiTru_In = 42,
    mDangKyNoiTru_TraThuoc = 43,


    //Tinh Tien Noi Tru
    mTinhTienNoiTru_XemChiTiet = 40,
    mTinhTienNoiTru_TraTien = 41,

    //Nhan Benh BH

    mNhanBenhBH_ThongTin_Sua = 45,
    mNhanBenhBH_TheBH_ThemMoi = 46,
    mNhanBenhBH_TheBH_XacNhan = 47,
    mNhanBenhBH_DangKy = 48,
    mNhanBenhBH_TheBH_Sua = 44,

    //KMx: Thêm chức năng "Sửa thẻ BH sau khi đã ĐK" (21/02/2014 10:28)
    mNhanBenhBH_TheBH_SuaSauKhiDangKy = 49,

    //Nhan Benh Noi Tru

    mNhanBenhNoiTru_ThongTin_Sua = 50,
    mNhanBenhNoiTru_TheBH_ThemMoi = 51,
    mNhanBenhNoiTru_TheBH_XacNhan = 52,
    mNhanBenhNoiTru_DangKy = 53,
    mNhanBenhNoiTru_TheBH_Sua = 57,
    //Nhap Vien
    mNhapVien_NhapVien = 55,
    mNhapVien_DatGiuong = 56,
    mNhapVien_DeNghiChuyenKhoa = 57,
    mNhapVien_TimDeNghiChuyenKhoa = 58,
    mNhapVien_ChapNhanChuyenKhoa = 59,


    //Xuat Vien
    mXuatVien_Luu = 60,
    mXuatVien_Sua = 61,

    //Kiem Toan
    mKiemToan_Xem = 65,
    //Bao Cao Thu Tien
    mBaoCaoTT_Xem = 66,
    //Tong Ket
    mTongKet_Xem = 67,


    //Dang ky dich vu

    mDangKyDV_Patient_TimBN = 70,
    mDangKyDV_Patient_ThemBN = 71,
    mDangKyDV_Patient_TimDangKy = 72,

    mDangKyDV_Info_CapNhatThongTinBN = 73,
    mDangKyDV_Info_XacNhan = 74,
    mDangKyDV_Info_XoaThe = 75,
    mDangKyDV_Info_XemPhongKham = 76,



    //Tinh Tien
    mTinhTien_Patient_TimBN = 80,
    mTinhTien_Patient_ThemBN = 81,
    mTinhTien_Patient_TimDangKy = 82,

    mTinhTien_Info_CapNhatThongTinBN = 83,
    mTinhTien_Info_XacNhan = 84,
    mTinhTien_Info_XoaThe = 85,
    mTinhTien_Info_XemPhongKham = 86,

    //Dang Ky Noi Tru

    mDangKyNoiTru_Patient_TimBN = 90,
    mDangKyNoiTru_Patient_ThemBN = 91,
    mDangKyNoiTru_Patient_TimDangKy = 92,

    mDangKyNoiTru_Info_CapNhatThongTinBN = 93,
    mDangKyNoiTru_Info_XacNhan = 94,
    mDangKyNoiTru_Info_XoaThe = 95,
    mDangKyNoiTru_Info_XemPhongKham = 96,


    //Tinh Tien Noi Tru

    mTinhTienNoiTru_Patient_TimBN = 100,
    mTinhTienNoiTru_Patient_ThemBN = 101,
    mTinhTienNoiTru_Patient_TimDangKy = 102,

    mTinhTienNoiTru_Info_CapNhatThongTinBN = 103,
    mTinhTienNoiTru_Info_XacNhan = 104,
    mTinhTienNoiTru_Info_XoaThe = 105,
    mTinhTienNoiTru_Info_XemPhongKham = 106,

    //Nhan Benh BH

    mNhanBenhBH_Patient_TimBN = 110,
    mNhanBenhBH_Patient_ThemBN = 111,
    mNhanBenhBH_Patient_TimDangKy = 112,

    mNhanBenhBH_Info_CapNhatThongTinBN = 113,
    mNhanBenhBH_Info_XacNhan = 114,
    mNhanBenhBH_Info_XoaThe = 115,
    mNhanBenhBH_Info_XemPhongKham = 116,

    //Nhan Benh Noi Tru

    mNhanBenhNoiTru_Patient_TimBN = 120,
    mNhanBenhNoiTru_Patient_ThemBN = 121,
    mNhanBenhNoiTru_Patient_TimDangKy = 122,

    mNhanBenhNoiTru_Info_CapNhatThongTinBN = 123,
    mNhanBenhNoiTru_Info_XacNhan = 124,
    mNhanBenhNoiTru_Info_XoaThe = 125,
    mNhanBenhNoiTru_Info_XemPhongKham = 126,

    //Nhap Vien

    mNhapVien_Patient_TimBN = 130,
    mNhapVien_Patient_ThemBN = 131,
    mNhapVien_Patient_TimDangKy = 132,

    mNhapVien_Info_CapNhatThongTinBN = 133,
    mNhapVien_Info_XacNhan = 134,
    mNhapVien_Info_XoaThe = 135,
    mNhapVien_Info_XemPhongKham = 136,

    //Xuat Vien
    mXuatVien_Patient_TimBN = 140,
    mXuatVien_Patient_ThemBN = 141,
    mXuatVien_Patient_TimDangKy = 142,

    mXuatVien_Info_CapNhatThongTinBN = 143,
    mXuatVien_Info_XacNhan = 144,
    mXuatVien_Info_XoaThe = 145,
    mXuatVien_Info_XemPhongKham = 146,

    mXacNhanLaiBH_TimDangKy = 150,
    mXacNhanLaiBH_TimBenhNhan = 151,
    mXacNhanLaiBH_ThongTinBN_Xem = 152,
    mXacNhanLaiBH_ThongTinBN_CapNhat = 153,
    mXacNhanLaiBH_ThongTinBN_XacNhanBH = 154,
    mXacNhanLaiBH_ThongTinBN_XoaThe = 155,
    mXacNhanLaiBH_ThongTinBN_XemPhongKham = 156,

    mXacNhanLaiBH_ThongTinDangKy_ChinhSua = 157,
    mXacNhanLaiBH_ThongTinDangKy_XemChiTiet = 158,
    mXacNhanLaiBH_DanhSachDichVu_Xem = 159,

    //Chuyen khoa
    mChuyenKhoa_TimDeNghiChuyenKhoa = 165,
    mChuyenKhoa_ChapNhanChuyenKhoa = 166,

    //Tam Ung
    mTamUng_TimDangKy = 170,
    mTamUng_TamUng = 171,

    //Quan ly nhap vien
    mQLyBNNoitTru_DatGiuong = 180,
    mQLyBNNoitTru_DeNghiChuyenKhoa = 181,
    mQLyBNNoitTru_TimDeNghiChuyenKhoa = 182,
    mQLyBNNoitTru_ChapNhanChuyenKhoa = 183,

    //Bao cao
    mBaoCaoCLSSo_Xem = 200,
    mBaoCaoDanhSachDangKyBHYT_Xem = 205,
    mBaoCaoNhanhKhuKhamBenh_Xem = 210,
    mBaoCaoBangKeThuPhiXN_Xem = 215,
    mBaoCaomBaoCaoBangKeThuPhiXN_HA_Xem = 220,
    mBaoCaoTongHopDoanhThuPK_Xem = 225,

    mBaoCaoPhieuNopTien_Xem = 235,

    mDangKyAdmin_Xem = 230,

    //KMx: Hồ sơ bệnh án (04/09/2014 16:00).
    mHoSoBenhAn_Xoa = 240,

    mCount = 250
}

export enum eConsultation 
{
    mPtDashboardSummary = 1,//"Thông Tin Chung"
    mPtDashboardCommonRecs = 2,//"Tổng Quát"
    mPtPMRConsultationNew = 3,//"Chẩn đoán"                        
    mPtePrescriptionTab = 4,//"Toa Thuốc"
    mPteAppointmentTab = 5,// Hen benh
    mPtePatientSummaryRecord = 6,// Hen benh

    mLichSuKhamBenh_ThongTinChung = 7,
    mThongKe_DSBenhNhanDaKham = 8,
    mThongKe_DSBacSiKham = 9,
    mPtPCLRequest = 11,
    mPtHenXetNghiem = 12,
    mPatientSummaryCmd = 13,
    mPatientPCLImagingResultsCmd = 14,
    mPatientPCLLaboratoryResultsCmd = 15,
    mThongKe_BangKeChiTietKhamBenh = 16,
    mConsultingDiagnosy = 17,
    mConsultationsOtherMenu = 18,
    mProcedureCmd = 19,
    mQuanLyKhoaTTCT = 20,
    mKhamBenhNgoaiTru = 21,
    mThucHienYLenh = 22,
    mCount = 23
}

export enum oConsultationEx
{
    mThongTinChung_TimBN = 1,
    mThongTinChung_TimDK = 2,
    mThongTinChung_ThongTinBN = 3,
    mThongTinChung_DiUngCanhBao_ThongTin = 4,
    mThongTinChung_DiUngCanhBao_ChinhSua = 5,
    mThongTinChung_TinhTrangTheChat_ThongTin = 6,
    mThongTinChung_TinhTrangTheChat_ChinhSua = 7,
    mThongTinChung_ThongTinLienHe_ThongTin = 8,
    mThongTinChung_ThongTinLienHe_ChinhSua = 9,
    mThongTinChung_BHYT_ThongTin = 10,
    mThongTinChung_XemLanKhamBenh = 11,

    mTongQuat_XemThongTin = 15,
    mTongQuat_ChinhSuaThongTin = 16,

    mChanDoan_ThongTinBenhNhan = 20,
    mChanDoan_ThongTinBS = 21,
    mChanDoan_KhamBenhMoi = 22,
    mChanDoan_tabLanKhamTruoc_ThongTin = 23,
    mChanDoan_tabLanKhamTruoc_HieuChinh = 24,
    mChanDoan_tabSuaKhamBenh_ThongTin = 25,
    mChanDoan_tabSuaKhamBenh_HieuChinh = 26,
    mChanDoan_ChiDinhXetNghiemCLS = 27,
    mChanDoan_RaToa = 28,
    mChanDoan_TaoBenhAn = 29,
    mChanDoan_XemKetQuaCLS = 30,
    mChanDoan_XemToaThuoc_HienHanh = 31,
    mChanDoan_XemBenhAn = 32,


    mRaToa_TaoToaMoi = 35,
    mRaToa_TaoToaMoi_ChanDoan = 36,
    mRaToa_TaoToaMoi_In = 37,
    mRaToa_TaoToaMoi_LieuDung = 38,
    mRaToa_DSToaThuocPhatHanh_ThongTin = 39,
    mRaToa_DSToaThuocPhatHanh_ChinhSua = 40,
    mRaToa_DSToaThuocPhatHanh_LinkXemKquaXetNghiemCLS = 41,
    mRaToa_DSToaThuocPhatHanh_LinkXemToaThuocHienHanh = 42,
    mRaToa_DSToaThuocPhatHanh_LinkXemLichSuToaThuoc = 43,
    mRaToa_tabToaThuocDaPhatHanh_ThongTin = 44,
    mRaToa_tabToaThuocDaPhatHanh_ChinhSua = 45,
    mRaToa_tabToaThuocDaPhatHanh_TaoToaMoi = 46,
    mRaToa_tabToaThuocDaPhatHanh_PhatHanhLai = 47,
    mRaToa_tabToaThuocDaPhatHanh_In = 48,
    mRaToa_tabToaThuocDaPhatHanh_ChonChanDoan = 49,
    mRaToa_TabDanhSachToaThuocGoc_Tim = 50,

    mPSR_Xem = 55,

    mHenBenh_Xem = 60,
    mPatientSumaryRecord_Xem = 65,
    mLichSuKhamBenh_ThongTinChung_Xem = 70,
    mThongKe_DSBenhNhanDaKham_Xem = 75,
    mThongKe_DSBacSiKham_Xem = 80,

    mPCL_TaoPhieuMoi_Them = 85,
    mPCL_TaoPhieuMoi_XemIn = 86,
    mPCL_TaoPhieuMoi_In = 87,

    mPCL_DSPhieuYeuCau_ThongTin = 88,
    mPCL_DSPhieuYeuCau_ChinhSua = 89,

    mPCL_XemSuaPhieuYeuCau_ThongTin = 97,
    mPCL_XemSuaPhieuYeuCau_ChinhSua = 90,
    mPCL_XemSuaPhieuYeuCau_TaoPhieuMoi = 91,
    mPCL_XemSuaPhieuYeuCau_Huy = 92,
    mPCL_XemSuaPhieuYeuCau_XemIn = 93,
    mPCL_XemSuaPhieuYeuCau_In = 94,

    mHenXetNghiem_ThongTin = 95,
    mHenXetNghiem_HenXN = 96,

    mThongKe_BangKeChiTietKhamBenh_Xem = 101,
    mThongKe_BangKeChiTietKhamBenh_XemIn = 102,

    mPrintHIAppointment_New = 103,
    mConsultingDiagnosys_Full = 104,
    mConsultingDiagnosys_ConsultingEdit = 105,

    mConsultingDiagnosys_PrevSurgeryList = 106,

    mConsultingDiagnosys_InCompleteFileList = 107,
    mConsultingDiagnosys_AppliedList = 108,
    mConsultingDiagnosys_OperatedList = 109,
    mConsultingDiagnosys_WaitForSurgeryList = 110,
    mConsultingDiagnosys_DuraGraftList = 111,
    mEditDiagAndPrescriptionWithoutChangeStaffIDAndDatetime = 112,
    mProcedureEdit = 113,
    mHuyPhieuKhamTraTien = 114,
    mThucHienYLenh = 115,
    mCount = 116
}
export enum eParaClinical 
{
    mPtPCLImport = 1,//"Kết Quả Hình Ảnh"
    mPtPCLLabTest = 2,//"Kết Quả Xét Nghiệm"
    mPtPCLRequest = 3,//"Phiếu yêu cầu cận lâm sàng
    mCount = 4
}
export enum oParaClinicalEx 
{
    mPhieuYeuCauMoi = 1,//Phieu yeu cau xet nghiem can lam sang moi
    mPhieuYeuCauCu = 2,//Phieu yeu cau xet nghiem can lam sang cu
    mDanhSachPhieuYeuCau = 3,// Danh sach yeu cau can lam sang
    mCount = 5
}

export enum ePharmacy 
{
    mSellByPrescription = 1,//"Xuất bán theo toa"

    mBanThuocLe = 2,
    mBanThuocTheoToa = 3,
    mNhanThuoc = 1,
    mTraHang = 4,
    mDuTruThuoc = 5,
    mDatHang = 6,
    mNhapHangTuNhaCungCap = 7,
    mNhapHangTuNguonKhac = 8,
    mPhieuYeuCau = 9,

    mXuatNoiBo = 10,
    mXuatHuyThuocHetHan = 11,

    mKiemKeKho = 12,
    mQuanLyDonViTinh = 13,
    mQuanLyNhaSanXuat = 14,
    mQuanLyNhaCungCap = 15,
    mQuanLyKho = 16,
    mQuanLyCongThucTinhGia = 17,
    mQuanLyLopThuoc = 18,
    mQuanLyDanhMucThuoc = 19,
    mQuanLyChongChiDinh = 20,
    mQuanLyNCCVaNSX = 21,
    mQuanLyNCCVaThuoc = 22,
    mQuanLyGiaTuNCC = 23,
    mQuanLyGiaBanThuoc = 24,
    mQuanLyBangGiaBan = 25,


    mBaoCaoNopTienHangNgay = 26,
    mBaoCaoBangKeChiTietPhatThuoc = 27,
    mBCThang_DoanhThuBan = 28,
    mBCThang_KiemKeHangThang = 29,
    mBCThang_BCKiemKeHangThang = 30,

    mBCNhap_BangKeNhapHangThangTheoSoPhieu = 31,
    mBCNhap_BangKeNhapThuocHangThang = 32,
    mBCNhap_BangKeChungTuThanhToan = 33,
    mBCNhap_TheoDoiCongNo = 34,
    mBCNhap_TheKho = 35,

    mBCXuat_DanhSachXuat = 36,

    mBCBH_ThongKeTongHopThuocThang = 37,
    mBCBH_DanhMucThuocThanhToanBHYTThang = 38,

    mBGBanHangThang_BGBThangDuKien = 39,
    mBGBanHangThang_BGBThang = 40,

    mBCKhac_NhapXuatTon = 41,
    mBCKhac_ThuocHetHanDung = 42,
    mBCKhac_DSXuatThuocNoiBoNguoiMua = 43,
    mBCKhac_DSXuatThuocNoiBoTenThuoc = 44,
    mBCKhac_DSXuatThuocChoBH = 45,
    mBCKhac_BanThuocTongHop = 46,
    mBCKhac_TheoDoiSoLuongThuoc = 47,
    mBCKhac_TheoDoiMuonThuoc = 48,
    mBCKhac_TraThuocTongHop = 49,

    mDuTru_ThuocCanLayThemDeBan = 50,
    mDuTru_HangNgayTheoSoAnToan = 51,
    mDuTru_TongHopTheoSoPhieu = 52,
    mDuTru_TongHopTheoThuoc = 53,

    mThongKe_TonKho = 54,
    mThongKe_BanTheoNgay = 55,

    mXuatHuy = 56,

    mQuanLyDanhMucBHYT = 57,

    mBCNhap_SoKiemNhapThuoc = 58,

    mCount = 62
}

export enum oPharmacyEx 
{
    mBanThuocLe = 1,
    mBanThuocLe_Tim = 2,
    mBanThuocLe_ThongTin = 3,
    mBanThuocLe_PhieuMoi = 4,
    mBanThuocLe_ThuTien = 5,
    mBanThuocLe_HuyPhieu = 6,
    mBanThuocLe_CapNhatPhieu = 7,
    mBanThuocLe_ReportIn = 8,
    mBanThuocLe_CapNhatSauBaoCao = 9,

    mBanThuocTheoToa_TimBN = 10,
    mBanThuocTheoToa_ThongTin = 11,
    mBanThuocTheoToa_SuaToaThuoc = 12,
    mBanThuocTheoToa_Sua_In = 13,
    mBanThuocTheoToa_Them = 14,
    mBanThuocTheoToa_ThuTien = 15,
    mBanThuocTheoToa_HuyPhieuXuat = 16,
    mBanThuocTheoToa_CapNhatPhieu = 17,
    mBanThuocTheoToa_ReportIn = 18,
    mBanThuocTheoToa_CapNhatSauBaoCao = 19,

    mNhanThuoc_Tim = 20,
    mNhanThuoc_ThongTin = 21,
    mNhanThuoc_DaLayThuoc = 22,
    mNhanThuoc_HuyPhieuXuat = 23,
    mNhanThuoc_TraHang = 24,
    mNhanThuoc_ReportIn = 25,

    mTraHang_Tim = 26,
    mTraHang_TimPhieuTraHangCu = 27,
    mTraHang_ThongTin = 28,
    mTraHang_Luu = 29,
    mTraHang_TraTien = 30,
    mTraHang_ReportIn = 31,

    mDuTru_Tim = 35,
    mDuTru_ThongTin = 36,
    mDuTru_PhieuMoi = 37,
    mDuTru_Luu = 38,
    mDuTru_ReportIn = 39,
    mDuTru_Xoa = 34,

    mDatHang_DSThuocCanDatHang = 40,
    mDatHang_Tim = 41,
    mDatHang_ThongTin = 42,
    mDatHang_Edit = 43,
    mDatHang_Them = 44,
    mDatHang_Xoa = 46,
    mDatHang_In = 47,

    mNhapHangNCC_TimHoaDonCu = 50,
    mNhapHangNCC_ThongTinDonHang = 51,
    mNhapHangNCC_PhieuMoi = 52,
    mNhapHangNCC_CapNhat = 53,
    mNhapHangNCC_ReportIn = 54,

    mNhapHangNK_Tim = 55,
    mNhapHangNK_ThongTinDonHang = 56,
    mNhapHangNK_PhieuMoi = 57,
    mNhapHangNK_CapNhat = 58,
    mNhapHangNK_ReportIn = 59,

    mPhieuYeuCau_Tim = 60,
    mPhieuYeuCau_ChinhSua = 61,
    mPhieuYeuCau_In = 62,

    mXuatNoiBo_CapNhatSauBaoCao = 64,
    mXuatNoiBo_Tim = 65,
    mXuatNoiBo_ThongTinPhieuXuat = 66,
    mXuatNoiBo_Them = 67,
    mXuatNoiBo_ThucHien = 68,
    mXuatNoiBo_ThuTien = 69,
    mXuatNoiBo_ReportIn = 70,

    mXuatHuyThuocHetHan_Tim = 71,
    mXuatHuyThuocHetHan_Them = 72,
    mXuatHuyThuocHetHan_XuatExcel = 73,
    mXuatHuyThuocHetHan_ThucHien = 74,

    //---Quan ly
    mQuanLyDonViTinh_Tim = 75,
    mQuanLyDonViTinh_Them = 76,
    mQuanLyDonViTinh_ChinhSua = 77,

    mQuanLyNhaSanXuat_Tim = 80,
    mQuanLyNhaSanXuat_Them = 81,
    mQuanLyNhaSanXuat_ChinhSua = 82,

    mQuanLyNhaCungCap_Tim = 85,
    mQuanLyNhaCungCap_Them = 86,
    mQuanLyNhaCungCap_ChinhSua = 87,
    mQuanLyNhaCungCap_InMau = 88,

    mQuanLyKho_Tim = 90,
    mQuanLyKho_Them = 91,
    mQuanLyKho_ChinhSua = 92,

    mQuanLyCongThucTinhGia_Them = 93,
    mQuanLyCongThucTinhGia_ChinhSua = 94,

    mQuanLyLopThuoc_Tim = 95,
    mQuanLyLopThuoc_Them = 96,
    mQuanLyLopThuoc_ChinhSua = 97,

    mQuanLyDanhMucThuoc_Tim = 100,
    mQuanLyDanhMucThuoc_Them = 101,
    mQuanLyDanhMucThuoc_ChinhSua = 102,

    mQuanLyChongChiDinh_Tim = 105,
    mQuanLyChongChiDinh_Them = 106,
    mQuanLyChongChiDinh_ChinhSua = 107,

    mQuanLyNCCVaNSX_Tim = 110,
    mQuanLyNCCVaNSX_ChinhSua = 111,

    mQuanLyGiaTuNCC_Tim = 112,
    mQuanLyGiaTuNCC_Them = 113,
    mQuanLyGiaTuNCC_ChinhSua = 114,

    mQuanLyGiaBanThuoc_Tim = 115,
    mQuanLyGiaBanThuoc_Them = 116,
    mQuanLyGiaBanThuoc_ChinhSua = 117,

    mQuanLyBangGiaBan_Tim = 118,
    mQuanLyBangGiaBan_Them = 119,
    mQuanLyBangGiaBan_ChinhSua = 120,

    mQuanLyGiaBanThuoc_ThemGia = 121,
    mQuanLyGiaBanThuoc_ChinhSuaGia = 122,

    //----bao cao-------
    mBaoCaoNopTienHangNgay_PhieuMoi = 127,
    mBaoCaoNopTienHangNgay_Tim = 128,
    mBaoCaoNopTienHangNgay_Them = 129,
    mBaoCaoNopTienHangNgay_In = 130,
    mBaoCaoNopTienHangNgay_InThongKeChiTiet = 131,



    mBaoCaoBangKeChiTietPhatThuoc_Xem = 132,
    mBaoCaoBangKeChiTietPhatThuoc_In = 133,

    mBCThang_DoanhThuBan_Xem = 134,
    mBCThang_DoanhThuBan_In = 135,

    mBCThang_KiemKeHangThang_Tim = 136,
    mBCThang_KiemKeHangThang_ChinhSua = 137,
    mBCThang_KiemKeHangThang_XuatExcel = 138,
    mBCThang_KiemKeHangThang_In = 139,

    mBCThang_BCKiemKeHangThang_Xem = 140,
    mBCThang_BCKiemKeHangThang_In = 141,


    mBCNhap_BangKeNhapHangThangTheoSoPhieu_Xem = 145,
    mBCNhap_BangKeNhapHangThangTheoSoPhieu_In = 146,

    mBCNhap_BangKeNhapThuocHangThang_Xem = 147,
    mBCNhap_BangKeNhapThuocHangThang_In = 148,

    mBCNhap_BangKeChungTuThanhToan_Tim = 149,
    mBCNhap_BangKeChungTuThanhToan_ChinhSua = 150,
    mBCNhap_BangKeChungTuThanhToan_InBangKe = 151,
    mBCNhap_BangKeChungTuThanhToan_InDNTT = 152,

    mBCNhap_TheoDoiCongNo_Xem = 153,
    mBCNhap_TheoDoiCongNo_In = 154,

    mBCNhap_TheKho_Xem = 155,
    mBCNhap_TheKho_In = 156,

    mBCXuat_DanhSachXuat_Xem = 157,
    mBCXuat_DanhSachXuat_In = 158,


    mBCBH_ThongKeTongHopThuocThang_Xem = 159,
    mBCBH_ThongKeTongHopThuocThang_In = 160,

    mBCBH_DanhMucThuocThanhToanBHYTThang_Xem = 161,
    mBCBH_DanhMucThuocThanhToanBHYTThang_In = 162,

    mBGBanHangThang_BGBThangDuKien_Xem = 163,
    mBGBanHangThang_BGBThangDuKien_In = 164,

    mBGBanHangThang_BGBThang_Xem = 165,
    mBGBanHangThang_BGBThang_In = 166,

    mBCKhac_NhapXuatTon_Xem = 167,
    mBCKhac_NhapXuatTon_In = 168,
    mBCKhac_NhapXuatTon_KetChuyen = 169,

    mBCKhac_ThuocHetHanDung_Xem = 170,
    mBCKhac_ThuocHetHanDung_In = 171,

    mBCKhac_DSXuatThuocNoiBoNguoiMua_Xem = 172,
    mBCKhac_DSXuatThuocNoiBoNguoiMua_In = 173,

    mBCKhac_DSXuatThuocNoiBoTenThuoc_Xem = 174,
    mBCKhac_DSXuatThuocNoiBoTenThuoc_In = 175,

    mBCKhac_DSXuatThuocChoBH_Xem = 176,
    mBCKhac_DSXuatThuocChoBH_In = 177,

    mBCKhac_BanThuocTongHop_Xem = 178,
    mBCKhac_BanThuocTongHop_In = 179,

    mBCKhac_TheoDoiSoLuongThuoc_Xem = 180,
    mBCKhac_TheoDoiSoLuongThuoc_In = 181,

    mBCKhac_TheoDoiMuonThuoc_Xem = 182,
    mBCKhac_TheoDoiMuonThuoc_In = 183,

    mBCKhac_TraThuocTongHop_Xem = 184,
    mBCKhac_TraThuocTongHop_In = 185,

    mDuTru_ThuocCanLayThemDeBan_Xem = 186,
    mDuTru_ThuocCanLayThemDeBan_In = 187,

    mDuTru_HangNgayTheoSoAnToan_Xem = 188,
    mDuTru_HangNgayTheoSoAnToan_In = 189,

    mDuTru_TongHopTheoSoPhieu_Xem = 190,
    mDuTru_TongHopTheoSoPhieu_In = 191,

    mDuTru_TongHopTheoThuoc_Xem = 192,
    mDuTru_TongHopTheoThuoc_In = 193,

    mThongKe_TonKho_Xem = 194,
    mThongKe_TonKho_In = 195,
    mThongKe_TonKho_ChinhSua = 200,

    mThongKe_BanTheoNgay_Xem = 196,
    mThongKe_BanTheoNgay_In = 197,
    mThongKe_BanTheoNgay_ChinhSua = 200,

    mXuatHuy_Tim = 205,
    mXuatHuy_Them = 206,
    mXuatHuy_ChinhSua = 207,
    mXuatHuy_XemIn = 208,
    mXuatHuy_In = 209,

    mBCNhap_SoKiemNhapThuoc_Xem = 210,
    mBCNhap_SoKiemNhapThuoc_In = 211,
    mBCNhap_SoKiemNhapThuoc_XuatExcel = 212,

    mCount = 213,
}
export enum eTransaction_Management 
{
    mTemp25aInsurance = 1,//"Mẫu 25a"
    mTemplate38 = 2,//"Mẫu 38 (Ngoại Trú)"
    mThongKeDoanhThu = 3,//"Thống Kê Doanh Thu"
                         //KMx: Thêm export enum cho những báo cáo
    mTemp20NgoaiTru = 5,
    mTemp20NoiTru = 6,
    mTemp21NgoaiTru = 7,
    mTemp21NoiTru = 8,
    mTemp26a = 9,
    mTemp01_BV_NgoaiTru = 10,
    mTemp02_BV_NoiTru = 11,
    mTemp02_ChiTietVienPhi_PK = 12,
    mTemp04_ChiTietVienPhi = 13,
    mTempThongKeDoanhThu = 14,
    mTempTongHopDoanhThu_PK = 15,
    mTempTongHopDoanhThu_NTM = 16,

    mBangGiaDichVu = 17,
    mBangGiaCLS = 18,
    mGiaTamUng = 19,

    mTemp79a = 20,
    mTemp79aTraThuoc = 21,
    mTemp80a = 22,

    mTemp19 = 23,
    mTemp20NoiTruNew = 24,
    mTemp21New = 25,
    mBaoCaoBHYT = 26,
    mBaoCaoVienPhiTrai = 27,
    mBaoCaoVienPhiKTC = 28,
    mBaoCaoVTYT_KTC = 29,
    mPaymentReport = 30,
    mTemp06_CanLamSan = 31,
    mTemp07_DuocBV = 32,
    mTemp02_HoatDongKB = 33,
    mTemp02b_TransferFormType2Rpt = 34,
    mChiDaoTuyen = 35,
    mNghienCuuKhoaHoc = 36,
    mTemp02a_TransferFormType2_1Rpt = 37,
    mTemp05_TransferFormType5Rpt = 38,
    mBC15Day = 39,
    mRptDrugMedDept = 40,
    mSXN = 41,
    mCount = 41,
}

export enum oTransaction_ManagementEx 
{
    mExportToExcel = 1,
    mViewAndPrint = 2,
    mSearch = 3,
    mAddNew = 4,
    mEdit = 5,
    mDelete = 6,
    mCount = 7,
}

export enum eYVu_Management 
{
    mThongKeNgoaiTru = 1,//"Thống kê ngoại trú"
    mBaoCaoNhanhKhuKhamBenh = 2,
    mReportInPatient = 3,
    mReportGeneralTemp02 = 4,
    mCount = 5
}

export enum oYVu_ManagementEx 
{
    mExportToExcel = 1,
    mViewAndPrint = 2,
    mSearch = 3,
    mCount = 4
}

export enum eConfiguration_Management 
{
    //mRefDepartmentsMgnt = 1,//"Khoa"
    //mPCLExamTypeMedServiceDefItemsMgnt = 2,//"PCL & Type"
    mBangGiaDichVu = 3,//"Bảng Giá Dịch Vụ"                        
                       //mListLocations1 = 4,//"Phòng"
                       //mListLocations2 = 5,//"Loại Phòng"
                       //mListLocations3 = 6,//"Vật Tư"
                       //mListLocations4 = 7,//"Nhóm Vật Tư"
                       //mListLocations5 = 8,//"Loại Vật Tư"
                       //mPtBedAllocations = 9,//"Giường Bệnh"

    //mPtUserAccount = 10,//"Thêm Người Dùng"
    //mPtModules = 11,//"Quản Lý Modules"
    //mPtModulesTree = 12,//"Quản Lý Modules"
    //mPCLItemsSectionsForms = 13,//PCL-Items,Sections,Forms
    //mRefMedicalServiceTypes = 14,//RefMedicalServiceTypes
    //mDeptLocMedServices = 15,//DeptLocMedServices
    //mCount=16

    mKhoa_VanPhong_Kho = 4,
    mQLDichVu_DonGiaCuaKhoa = 5,
    mDanhMucLoaiDichVu = 6,
    mDanhMucPhong = 7,
    mDanhMucLoaiPhong = 8,
    mQLGoiDichVuCLSCuaKhoa = 9,
    mPhanBoTatCaDichVu_PhongCuaKhoa = 10,
    mDanhMucPCLForm = 11,
    mDanhMucPCLSessions = 12,
    mDanhMucPCLExamTypes = 13,
    mCauHinhPCLExamTypes_Sessions = 14,
    mDanhMucPCLGroup = 15,
    mQuanLyGiuongBenh = 16,
    mBangGiaPCLExamType = 2,
    mCount = 17
}
export enum oConfigurationEx
{
    mQuanLyKhoa_Phong = 2,
    mQuanLyDichVuDonGia = 3,
    mQuanLyLoaiDV = 4,
    mQuanLyDanhSachPhong = 5,
    mQuanLyDSLoaiPhong = 6,
    mQuanLyGoiDV_CLSCuaKhoa = 7,
    mQuanLyDVPhong = 8,
    mQuanLyDanhSachPCLForm = 9,
    mQuanLyDMPCLSessions = 10,
    mQuanLyDMPCLExamType = 11,
    mQuanLySession_PCLExamType = 12,
    mQuanLyDMPCLGroup = 13,
    mDatGiuongChoPhong = 14,
    mQuanLyBGPCLExamType = 15,
    mBangGiaDichVu = 1,
    mCount = 17
}

export enum eSystem_Management 
{
    mPrinterSettings = 1,//"Thiết Lập In Ấn"
    mInstallOutOfBrowser = 2, //"Cài đặt OutOfBrowser"
    mCount = 3
}

export enum oSystem_ManagementEx 
{
    mSave = 1,
    mInstall = 2,
    mTestPrint = 3,
    mCount = 4
}

export enum eResources 
{
    mPtDashboardResource = 1,//"Danh Mục Vật Tư Y Tế"
    mPtDashboardResource_Office = 4,//"Danh Mục Vật Tư Văn Phòng"
    mPtDashboardNewAllocations = 2,//"Phân Bố Vật Tư Y Tế"
    mPtDashboardNewAllocations__Office = 5,//"Phân Bố Vật Tư Văn Phòng"
    mPtDashboardNewTranfers = 3,//"Điều Chuyển Vật Tư"
    mPtDashboardSuppliers = 6,//"Quản lý nhà cung cấp Vật Tư Y Tế"
    mPtDashboardSuppliers_Office = 7,//"Quản lý nhà cung cấp Vật Tư Văn Phòng"
    mReports = 8,//"Báo cáo"
    mCount = 9
}
export enum oResourcesEx 
{
    mResourceList = 1,//"Danh Mục Vật Tư"
    mResourceAllocation = 2,//"Phân Bố Vật Tư "
    mResourceNewTranfers = 3,//"Điều Chuyển Vật Tư"
    mResourceGroup = 4,//"Nhom Vật Tư"
    mResourceType = 5,//"Loai Vật Tư"
    mResourcePro = 6,//"Nha Cung Cap Vật Tư"

    mResourceMoveHis = 7,//"Nha Cung Cap Vật Tư"
    mResourceMaint = 8,//"Nha Cung Cap Vật Tư"

    mCount = 9
}

export enum eResources_Maintenance 
{
    mListRequest = 1,//"Danh Sách"
    mAddNewRequest = 2,//"Thêm Mới"
    mCount = 3
}
export enum oResources_MaintenanceEx 
{
    mRequest = 1,//"Danh Sách"
    mList = 2,//"Danh Sách"
    mState = 3,//"Thêm Mới"
    mCount = 4
}

export enum eAppointment_System 
{
    mPatientAppointment = 1,//"Quản Lý Hẹn Bệnh"
    mAppointmentList = 2,//"Danh Sách Hẹn Bệnh"
    mCount = 3
}
export enum oAppointmentEx 
{
    mQuanLyHenBenh = 1,//"Quản Lý Hẹn Bệnh"
    mDanhSachHenBenh = 2,//"Danh Sách Hẹn Bệnh"
    mCount = 3
}

export enum eUserAccount 
{
    mPtUserList = 1,//"Quản lý danh sách user"
    mPtUserConfig = 2,//"Cấu hình phân quyền"
    mPtHistoryLogin = 3,//"Cấu hình phân quyền"
    mPtListConfig = 4,
    mPtUserInfo = 5,
    mCount = 7
}
export enum oUserAccountEx 
{
    mModuleConfig = 1,//"Quản lý danh sách Chức năng"
    mUserConfig = 2,//"Quản lý danh sách người dùng"
    mDanhSachPhanQuyen = 3,
    //-Các cấu hình phân quyền
    mModule = 4,
    mFunction = 5,
    mRole = 6,
    mPermission = 7,
    mGroup = 8,
    mGroupRole = 9,
    mUserGroup = 10,
    mOperation = 11,
    //---------------------
    mXemDanhSachUser = 11,//Xem danh sách User
    mXemLichSuDangNhap = 21,//Xem lich su dang nhap

    mPtUserInfo_View = 22,
    mCount = 24
}

export enum eKhoaDuoc 
{
    mXuat_Thuoc = 1,
    mXuat_YCu = 2,
    mXuat_HoaChat = 3,

    mTraHang_Thuoc = 4,
    mTraHang_YCu = 5,
    mTraHang_HoaChat = 6,

    mXuatHuy_Thuoc = 7,
    mXuatHuy_YCu = 8,
    mXuatHuy_HoaChat = 9,

    mDuTru_Thuoc = 10,
    mDuTru_YCu = 11,
    mDuTru_HoaChat = 12,

    mDatHang_Thuoc = 13,
    mDatHang_YCu = 14,
    mDatHang_HoaChat = 15,

    mNhapHangNCC_Thuoc = 16,
    mNhapHangNCC_YCu = 17,
    mNhapHangNCC_HoaChat = 18,

    mNhapPhanBoPhi_Thuoc = 19,
    mNhapPhanBoPhi_YCu = 20,
    mNhapPhanBoPhi_HoaChat = 21,

    mPhieuDNThanhToan_Thuoc = 22,
    mPhieuDNThanhToan_YCu = 23,
    mPhieuDNThanhToan_HoaChat = 24,

    mKiemKe_Thuoc = 25,
    mKiemKe_YCu = 26,
    mKiemKe_HoaChat = 27,

    mBaoCaoXuat_Thuoc = 28,
    mBaoCaoXuat_YCu = 29,
    mBaoCaoXuat_HoaChat = 30,

    mBaoCaoXuatNhapTon_Thuoc = 31,
    mBaoCaoXuatNhapTon_YCu = 32,
    mBaoCaoXuatNhapTon_HoaChat = 33,

    mBaoCaoTheKho_Thuoc = 34,
    mBaoCaoTheKho_YCu = 35,
    mBaoCaoTheKho_HoaChat = 36,

    mQLNCCNSX_NCC = 37,
    mQLNCCNSX_NSX = 38,
    mQLNCCNSX_NCCNSX = 39,

    mQLDanhMuc_Thuoc = 40,
    mQLDanhMuc_YCu = 41,
    mQLDanhMuc_HoaChat = 42,

    mGiaTuNCC_Thuoc = 43,
    mGiaTuNCC_YCu = 44,
    mGiaTuNCC_HoaChat = 45,

    mThangGiaBan_Thuoc = 46,
    mThangGiaBan_YCu = 47,
    mThangGiaBan_HoaChat = 48,

    mGiaBan_Thuoc = 49,
    mGiaBan_YCu = 50,
    mGiaBan_HoaChat = 51,

    mBangGiaBan_Thuoc = 52,
    mBangGiaBan_YCu = 53,
    mBangGiaBan_HoaChat = 54,

    //--Ny them mot so phan

    mBaoCaoDSPhieuNhapKho_Thuoc = 58,
    mBaoCaoDSPhieuNhapKho_YCu = 59,
    mBaoCaoDSPhieuNhapKho_HoaChat = 60,

    mBaoCaoSuDung_Thuoc = 61,

    mBaoCaoNhapXuatDenKhoaPhong_Thuoc = 64,
    mBaoCaoNhapXuatDenKhoaPhong_YCu = 65,
    mBaoCaoNhapXuatDenKhoaPhong_HoaChat = 66,

    mBaoCaoTheoDoiCongNo_Thuoc = 67,
    mBaoCaoTheoDoiCongNo_YCu = 68,
    mBaoCaoTheoDoiCongNo_HoaChat = 69,

    //them ngay 28-07-2012
    mDuyetPhieuLinhHang_Thuoc = 70,
    mDuyetPhieuLinhHang_YCu = 71,
    mDuyetPhieuLinhHang_HoaChat = 72,

    mXuatHangKyGui_Thuoc = 73,
    mXuatHangKyGui_YCu = 74,
    mXuatHangKyGui_HoaChat = 75,

    mSapNhapHangKyGui_Thuoc = 76,
    mSapNhapHangKyGui_YCu = 77,
    mSapNhapHangKyGui_HoaChat = 78,

    mNhapTraTuKhoPhong_Thuoc = 79,
    mNhapTraTuKhoPhong_YCu = 80,
    mNhapTraTuKhoPhong_HoaChat = 81,

    mQLNhomHang_Thuoc = 82,
    mQLNhomHang_YCu = 83,
    mQLNhomHang_HoaChat = 84,

    mQuanLyDonViTinh = 85,

    mXuatTheoToa_Thuoc = 86,

    mAdjustOutPrice_Med = 87,
    mAdjustOutPrice_Mat = 88,
    mAdjustOutPrice_Lab = 89,

    mQuanLyDanhMucBHYT = 90,

    mWatchMedCmd = 91,
    mWatchMatCmd = 92,
    mWatchLabCmd = 93,
    /*TMA 23/10/2017*/
    mBaoCaoNhap_Thuoc = 94,
    mBaoNhapXuat_YCu = 95,
    mBaoNhapXuat_HoaChat = 96,

    /*▼====: #003*/
    TheoDoiHangKyGoi_Thuoc = 97,
    TheoDoiHangKyGoi_YCu = 98,
    TheoDoiHangKyGoi_HoaChat = 99,
    /*▲====: #003*/

    mQLNhomHang_HoatChat = 100,

    mDailyPrescriptionFromDrugDept = 101,

    mCount = 101
}
export enum oKhoaDuocEx 
{
    mXuat_Thuoc_Tim = 1,
    mXuat_Thuoc_PhieuMoi = 2,
    mXuat_Thuoc_ThucHien = 3,
    mXuat_Thuoc_ThuTien = 4,
    mXuat_Thuoc_In = 5,

    mXuat_YCu_Tim = 6,
    mXuat_YCu_PhieuMoi = 7,
    mXuat_YCu_ThucHien = 8,
    mXuat_YCu_ThuTien = 9,
    mXuat_YCu_In = 10,

    mXuat_HoaChat_Tim = 11,
    mXuat_HoaChat_PhieuMoi = 12,
    mXuat_HoaChat_ThucHien = 13,
    mXuat_HoaChat_ThuTien = 14,
    mXuat_HoaChat_In = 15,

    mTraHang_Thuoc_Tim = 16,
    mTraHang_Thuoc_Luu = 17,
    mTraHang_Thuoc_TraTien = 18,
    mTraHang_Thuoc_In = 19,

    mTraHang_YCu_Tim = 20,
    mTraHang_YCu_Luu = 21,
    mTraHang_YCu_TraTien = 22,
    mTraHang_YCu_In = 23,

    mTraHang_HoaChat_Tim = 25,
    mTraHang_HoaChat_Luu = 26,
    mTraHang_HoaChat_TraTien = 27,
    mTraHang_HoaChat_In = 28,


    mXuatHuy_Thuoc_Tim = 30,
    mXuatHuy_Thuoc_ThemMoi = 31,
    mXuatHuy_Thuoc_XuatExcel = 32,
    mXuatHuy_Thuoc_XemIn = 33,


    mXuatHuy_YCu_Tim = 35,
    mXuatHuy_YCu_ThemMoi = 36,
    mXuatHuy_YCu_XuatExcel = 37,
    mXuatHuy_YCu_XemIn = 38,

    mXuatHuy_HoaChat_Tim = 40,
    mXuatHuy_HoaChat_ThemMoi = 41,
    mXuatHuy_HoaChat_XuatExcel = 42,
    mXuatHuy_HoaChat_XemIn = 43,

    mDuTru_Thuoc_Tim = 45,
    mDuTru_Thuoc_ThemMoi = 46,
    mDuTru_Thuoc_Xoa = 47,
    mDuTru_Thuoc_XemIn = 48,


    mDuTru_YCu_Tim = 50,
    mDuTru_YCu_ThemMoi = 51,
    mDuTru_YCu_Xoa = 52,
    mDuTru_YCu_XemIn = 53,

    mDuTru_HoaChat_Tim = 55,
    mDuTru_HoaChat_ThemMoi = 56,
    mDuTru_HoaChat_Xoa = 57,
    mDuTru_HoaChat_XemIn = 58,

    mDatHang_Thuoc_DSCanDatHang = 60,
    mDatHang_Thuoc_Tim = 61,
    mDatHang_Thuoc_ChinhSua = 62,
    mDatHang_Thuoc_ThemMoi = 63,
    mDatHang_Thuoc_In = 64,

    mDatHang_YCu_DSCanDatHang = 65,
    mDatHang_YCu_Tim = 66,
    mDatHang_YCu_ChinhSua = 67,
    mDatHang_YCu_ThemMoi = 68,
    mDatHang_YCu_In = 69,

    mDatHang_HoaChat_DSCanDatHang = 70,
    mDatHang_HoaChat_Tim = 71,
    mDatHang_HoaChat_ChinhSua = 72,
    mDatHang_HoaChat_ThemMoi = 73,
    mDatHang_HoaChat_In = 74,

    mNhapHangNCC_Thuoc_Tim = 75,
    mNhapHangNCC_Thuoc_ThemMoi = 76,
    mNhapHangNCC_Thuoc_CapNhat = 77,
    mNhapHangNCC_Thuoc_In = 78,

    mNhapHangNCC_YCu_Tim = 80,
    mNhapHangNCC_YCu_ThemMoi = 81,
    mNhapHangNCC_YCu_CapNhat = 82,
    mNhapHangNCC_YCu_In = 83,


    mNhapHangNCC_HoaChat_Tim = 85,
    mNhapHangNCC_HoaChat_ThemMoi = 86,
    mNhapHangNCC_HoaChat_CapNhat = 87,
    mNhapHangNCC_HoaChat_In = 88,

    mNhapPhanBoPhi_Thuoc_Tim = 90,
    mNhapPhanBoPhi_Thuoc_ChinhSua_Them = 91,
    mNhapPhanBoPhi_Thuoc_In = 92,

    mNhapPhanBoPhi_YCu_Tim = 95,
    mNhapPhanBoPhi_YCu_ChinhSua_Them = 96,
    mNhapPhanBoPhi_YCu_In = 97,


    mNhapPhanBoPhi_HoaChat_Tim = 100,
    mNhapPhanBoPhi_HoaChat_ChinhSua_Them = 101,
    mNhapPhanBoPhi_HoaChat_In = 102,


    mPhieuDNThanhToan_Thuoc_Tim = 105,
    mPhieuDNThanhToan_Thuoc_PhieuMoi = 106,
    mPhieuDNThanhToan_Thuoc_Xoa = 107,
    mPhieuDNThanhToan_Thuoc_XemInBK = 108,
    mPhieuDNThanhToan_Thuoc_XemInPDNTT = 109,


    mPhieuDNThanhToan_YCu_Tim = 110,
    mPhieuDNThanhToan_YCu_PhieuMoi = 111,
    mPhieuDNThanhToan_YCu_Xoa = 112,
    mPhieuDNThanhToan_YCu_XemInBK = 113,
    mPhieuDNThanhToan_YCu_XemInPDNTT = 114,

    mPhieuDNThanhToan_HoaChat_Tim = 115,
    mPhieuDNThanhToan_HoaChat_PhieuMoi = 116,
    mPhieuDNThanhToan_HoaChat_Xoa = 117,
    mPhieuDNThanhToan_HoaChat_XemInBK = 118,
    mPhieuDNThanhToan_HoaChat_XemInPDNTT = 119,

    mKiemKe_Thuoc_Tim = 120,
    mKiemKe_Thuoc_ThemMoi = 121,
    mKiemKe_Thuoc_XuatExcel = 122,
    mKiemKe_Thuoc_XemIn = 123,

    mKiemKe_YCu_Tim = 125,
    mKiemKe_YCu_ThemMoi = 126,
    mKiemKe_YCu_XuatExcel = 127,
    mKiemKe_YCu_XemIn = 128,

    mKiemKe_HoaChat_Tim = 130,
    mKiemKe_HoaChat_ThemMoi = 131,
    mKiemKe_HoaChat_XuatExcel = 132,
    mKiemKe_HoaChat_XemIn = 133,

    mBaoCaoXuat_Thuoc_XemIn = 135,
    mBaoCaoXuat_YCu_XemIn = 136,
    mBaoCaoXuat_HoaChat_XemIn = 137,

    mBaoCaoXuatNhapTon_Thuoc_XemIn = 140,
    mBaoCaoXuatNhapTon_Thuoc_KetChuyen = 141,
    mBaoCaoXuatNhapTon_YCu_XemIn = 142,
    mBaoCaoXuatNhapTon_YCu_KetChuyen = 143,
    mBaoCaoXuatNhapTon_HoaChat_XemIn = 144,
    mBaoCaoXuatNhapTon_HoaChat_KetChuyen = 145,

    mBaoCaoTheKho_Thuoc_Xem = 150,
    mBaoCaoTheKho_Thuoc_In = 151,

    mBaoCaoTheKho_YCu_Xem = 152,
    mBaoCaoTheKho_YCu_In = 153,

    mBaoCaoTheKho_HoaChat_Xem = 154,
    mBaoCaoTheKho_HoaChat_In = 155,


    mQLNCCNSX_NCC_Tim = 160,
    mQLNCCNSX_NCC_ThemMoi = 161,

    mQLNCCNSX_NSX_Tim = 162,
    mQLNCCNSX_NSX_ThemMoi = 163,

    mQLNCCNSX_NCCNSX_Tim = 164,
    mQLNCCNSX_NCCNSX_ThemMoi = 165,

    mQLNCCNSX_NCC_ChinhSua = 166,
    mQLNCCNSX_NSX_ChinhSua = 167,
    mQLNCCNSX_NCCNSX_ChinhSua = 168,

    mQLDanhMuc_Thuoc_Tim = 170,
    mQLDanhMuc_Thuoc_ThemMoi = 171,
    mQLDanhMuc_Thuoc_ChinhSua = 169,

    mQLDanhMuc_YCu_Tim = 172,
    mQLDanhMuc_YCu_ThemMoi = 173,
    mQLDanhMuc_YCu_ChinhSua = 176,

    mQLDanhMuc_HoaChat_Tim = 174,
    mQLDanhMuc_HoaChat_ThemMoi = 175,
    mQLDanhMuc_HoaChat_ChinhSua = 177,



    mGiaTuNCC_Thuoc_Tim = 178,
    mGiaTuNCC_Thuoc_QuanLy = 179,
    mGiaTuNCC_Thuoc_TaoGiaMoi = 180,
    mGiaTuNCC_Thuoc_SuaGia = 181,

    mGiaTuNCC_YCu_Tim = 182,
    mGiaTuNCC_YCu_QuanLy = 183,
    mGiaTuNCC_YCu_TaoGiaMoi = 184,
    mGiaTuNCC_YCu_SuaGia = 185,

    mGiaTuNCC_HoaChat_Tim = 186,
    mGiaTuNCC_HoaChat_QuanLy = 187,
    mGiaTuNCC_HoaChat_TaoGiaMoi = 188,
    mGiaTuNCC_HoaChat_SuaGia = 189,


    mThangGiaBan_Thuoc_Tim = 190,
    mThangGiaBan_Thuoc_TaoMoiCTGia = 191,
    mThangGiaBan_Thuoc_ChinhSua = 192,

    mThangGiaBan_YCu_Tim = 195,
    mThangGiaBan_YCu_TaoMoiCTGia = 196,
    mThangGiaBan_YCu_ChinhSua = 197,

    mThangGiaBan_HoaChat_Tim = 200,
    mThangGiaBan_HoaChat_TaoMoiCTGia = 201,
    mThangGiaBan_HoaChat_ChinhSua = 202,

    mGiaBan_Thuoc_Tim = 205,
    mGiaBan_Thuoc_ChinhSua = 206,
    mGiaBan_Thuoc_XemDSGia = 207,
    mGiaBan_Thuoc_TaoGiaMoi = 208,
    mGiaBan_Thuoc_ChinhSuaGia = 209,

    mGiaBan_YCu_Tim = 210,
    mGiaBan_YCu_ChinhSua = 211,
    mGiaBan_YCu_XemDSGia = 212,
    mGiaBan_YCu_TaoGiaMoi = 213,
    mGiaBan_YCu_ChinhSuaGia = 214,

    mGiaBan_HoaChat_Tim = 215,
    mGiaBan_HoaChat_ChinhSua = 216,
    mGiaBan_HoaChat_XemDSGia = 217,
    mGiaBan_HoaChat_TaoGiaMoi = 218,
    mGiaBan_HoaChat_ChinhSuaGia = 219,

    mBangGiaBan_Thuoc_Xem = 220,
    mBangGiaBan_Thuoc_ChinhSua = 221,
    mBangGiaBan_Thuoc_TaoBangGia = 222,
    mBangGiaBan_Thuoc_PreView = 223,
    mBangGiaBan_Thuoc_In = 224,

    mBangGiaBan_YCu_Xem = 225,
    mBangGiaBan_YCu_ChinhSua = 226,
    mBangGiaBan_YCu_TaoBangGia = 227,
    mBangGiaBan_YCu_PreView = 228,
    mBangGiaBan_YCu_In = 229,

    mBangGiaBan_HoaChat_Xem = 230,
    mBangGiaBan_HoaChat_ChinhSua = 231,
    mBangGiaBan_HoaChat_TaoBangGia = 232,
    mBangGiaBan_HoaChat_PreView = 233,
    mBangGiaBan_HoaChat_In = 234,

    //---Them moi mot so phan cua NY
    mPhieuDeNghiThanhToan_Thuoc_Tim = 235,
    mPhieuDeNghiThanhToan_Thuoc_ThemMoi = 236,
    mPhieuDeNghiThanhToan_Thuoc_ChinhSua = 237,
    mPhieuDeNghiThanhToan_Thuoc_XemInBK = 238,
    mPhieuDeNghiThanhToan_Thuoc_XemInPDNTT = 239,

    mPhieuDeNghiThanhToan_YCu_Tim = 240,
    mPhieuDeNghiThanhToan_YCu_ThemMoi = 241,
    mPhieuDeNghiThanhToan_YCu_ChinhSua = 242,
    mPhieuDeNghiThanhToan_YCu_XemInBK = 243,
    mPhieuDeNghiThanhToan_YCu_XemInPDNTT = 244,

    mPhieuDeNghiThanhToan_HoaChat_Tim = 245,
    mPhieuDeNghiThanhToan_HoaChat_ThemMoi = 246,
    mPhieuDeNghiThanhToan_HoaChat_ChinhSua = 247,
    mPhieuDeNghiThanhToan_HoaChat_XemInBK = 248,
    mPhieuDeNghiThanhToan_HoaChat_XemInPDNTT = 249,


    mBaoCaoDSPhieuNhapKho_Thuoc_XemIn = 250,
    mBaoCaoDSPhieuNhapKho_Thuoc_In = 251,

    mBaoCaoDSPhieuNhapKho_YCu_XemIn = 252,
    mBaoCaoDSPhieuNhapKho_YCu_In = 253,

    mBaoCaoDSPhieuNhapKho_HoaChat_XemIn = 254,
    mBaoCaoDSPhieuNhapKho_HoaChat_In = 255,


    mBaoCaoSuDung_Thuoc_XemIn = 260,
    mBaoCaoSuDung_Thuoc_In = 261,


    mBaoCaoNhapXuatDenKhoaPhong_Thuoc_In = 270,
    mBaoCaoNhapXuatDenKhoaPhong_Thuoc_XuatExcel = 271,

    mBaoCaoNhapXuatDenKhoaPhong_YCu_In = 272,
    mBaoCaoNhapXuatDenKhoaPhong_YCu_XuatExcel = 273,

    mBaoCaoNhapXuatDenKhoaPhong_HoaChat_In = 274,
    mBaoCaoNhapXuatDenKhoaPhong_HoaChat_XuatExcel = 275,

    //them ngay 28-07-2012
    mBaoCaoTheoDoiCongNo_Thuoc_Xem = 280,
    mBaoCaoTheoDoiCongNo_Thuoc_In = 281,

    mBaoCaoTheoDoiCongNo_YCu_Xem = 282,
    mBaoCaoTheoDoiCongNo_YCu_In = 283,

    mBaoCaoTheoDoiCongNo_HoaChat_Xem = 284,
    mBaoCaoTheoDoiCongNo_HoaChat_In = 285,

    mDuyetPhieuLinhHang_Thuoc_Tim = 290,
    mDuyetPhieuLinhHang_Thuoc_PhieuMoi = 291,
    mDuyetPhieuLinhHang_Thuoc_XuatHang = 292,
    mDuyetPhieuLinhHang_Thuoc_XemInTH = 293,
    mDuyetPhieuLinhHang_Thuoc_XemInCT = 294,

    mDuyetPhieuLinhHang_YCu_Tim = 295,
    mDuyetPhieuLinhHang_YCu_PhieuMoi = 296,
    mDuyetPhieuLinhHang_YCu_XuatHang = 297,
    mDuyetPhieuLinhHang_YCu_XemInTH = 298,
    mDuyetPhieuLinhHang_YCu_XemInCT = 299,

    mDuyetPhieuLinhHang_HoaChat_Tim = 300,
    mDuyetPhieuLinhHang_HoaChat_PhieuMoi = 301,
    mDuyetPhieuLinhHang_HoaChat_XuatHang = 302,
    mDuyetPhieuLinhHang_HoaChat_XemInTH = 303,
    mDuyetPhieuLinhHang_HoaChat_XemInCT = 304,


    mXuatHangKyGui_Thuoc_Tim = 310,
    mXuatHangKyGui_Thuoc_PhieuMoi = 311,
    mXuatHangKyGui_Thuoc_ThuTien = 312,
    mXuatHangKyGui_Thuoc_XemIn = 313,
    mXuatHangKyGui_Thuoc_In = 314,

    mXuatHangKyGui_YCu_Tim = 315,
    mXuatHangKyGui_YCu_PhieuMoi = 316,
    mXuatHangKyGui_YCu_ThuTien = 317,
    mXuatHangKyGui_YCu_XemIn = 318,
    mXuatHangKyGui_YCu_In = 319,

    mXuatHangKyGui_HoaChat_Tim = 320,
    mXuatHangKyGui_HoaChat_PhieuMoi = 321,
    mXuatHangKyGui_HoaChat_ThuTien = 322,
    mXuatHangKyGui_HoaChat_XemIn = 323,
    mXuatHangKyGui_HoaChat_In = 324,


    mSapNhapHangKyGui_Thuoc_Tim = 330,
    mSapNhapHangKyGui_Thuoc_PhieuMoi = 331,
    mSapNhapHangKyGui_Thuoc_CapNhat = 332,
    mSapNhapHangKyGui_Thuoc_Xoa = 333,
    mSapNhapHangKyGui_Thuoc_XemIn = 334,
    mSapNhapHangKyGui_Thuoc_In = 335,

    mSapNhapHangKyGui_YCu_Tim = 336,
    mSapNhapHangKyGui_YCu_PhieuMoi = 337,
    mSapNhapHangKyGui_YCu_CapNhat = 338,
    mSapNhapHangKyGui_YCu_Xoa = 339,
    mSapNhapHangKyGui_YCu_XemIn = 340,
    mSapNhapHangKyGui_YCu_In = 341,

    mSapNhapHangKyGui_HoaChat_Tim = 342,
    mSapNhapHangKyGui_HoaChat_PhieuMoi = 343,
    mSapNhapHangKyGui_HoaChat_CapNhat = 344,
    mSapNhapHangKyGui_HoaChat_Xoa = 345,
    mSapNhapHangKyGui_HoaChat_XemIn = 346,
    mSapNhapHangKyGui_HoaChat_In = 347,


    mNhapTraTuKhoPhong_Thuoc_Tim = 350,
    mNhapTraTuKhoPhong_Thuoc_PhieuMoi = 351,
    mNhapTraTuKhoPhong_Thuoc_XemIn = 352,
    mNhapTraTuKhoPhong_Thuoc_In = 353,

    mNhapTraTuKhoPhong_YCu_Tim = 355,
    mNhapTraTuKhoPhong_YCu_PhieuMoi = 356,
    mNhapTraTuKhoPhong_YCu_XemIn = 357,
    mNhapTraTuKhoPhong_YCu_In = 358,

    mNhapTraTuKhoPhong_HoaChat_Tim = 360,
    mNhapTraTuKhoPhong_HoaChat_PhieuMoi = 361,
    mNhapTraTuKhoPhong_HoaChat_XemIn = 362,
    mNhapTraTuKhoPhong_HoaChat_In = 363,

    mQLNhomHang_Thuoc_Tim = 364,
    mQLNhomHang_Thuoc_ThemMoi = 365,
    mQLNhomHang_Thuoc_ChinhSua = 366,

    mQLNhomHang_YCu_Tim = 367,
    mQLNhomHang_YCu_ThemMoi = 368,
    mQLNhomHang_YCu_ChinhSua = 369,

    mQLNhomHang_HoaChat_Tim = 370,
    mQLNhomHang_HoaChat_ThemMoi = 371,
    mQLNhomHang_HoaChat_ChinhSua = 372,

    mQuanLyDonViTinh_Tim = 373,
    mQuanLyDonViTinh_Them = 374,
    mQuanLyDonViTinh_ChinhSua = 375,

    mXuatTheoToa_Thuoc_TimToa = 376,
    mXuatTheoToa_Thuoc_ThemThuoc = 377,
    mXuatTheoToa_Thuoc_TimPhieuXuat = 378,
    mXuatTheoToa_Thuoc_Xuat = 379,
    mXuatTheoToa_Thuoc_HuyPhieu = 380,
    mXuatTheoToa_Thuoc_CapNhat = 381,
    mXuatTheoToa_Thuoc_InPhieuXuat = 382,
    mXuatTheoToa_Thuoc_TaoBill = 383,
    mXuatTheoToa_Thuoc_InBill = 384,

    //KMx: 04/01/2015 11:17.
    mXuat_Thuoc_DeleteInvoice = 385,
    mXuat_Thuoc_PrintReceipt = 386,

    mXuat_YCu_DeleteInvoice = 387,
    mXuat_YCu_PrintReceipt = 388,

    mXuat_HoaChat_DeleteInvoice = 389,
    mXuat_HoaChat_PrintReceipt = 390,

    mXuatHangKyGui_Thuoc_Save = 391,
    mXuatHangKyGui_Thuoc_DeleteInvoice = 392,
    mXuatHangKyGui_Thuoc_PrintReceipt = 393,

    mXuatHangKyGui_YCu_Save = 394,
    mXuatHangKyGui_YCu_DeleteInvoice = 395,
    mXuatHangKyGui_YCu_PrintReceipt = 396,

    mXuatHangKyGui_HoaChat_Save = 397,
    mXuatHangKyGui_HoaChat_DeleteInvoice = 398,
    mXuatHangKyGui_HoaChat_PrintReceipt = 399,

    mWatchMedOutQty_Preview = 400,
    mWatchMedOutQty_Print = 401,

    mWatchMatOutQty_Preview = 402,
    mWatchMatOutQty_Print = 403,

    mWatchLabOutQty_Preview = 404,
    mWatchLabOutQty_Print = 405,

    mQLNhomHang_HoatChat_Tim = 407,
    mQLNhomHang_HoatChat_ThemMoi = 408,
    mQLNhomHang_HoatChat_ChinhSua = 409,

    mCount = 415
}

export enum eKhoPhong 
{
    mPhieuYeuCau_Thuoc = 1,
    mPhieuYeuCau_YCu = 2,
    mPhieuYeuCau_HoaChat = 3,

    mNhapHangTuNCC_Thuoc = 4,
    mNhapHangTuNCC_YCu = 5,
    mNhapHangTuNCC_HoaChat = 6,

    mNhapHangTuKhoDuoc_Thuoc = 7,
    mNhapHangTuKhoDuoc_YCu = 8,
    mNhapHangTuKhoDuoc_HoaChat = 9,

    mKiemKe_Thuoc = 10,
    mKiemKe_YCu = 11,
    mKiemKe_HoaChat = 12,

    mThongKe_Thuoc = 13,
    mThongKe_YCu = 14,
    mThongKe_HoaChat = 15,

    mBCXuat_Thuoc = 16,
    mBCXuat_YCu = 17,
    mBCXuat_HoaChat = 18,

    mBCNhapXuatTon_Thuoc = 19,
    mBCNhapXuatTon_YCu = 20,
    mBCNhapXuatTon_HoaChat = 21,

    mBCTheKho_Thuoc = 22,
    mBCTheKho_YCu = 23,
    mBCTheKho_HoaChat = 24,

    mDanhMuc_Thuoc = 25,
    mDanhMuc_YCu = 26,
    mDanhMuc_HoaChat = 27,

    mGiaBan_Thuoc = 28,
    mGiaBan_YCu = 29,
    mGiaBan_HoaChat = 30,

    // kho noi tru moi ngay 25-07-2012

    mXuatTraHang_Thuoc = 31,
    mXuatTraHang_YCu = 32,
    mXuatTraHang_HoaChat = 33,

    mXuatChoBenhNhan_Thuoc = 35,
    mXuatChoBenhNhan_YCu = 36,
    mXuatChoBenhNhan_HoaChat = 37,

    mTaoMauXuat_Thuoc = 38,
    mTaoMauXuat_YCu = 39,
    mTaoMauXuat_HoaChat = 40,

    mCount = 43
}
export enum oKhoPhongEx 
{
    mPhieuYeuCau_Thuoc_Tim = 1,
    mPhieuYeuCau_Thuoc_Them = 2,
    mPhieuYeuCau_Thuoc_Xoa = 3,
    mPhieuYeuCau_Thuoc_XemIn = 4,
    mPhieuYeuCau_Thuoc_In = 5,

    mPhieuYeuCau_YCu_Tim = 6,
    mPhieuYeuCau_YCu_Them = 7,
    mPhieuYeuCau_YCu_Xoa = 8,
    mPhieuYeuCau_YCu_XemIn = 9,
    mPhieuYeuCau_YCu_In = 10,


    mPhieuYeuCau_HoaChat_Tim = 11,
    mPhieuYeuCau_HoaChat_Them = 12,
    mPhieuYeuCau_HoaChat_Xoa = 13,
    mPhieuYeuCau_HoaChat_XemIn = 14,
    mPhieuYeuCau_HoaChat_In = 15,


    mNhapHangTuNCC_Thuoc_Tim = 16,
    mNhapHangTuNCC_Thuoc_Them = 17,
    mNhapHangTuNCC_Thuoc_XemIn = 18,
    mNhapHangTuNCC_Thuoc_In = 19,


    mNhapHangTuNCC_YCu = 20,
    mNhapHangTuNCC_YCu_Tim = 21,
    mNhapHangTuNCC_YCu_Them = 22,
    mNhapHangTuNCC_YCu_XemIn = 22,
    mNhapHangTuNCC_YCu_In = 23,

    mNhapHangTuNCC_HoaChat_Tim = 25,
    mNhapHangTuNCC_HoaChat_Them = 26,
    mNhapHangTuNCC_HoaChat_XemIn = 27,
    mNhapHangTuNCC_HoaChat_In = 28,


    mNhapHangTuKhoDuoc_Thuoc_Tim = 30,
    mNhapHangTuKhoDuoc_Thuoc_Them = 31,
    mNhapHangTuKhoDuoc_Thuoc_XemIn = 32,
    mNhapHangTuKhoDuoc_Thuoc_In = 33,

    mNhapHangTuKhoDuoc_YCu_Tim = 35,
    mNhapHangTuKhoDuoc_YCu_Them = 36,
    mNhapHangTuKhoDuoc_YCu_XemIn = 37,
    mNhapHangTuKhoDuoc_YCu_In = 38,

    mNhapHangTuKhoDuoc_HoaChat_Tim = 40,
    mNhapHangTuKhoDuoc_HoaChat_Them = 41,
    mNhapHangTuKhoDuoc_HoaChat_XemIn = 42,
    mNhapHangTuKhoDuoc_HoaChat_In = 43,


    mKiemKe_Thuoc_Tim = 45,
    mKiemKe_Thuoc_ThemMoi = 46,
    mKiemKe_Thuoc_XuatExcel = 47,
    mKiemKe_Thuoc_XemIn = 48,

    mKiemKe_YCu_Tim = 50,
    mKiemKe_YCu_ThemMoi = 51,
    mKiemKe_YCu_XuatExcel = 52,
    mKiemKe_YCu_XemIn = 53,

    mKiemKe_HoaChat_Tim = 55,
    mKiemKe_HoaChat_ThemMoi = 56,
    mKiemKe_HoaChat_XuatExcel = 57,
    mKiemKe_HoaChat_XemIn = 58,


    mThongKe_Thuoc_xem = 60,
    mThongKe_Thuoc_PhieuMoi = 61,
    mThongKe_Thuoc_XemIn = 62,
    mThongKe_Thuoc_In = 63,

    mThongKe_YCu_xem = 65,
    mThongKe_YCu_PhieuMoi = 66,
    mThongKe_YCu_XemIn = 67,
    mThongKe_YCu_In = 68,

    mThongKe_HoaChat_xem = 70,
    mThongKe_HoaChat_PhieuMoi = 71,
    mThongKe_HoaChat_XemIn = 72,
    mThongKe_HoaChat_In = 73,

    mBaoCaoXuat_Thuoc_XemIn = 75,
    mBaoCaoXuat_YCu_XemIn = 76,
    mBaoCaoXuat_HoaChat_XemIn = 77,

    mBaoCaoXuatNhapTon_Thuoc_XemIn = 80,
    mBaoCaoXuatNhapTon_Thuoc_KetChuyen = 81,
    mBaoCaoXuatNhapTon_YCu_XemIn = 82,
    mBaoCaoXuatNhapTon_YCu_KetChuyen = 83,
    mBaoCaoXuatNhapTon_HoaChat_XemIn = 84,
    mBaoCaoXuatNhapTon_HoaChat_KetChuyen = 85,

    mBaoCaoTheKho_Thuoc_Xem = 90,
    mBaoCaoTheKho_Thuoc_In = 91,

    mBaoCaoTheKho_YCu_Xem = 92,
    mBaoCaoTheKho_YCu_In = 93,

    mBaoCaoTheKho_HoaChat_Xem = 94,
    mBaoCaoTheKho_HoaChat_In = 95,

    mQLDanhMuc_Thuoc_Tim = 100,
    mQLDanhMuc_YCu_Tim = 101,
    mQLDanhMuc_HoaChat_Tim = 102,

    mGiaBan_Thuoc_Tim = 105,
    mGiaBan_Thuoc_XemDSGia = 106,

    mGiaBan_YCu_Tim = 107,
    mGiaBan_YCu_XemDSGia = 108,

    mGiaBan_HoaChat_Tim = 109,
    mGiaBan_HoaChat_XemDSGia = 200,

    //them moi ngay 25-07-2012
    //XuatTraHang
    mXuatTraHang_Thuoc_Xem = 201,
    mXuatTraHang_Thuoc_PhieuMoi = 202,
    mXuatTraHang_Thuoc_XemIn = 203,
    mXuatTraHang_Thuoc_In = 204,

    mXuatTraHang_YCu_Xem = 206,
    mXuatTraHang_YCu_PhieuMoi = 207,
    mXuatTraHang_YCu_XemIn = 208,
    mXuatTraHang_YCu_In = 209,

    mXuatTraHang_HoaChat_Xem = 211,
    mXuatTraHang_HoaChat_PhieuMoi = 212,
    mXuatTraHang_HoaChat_XemIn = 213,
    mXuatTraHang_HoaChat_In = 214,

    //XuatChoBenhNhan
    mXuatChoBenhNhan_Thuoc_Xem = 220,
    mXuatChoBenhNhan_Thuoc_PhieuMoi = 221,
    mXuatChoBenhNhan_Thuoc_XemIn = 222,
    mXuatChoBenhNhan_Thuoc_In = 223,

    mXuatChoBenhNhan_YCu_Xem = 225,
    mXuatChoBenhNhan_YCu_PhieuMoi = 226,
    mXuatChoBenhNhan_YCu_XemIn = 227,
    mXuatChoBenhNhan_YCu_In = 228,

    mXuatChoBenhNhan_HoaChat_Xem = 230,
    mXuatChoBenhNhan_HoaChat_PhieuMoi = 231,
    mXuatChoBenhNhan_HoaChat_XemIn = 232,
    mXuatChoBenhNhan_HoaChat_In = 233,


    mCount = 240
}

export enum eModuleGeneral 
{
    mInsurance = 6,
    //mFindPatient = 3,
    //mCreatePatient = 2,
    //mCreateConsultation = 1,
    //mDichVuMoi=8,
    //mDichVuDaThanhToan=9,
    //mBenhNhan=10,
    //mDangKyBenhNhan=11,
    //mThongTinChungBN=12,
    mTheBH = 13,
    mToaThuoc = 14,

    mThongTinBN = 15,
    mThongTinChungBN = 16,
    mTimKiemBN = 17,

    mCanChange_DatetimeExOrImProduct_DrugDept = 18,
    mCanChange_DatetimeExOrImProduct_StoreDept = 19,



    mCount = 20,

}
export enum oModuleGeneralEX 
{
    //bao hiem
    mInsurance = 6,
    //----------------
    mFindPatient = 3,
    mCreatePatient = 2,
    mCreateConsultation = 1,


    mDichVuMoi = 7,
    mDichVuMoi_TraTien = 8,
    mDichVuDaThanhToan = 9,
    mDichVuDaThanhToan_TraTien = 10,

    mBenhNhan_TimBN = 11,
    mBenhNhan_DangKyBN = 12,
    mDangKyBenhNhan_TimDK = 13,
    mDangKyBenhNhan_DK = 14,

    //mThongTinChungBN_View = 15,
    mThongTinChungBN_Edit = 16,
    mTheBH_View = 17,
    mTheBH_Edit = 18,

    mToaThuocDaPhatHanh_ThongTin = 20,
    mToaThuocDaPhatHanh_ChinhSua = 21,
    mToaThuocDaPhatHanh_TaoToaMoi = 22,
    mToaThuocDaPhatHanh_PhatHanhLai = 23,
    mToaThuocDaPhatHanh_In = 24,
    mToaThuocDaPhatHanh_ChonChanDoan = 25,


    mThongTinBN_View = 30,
    mThongTinBN_Them = 31,
    mThongTinBN_ChinhSua = 32,

    mThongTinChungBN_View = 35,
    mThongTinChungBN_Them = 36,
    mThongTinChungBN_ChinhSua = 37,


    mTimKiemBN_TimBN = 40,
    mTimKiemBN_ThemBN = 41,
    mTimKiemBN_TimDangKy = 42,
    mTimKiemBN_ThemDangKy = 43,

    mCanChange_DatetimeExProduct_DrugDept = 44,
    mCanChange_DatetimeImProduct_DrugDept = 45,


    mCanChange_DatetimeExProduct_StoreDept = 46,
    mCanChange_DatetimeImProduct_StoreDept = 47,

    mCount = 48
}

//--clinic mangement
export enum eClinicManagement
{
    mQuanLyPhongKham = 1,
    mQuanLyCaKham = 2,
    mHistoryPhongKham = 3,
    mFileManagement = 4,
    mCount = 5,
}
export enum oClinicManagementEx
{
    mQuanLyCaKham = 1,
    mQuanLySoLuong = 2,
    mPhanBoNhanVien = 3,
    mHistoryPhongKham = 4,
    mFileManagement = 5,
    mWorkingScheduleManagement = 6,
    mCount = 7,
}
export enum eCLSLaboratory
{
    mXetNghiem = 1,
    mCount = 2,
}
export enum oCLSLaboratoryEx
{
    mXetNghiem_DanhSach = 1,
    mXetNghiem_KetQua = 2,
    mXetNghiem_KetQua_Luu = 3,
    mXetNghiem_KetQua_Xoa = 4,
    mCount = 5,
}
export enum eCLSImaging
{
    mSAMachMau = 1,
    mSATGSDipy = 2,
    mSATGSDobu = 3,
    mSATMau = 4,
    mSATQuaThucQuan = 5,
    mSATThai = 6,
    mAbUltra = 7,

    mCount = 8,
}

export enum oCLSImagingEX
{
    mSAMachMau_View = 1,
    mSAMachMau_DanhSachPhieuYC = 2,
    mSAMachMau_KetQua = 3,
    mSAMachMau_CacLan = 4,
    mSAMachMau_Template = 5,

    mSATGSDipy_View = 11,
    mSATGSDipy_DanhSachPhieuYC = 12,
    mSATGSDipy_KetQua = 13,
    mSATGSDipy_CacLan = 14,
    mSATGSDipy_Template = 15,

    mSATGSDobu_View = 21,
    mSATGSDobu_DanhSachPhieuYC = 22,
    mSATGSDobu_KetQua = 23,
    mSATGSDobu_CacLan = 24,
    mSATGSDobu_Template = 25,

    mSATMau_View = 31,
    mSATMau_DanhSachPhieuYC = 32,
    mSATMau_KetQua = 33,
    mSATMau_CacLan = 34,
    mSATMau_Template = 35,

    mSATQuaThucQuan_View = 41,
    mSATQuaThucQuan_DanhSachPhieuYC = 42,
    mSATQuaThucQuan_KetQua = 43,
    mSATQuaThucQuan_CacLan = 44,
    mSATQuaThucQuan_Template = 45,

    mSATThai_View = 51,
    mSATThai_DanhSachPhieuYC = 52,
    mSATThai_KetQua = 53,
    mSATThai_CacLan = 54,
    mSATThai_Template = 55,

    mCount = 60,
}

export enum eAdmin
{
    mCount = 2,
}
export enum oAdmin
{
    mCount = 2,
}
/*==== #001 ====*/
export enum FileStorageStatus
{
    InStore = 1,
    OutStore = 2,
    UnSave = 0
}
/*==== #001 ====*/
/*==== #002 ====*/
export enum PCLExamTypeCategory
{
    XRAY = 1,
    UltraSound = 2,
    Scan = 3,
    MRI = 4,
    ECG = 9,
    ANGIOGRAPHY = 10
}
/*==== #002 ====*/

//* TxD 11/01/2018
export enum TypesOf_ConfirmHICardForInPt
{
    eConfirmNew = 1,
    eConfirmReplace = 2,
    eConfirmAdd = 3,
    eConfirmRemoveLastAdded = 4,
    eConfirmNoChange = 5
}
//▼====: #004
export enum eLabSoftCategory 
{
    PCLItems = 1,
    Doctors = 2,
    Departments = 3,
    Diagnoses = 4,
    Objects = 5,
    Devices = 6,
    Users = 7
}