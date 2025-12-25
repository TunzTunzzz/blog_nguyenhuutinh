import type { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Java OOP: Từ lý thuyết suông đến thực chiến đồ án",
    excerpt: "Năm nhất tôi học 4 tính chất OOP như vẹt. Đến năm 4 làm đồ án lớn, tôi mới hiểu tại sao Interface và Abstract Class lại cứu rỗi cuộc đời mình.",
    category: "JAVA",
    date: "23/12/2025",
    imageUrl: "https://loremflickr.com/800/400/coding,java?lock=1",
    content: `
      <p class="mb-4">Hồi năm nhất, thầy dạy: <em>"OOP có 4 tính chất: Đóng gói, Kế thừa, Đa hình, Trừu tượng"</em>. Tôi gật gù, học thuộc lòng để đi thi qua môn. Lúc đó tôi nghĩ: "Vẽ vời ra class làm gì cho mệt, viết hết vào hàm main chạy cho nhanh".</p>
      
      <h3 class="text-2xl font-bold mt-6 mb-3">Cú tát của thực tế</h3>
      <p class="mb-4">Đến năm 3, làm cái đồ án Web bán hàng bằng Java Servlet (cổ lỗ sĩ, tôi biết). Tôi viết code kiểu "mì ăn liền". Một class Controller dài 2000 dòng. Muốn sửa logic tính giá tiền? Tôi phải sửa ở 5 chỗ khác nhau. Lúc demo, thầy bảo thêm tính năng giảm giá cho khách VIP, tôi toát mồ hôi hột vì sửa chỗ này nó bug chỗ kia.</p>
      
      <h3 class="text-2xl font-bold mt-6 mb-3">Interface không phải để làm cảnh</h3>
      <p class="mb-4">Sau đó tôi mới thấm thía <strong>Polymorphism (Đa hình)</strong> và <strong>Abstraction (Trừu tượng)</strong>. Thay vì hard-code logic, tôi tách ra Interface <code>DiscountStrategy</code>. </p>
      
      <pre class="bg-gray-100 p-4 border-l-4 border-black font-mono text-sm mb-4 overflow-x-auto">
public interface DiscountStrategy {
    double calculate(double price);
}

// Khách thường
public class RegularDiscount implements DiscountStrategy { ... }

// Khách VIP
public class VipDiscount implements DiscountStrategy { ... }
      </pre>
      
      <p class="mb-4">Đấy, giờ muốn thêm kiểu giảm giá mới? Chỉ cần tạo class mới implement interface kia là xong. Code cũ không cần đụng vào. Đây chính là nguyên lý Open/Closed trong SOLID mà các sếp hay chém gió. </p>
      
      <p><strong>Kết luận:</strong> Đừng học OOP để trả bài. Hãy học nó để sau này không phải đập bàn phím khi fix bug.</p>
    `
  },
  {
    id: 2,
    title: "Tạm biệt Callback Hell: Cách tôi chinh phục Async/Await",
    excerpt: "Hồi mới học JS, tôi lồng 5 cái callback vào nhau và gọi đó là nghệ thuật. Giờ nhìn lại chỉ muốn đập bàn phím. Cùng bàn về Promise nhé.",
    category: "JAVASCRIPT",
    date: "23/12/2025",
    imageUrl: "https://loremflickr.com/800/400/programming,computer?lock=2",
    content: `
      <p class="mb-4">Javascript là một ngôn ngữ kỳ cục. Hồi mới học, tôi muốn lấy dữ liệu user, sau đó lấy bài viết của user đó, rồi lấy comment của bài viết đó.</p>
      
      <h3 class="text-2xl font-bold mt-6 mb-3">Kim tự tháp của sự hủy diệt (Pyramid of Doom)</h3>
      <pre class="bg-gray-100 p-4 border-l-4 border-black font-mono text-sm mb-4 overflow-x-auto">
getUser(userId, function(user) {
    getPosts(user.id, function(posts) {
        getComments(posts[0].id, function(comments) {
            // Code thụt lề tận 1 ki-lô-mét
            console.log("Cứu tôi với!");
        });
    });
});
      </pre>
      <p class="mb-4">Nhìn đoạn code trên, tôi thấy mình như một kiến trúc sư xây kim tự tháp ngược. Debug cực khổ, mắt tăng độ vù vù.</p>

      <h3 class="text-2xl font-bold mt-6 mb-3">Async/Await: Chân ái cuộc đời</h3>
      <p class="mb-4">Rồi ES6, ES7 đến như một vị thần. <code>Async/Await</code> biến code bất đồng bộ trông như code đồng bộ bình thường. Dễ đọc, dễ hiểu.</p>
      
      <pre class="bg-gray-100 p-4 border-l-4 border-black font-mono text-sm mb-4 overflow-x-auto">
async function loadData() {
    try {
        const user = await getUser(userId);
        const posts = await getPosts(user.id);
        const comments = await getComments(posts[0].id);
        console.log("Life is good");
    } catch (error) {
        console.log("Lỗi rồi nhưng vẫn handle được");
    }
}
      </pre>
      
      <p>Giờ đây, code JS của tôi đã sạch sẽ hơn. Nhưng cẩn thận nhé, đừng quên <code>try/catch</code>, nếu không App crash mà không biết tại sao đâu.</p>
    `
  },
  {
    id: 3,
    title: "Spring Boot: Dependency Injection giải thích cho sinh viên",
    excerpt: "Đừng định nghĩa nó bằng thuật ngữ sách vở nữa. Hãy tưởng tượng Spring Container như một 'bà mẹ' lo hết việc chuẩn bị đồ đạc cho bạn đi học.",
    category: "JAVA",
    date: "23/12/2025",
    imageUrl: "https://loremflickr.com/800/400/software,developer?lock=3",
    content: `
      <p class="mb-4">Dependency Injection (DI) và Inversion of Control (IoC). Hai thuật ngữ nghe rất "kêu" và rất đáng sợ với sinh viên năm 2, năm 3.</p>
      
      <h3 class="text-2xl font-bold mt-6 mb-3">Cách truyền thống (Tự lực cánh sinh)</h3>
      <p class="mb-4">Bình thường, khi class A cần class B, bạn sẽ làm thế này trong class A:</p>
      <code class="bg-gray-200 px-2 py-1">B b = new B();</code>
      <p class="mb-4">Nghĩa là bạn (Class A) phải tự đi chợ, tự nấu cơm (tự khởi tạo B). Nếu B thay đổi cách khởi tạo? Bạn phải sửa code trong A.</p>

      <h3 class="text-2xl font-bold mt-6 mb-3">Spring Boot (Có mẹ lo)</h3>
      <p class="mb-4">Với Spring, bạn chỉ cần khai báo: "Mẹ ơi, con cần cái B".</p>
      <pre class="bg-gray-100 p-4 border-l-4 border-black font-mono text-sm mb-4 overflow-x-auto">
@Autowired
private B b;
      </pre>
      <p class="mb-4">Spring Container (bà mẹ) sẽ tự động tìm thằng B ở đâu đó trong đống Bean, khởi tạo nó, và "tiêm" (inject) vào cho bạn. Bạn chỉ việc dùng.</p>
      
      <p>Điều này giúp code lỏng lẻo hơn (loose coupling). Sau này đi làm, sếp bảo đổi database từ MySQL sang PostgreSQL, bạn chỉ cần cấu hình lại Bean, không cần sửa toét mắt hàng trăm file code.</p>
    `
  },
  {
    id: 4,
    title: "Tại sao đồ án tốt nghiệp tôi chọn TypeScript thay vì JS?",
    excerpt: "Code JS rất vui cho đến khi bạn nhận ra 'undefined is not a function' ngay lúc demo cho giảng viên. TypeScript hơi khó chịu, nhưng nó an toàn.",
    category: "JAVASCRIPT",
    date: "23/12/2025",
    imageUrl: "https://loremflickr.com/800/400/code,screen?lock=4",
    content: `
      <p class="mb-4">JavaScript là ngôn ngữ của tự do. Bạn có thể gán số cho chuỗi, gán object cho mảng, JS gật đầu hết. Nhưng tự do quá thì dễ... đi tù (về mặt bugs).</p>
      
      <h3 class="text-2xl font-bold mt-6 mb-3">Cơn ác mộng ngày Demo</h3>
      <p class="mb-4">Tôi nhớ mãi project năm 3. Chạy ngon lành ở nhà. Lên trường demo, bấm nút "Thanh toán", màn hình trắng xóa. Console đỏ lòm: <code>Uncaught TypeError: Cannot read property 'price' of undefined</code>.</p>
      <p class="mb-4">Lý do? API trả về thiếu trường đó trong một số trường hợp, mà tôi thì cứ hồn nhiên chấm <code>.price</code> mà không kiểm tra.</p>

      <h3 class="text-2xl font-bold mt-6 mb-3">TypeScript: Người bảo vệ khó tính</h3>
      <p class="mb-4">Làm đồ án tốt nghiệp, tôi chuyển sang TS. Ban đầu rất ức chế. Nó bắt define type cho mọi thứ.</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Biến này là string hay number?</li>
        <li>Object này có những key nào?</li>
        <li>Hàm này trả về cái gì?</li>
      </ul>
      <p class="mb-4">Nhưng nhờ vậy, IDE nhắc code cực sướng. Và quan trọng nhất, nếu tôi lỡ tay dùng sai kiểu dữ liệu, nó báo lỗi ngay lúc code (Compile time), chứ không đợi đến lúc chạy (Runtime) mới toang.</p>
      
      <p><strong>Lời khuyên:</strong> Học TypeScript đi. Các công ty tuyển dụng Frontend giờ yêu cầu cái này nhiều lắm.</p>
    `
  },
  {
    id: 5,
    title: "NullPointerException: Người bạn thân thiết (và đáng ghét)",
    excerpt: "Kẻ thù số 1 của mọi Java Dev. Chia sẻ kinh nghiệm xương máu về việc check null và sử dụng Optional trong Java 8 để code bớt 'rác'.",
    category: "JAVA",
    date: "23/12/2025",
    imageUrl: "https://loremflickr.com/800/400/matrix,hacker?lock=5",
    content: `
      <p class="mb-4">Nếu có giải thưởng cho lỗi gây ức chế nhất lịch sử Java, tôi xin bầu chọn cho <code>java.lang.NullPointerException</code> (NPE).</p>
      
      <h3 class="text-2xl font-bold mt-6 mb-3">Code rác vì check null</h3>
      <p class="mb-4">Ngày xưa code của tôi trông thế này:</p>
      <pre class="bg-gray-100 p-4 border-l-4 border-black font-mono text-sm mb-4 overflow-x-auto">
if (user != null) {
    if (user.getAddress() != null) {
        if (user.getAddress().City() != null) {
            return user.getAddress().getCity();
        }
    }
}
return "Unknown";
      </pre>
      <p class="mb-4">Nhìn nó có chán không? Cứ như đang bóc hành tây vậy, bóc mãi mới đến lõi.</p>

      <h3 class="text-2xl font-bold mt-6 mb-3">Optional đến giải cứu</h3>
      <p class="mb-4">Từ Java 8, chúng ta có <code>Optional</code>. Nó bọc object lại và ép chúng ta phải xử lý trường hợp rỗng một cách thanh lịch.</p>
      <pre class="bg-gray-100 p-4 border-l-4 border-black font-mono text-sm mb-4 overflow-x-auto">
return Optional.ofNullable(user)
    .map(User::getAddress)
    .map(Address::getCity)
    .orElse("Unknown");
      </pre>
      <p>Code gọn hơn, đọc như văn xuôi, và quan trọng là không bao giờ bị NPE ném vào mặt nữa.</p>
    `
  },
  {
    id: 6,
    title: "React Hooks: useEffect đã 'lừa' tôi như thế nào?",
    excerpt: "Vòng lặp vô tận (Infinite Loop) là món đặc sản khi mới học React. Cùng mổ xẻ dependency array để không làm treo trình duyệt nữa.",
    category: "JAVASCRIPT",
    date: "23/12/2025",
    imageUrl: "https://loremflickr.com/800/400/react,javascript?lock=6",
    content: `
      <p class="mb-4">Chuyển từ Class Component sang Functional Component với Hooks là một bước ngoặt. Nhưng <code>useEffect</code> thực sự là một cái bẫy với những tấm chiếu mới.</p>
      
      <h3 class="text-2xl font-bold mt-6 mb-3">Vòng lặp vô tận (Infinite Loop)</h3>
      <p class="mb-4">Kịch bản quen thuộc: Tôi muốn fetch data khi component mount. Tôi set state trong useEffect. Và tôi quên truyền dependency array <code>[]</code>.</p>
      <p class="mb-4">Kết quả: Component render -> useEffect chạy -> Set State -> Re-render -> useEffect chạy lại... Trình duyệt treo cứng, quạt tản nhiệt laptop kêu như trực thăng.</p>

      <h3 class="text-2xl font-bold mt-6 mb-3">Hiểu đúng về Dependency Array</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Không truyền gì: Chạy sau MỌI lần render.</li>
        <li>Truyền <code>[]</code> rỗng: Chỉ chạy 1 lần sau khi mount (giống componentDidMount).</li>
        <li>Truyền <code>[prop, state]</code>: Chạy khi prop hoặc state đó thay đổi.</li>
      </ul>
      
      <p>Một bài học xương máu nữa: Clean up function. Nếu bạn setInterval hoặc subscribe sự kiện trong useEffect, hãy nhớ clear nó ở hàm return, nếu không memory leak sẽ ám ảnh bạn.</p>
    `
  },
  {
    id: 7,
    title: "Java Stream API: Viết code ngắn hơn, trông 'ngầu' hơn",
    excerpt: "Thay vì viết vòng lặp for dài 10 dòng để lọc danh sách, tôi dùng Stream API chỉ tốn 1 dòng. Nhưng cẩn thận, nó khó debug lắm đấy.",
    category: "JAVA",
    date: "23/12/2025",
    imageUrl: "https://loremflickr.com/800/400/data,stream?lock=7",
    content: `
      <p class="mb-4">Trước Java 8, xử lý Collections là cực hình. Ví dụ: Tìm tên các sinh viên trên 20 tuổi và sắp xếp theo tên.</p>
      
      <h3 class="text-2xl font-bold mt-6 mb-3">Cách cũ (Imperative)</h3>
      <p class="mb-4">Tạo list tạm, loop, if, add vào list, rồi dùng Collections.sort... Code dài cả trang màn hình.</p>

      <h3 class="text-2xl font-bold mt-6 mb-3">Cách mới (Declarative với Stream)</h3>
      <pre class="bg-gray-100 p-4 border-l-4 border-black font-mono text-sm mb-4 overflow-x-auto">
List<String> result = students.stream()
    .filter(s -> s.getAge() > 20)
    .map(Student::getName)
    .sorted()
    .collect(Collectors.toList());
      </pre>
      <p class="mb-4">Đọc phát hiểu ngay logic: Lọc -> Lấy tên -> Sắp xếp -> Gom lại.</p>
      
      <p><strong>Cảnh báo:</strong> Stream nhìn thì ngầu, nhưng debug thì khóc thét vì không đặt breakpoint ở giữa chuỗi xử lý dễ dàng được. Và hiệu năng của nó với list nhỏ đôi khi còn thua for-loop truyền thống. Dùng đúng chỗ thôi nhé!</p>
    `
  },
  {
    id: 8,
    title: "JavaScript: 3 năm rồi tôi vẫn nhầm lẫn từ khóa 'this'",
    excerpt: "Arrow function vs Regular function. Tại sao context của 'this' lại nhảy lung tung? Một bài viết tự nhắc nhở bản thân trước khi đi phỏng vấn.",
    category: "JAVASCRIPT",
    date: "23/12/2025",
    imageUrl: "https://loremflickr.com/800/400/web,development?lock=8",
    content: `
      <p class="mb-4">Trong Java, <code>this</code> luôn là instance của class hiện tại. Rất trung thành. Trong JavaScript, <code>this</code> là một gã trai hư, thay đổi tùy theo "hoàn cảnh" (execution context).</p>
      
      <h3 class="text-2xl font-bold mt-6 mb-3">Vụ án mất tích của 'this'</h3>
      <p class="mb-4">Thường gặp nhất là trong các callback hoặc event handler. Bạn định dùng <code>this.setState</code> trong một hàm setTimeout, và bùm: <code>undefined</code>.</p>

      <h3 class="text-2xl font-bold mt-6 mb-3">Arrow Function cứu thế giới</h3>
      <p class="mb-4">Trước ES6, chúng ta phải dùng trò mèo <code>var self = this</code> hoặc <code>.bind(this)</code>. Rất xấu.</p>
      <p class="mb-4">Arrow Function <code>() => {}</code> không có <code>this</code> của riêng nó. Nó lấy <code>this</code> từ scope bao bên ngoài (lexical scoping). Vì vậy:</p>
      <pre class="bg-gray-100 p-4 border-l-4 border-black font-mono text-sm mb-4 overflow-x-auto">
// Safe
setTimeout(() => {
    this.doSomething(); // 'this' vẫn là component
}, 1000);
      </pre>
      
      <p>Tuy nhiên, đừng lạm dụng Arrow Function làm method trong Object literal, bạn sẽ lại mất <code>this</code> đấy. JS đau đầu thật sự.</p>
    `
  },
  {
    id: 9,
    title: "Cú lừa về Garbage Collection: Nó không dọn ngay lập tức",
    excerpt: "Hồi mới học Java, tôi tưởng cứ gán null là RAM được giải phóng ngay. Thực tế phức tạp hơn nhiều. Tìm hiểu sâu hơn về JVM nào.",
    category: "JAVA",
    date: "23/12/2025",
    imageUrl: "https://loremflickr.com/800/400/server,cloud?lock=9",
    content: `
      <p class="mb-4">Hồi năm 2 học môn Hệ điều hành, tôi cứ nghĩ Java có bộ thu gom rác (Garbage Collector - GC) thì mình cứ xả rác thoải mái, nó sẽ dọn ngay.</p>
      
      <h3 class="text-2xl font-bold mt-6 mb-3">Sự thật phũ phàng</h3>
      <p class="mb-4">Việc bạn gán <code>obj = null</code> chỉ là đánh dấu object đó "có thể dọn". Còn khi nào dọn là quyền của JVM. Nó giống như bạn vứt rác ra thùng, nhưng bao giờ xe rác đến thì không biết.</p>
      
      <h3 class="text-2xl font-bold mt-6 mb-3">Stop-the-world</h3>
      <p class="mb-4">Khi GC chạy (đặc biệt là Full GC), nó có thể đóng băng toàn bộ ứng dụng của bạn trong vài mili-giây, thậm chí vài giây. Với các hệ thống trading chứng khoán hay game real-time, đây là thảm họa.</p>
      
      <p>Sinh viên năm 4 rồi, code phải để ý việc tạo object vô tội vạ. Ví dụ: Đừng cộng chuỗi <code>String</code> trong vòng lặp (vì String là immutable, nó tạo ra đống rác string mới liên tục), hãy dùng <code>StringBuilder</code>.</p>
    `
  }
];