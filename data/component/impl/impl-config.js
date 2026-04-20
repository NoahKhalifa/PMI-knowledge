// ===== WATERFALL PROCESS: CONFIG & ROLE DATA =====
// Theo QT.VTIT.PQLCL.11 — Quy trình Phát triển phần mềm Waterfall

// ───── ROLES (swimlane rows) ─────
const implRoles = [
    "BGĐ", "P.PMO", "P.KTCN", "P.QLCL", "PM", "QAM/QA",
    "BA", "Tech Lead", "Dev", "Test Lead", "Tester", "Khách hàng"
];

// ───── PHASES (column groups) ─────
const implPhases = [
    "Lập kế hoạch",
    "Phân tích yêu cầu",
    "Thiết kế",
    "Lập trình",
    "Kiểm thử",
    "UAT",
    "Triển khai & Đóng dự án"
];

// ───── ICONS ─────
const implRoleIcons = {
    "BGĐ": "👑", "P.PMO": "📊", "P.KTCN": "🔧", "P.QLCL": "✅",
    "PM": "📋", "QAM/QA": "🔍", "BA": "💡", "Tech Lead": "🏗️",
    "Dev": "👨‍💻", "Test Lead": "🎯", "Tester": "🧪", "Khách hàng": "🏢"
};

// ───── PHASE → CSS class ─────
const implPhaseColors = {
    "Lập kế hoạch": "plan",
    "Phân tích yêu cầu": "analysis",
    "Thiết kế": "design",
    "Lập trình": "dev",
    "Kiểm thử": "test",
    "UAT": "uat",
    "Triển khai & Đóng dự án": "deploy"
};

// ───── ROLE DATA (popup khi click vào tên vai trò) ─────
const roleData = {
    "BGĐ": {
        icon: "👑",
        shortDesc: "Ban Giám đốc — Phê duyệt kế hoạch dự án theo Rank, tham gia Kick-off.",
        responsibilities: ["Phê duyệt Kế hoạch dự án (Rank A,B: Giám đốc; Rank C,D: Phó Giám đốc)", "Tham gia Kick-off dự án", "Ra quyết định chiến lược cho dự án"],
        kpis: [{ name: "Thời gian phê duyệt", icon: "⏱️" }, { name: "Tỷ lệ phê duyệt đúng hạn", icon: "✅" }],
        focusAreas: [{ name: "Phê duyệt & Governance", icon: "👑", desc: "Phê duyệt kế hoạch dự án theo phân cấp Rank" }]
    },
    "P.PMO": {
        icon: "📊",
        shortDesc: "Phòng Quản trị dự án — Thẩm định kế hoạch L4, chủ trì nghiệm thu nội bộ.",
        responsibilities: ["Thẩm định Kế hoạch dự án Level 4", "Phản hồi kết quả thẩm định cho PM", "Chủ trì nghiệm thu nội bộ: xây dựng kịch bản, tổ chức nghiệm thu, ghi nhận kết quả"],
        kpis: [{ name: "SLA thẩm định", icon: "⏱️" }, { name: "Chất lượng nghiệm thu", icon: "🎯" }],
        focusAreas: [{ name: "Thẩm định L4", icon: "📋", desc: "Đảm bảo kế hoạch chi tiết đạt chuẩn" }, { name: "Nghiệm thu nội bộ", icon: "✅", desc: "Kiểm tra sản phẩm trước khi bàn giao khách hàng" }]
    },
    "P.KTCN": {
        icon: "🔧",
        shortDesc: "Phòng Kỹ thuật công nghệ — Review thiết kế, quét ATTT source code.",
        responsibilities: ["Review thẩm định tài liệu thiết kế (chi tiết, CSDL, UI/UX)", "Quét ATTT source code theo yêu cầu", "Đánh giá kỹ thuật dựa trên bộ tiêu chí và checklist"],
        kpis: [{ name: "Chất lượng review", icon: "🔍" }, { name: "SLA quét ATTT", icon: "🛡️" }],
        focusAreas: [{ name: "Review thiết kế", icon: "📐", desc: "Thẩm định thiết kế chi tiết, CSDL, UI/UX" }, { name: "Đánh giá ATTT", icon: "🔒", desc: "Quét an toàn thông tin source code" }]
    },
    "P.QLCL": {
        icon: "✅",
        shortDesc: "Phòng Quản lý chất lượng — Chuyển trạng thái dự án, tiếp nhận và xử lý khiếu nại khách hàng.",
        responsibilities: ["Chuyển trạng thái dự án từ Pre-sale sang In-progress", "Tiếp nhận thông tin phản ánh từ khách hàng", "Phân loại và gán yêu cầu xử lý tới bộ phận tương ứng", "Thông báo kế hoạch và kết quả khắc phục tới khách hàng"],
        kpis: [{ name: "SLA xử lý khiếu nại", icon: "⏱️" }, { name: "Tỷ lệ giải quyết", icon: "📊" }],
        focusAreas: [{ name: "Quản lý trạng thái DA", icon: "🔄", desc: "Chuyển đổi trạng thái dự án trên hệ thống" }, { name: "Xử lý khiếu nại", icon: "📞", desc: "Tiếp nhận, phân loại, điều phối xử lý phản ánh KH" }]
    },
    "PM": {
        icon: "📋",
        shortDesc: "Quản trị dự án — Lập kế hoạch, điều phối, theo dõi, báo cáo và đóng dự án.",
        responsibilities: [
            "Lập Kế hoạch dự án chi tiết (WBS L4, scope, schedule, cost, resource, risk)",
            "Chuẩn bị hạ tầng/môi trường/công cụ làm việc",
            "Tổ chức Kick-off dự án với các bên liên quan",
            "Cập nhật thông tin và trạng thái dự án trên Jira",
            "Điều phối review yêu cầu cùng BA Lead và Tech Lead",
            "Đóng gói tài liệu bàn giao",
            "Gửi yêu cầu quét ATTT tới P.KTCN",
            "Xây dựng kế hoạch triển khai và đào tạo người dùng",
            "Làm thủ tục đóng dự án, tổng kết và release nhân sự"
        ],
        kpis: [{ name: "On-time Delivery", icon: "⏰" }, { name: "Budget Variance", icon: "💵" }, { name: "Chất lượng bàn giao", icon: "✨" }, { name: "Customer Satisfaction", icon: "⭐" }],
        focusAreas: [
            { name: "Lập kế hoạch", icon: "📝", desc: "WBS L4, schedule, cost, resource, risk, quality" },
            { name: "Điều phối & Giám sát", icon: "🎯", desc: "Theo dõi tiến độ, review, phối hợp các bên" },
            { name: "Triển khai & Đóng DA", icon: "🏁", desc: "Go-live, nghiệm thu, tổng kết, release nhân sự" }
        ]
    },
    "QAM/QA": {
        icon: "🔍",
        shortDesc: "Trưởng phòng / Nhân viên Quản lý chất lượng — Review kế hoạch, đánh giá FI, điều chỉnh quy trình.",
        responsibilities: ["Review Kế hoạch dự án đối chiếu với tài liệu Pre-sale", "Đánh giá Final Inspection (FI) trước bàn giao", "Phối hợp PM điều chỉnh quy trình phù hợp đặc thù dự án", "Yêu cầu PM bổ sung/khắc phục NC nếu FI không đạt"],
        kpis: [{ name: "SLA review", icon: "⏱️" }, { name: "Tỷ lệ FI pass", icon: "✅" }, { name: "Audit Compliance", icon: "📏" }],
        focusAreas: [{ name: "Review kế hoạch", icon: "📋", desc: "Đối chiếu kế hoạch với Pre-sale" }, { name: "Đánh giá FI", icon: "🔍", desc: "Final Inspection trước bàn giao khách hàng" }]
    },
    "BA": {
        icon: "💡",
        shortDesc: "Nhân viên Giải pháp — Phân tích yêu cầu, xây dựng tài liệu SRS, RTM, Q&A management.",
        responsibilities: ["Trao đổi/làm rõ yêu cầu với khách hàng", "Xây dựng tài liệu mô tả yêu cầu người dùng", "Xây dựng tài liệu phân tích yêu cầu", "Quản lý Q&A management", "Cập nhật tài liệu RTM", "Transfer kết quả phân tích cho Dev, Tester"],
        kpis: [{ name: "Requirement Clarity", icon: "📝" }, { name: "RTM Coverage", icon: "📊" }, { name: "Change Request Rate", icon: "🔄" }],
        focusAreas: [{ name: "Phân tích yêu cầu", icon: "🔍", desc: "Làm rõ, phân tích và tài liệu hóa yêu cầu" }]
    },
    "Tech Lead": {
        icon: "🏗️",
        shortDesc: "Trưởng nhóm kỹ thuật — Thiết kế chi tiết, review code, hỗ trợ cài đặt môi trường.",
        responsibilities: ["Xây dựng thiết kế chi tiết, thiết kế CSDL, thiết kế UI/UX", "Review code sau khi Dev self-test", "Hỗ trợ cài đặt, cấu hình môi trường phát triển", "Tham gia review tài liệu phân tích yêu cầu"],
        kpis: [{ name: "Chất lượng thiết kế", icon: "📐" }, { name: "Code Review Quality", icon: "✨" }],
        focusAreas: [{ name: "Thiết kế", icon: "📐", desc: "Thiết kế chi tiết, CSDL, UI/UX" }, { name: "Review code", icon: "👁️", desc: "Đảm bảo chất lượng code" }]
    },
    "Dev": {
        icon: "👨‍💻",
        shortDesc: "Nhân viên Lập trình — Lập trình, self-test, sửa lỗi, đóng gói source code.",
        responsibilities: ["Hiện thực hóa thiết kế bằng code", "Self-test sau khi lập trình", "Sửa lỗi phát sinh trong kiểm thử và UAT", "Chuẩn bị môi trường kiểm thử", "Đóng gói source code cho quét ATTT và triển khai", "Cập nhật giải pháp xử lý vào Jira"],
        kpis: [{ name: "Defect Rate", icon: "🐛" }, { name: "Sonarqube Score", icon: "📊" }, { name: "Rework Rate", icon: "🔄" }],
        focusAreas: [{ name: "Lập trình", icon: "⚙️", desc: "Code theo thiết kế, self-test, fix bugs" }]
    },
    "Test Lead": {
        icon: "🎯",
        shortDesc: "Trưởng nhóm kiểm thử — Lập chiến lược kiểm thử, review kịch bản kiểm thử.",
        responsibilities: ["Lập chiến lược kiểm thử cho dự án", "Review và phê duyệt kịch bản kiểm thử", "Đảm bảo test coverage đầy đủ"],
        kpis: [{ name: "Test Coverage", icon: "📐" }, { name: "Review Quality", icon: "✅" }],
        focusAreas: [{ name: "Chiến lược KT", icon: "📋", desc: "Lập chiến lược và review kịch bản kiểm thử" }]
    },
    "Tester": {
        icon: "🧪",
        shortDesc: "Nhân viên Kiểm thử — Xây dựng kịch bản, kiểm thử, ghi nhận lỗi.",
        responsibilities: ["Xây dựng kịch bản kiểm thử (hệ thống, tích hợp, hiệu năng...)", "Chuẩn bị dữ liệu và công cụ kiểm thử", "Thực hiện kiểm thử theo kịch bản", "Ghi nhận lỗi, log bugs trên Jira", "Phân tích nguyên nhân và đưa ra phương án xử lý", "Xác nhận sản phẩm sau khi fix bugs"],
        kpis: [{ name: "Bug Detection Rate", icon: "🐛" }, { name: "Test Execution", icon: "▶️" }, { name: "Defect Leakage", icon: "🔓" }],
        focusAreas: [{ name: "Kiểm thử", icon: "🧪", desc: "Xây dựng kịch bản, thực hiện KT, ghi nhận lỗi" }]
    },
    "Khách hàng": {
        icon: "🏢",
        shortDesc: "Khách hàng — Cung cấp yêu cầu, xác nhận tài liệu, UAT, nghiệm thu.",
        responsibilities: ["Cung cấp yêu cầu và thông tin nghiệp vụ", "Xác nhận tài liệu phân tích yêu cầu", "Xác nhận tài liệu thiết kế", "Xây dựng kịch bản kiểm thử UAT", "Thực hiện kiểm thử UAT", "Ký nghiệm thu và xác nhận thanh toán"],
        kpis: [{ name: "Feedback Timeliness", icon: "⏰" }, { name: "UAT Completion", icon: "✅" }, { name: "Acceptance Rate", icon: "📊" }],
        focusAreas: [{ name: "Xác nhận & UAT", icon: "✅", desc: "Phê duyệt tài liệu, kiểm thử nghiệm thu" }]
    }
};
