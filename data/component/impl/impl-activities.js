// ===== WATERFALL PROCESS: ACTIVITY DATA =====
// Theo QT.VTIT.PQLCL.11 — Mục 5.3 Diễn giải chi tiết
// 29 bước, đúng thứ tự và logic lưu đồ mục 5.2

const activityList = [

    // ══════════════════════════════════════
    // PHASE 1: LẬP KẾ HOẠCH (Steps 01–06)
    // ══════════════════════════════════════

    {
        id: "01", title: "Lập Kế hoạch dự án", role: "PM", phase: "Lập kế hoạch",
        shortLabel: "Lập KH dự án",
        description: "PM xây dựng tài liệu WBS Level 4, kế hoạch dự án chi tiết (các nội dung 1.1–1.14) và chuyển sang bước Thẩm định L4.",
        objective: "Lập kế hoạch chi tiết Scope, Schedule, Cost, Resource tại Level 4.",
        inputs: ["Tài liệu WBS Level 3", "Project Charter", "Hợp đồng / Biên bản thương thảo đàm phán với Khách hàng", "Phương án kinh doanh"],
        steps: [
            "1.1 Chuẩn bị hạ tầng / môi trường / công cụ làm việc",
            "1.2 Nhập thông tin chung dự án (tên, KH, rank, thời gian, nỗ lực, công nghệ, phạm vi, cơ cấu tổ chức)",
            "1.3 Xác định mục tiêu chất lượng & tiêu chí đo lường",
            "1.4 Xác định ràng buộc & giả định",
            "1.5 Xác định rủi ro & cơ hội",
            "1.6 Trao đổi với QA về điều chỉnh quy trình phù hợp đặc thù dự án",
            "1.7 Xây dựng chiến lược Review",
            "1.8 Test Lead lập chiến lược kiểm thử",
            "1.9 Xem xét yêu cầu ATTT của KH và tổ chức, phổ biến cho team",
            "1.10 Xây dựng quy định quản lý cấu hình",
            "1.11 Xác định kế hoạch DAR (phân tích giải pháp & ra quyết định)",
            "1.12 Xác định kế hoạch CAR (phân tích nguyên nhân & xác định giải pháp)",
            "1.13 Quy định về họp & báo cáo",
            "1.14 Xây dựng kế hoạch đào tạo quy trình và chuyên môn"
        ],
        outputs: ["Kế hoạch dự án", "Tài liệu WBS Level 4"],
        deliverables: ["Kế hoạch dự án", "WBS Level 4"],
        risks: ["Thiếu thông tin đầu vào từ giai đoạn Pre-sale", "Kế hoạch không đủ chi tiết"],
        sla: "",
        previousActivities: [],
        nextActivities: ["02"]
    },
    {
        id: "02", title: "Thẩm định L4", role: "P.PMO", phase: "Lập kế hoạch",
        shortLabel: "Thẩm định L4",
        nodeType: "decision",
        description: "P.PMO thẩm định Kế hoạch dự án chi tiết Level 4 do PM gửi.",
        objective: "Đảm bảo kế hoạch dự án đạt chuẩn trước khi review và phê duyệt.",
        inputs: ["Kế hoạch dự án được lập"],
        steps: [
            "Tiếp nhận Kế hoạch dự án từ PM",
            "Thẩm định nội dung kế hoạch chi tiết",
            "OK: Phản hồi kết quả cho PM, chuyển sang bước Review",
            "NOK: Quay lại bước Lập Kế hoạch dự án, yêu cầu điều chỉnh"
        ],
        outputs: ["Kế hoạch dự án được thẩm định"],
        deliverables: ["Kế hoạch dự án được thẩm định"],
        risks: ["Kế hoạch chưa đủ chi tiết cần trả lại nhiều lần"],
        sla: "Tối đa 01 ngày làm việc kể từ khi nhận được Kế hoạch dự án",
        previousActivities: ["01"],
        nextActivities: ["03"],
        decisionBranches: { "OK": ["03"], "NOK": ["01"] }
    },
    {
        id: "03", title: "Review", role: "QAM/QA", phase: "Lập kế hoạch",
        shortLabel: "Review KH",
        nodeType: "decision",
        description: "QA review Kế hoạch dự án đã được thẩm định, đối chiếu với tài liệu giai đoạn Pre-sale.",
        objective: "Đảm bảo kế hoạch phù hợp với cam kết Pre-sale và tuân thủ quy trình.",
        inputs: ["Kế hoạch dự án được thẩm định"],
        steps: [
            "Tiếp nhận Kế hoạch dự án đã thẩm định từ PM",
            "Review và đối chiếu với tài liệu Pre-sale",
            "OK: Phản hồi kết quả cho PM, chuyển sang bước Phê duyệt",
            "NOK: Quay lại bước Lập Kế hoạch dự án, yêu cầu điều chỉnh"
        ],
        outputs: ["Kế hoạch dự án được review"],
        deliverables: ["Kế hoạch dự án được review"],
        risks: ["Phát hiện sai lệch với cam kết Pre-sale"],
        sla: "Tối đa 01 ngày làm việc kể từ khi nhận được Kế hoạch dự án",
        previousActivities: ["02"],
        nextActivities: ["04"],
        decisionBranches: { "OK": ["04"], "NOK": ["01"] }
    },
    {
        id: "04", title: "Phê duyệt", role: "BGĐ", phase: "Lập kế hoạch",
        shortLabel: "Phê duyệt KH",
        nodeType: "decision",
        description: "BGĐ phê duyệt Kế hoạch dự án theo Rank: Rank A,B — Giám đốc; Rank C,D — Phó Giám đốc.",
        objective: "Phê duyệt chính thức kế hoạch dự án để triển khai.",
        inputs: ["Kế hoạch dự án được review"],
        steps: [
            "Tiếp nhận Kế hoạch dự án đã được thẩm định và review",
            "Phê duyệt theo phân cấp Rank (A,B: GĐ; C,D: PGĐ)",
            "OK: Chuyển sang bước Cập nhật thông tin và trạng thái dự án",
            "NOK: Quay lại bước Lập Kế hoạch dự án, yêu cầu điều chỉnh"
        ],
        outputs: ["Kế hoạch dự án được phê duyệt"],
        deliverables: ["Kế hoạch dự án được phê duyệt"],
        risks: ["Thời gian phê duyệt kéo dài ảnh hưởng timeline"],
        sla: "Tối đa 03 ngày làm việc kể từ khi nhận được Kế hoạch dự án",
        previousActivities: ["03"],
        nextActivities: ["05"],
        decisionBranches: { "OK": ["05"], "NOK": ["01"] }
    },
    {
        id: "05", title: "Cập nhật thông tin và trạng thái dự án", role: "PM", phase: "Lập kế hoạch",
        shortLabel: "Cập nhật TT & TT",
        additionalRoles: ["P.QLCL"],
        description: "PM cập nhật thông tin dự án trên Jira và gửi yêu cầu tới P.QLCL để chuyển trạng thái từ 'Pre-sale' sang 'In-progress'.",
        objective: "Dự án được ghi nhận chính thức trên hệ thống quản lý.",
        inputs: ["Kế hoạch dự án được phê duyệt"],
        steps: [
            "PM cập nhật thông tin dự án trên Jira",
            "Gửi yêu cầu tới P.QLCL chuyển trạng thái dự án",
            "P.QLCL chuyển trạng thái từ 'Pre-sale' sang 'In-progress'",
            "Chuyển sang bước Kick-off dự án"
        ],
        outputs: ["Mã dự án được cấp", "Trạng thái dự án: In-progress"],
        deliverables: ["Mã dự án trên Jira"],
        risks: ["Chậm trễ cấp mã dự án"],
        sla: "Tối đa 04 tiếng làm việc sau khi nhận yêu cầu",
        previousActivities: ["04"],
        nextActivities: ["06"]
    },
    {
        id: "06", title: "Kick-off dự án", role: "PM", phase: "Lập kế hoạch",
        shortLabel: "Kick-off",
        additionalRoles: ["BGĐ", "QAM/QA", "Khách hàng"],
        description: "PM xây dựng tài liệu Kick-off và tổ chức họp Kick-off với BGĐ, BUL, QA, Team dự án, Khách hàng.",
        objective: "Truyền thông thống nhất nội dung dự án với tất cả các bên liên quan.",
        inputs: ["Kế hoạch dự án được phê duyệt"],
        steps: [
            "Xây dựng tài liệu Kick-off dự án",
            "Tổ chức họp Kick-off với thành phần: BGĐ, BUL, QA, Team dự án, Khách hàng",
            "Truyền thông thống nhất nội dung dự án",
            "Chuyển sang bước Phân tích yêu cầu"
        ],
        outputs: ["Kick-off slide", "Kick-off meeting"],
        deliverables: ["Kick-off slide", "Biên bản họp Kick-off"],
        risks: ["Stakeholder quan trọng không tham gia", "Thông tin chưa đồng nhất"],
        sla: "Theo Kế hoạch dự án",
        previousActivities: ["05"],
        nextActivities: ["07"]
    },

    // ══════════════════════════════════════
    // PHASE 2: PHÂN TÍCH YÊU CẦU (Steps 07–09)
    // ══════════════════════════════════════

    {
        id: "07", title: "Phân tích yêu cầu", role: "BA", phase: "Phân tích yêu cầu",
        shortLabel: "Phân tích YC",
        description: "BA trao đổi/làm rõ yêu cầu với khách hàng, xây dựng tài liệu phân tích yêu cầu, mô tả yêu cầu người dùng, Q&A management, RTM.",
        objective: "Có tài liệu phân tích yêu cầu đầy đủ và rõ ràng để chuyển giai đoạn thiết kế.",
        inputs: ["Tài liệu WBS Level 3, 4", "Thông tin dự án", "Yêu cầu từ Khách hàng"],
        steps: [
            "Trao đổi / làm rõ yêu cầu với Khách hàng",
            "Phân tích sơ bộ yêu cầu",
            "Xây dựng tài liệu mô tả yêu cầu người dùng",
            "Xây dựng tài liệu phân tích yêu cầu",
            "Quản lý Q&A với Khách hàng",
            "Cập nhật tài liệu RTM",
            "Gửi tài liệu để BA Lead, PM, Tech Lead review"
        ],
        outputs: ["Tài liệu mô tả yêu cầu người dùng", "Tài liệu phân tích yêu cầu", "Q&A management", "Tài liệu RTM"],
        deliverables: ["Tài liệu mô tả yêu cầu người dùng", "Tài liệu phân tích yêu cầu", "RTM"],
        risks: ["Yêu cầu mơ hồ hoặc thay đổi liên tục", "Thiếu phản hồi từ Khách hàng"],
        sla: "Theo Kế hoạch dự án",
        previousActivities: ["06"],
        nextActivities: ["08"]
    },
    {
        id: "08", title: "Review", role: "PM", phase: "Phân tích yêu cầu",
        shortLabel: "Review YC",
        nodeType: "decision",
        additionalRoles: ["BA", "Tech Lead"],
        description: "BA Lead, PM, Tech Lead review tài liệu mô tả yêu cầu người dùng và tài liệu phân tích yêu cầu.",
        objective: "Đảm bảo tài liệu phân tích yêu cầu đạt chất lượng trước khi gửi Khách hàng xác nhận.",
        inputs: ["Tài liệu mô tả yêu cầu người dùng", "Tài liệu phân tích yêu cầu"],
        steps: [
            "Tiếp nhận tài liệu từ BA",
            "BA Lead, PM, Tech Lead thực hiện review",
            "OK: Phản hồi kết quả, gửi sang Khách hàng phê duyệt → bước Xác nhận",
            "NOK: Quay lại bước Phân tích yêu cầu, yêu cầu điều chỉnh"
        ],
        outputs: ["Tài liệu mô tả yêu cầu người dùng được review", "Tài liệu phân tích yêu cầu được review"],
        deliverables: ["Tài liệu yêu cầu được review"],
        risks: ["Review chưa kỹ dẫn đến lọt sai sót"],
        sla: "Theo Kế hoạch dự án",
        previousActivities: ["07"],
        nextActivities: ["09"],
        decisionBranches: { "OK": ["09"], "NOK": ["07"] }
    },
    {
        id: "09", title: "Xác nhận", role: "Khách hàng", phase: "Phân tích yêu cầu",
        shortLabel: "Xác nhận YC",
        nodeType: "decision",
        description: "Khách hàng xem xét và phê duyệt tài liệu mô tả yêu cầu người dùng và tài liệu phân tích yêu cầu.",
        objective: "Có xác nhận chính thức từ Khách hàng về yêu cầu trước khi thiết kế.",
        inputs: ["Tài liệu mô tả yêu cầu người dùng được review", "Tài liệu phân tích yêu cầu được review"],
        steps: [
            "Khách hàng xem xét tài liệu",
            "OK: BA transfer cho Dev, Tester → chuyển sang bước Thiết kế",
            "NOK: Quay lại bước Phân tích yêu cầu, điều chỉnh tài liệu"
        ],
        outputs: ["Tài liệu mô tả yêu cầu người dùng được phê duyệt", "Tài liệu phân tích yêu cầu được phê duyệt"],
        deliverables: ["Tài liệu yêu cầu được phê duyệt"],
        risks: ["Khách hàng thay đổi yêu cầu", "Thời gian xác nhận kéo dài"],
        sla: "Theo Kế hoạch dự án",
        previousActivities: ["08"],
        nextActivities: ["10"],
        decisionBranches: { "OK": ["10"], "NOK": ["07"] }
    },

    // ══════════════════════════════════════
    // PHASE 3: THIẾT KẾ (Steps 10–12)
    // ══════════════════════════════════════

    {
        id: "10", title: "Thiết kế", role: "Tech Lead", phase: "Thiết kế",
        shortLabel: "Thiết kế",
        description: "Tech Lead xây dựng thiết kế chi tiết, thiết kế CSDL, thiết kế UI/UX và gửi P.KTCN review.",
        objective: "Có bộ tài liệu thiết kế chi tiết đầy đủ cho giai đoạn lập trình.",
        inputs: ["Tài liệu mô tả yêu cầu người dùng", "Tài liệu phân tích yêu cầu", "Tài liệu thiết kế tổng thể (Pre-sale)", "Tài liệu WBS Level 3, 4"],
        steps: [
            "Xây dựng tài liệu thiết kế chi tiết",
            "Xây dựng tài liệu thiết kế CSDL",
            "Xây dựng tài liệu thiết kế UI/UX",
            "Cập nhật tài liệu RTM",
            "Gửi sang P.KTCN để review"
        ],
        outputs: ["Tài liệu thiết kế chi tiết", "Tài liệu thiết kế CSDL", "Tài liệu thiết kế UI/UX", "Tài liệu RTM được cập nhật"],
        deliverables: ["Thiết kế chi tiết", "Thiết kế CSDL", "Thiết kế UI/UX", "RTM cập nhật"],
        risks: ["Thiết kế không khả thi về kỹ thuật", "Thiếu thông tin từ giai đoạn phân tích"],
        sla: "Theo Kế hoạch dự án",
        previousActivities: ["09"],
        nextActivities: ["11"]
    },
    {
        id: "11", title: "Review", role: "P.KTCN", phase: "Thiết kế",
        shortLabel: "Review TK",
        nodeType: "decision",
        description: "P.KTCN cử nhân sự review thẩm định tài liệu thiết kế dựa trên bộ tiêu chí và checklist đánh giá.",
        objective: "Đảm bảo thiết kế đạt chuẩn kỹ thuật trước khi gửi Khách hàng.",
        inputs: ["Tài liệu thiết kế chi tiết", "Tài liệu thiết kế CSDL", "Tài liệu thiết kế UI/UX"],
        steps: [
            "P.KTCN review theo bộ tiêu chí và checklist",
            "OK: Phản hồi kết quả cho PM → chuyển sang bước Xác nhận",
            "NOK: Quay lại bước Thiết kế, yêu cầu điều chỉnh"
        ],
        outputs: ["Tài liệu thiết kế được review", "Checklist review được cập nhật"],
        deliverables: ["Tài liệu thiết kế được review", "Checklist review"],
        risks: ["Phát hiện lỗi thiết kế lớn cần làm lại"],
        sla: "",
        previousActivities: ["10"],
        nextActivities: ["12"],
        decisionBranches: { "OK": ["12"], "NOK": ["10"] }
    },
    {
        id: "12", title: "Xác nhận", role: "Khách hàng", phase: "Thiết kế",
        shortLabel: "Xác nhận TK",
        nodeType: "decision",
        description: "Khách hàng xem xét và phê duyệt tài liệu thiết kế. OK → chuyển song song sang Lập trình, Xây dựng kịch bản KT, Xây dựng kịch bản UAT.",
        objective: "Có xác nhận chính thức từ Khách hàng về thiết kế trước khi triển khai song song.",
        inputs: ["Tài liệu thiết kế chi tiết", "Tài liệu thiết kế CSDL", "Tài liệu thiết kế UI/UX"],
        steps: [
            "Khách hàng xem xét và phê duyệt tài liệu thiết kế",
            "OK: Chuyển song song sang bước 13 (Lập trình), 16 (Xây dựng kịch bản KT), 25 (Xây dựng kịch bản UAT)",
            "NOK: Quay lại bước Thiết kế, điều chỉnh tài liệu"
        ],
        outputs: ["Tài liệu thiết kế chi tiết được phê duyệt", "Tài liệu thiết kế CSDL được phê duyệt", "Tài liệu thiết kế UI/UX được phê duyệt"],
        deliverables: ["Tài liệu thiết kế được phê duyệt"],
        risks: ["Khách hàng yêu cầu thay đổi thiết kế", "Delay ảnh hưởng 3 luồng song song"],
        sla: "Theo Kế hoạch dự án",
        previousActivities: ["11"],
        nextActivities: ["13", "16", "25"],
        decisionBranches: { "OK": ["13", "16", "25"], "NOK": ["10"] }
    },

    // ══════════════════════════════════════
    // PHASE 4: LẬP TRÌNH (Steps 13–15)
    // ══════════════════════════════════════

    {
        id: "13", title: "Lập trình", role: "Dev", phase: "Lập trình",
        shortLabel: "Lập trình",
        description: "Dev hiện thực hóa tài liệu thiết kế bằng các công cụ, ngôn ngữ lập trình. Chuẩn bị môi trường cho kiểm thử.",
        objective: "Có source code hoàn chỉnh theo thiết kế, sẵn sàng self-test.",
        inputs: ["Tài liệu giai đoạn phân tích yêu cầu", "Tài liệu giai đoạn thiết kế"],
        steps: [
            "Hiện thực hóa thiết kế phần mềm bằng code",
            "Chuẩn bị môi trường cho kiểm thử",
            "Chuyển sang bước Self-test"
        ],
        outputs: ["Source code", "Kết quả Sonarqube"],
        deliverables: ["Source code"],
        risks: ["Code không đúng thiết kế", "Technical debt tích tụ"],
        sla: "Theo Kế hoạch dự án",
        previousActivities: ["12"],
        nextActivities: ["14"]
    },
    {
        id: "14", title: "Self-test", role: "Dev", phase: "Lập trình",
        shortLabel: "Self-test",
        nodeType: "decision",
        description: "Dev rà soát code sau khi lập trình. OK → Review code. NOK → ghi nhận lỗi và sửa, quay lại Lập trình.",
        objective: "Phát hiện và sửa lỗi cơ bản trước khi gửi review code.",
        inputs: ["Source code"],
        steps: [
            "Dev rà soát code sau khi lập trình",
            "OK: Chuyển sang bước Review code",
            "NOK: Ghi nhận lỗi, sửa lỗi, quay lại bước Lập trình"
        ],
        outputs: ["Source code đã được fix hết lỗi", "Danh sách lỗi được log trên Jira"],
        deliverables: ["Source code đã self-test"],
        risks: ["Self-test không kỹ, lọt lỗi sang review"],
        sla: "Theo Kế hoạch dự án",
        previousActivities: ["13"],
        nextActivities: ["15"],
        decisionBranches: { "OK": ["15"], "NOK": ["13"] }
    },
    {
        id: "15", title: "Review code", role: "Tech Lead", phase: "Lập trình",
        shortLabel: "Review code",
        nodeType: "decision",
        description: "Tech Lead review code. OK → Dev đóng gói, đẩy lên môi trường KT, thông báo 'Ready for test'. NOK → sửa lỗi, quay lại Lập trình.",
        objective: "Đảm bảo code đạt chuẩn chất lượng trước khi kiểm thử.",
        inputs: ["Source code đã self-test"],
        steps: [
            "Tech Lead review code",
            "OK: Dev đóng gói source code, đẩy lên môi trường kiểm thử",
            "Dev gửi email thông báo 'Ready for test' sau khi build thành công",
            "Chuyển sang bước Kiểm thử",
            "NOK: Ghi nhận lỗi, quay lại bước Lập trình sửa code"
        ],
        outputs: ["Source code đã được review", "Danh sách lỗi trên Jira", "Email thông báo Ready for test"],
        deliverables: ["Source code đã review", "Email thông báo"],
        risks: ["Review chưa kỹ dẫn đến lọt lỗi vào kiểm thử"],
        sla: "Theo Kế hoạch dự án",
        previousActivities: ["14"],
        nextActivities: ["18"],
        decisionBranches: { "OK": ["18"], "NOK": ["13"] }
    },

    // ══════════════════════════════════════
    // PHASE 5: KIỂM THỬ (Steps 16–21)
    // ══════════════════════════════════════

    {
        id: "16", title: "Xây dựng Kịch bản kiểm thử", role: "Tester", phase: "Kiểm thử",
        shortLabel: "XD kịch bản KT",
        description: "Tester xây dựng kịch bản kiểm thử (hệ thống, tích hợp, hiệu năng...) và gửi Test Lead review.",
        objective: "Có kịch bản kiểm thử đầy đủ, sẵn sàng thực hiện kiểm thử.",
        inputs: ["Tài liệu giai đoạn phân tích yêu cầu", "Tài liệu giai đoạn thiết kế", "Chiến lược kiểm thử"],
        steps: [
            "Xây dựng kịch bản kiểm thử (hệ thống, tích hợp, hiệu năng... tùy phạm vi)",
            "Tham khảo Common Test case",
            "Cập nhật tài liệu RTM",
            "Gửi sang Test Lead để review"
        ],
        outputs: ["Kịch bản kiểm thử", "Tài liệu RTM được cập nhật"],
        deliverables: ["Kịch bản kiểm thử", "RTM cập nhật"],
        risks: ["Kịch bản chưa bao phủ đủ yêu cầu"],
        sla: "Theo Kế hoạch dự án",
        previousActivities: ["12"],
        nextActivities: ["17"]
    },
    {
        id: "17", title: "Review", role: "Test Lead", phase: "Kiểm thử",
        shortLabel: "Review KB KT",
        nodeType: "decision",
        description: "Test Lead review và phê duyệt kịch bản kiểm thử.",
        objective: "Đảm bảo kịch bản kiểm thử đạt chất lượng và coverage.",
        inputs: ["Kịch bản kiểm thử", "Checklist review testcase"],
        steps: [
            "Test Lead review kịch bản kiểm thử",
            "OK: Chuyển sang bước Kiểm thử",
            "NOK: Quay lại bước Xây dựng kịch bản KT, điều chỉnh"
        ],
        outputs: ["Kịch bản kiểm thử được review", "Checklist review được cập nhật"],
        deliverables: ["Kịch bản kiểm thử được review"],
        risks: ["Test coverage chưa đủ"],
        sla: "Theo Kế hoạch dự án",
        previousActivities: ["16"],
        nextActivities: ["18"],
        decisionBranches: { "OK": ["18"], "NOK": ["16"] }
    },
    {
        id: "18", title: "Kiểm thử", role: "Tester", phase: "Kiểm thử",
        shortLabel: "Kiểm thử",
        nodeType: "decision",
        description: "Tester chuẩn bị dữ liệu, thực hiện kiểm thử theo kịch bản. OK → Nghiệm thu nội bộ. NOK → Ghi nhận lỗi.",
        objective: "Xác nhận sản phẩm đạt chất lượng qua kiểm thử.",
        inputs: ["Source code trên môi trường kiểm thử", "Kịch bản kiểm thử đã review"],
        steps: [
            "Chuẩn bị dữ liệu kiểm thử, công cụ hỗ trợ",
            "Thực hiện kiểm thử theo kịch bản",
            "OK: Tổng hợp kết quả vào Biên bản kiểm thử → Nghiệm thu nội bộ",
            "NOK: Ghi nhận lỗi → bước Ghi nhận lỗi"
        ],
        outputs: ["Kết quả kiểm thử", "Báo cáo kiểm thử"],
        deliverables: ["Kết quả kiểm thử", "Báo cáo kiểm thử"],
        risks: ["Phát hiện nhiều lỗi nghiêm trọng", "Môi trường KT không ổn định"],
        sla: "Theo Kế hoạch dự án",
        previousActivities: ["15", "17"],
        nextActivities: ["21"],
        decisionBranches: { "OK": ["21"], "NOK": ["19"] }
    },
    {
        id: "19", title: "Ghi nhận lỗi", role: "Tester", phase: "Kiểm thử",
        shortLabel: "Ghi nhận lỗi",
        description: "Tester ghi nhận lỗi, log bugs trên Jira, phân tích nguyên nhân, gán xử lý cho Dev. Lặp lại đến khi hết lỗi.",
        objective: "Ghi nhận đầy đủ lỗi phát sinh, phân tích nguyên nhân và gán xử lý.",
        inputs: ["Biên bản kiểm thử", "Kết quả UAT (nếu có)", "Phản ánh từ Khách hàng (nếu có)"],
        steps: [
            "Ghi nhận lỗi, log bugs trên Jira",
            "Phân tích nguyên nhân và đưa ra phương án xử lý",
            "Gán xử lý cho Dev",
            "Hoạt động lặp lại cho đến khi Tester xác nhận hết lỗi"
        ],
        outputs: ["Danh sách bugs được log trên Jira"],
        deliverables: ["Bug list trên Jira"],
        risks: ["Lỗi không được mô tả rõ ràng", "Phân tích nguyên nhân sai"],
        sla: "Theo Kế hoạch dự án",
        previousActivities: ["18", "21", "26"],
        nextActivities: ["20"]
    },
    {
        id: "20", title: "Sửa lỗi", role: "Dev", phase: "Kiểm thử",
        shortLabel: "Sửa lỗi",
        description: "Dev thực hiện fix bugs được gán trên Jira, cập nhật giải pháp xử lý vào ô 'Solution' trên Jira.",
        objective: "Sửa hết lỗi được gán để sản phẩm sẵn sàng re-test.",
        inputs: ["Danh sách bugs trên Jira"],
        steps: [
            "Dev fix bugs theo danh sách trên Jira",
            "Cập nhật giải pháp xử lý vào ô 'Solution' trên Jira",
            "Đóng issue sau khi fix thành công",
            "Quay lại bước Kiểm thử để re-test"
        ],
        outputs: ["Bugs được xử lý và đóng issue trên Jira"],
        deliverables: ["Bugs đã fix"],
        risks: ["Fix lỗi gây ra lỗi mới (regression)", "Fix không triệt để"],
        sla: "Theo Kế hoạch dự án",
        previousActivities: ["19"],
        nextActivities: ["18"]
    },
    {
        id: "21", title: "Nghiệm thu nội bộ", role: "P.PMO", phase: "Kiểm thử",
        shortLabel: "NT nội bộ",
        nodeType: "decision",
        description: "P.PMO chủ trì nghiệm thu nội bộ: xây dựng kịch bản, tổ chức nghiệm thu theo kịch bản, ghi nhận kết quả.",
        objective: "Xác nhận sản phẩm đạt chuẩn nội bộ trước khi tiến hành đóng gói và UAT.",
        inputs: ["Tài liệu giai đoạn phân tích yêu cầu", "Tài liệu giai đoạn thiết kế"],
        steps: [
            "Xây dựng kịch bản nghiệm thu nội bộ",
            "Tổ chức nghiệm thu theo kịch bản",
            "Ghi nhận kết quả",
            "OK: Chuyển sang bước Đóng gói tài liệu",
            "NOK: Ghi nhận lỗi → quay lại bước Ghi nhận lỗi"
        ],
        outputs: ["Kịch bản nghiệm thu nội bộ", "Kết quả nghiệm thu nội bộ"],
        deliverables: ["Kết quả nghiệm thu nội bộ"],
        risks: ["Sản phẩm chưa đạt chuẩn nội bộ"],
        sla: "Theo Kế hoạch dự án",
        previousActivities: ["18"],
        nextActivities: ["22"],
        decisionBranches: { "OK": ["22"], "NOK": ["19"] }
    },

    // ══════════════════════════════════════
    // PHASE 6: UAT (Steps 22–26)
    // ══════════════════════════════════════

    {
        id: "22", title: "Đóng gói tài liệu", role: "PM", phase: "UAT",
        shortLabel: "Đóng gói TL",
        additionalRoles: ["Dev", "Tech Lead"],
        description: "PM xây dựng tài liệu bàn giao (HDSD, HDCĐVH&KT, đào tạo...), rà soát toàn bộ, fix bug ATTT nếu có. Song song chuyển đánh giá ATTT và FI.",
        objective: "Có bộ tài liệu bàn giao hoàn chỉnh, sẵn sàng cho đánh giá ATTT và FI.",
        inputs: ["Hợp đồng dự án"],
        steps: [
            "Xây dựng tài liệu HDSD, HDCĐVH&KT, tài liệu đào tạo... tùy phạm vi HĐ",
            "Các tài liệu phải được Team Lead và PM review sẵn sàng",
            "Rà soát lại toàn bộ tài liệu hạng mục cần bàn giao",
            "Fix bug ATTT (nếu có)",
            "Chuyển song song sang bước Đánh giá ATTT và Đánh giá FI"
        ],
        outputs: ["Bộ tài liệu cần bàn giao đã rà soát", "Kết quả khắc phục NC"],
        deliverables: ["Bộ tài liệu bàn giao"],
        risks: ["Tài liệu chưa đầy đủ theo hợp đồng", "Bug ATTT chưa fix hết"],
        sla: "Theo Kế hoạch dự án",
        previousActivities: ["21"],
        nextActivities: ["23", "24"]
    },
    {
        id: "23", title: "Đánh giá ATTT", role: "PM", phase: "UAT",
        shortLabel: "Đánh giá ATTT",
        nodeType: "decision",
        additionalRoles: ["P.KTCN"],
        description: "Dev đóng gói source code, PM gửi yêu cầu tới P.KTCN quét ATTT. P.KTCN phản hồi kết quả.",
        objective: "Source code đạt chuẩn an toàn thông tin trước khi bàn giao.",
        inputs: ["Source code"],
        steps: [
            "Dev đóng gói source code",
            "PM gửi yêu cầu và link source code tới P.KTCN",
            "P.KTCN thực hiện quét ATTT",
            "OK: Chuyển sang bước Kiểm thử UAT",
            "NOK: Quay lại bước Đóng gói tài liệu để fix bug ATTT"
        ],
        outputs: ["Kết quả đánh giá ATTT"],
        deliverables: ["Kết quả đánh giá ATTT"],
        risks: ["Phát hiện lỗ hổng bảo mật nghiêm trọng"],
        sla: "Theo Kế hoạch dự án",
        previousActivities: ["22"],
        nextActivities: ["26"],
        decisionBranches: { "OK": ["26"], "NOK": ["22"] }
    },
    {
        id: "24", title: "Đánh giá FI", role: "QAM/QA", phase: "UAT",
        shortLabel: "Đánh giá FI",
        nodeType: "decision",
        description: "QA thực hiện đánh giá Final Inspection (FI) trước khi bàn giao cho Khách hàng.",
        objective: "Đảm bảo toàn bộ deliverables đạt chuẩn chất lượng trước UAT.",
        inputs: ["Kết quả hoạt động lập trình và kiểm thử", "Bộ tài liệu cần bàn giao", "Kết quả đánh giá ATTT"],
        steps: [
            "QA đánh giá FI theo checklist",
            "OK: Thông báo kết quả cho PM → chuyển sang Kiểm thử UAT",
            "NOK: Yêu cầu PM rà soát, bổ sung, khắc phục NC → quay lại Đóng gói tài liệu"
        ],
        outputs: ["Kết quả đánh giá FI"],
        deliverables: ["Kết quả đánh giá FI"],
        risks: ["Phát hiện NC cần khắc phục gấp"],
        sla: "Theo Kế hoạch dự án",
        previousActivities: ["22"],
        nextActivities: ["26"],
        decisionBranches: { "OK": ["26"], "NOK": ["22"] }
    },
    {
        id: "25", title: "Xây dựng kịch bản kiểm thử UAT", role: "Khách hàng", phase: "UAT",
        shortLabel: "XD kịch bản UAT",
        description: "Khách hàng xây dựng kịch bản kiểm thử UAT dựa trên tài liệu phân tích yêu cầu và thiết kế đã xác nhận.",
        objective: "Có kịch bản UAT sẵn sàng khi sản phẩm đạt chuẩn ATTT và FI.",
        inputs: ["Tài liệu giai đoạn phân tích yêu cầu", "Tài liệu giai đoạn thiết kế"],
        steps: [
            "Khách hàng xây dựng kịch bản kiểm thử UAT",
            "Xác định tiêu chí nghiệm thu",
            "Sẵn sàng chuyển sang bước Kiểm thử UAT"
        ],
        outputs: ["Kịch bản kiểm thử UAT", "Tiêu chí nghiệm thu"],
        deliverables: ["Kịch bản kiểm thử UAT"],
        risks: ["Kịch bản UAT chưa bao phủ hết yêu cầu"],
        sla: "Theo Kế hoạch dự án",
        previousActivities: ["12"],
        nextActivities: ["26"]
    },
    {
        id: "26", title: "Kiểm thử UAT", role: "Khách hàng", phase: "UAT",
        shortLabel: "Kiểm thử UAT",
        nodeType: "decision",
        additionalRoles: ["Dev", "Tester"],
        description: "Khách hàng kiểm thử UAT theo kịch bản. OK → PM lập Biên bản nghiệm thu, KH ký. NOK → log bug, fix, quay lại Ghi nhận lỗi.",
        objective: "Khách hàng nghiệm thu sản phẩm đạt yêu cầu.",
        inputs: ["Kết quả đánh giá FI", "Kết quả đánh giá ATTT", "Kịch bản kiểm thử UAT"],
        steps: [
            "Khách hàng kiểm thử theo kịch bản UAT",
            "OK: PM lập Biên bản nghiệm thu UAT, KH ký xác nhận → chuyển Triển khai",
            "NOK: KH thông báo cho PM, team phân tích lỗi, log bug, fix → quay lại Ghi nhận lỗi"
        ],
        outputs: ["Kết quả / Biên bản kiểm thử UAT", "Bugs được xử lý (nếu NOK)"],
        deliverables: ["Biên bản kiểm thử UAT"],
        risks: ["Khách hàng phát hiện lỗi nghiêm trọng", "Tiêu chí nghiệm thu thay đổi"],
        sla: "Theo Kế hoạch dự án",
        previousActivities: ["23", "24", "25"],
        nextActivities: ["27"],
        decisionBranches: { "OK": ["27"], "NOK": ["19"] }
    },

    // ══════════════════════════════════════
    // PHASE 7: TRIỂN KHAI & ĐÓNG DỰ ÁN (Steps 27–29)
    // ══════════════════════════════════════

    {
        id: "27", title: "Triển khai", role: "PM", phase: "Triển khai & Đóng dự án",
        shortLabel: "Triển khai",
        description: "Thực hiện triển khai: kế hoạch triển khai, đào tạo người dùng, go-live, kiểm thử sau go-live.",
        objective: "Sản phẩm được triển khai thành công trên môi trường production.",
        inputs: ["Kết quả đánh giá FI", "Biên bản kiểm thử UAT"],
        steps: [
            "Xây dựng kế hoạch triển khai (thời gian, lịch trình, nguồn lực, môi trường, kế hoạch roll-back)",
            "Xây dựng kịch bản kiểm thử sau go-live",
            "Xây dựng tài liệu và thực hiện đào tạo người dùng",
            "Go-live",
            "Kiểm thử sau go-live",
            "Chuyển sang bước Đóng dự án"
        ],
        outputs: ["Kế hoạch triển khai", "Báo cáo kết quả triển khai", "Biên bản nghiệm thu với Khách hàng được xác nhận"],
        deliverables: ["Kế hoạch triển khai", "Báo cáo triển khai", "Biên bản nghiệm thu"],
        risks: ["Lỗi phát sinh khi go-live", "Cần roll-back", "Người dùng chưa sẵn sàng"],
        sla: "Theo Kế hoạch dự án",
        previousActivities: ["26"],
        nextActivities: ["28"]
    },
    {
        id: "28", title: "Đóng dự án", role: "PM", phase: "Triển khai & Đóng dự án",
        shortLabel: "Đóng dự án",
        additionalRoles: ["Khách hàng"],
        description: "PM làm thủ tục đóng dự án: khảo sát hài lòng, đánh giá nhân sự, bàn giao tài sản, tổng kết, release nhân sự.",
        objective: "Kết thúc dự án chính thức, rút kinh nghiệm và giải phóng nguồn lực.",
        inputs: ["Kết quả thực hiện dự án"],
        steps: [
            "Khảo sát độ hài lòng khách hàng",
            "Đánh giá kết quả công việc của nhân sự",
            "Bàn giao tài sản và lưu trữ tri thức",
            "Ngắt quyền truy cập các môi trường / công cụ",
            "Tổng kết dự án: hiệu quả, chất lượng, tài chính, bài học kinh nghiệm",
            "Release nhân sự ra khỏi dự án → Pool Resource",
            "Kết thúc dự án"
        ],
        outputs: ["Kết quả khảo sát hài lòng", "Kết quả đánh giá thành viên", "Tài sản được bàn giao", "Quyền truy cập được ngắt", "Báo cáo tổng kết dự án", "Nhân sự được release"],
        deliverables: ["Báo cáo tổng kết dự án"],
        risks: ["Thiếu lesson learned", "Tài sản chưa bàn giao đầy đủ"],
        sla: "Theo Kế hoạch dự án",
        previousActivities: ["27"],
        nextActivities: ["29"]
    },
    {
        id: "29", title: "Tiếp nhận, điều phối và theo dõi xử lý khiếu nại Khách hàng", role: "P.QLCL", phase: "Triển khai & Đóng dự án",
        shortLabel: "Xử lý khiếu nại",
        description: "P.QLCL tiếp nhận phản ánh từ KH, phân loại, gán xử lý, thông báo kế hoạch và kết quả khắc phục.",
        objective: "Xử lý triệt để khiếu nại khách hàng sau bàn giao.",
        inputs: ["Phản ánh khách hàng"],
        steps: [
            "Tiếp nhận thông tin phản ánh từ Khách hàng",
            "Phân loại và gán yêu cầu xử lý tới bộ phận tương ứng",
            "Bộ phận tiếp nhận xây dựng kế hoạch và xử lý lỗi",
            "P.QLCL thông báo kế hoạch và kết quả khắc phục tới Khách hàng"
        ],
        outputs: ["Thông tin phản ánh được tiếp nhận, phân loại", "Kế hoạch xử lý phản ánh", "Kết quả xử lý phản ánh"],
        deliverables: ["Kết quả xử lý khiếu nại"],
        risks: ["Xử lý chậm ảnh hưởng uy tín", "Phân loại sai bộ phận xử lý"],
        sla: "Theo SLA của Quy trình xử lý khiếu nại khách hàng",
        previousActivities: ["28"],
        nextActivities: []
    }
];

// ───── Build lookup map ─────
const activityMap = {};
activityList.forEach(a => { activityMap[a.id] = a; });

// ───── Workflow connections (lưu đồ mục 5.2) ─────
const workflowConnections = [
    // Phase 1: Lập kế hoạch
    { from: "01", to: "02" },
    { from: "02", to: "03", label: "OK" },
    { from: "02", to: "01", label: "NOK", type: "loop" },
    { from: "03", to: "04", label: "OK" },
    { from: "03", to: "01", label: "NOK", type: "loop" },
    { from: "04", to: "05", label: "OK" },
    { from: "04", to: "01", label: "NOK", type: "loop" },
    { from: "05", to: "06" },
    { from: "06", to: "07" },

    // Phase 2: Phân tích yêu cầu
    { from: "07", to: "08" },
    { from: "08", to: "09", label: "OK" },
    { from: "08", to: "07", label: "NOK", type: "loop" },
    { from: "09", to: "10", label: "OK" },
    { from: "09", to: "07", label: "NOK", type: "loop" },

    // Phase 3: Thiết kế
    { from: "10", to: "11" },
    { from: "11", to: "12", label: "OK" },
    { from: "11", to: "10", label: "NOK", type: "loop" },
    { from: "12", to: "13", label: "OK" },
    { from: "12", to: "16", label: "OK" },
    { from: "12", to: "25", label: "OK" },
    { from: "12", to: "10", label: "NOK", type: "loop" },

    // Phase 4: Lập trình
    { from: "13", to: "14" },
    { from: "14", to: "15", label: "OK" },
    { from: "14", to: "13", label: "NOK", type: "loop" },
    { from: "15", to: "18", label: "OK" },
    { from: "15", to: "13", label: "NOK", type: "loop" },

    // Phase 5: Kiểm thử
    { from: "16", to: "17" },
    { from: "17", to: "18", label: "OK" },
    { from: "17", to: "16", label: "NOK", type: "loop" },
    { from: "18", to: "21", label: "OK" },
    { from: "18", to: "19", label: "NOK" },
    { from: "19", to: "20" },
    { from: "20", to: "18", type: "loop" },
    { from: "21", to: "22", label: "OK" },
    { from: "21", to: "19", label: "NOK", type: "loop" },

    // Phase 6: UAT
    { from: "22", to: "23" },
    { from: "22", to: "24" },
    { from: "23", to: "26", label: "OK" },
    { from: "23", to: "22", label: "NOK", type: "loop" },
    { from: "24", to: "26", label: "OK" },
    { from: "24", to: "22", label: "NOK", type: "loop" },
    { from: "25", to: "26" },
    { from: "26", to: "27", label: "OK" },
    { from: "26", to: "19", label: "NOK", type: "loop" },

    // Phase 7: Triển khai & Đóng dự án
    { from: "27", to: "28" },
    { from: "28", to: "29" }
];
