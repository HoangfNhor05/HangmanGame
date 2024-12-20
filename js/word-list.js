const wordList = [
  {
    word: "danguitar",
    hint: "Một nhạc cụ có dây.",
  },
  {
    word: "oxy",
    hint: "Một loại khí không màu, không mùi cần thiết cho sự sống.",
  },
  {
    word: "nui",
    hint: "Một sự nâng cao tự nhiên lớn trên bề mặt Trái Đất.",
  },
  {
    word: "tranhve",
    hint: "Một loại hình nghệ thuật sử dụng màu sắc trên bề mặt để tạo hình ảnh hoặc biểu đạt.",
  },
  {
    word: "thienvanhoc",
    hint: "Nghiên cứu khoa học về các vật thể và hiện tượng ngoài không gian.",
  },
  {
    word: "bongda",
    hint: "Một môn thể thao phổ biến chơi với quả bóng tròn.",
  },
  {
    word: "socola",
    hint: "Một món ngọt làm từ hạt ca cao.",
  },
  {
    word: "buom",
    hint: "Một loài côn trùng với cánh màu sắc sặc sỡ và thân hình thon gọn.",
  },
  {
    word: "lichsu",
    hint: "Nghiên cứu các sự kiện và nền văn minh trong quá khứ.",
  },
  {
    word: "pizza",
    hint: "Một món ăn có đế tròn phẳng với các loại topping.",
  },
  {
    word: "jazz",
    hint: "Một thể loại âm nhạc đặc trưng bởi sự ứng biến và nhịp phách không đều.",
  },
  {
    word: "mayanh",
    hint: "Một thiết bị dùng để chụp và ghi lại hình ảnh hoặc video.",
  },
  {
    word: "kimcuong",
    hint: "Một loại đá quý nổi tiếng với độ sáng và độ cứng cao.",
  },
  {
    word: "phieuluu",
    hint: "Một trải nghiệm thú vị hoặc táo bạo.",
  },
  {
    word: "khoahoc",
    hint: "Nghiên cứu có hệ thống về cấu trúc và hành vi của thế giới tự nhiên.",
  },
  {
    word: "xedap",
    hint: "Một phương tiện chạy bằng sức người với hai bánh xe.",
  },
  {
    word: "hoanghon",
    hint: "Sự biến mất hàng ngày của mặt trời dưới chân trời.",
  },
  {
    word: "caphe",
    hint: "Một loại đồ uống chứa caffein được làm từ hạt cà phê rang.",
  },
  {
    word: "nhaymua",
    hint: "Sự chuyển động nhịp nhàng của cơ thể, thường theo nhạc.",
  },
  {
    word: "nganhha",
    hint: "Hệ thống các ngôi sao, khí, và bụi liên kết với nhau bằng lực hấp dẫn.",
  },
  {
    word: "danthinh",
    hint: "Một nhóm nhạc công lớn chơi các nhạc cụ khác nhau.",
  },
  {
    word: "nuitho",
    hint: "Một ngọn núi có lỗ thoát cho dung nham, đá, và khí nóng phun ra.",
  },
  {
    word: "tieuthuyet",
    hint: "Một tác phẩm hư cấu dài với cốt truyện và nhân vật phức tạp.",
  },
  {
    word: "tuong",
    hint: "Một hình thức nghệ thuật ba chiều được tạo ra bằng cách định hình hoặc kết hợp các vật liệu.",
  },
  {
    word: "giaihuong",
    hint: "Một bản nhạc dài cho dàn nhạc, thường có nhiều chương.",
  },
  {
    word: "kientruc",
    hint: "Nghệ thuật và khoa học thiết kế, xây dựng công trình.",
  },
  {
    word: "ballet",
    hint: "Một hình thức múa cổ điển với những chuyển động chính xác và duyên dáng.",
  },
  {
    word: "pheluthien",
    hint: "Một người được huấn luyện để du hành và làm việc trong không gian.",
  },
  {
    word: "thacnuoc",
    hint: "Một dòng nước chảy từ trên cao xuống.",
  },
  {
    word: "congnghe",
    hint: "Ứng dụng kiến thức khoa học cho các mục đích thực tiễn.",
  },
  {
    word: "caungau",
    hint: "Hiện tượng quang học do ánh sáng bị phản xạ, khúc xạ, và phân tán.",
  },
  {
    word: "vuutru",
    hint: "Tất cả vật chất, không gian và thời gian hiện hữu.",
  },
  {
    word: "danpiano",
    hint: "Một nhạc cụ chơi bằng cách nhấn các phím làm búa gõ vào dây.",
  },
  {
    word: "nghiphep",
    hint: "Khoảng thời gian dành cho nghỉ ngơi, thư giãn.",
  },
  {
    word: "rungnhietdoi",
    hint: "Một khu rừng rậm rạp có lượng mưa lớn và đa dạng sinh học.",
  },
  {
    word: "sanbai",
    hint: "Một khu vực hoặc tòa nhà dành cho biểu diễn kịch, phim hoặc các sự kiện khác.",
  },
  {
    word: "dienhoai",
    hint: "Một thiết bị dùng để truyền âm thanh qua khoảng cách xa.",
  },
  {
    word: "ngonngu",
    hint: "Hệ thống giao tiếp bao gồm từ ngữ, cử chỉ và ngữ pháp.",
  },
  {
    word: "hoangmac",
    hint: "Một vùng đất khô cằn hoặc không có mưa.",
  },
  {
    word: "huongduong",
    hint: "Một loại cây cao với bông hoa lớn màu vàng.",
  },
  {
    word: "phantuong",
    hint: "Thể loại hư cấu tưởng tượng có yếu tố phép thuật và siêu nhiên.",
  },
  {
    word: "khinhienvan",
    hint: "Một thiết bị quang học dùng để quan sát các vật thể ở xa trong không gian.",
  },
  {
    word: "giohe",
    hint: "Một làn gió nhẹ.",
  },
  {
    word: "ocdao",
    hint: "Một khu vực màu mỡ trong sa mạc có nước.",
  },
  {
    word: "anhnhiep",
    hint: "Nghệ thuật, quá trình hoặc thực hành tạo ra hình ảnh bằng ánh sáng.",
  },
  {
    word: "thamsat",
    hint: "Một chuyến hành trình để quan sát động vật hoang dã.",
  },
  {
    word: "hanhtinh",
    hint: "Một thiên thể quay quanh ngôi sao và không tự phát sáng.",
  },
  {
    word: "song",
    hint: "Một dòng nước tự nhiên lớn chảy đến biển, hồ hoặc dòng nước khác.",
  },
  {
    word: "nhietdoi",
    hint: "Liên quan đến khu vực giữa chí tuyến Bắc và Nam.",
  },
  {
    word: "biankhong",
    hint: "Khó hoặc không thể hiểu, giải thích hoặc nhận dạng.",
  },
];
