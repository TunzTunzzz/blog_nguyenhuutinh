import type { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Java OOP: Từ lý thuyết suông đến thực chiến đồ án",
    excerpt: "Năm nhất tôi học 4 tính chất OOP như vẹt. Đến năm 4 làm đồ án lớn, tôi mới hiểu tại sao Interface và Abstract Class lại cứu rỗi cuộc đời mình.",
    category: "JAVA",
    date: "23/12/2025",
    imageUrl: "/images/blog/java-core.png",
    content: `
      <p class="mb-4">Hồi năm nhất, thầy dạy: <em>"OOP có 4 tính chất: Đóng gói, Kế thừa, Đa hình, Trừu tượng"</em>. Tôi gật gù, học thuộc lòng để đi thi qua môn. Lúc đó tôi nghĩ: "Vẽ vời ra class làm gì cho mệt, viết hết vào hàm main chạy cho nhanh".</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">1. Cú tát của thực tế</h3>
      <p class="mb-4">Đến năm 3, làm cái đồ án Web bán hàng bằng Java Servlet (cổ lỗ sĩ, tôi biết). Tôi viết code kiểu "mì ăn liền". Một class Controller dài 2000 dòng. Muốn sửa logic tính giá tiền? Tôi phải sửa ở 5 chỗ khác nhau. Lúc demo, thầy bảo thêm tính năng giảm giá cho khách VIP, tôi toát mồ hôi hột vì sửa chỗ này nó bug chỗ kia.</p>
      <p class="mb-4">Code của tôi lúc đó vi phạm nghiêm trọng nguyên lý <strong>DRY</strong> (Don't Repeat Yourself) và <strong>SRP</strong> (Single Responsibility Principle). Mọi thứ dính chùm vào nhau như một nồi lẩu thập cẩm.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">2. Interface không phải để làm cảnh</h3>
      <p class="mb-4">Sau đó tôi mới thấm thía <strong>Polymorphism (Đa hình)</strong> và <strong>Abstraction (Trừu tượng)</strong>. Thay vì hard-code logic kiểu <code>if (type == "VIP")</code>, tôi tách ra Interface <code>DiscountStrategy</code>. </p>
      
      <pre class="bg-gray-100 p-4 border-l-4 border-black font-mono text-sm mb-4 overflow-x-auto rounded">
public interface DiscountStrategy {
    double calculate(double price);
}

// Khách thường: Không giảm
public class RegularDiscount implements DiscountStrategy {
    public double calculate(double price) {
        return price;
    }
}

// Khách VIP: Giảm 10%
public class VipDiscount implements DiscountStrategy {
    public double calculate(double price) {
        return price * 0.9;
    }
}
      </pre>
      
      <p class="mb-4">Đấy, giờ muốn thêm kiểu giảm giá mới (ví dụ: Black Friday)? Chỉ cần tạo class mới implement interface kia là xong. Code cũ không cần đụng vào. Đây chính là nguyên lý <strong>Open/Closed</strong> (Mở để mở rộng, Đóng để sửa đổi) trong SOLID.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">3. Abstract Class vs Interface: Khi nào dùng cái nào?</h3>
      <p class="mb-4">Đây là câu hỏi phỏng vấn kinh điển. Kinh nghiệm của tôi:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Interface</strong>: Dùng khi các class không liên quan gì nhau nhưng <em>cùng làm một hành động</em> (VD: <code>Bird</code> và <code>Airplane</code> đều có thể <code>Flyable</code>). Nó định nghĩa <strong>Contract</strong> (Hợp đồng).</li>
        <li><strong>Abstract Class</strong>: Dùng khi các class có quan hệ cha-con chặt chẽ và chia sẻ code chung (VD: <code>Dog</code> và <code>Cat</code> đều là <code>Animal</code>, đều cần hàm <code>eat()</code> giống nhau nhưng <code>makeSound()</code> khác nhau).</li>
      </ul>
      
      <p class="mt-6 border-t-2 border-gray-200 pt-4"><strong>Kết luận:</strong> Đừng học OOP để trả bài. Hãy học nó để sau này không phải đập bàn phím khi fix bug, và để code của bạn "sạch" hơn, dễ bảo trì hơn.</p>
    `
  },
  {
    id: 2,
    title: "Tạm biệt Callback Hell: Cách tôi chinh phục Async/Await",
    excerpt: "Hồi mới học JS, tôi lồng 5 cái callback vào nhau và gọi đó là nghệ thuật. Giờ nhìn lại chỉ muốn đập bàn phím. Cùng bàn về Promise nhé.",
    category: "JAVASCRIPT",
    date: "23/12/2025",
    imageUrl: "/images/blog/javascript-async.png",
    content: `
      <p class="mb-4">Javascript là một ngôn ngữ đơn luồng (single-threaded), nhưng lại xử lý bất đồng bộ (asynchronous) rất ảo diệu. Hồi mới học, tôi muốn lấy dữ liệu user, sau đó lấy bài viết của user đó, rồi lấy comment của bài viết đó.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">1. Kim tự tháp của sự hủy diệt (Callback Hell)</h3>
      <p class="mb-4">Ngày xưa chưa có Promise, chúng ta phải truyền hàm callback vào hàm khác. Và cơn ác mộng bắt đầu:</p>
      <pre class="bg-gray-100 p-4 border-l-4 border-black font-mono text-sm mb-4 overflow-x-auto rounded">
getUser(userId, function(user) {
    if (error) handle(error);
    getPosts(user.id, function(posts) {
        if (error) handle(error);
        getComments(posts[0].id, function(comments) {
            // Code thụt lề tận 1 ki-lô-mét
            console.log("Cứu tôi với!");
        });
    });
});
      </pre>
      <p class="mb-4">Nhìn đoạn code trên, tôi thấy mình như một kiến trúc sư xây kim tự tháp ngược. Debug cực khổ, mắt tăng độ vù vù, và việc xử lý lỗi (Error Handling) cực kỳ rời rạc.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">2. Async/Await: Chân ái cuộc đời</h3>
      <p class="mb-4">ES6 mang đến <code>Promise</code>, và ES8 mang đến <code>Async/Await</code>. Nó biến code bất đồng bộ trông như code đồng bộ tuần tự. Dễ đọc, dễ hiểu hơn gấp tỷ lần.</p>
      
      <pre class="bg-gray-100 p-4 border-l-4 border-black font-mono text-sm mb-4 overflow-x-auto rounded">
async function loadData() {
    try {
        const user = await getUser(userId); // Đợi user về
        const posts = await getPosts(user.id); // Đợi posts về
        const comments = await getComments(posts[0].id); // Đợi comments
        
        console.log("Dữ liệu đã sẵn sàng!");
    } catch (error) {
        // Chỉ cần 1 chỗ catch lỗi duy nhất
        console.error("Opp! Có lỗi xảy ra:", error);
    }
}
      </pre>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">3. Tối ưu hiệu năng với Promise.all</h3>
      <p class="mb-4">Một sai lầm phổ biến khi dùng <code>await</code> là đợi tuần tự những thứ không liên quan nhau. Ví dụ tải 3 tấm ảnh, không cần ảnh 1 xong mới tải ảnh 2.</p>
      <pre class="bg-gray-100 p-4 border-l-4 border-black font-mono text-sm mb-4 overflow-x-auto rounded">
// ❌ Chậm: Tống thời gian = T1 + T2 + T3
const img1 = await downloadImg(1);
const img2 = await downloadImg(2);

// ✅ Nhanh: Tổng thời gian = Max(T1, T2, T3)
const [img1, img2] = await Promise.all([
    downloadImg(1), 
    downloadImg(2)
]);
      </pre>

      <p class="mt-6 border-t-2 border-gray-200 pt-4">Giờ đây, code JS của tôi đã sạch sẽ hơn. Nhưng cẩn thận nhé, vòng lặp <code>forEach</code> không chơi thân với <code>async/await</code> đâu, hãy dùng <code>for...of</code>!</p>
    `
  },
  {
    id: 3,
    title: "Spring Boot: Dependency Injection giải thích cho sinh viên",
    excerpt: "Đừng định nghĩa nó bằng thuật ngữ sách vở nữa. Hãy tưởng tượng Spring Container như một 'bà mẹ' lo hết việc chuẩn bị đồ đạc cho bạn đi học.",
    category: "JAVA",
    date: "23/12/2025",
    imageUrl: "/images/blog/software-architecture.png",
    content: `
      <p class="mb-4">Dependency Injection (DI) và Inversion of Control (IoC) là xương sống của Spring Framework. Hai thuật ngữ nghe rất "kêu" và rất đáng sợ với sinh viên năm 2, năm 3.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">1. Cách truyền thống (Tự lực cánh sinh)</h3>
      <p class="mb-4">Bình thường, khi class <code>StudentController</code> cần dùng <code>StudentService</code>, bạn sẽ làm thế này:</p>
      <code class="bg-gray-200 px-2 py-1 block mb-4">StudentService service = new StudentService();</code>
      <p class="mb-4">Nghĩa là bạn (Class A) phải tự đi chợ, tự nấu cơm (tự khởi tạo B). Vấn đề là: Class A bị phụ thuộc chặt (Tightly Coupled) vào Class B. Nếu Class B đổi hàm khởi tạo thêm tham số? Bạn phải sửa code trong Class A và 100 chỗ khác.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">2. Spring Boot (Có mẹ lo)</h3>
      <p class="mb-4">Với Spring, bạn ném trách nhiệm khởi tạo object cho "bà mẹ" <strong>IoC Container</strong>. Bạn chỉ cần khai báo: "Mẹ ơi, con cần cái B".</p>
      <pre class="bg-gray-100 p-4 border-l-4 border-black font-mono text-sm mb-4 overflow-x-auto rounded">
@RestController
public class StudentController {
    // 1. Khai báo tôi cần Service
    private final StudentService studentService;

    // 2. Spring tự động "tiêm" (Inject) vào qua Constructor
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }
}
      </pre>
      <p class="mb-4">Khi ứng dụng chạy, Spring sẽ quét tìm class nào có đánh dấu <code>@Service</code>, <code>@Component</code>... tạo ra nó (Bean) và tiêm vào nơi nào cần.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">3. Tại sao nên dùng Constructor Injection?</h3>
      <p class="mb-4">Ngày xưa người ta hay dùng <code>@Autowired</code> trên field (Field Injection), nhưng giờ nó bị "kỳ thị". Lý do dùng Constructor tốt hơn:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Immutability</strong>: Dùng được với từ khóa <code>final</code>.</li>
        <li><strong>Testing</strong>: Dễ dàng viết Unit Test (bạn có thể new Controller và truyền mock service vào constructor).</li>
        <li><strong>Null Safety</strong>: Đảm bảo object không bao giờ được tạo ra ở trạng thái thiếu dependencies.</li>
      </ul>
      
      <p class="mt-6 border-t-2 border-gray-200 pt-4">Hiểu được DI/IoC là bạn đã nắm được 70% linh hồn của Spring Boot rồi đấy!</p>
    `
  },
  {
    id: 4,
    title: "Tại sao đồ án chuyên ngành tôi chọn TypeScript thay vì JS?",
    excerpt: "Code JS rất vui cho đến khi bạn nhận ra 'undefined is not a function' ngay lúc demo cho giảng viên. TypeScript hơi khó chịu, nhưng nó an toàn.",
    category: "JAVASCRIPT",
    date: "23/12/2025",
    imageUrl: "/images/blog/modern-web.png",
    content: `
      <p class="mb-4">JavaScript là ngôn ngữ của tự do. Bạn có thể gán số cho chuỗi, gán object cho mảng, JS gật đầu hết. Nhưng tự do quá thì dễ... "đi tù" (về mặt bugs).</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">1. Cơn ác mộng ngày Demo</h3>
      <p class="mb-4">Tôi nhớ mãi project năm 3. Chạy ngon lành ở nhà. Lên trường demo, bấm nút "Thanh toán", màn hình trắng xóa. Console đỏ lòm: <code>Uncaught TypeError: Cannot read property 'price' of undefined</code>.</p>
      <p class="mb-4">Lý do? API trả về thiếu trường đó trong một số trường hợp, mà tôi thì cứ hồn nhiên chấm <code>.price</code> mà không kiểm tra. JS không hề cảnh báo tôi lúc viết code.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">2. TypeScript: Người bảo vệ khó tính</h3>
      <p class="mb-4">Làm đồ án tốt nghiệp, tôi chuyển sang TS. Ban đầu rất ức chế. Nó bắt define type cho mọi thứ.</p>
      <pre class="bg-gray-100 p-4 border-l-4 border-black font-mono text-sm mb-4 overflow-x-auto rounded">
interface Product {
    id: number;
    name: string;
    price: number;
    description?: string; // Có thể có hoặc không
}

// Báo lỗi ngay nếu thiếu price!
const item: Product = { id: 1, name: "Iphone" }; 
      </pre>
      <p class="mb-4">Nhưng nhờ vậy, nếu tôi lỡ tay dùng sai kiểu dữ liệu hay truy cập thuộc tính không tồn tại, nó báo lỗi gạch đỏ ngay trên VS Code (Compile time), chứ không đợi đến lúc chạy mới toang.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">3. Tự tin Refactor code</h3>
      <p class="mb-4">Điều tuyệt vời nhất: Khi tôi đổi tên một trường trong Model, TS tự động tìm và đổi tên ở toàn bộ dự án. Với JS cũ, tôi phải Ctrl+F tìm kiếm và cầu nguyện không sửa sót.</p>

      <p class="mt-6 border-t-2 border-gray-200 pt-4"><strong>Lời khuyên:</strong> Học TypeScript đi. Các công ty tuyển dụng Frontend (React/Angular/Vue) hiện nay 90% đều yêu cầu hoặc ưu tiên ứng viên biết TypeScript.</p>
    `
  },
  {
    id: 5,
    title: "NullPointerException: Người bạn thân thiết (và đáng ghét)",
    excerpt: "Kẻ thù số 1 của mọi Java Dev. Chia sẻ kinh nghiệm xương máu về việc check null và sử dụng Optional trong Java 8 để code bớt 'rác'.",
    category: "JAVA",
    date: "23/12/2025",
    imageUrl: "/images/blog/java-npe.png",
    content: `
      <p class="mb-4">Nếu có giải thưởng cho lỗi gây ức chế nhất lịch sử Java, tôi xin bầu chọn cho <code>java.lang.NullPointerException</code> (NPE). Cái cảm giác server đang chạy ngon lành, đùng một cái 500 Error chỉ vì một biến bị null ở đâu đó.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">1. Code rác vì check null (Defensive Programming quá đà)</h3>
      <p class="mb-4">Ngày xưa code của tôi trông thế này:</p>
      <pre class="bg-gray-100 p-4 border-l-4 border-black font-mono text-sm mb-4 overflow-x-auto rounded">
if (user != null) {
    if (user.getAddress() != null) {
        if (user.getAddress().getCity() != null) {
            return user.getAddress().getCity();
        }
    }
}
return "Unknown";
      </pre>
      <p class="mb-4">Nhìn nó có chán không? Cứ như đang bóc hành tây vậy, bóc mãi mới đến lõi (Nested If Hell).</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">2. Optional đến giải cứu</h3>
      <p class="mb-4">Từ Java 8, chúng ta có <code>Optional&lt;T&gt;</code>. Nó giống như một cái hộp, có thể chứa giá trị hoặc rỗng. Nó ép chúng ta phải suy nghĩ: "Trường hợp không có giá trị thì làm gì?".</p>
      <pre class="bg-gray-100 p-4 border-l-4 border-black font-mono text-sm mb-4 overflow-x-auto rounded">
return Optional.ofNullable(user)
    .map(User::getAddress)
    .map(Address::getCity)
    .orElse("Unknown");
      </pre>
      <p class="mb-4">Code gọn hơn, đọc như văn xuôi (Fluent Interface), và quan trọng là không bao giờ bị NPE ném vào mặt nữa.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">3. Lưu ý khi dùng Optional</h3>
      <p class="mb-4">Optional không phải là viên đạn bạc.</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Không dùng Optional làm tham số cho method (gây rườm rà).</li>
        <li>Chỉ dùng Optional cho kiểu trả về (Return type) khi method có thể không tìm thấy kết quả.</li>
        <li>Đừng lạm dụng <code>Optional.get()</code> mà không check <code>isPresent()</code>, nó chẳng khác gì gây ra NPE cả. Hãy dùng <code>orElseThrow()</code>.</li>
      </ul>
      
      <p class="mt-6 border-t-2 border-gray-200 pt-4">Hãy để NPE trở thành quá khứ. Code văn minh, dùng Optional!</p>
    `
  },
  {
    id: 6,
    title: "React Hooks: useEffect đã 'lừa' tôi như thế nào?",
    excerpt: "Vòng lặp vô tận (Infinite Loop) là món đặc sản khi mới học React. Cùng mổ xẻ dependency array để không làm treo trình duyệt nữa.",
    category: "JAVASCRIPT",
    date: "23/12/2025",
    imageUrl: "/images/blog/react-hooks.png",
    content: `
      <p class="mb-4">Chuyển từ Class Component sang Functional Component với Hooks là một bước ngoặt. Nhưng <code>useEffect</code> thực sự là một cái bẫy với những tấm chiếu mới.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">1. Vòng lặp vô tận (Infinite Loop)</h3>
      <p class="mb-4">Kịch bản quen thuộc: Tôi muốn fetch data khi component mount. Tôi set state trong useEffect. Và tôi quên truyền dependency array <code>[]</code>.</p>
      <pre class="bg-gray-100 p-4 border-l-4 border-black font-mono text-sm mb-4 overflow-x-auto rounded">
// ❌ Cấm kỵ
useEffect(() => {
    setCount(count + 1); // Thay đổi state -> Re-render -> Lại chạy useEffect -> lặp vô tận
}); 
      </pre>
      <p class="mb-4">Kết quả: Trình duyệt treo cứng, quạt tản nhiệt laptop kêu như trực thăng cất cánh.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">2. Hiểu đúng về Dependency Array</h3>
      <p class="mb-4">Cái mảng thứ 2 truyền vào useEffect quyết định vận mệnh component:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Không truyền gì</strong>: Chạy sau MỌI lần render.</li>
        <li><strong>Truyền <code>[]</code> rỗng</strong>: Chỉ chạy 1 lần duy nhất sau khi mount (giống <code>componentDidMount</code>).</li>
        <li><strong>Truyền <code>[prop, state]</code></strong>: Chạy mỗi khi giá trị trong mảng thay đổi.</li>
      </ul>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">3. Cleanup Function: Đừng để lại rác</h3>
      <p class="mb-4">Nếu bạn <code>setInterval</code> hoặc <code>addEventListener</code> trong useEffect, hãy nhớ clear nó ở hàm return. Nếu không, khi user chuyển trang, sự kiện cũ vẫn chạy ngầm gây Memory Leak.</p>
      <pre class="bg-gray-100 p-4 border-l-4 border-black font-mono text-sm mb-4 overflow-x-auto rounded">
useEffect(() => {
    const timer = setInterval(() => console.log('Tick'), 1000);
    
    // Hàm dọn dẹp chạy khi component unmount
    return () => clearInterval(timer);
}, []);
      </pre>
      
      <p class="mt-6 border-t-2 border-gray-200 pt-4">useEffect quyền năng nhưng nguy hiểm. Hãy luôn tự hỏi: "Mình muốn effect này chạy lại KHI NÀO?".</p>
    `
  },
  {
    id: 7,
    title: "Java Stream API: Viết code ngắn hơn, trông 'ngầu' hơn",
    excerpt: "Thay vì viết vòng lặp for dài 10 dòng để lọc danh sách, tôi dùng Stream API chỉ tốn 1 dòng. Nhưng cẩn thận, nó khó debug lắm đấy.",
    category: "JAVA",
    date: "23/12/2025",
    imageUrl: "/images/blog/java-streams.png",
    content: `
      <p class="mb-4">Trước Java 8, xử lý Collections là cực hình. Ví dụ: Tìm tên các sinh viên trên 20 tuổi và sắp xếp theo tên.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">1. Cách cũ (Imperative Programming)</h3>
      <p class="mb-4">Tạo list tạm, loop for, if check tuổi, add vào list, rồi dùng Collections.sort... Code dài cả trang màn hình, biến tạm lung tung.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">2. Cách mới (Declarative với Stream)</h3>
      <p class="mb-4">Stream API cho phép chúng ta nói cho máy biết "Tao muốn gì" thay vì "Làm thế nào". Code đọc như văn tiếng Anh:</p>
      <pre class="bg-gray-100 p-4 border-l-4 border-black font-mono text-sm mb-4 overflow-x-auto rounded">
List<String> result = students.stream()
    .filter(s -> s.getAge() > 20)      // 1. Lọc tuổi
    .map(Student::getName)             // 2. Chỉ lấy tên
    .sorted()                          // 3. Sắp xếp
    .collect(Collectors.toList());     // 4. Gom lại thành List
      </pre>
      <p class="mb-4">Đẹp, ngắn gọn, không biến tạm (Side-effect free).</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">3. Những cái bẫy của Stream</h3>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Debug:</strong> Rất khó đặt breakpoint để xem giá trị ở giữa chuỗi xử lý. Bạn phải dùng <code>.peek()</code> để in log.</li>
        <li><strong>Hiệu năng:</strong> Với list nhỏ (vài trăm phần tử), for-loop truyền thống nhanh hơn Stream vì Stream tốn chi phí khởi tạo. Chỉ dùng Parallel Stream với dữ liệu cực lớn.</li>
        <li><strong>Tái sử dụng:</strong> Một Stream sau khi đã dùng (terminal operation) thì sẽ đóng lại. Gọi lại lần nữa sẽ dính lỗi <code>IllegalStateException</code>.</li>
      </ul>
      
      <p class="mt-6 border-t-2 border-gray-200 pt-4">Stream giúp code "ngầu" hơn, nhưng hãy dùng đúng chỗ. Đừng cố viết one-liner phức tạp khiến đồng nghiệp muốn đấm bạn khi review code.</p>
    `
  },
  {
    id: 8,
    title: "JavaScript: 3 năm rồi tôi vẫn nhầm lẫn từ khóa 'this'",
    excerpt: "Arrow function vs Regular function. Tại sao context của 'this' lại nhảy lung tung? Một bài viết tự nhắc nhở bản thân trước khi đi phỏng vấn.",
    category: "JAVASCRIPT",
    date: "23/12/2025",
    imageUrl: "/images/blog/js-this-context.png",
    content: `
      <p class="mb-4">Trong Java hay C#, <code>this</code> luôn là instance của class hiện tại. Rất trung thành. Trong JavaScript, <code>this</code> là một gã trai hư, thay đổi tùy theo "hoàn cảnh" (execution context) - ai gọi nó thì nó thuộc về người đó.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">1. Vụ án mất tích của 'this'</h3>
      <p class="mb-4">Thường gặp nhất là trong các callback hoặc event handler. Ví dụ điển hình trong React class component cũ:</p>
      <pre class="bg-gray-100 p-4 border-l-4 border-black font-mono text-sm mb-4 overflow-x-auto rounded">
class Button {
    handleClick() {
        console.log(this); // ❌ 'this' bị undefined hoặc trỏ lung tung
    }
}
      </pre>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">2. Arrow Function cứu thế giới</h3>
      <p class="mb-4">Trước ES6, chúng ta phải dùng trò mèo gán <code>var self = this</code> hoặc dùng <code>.bind(this)</code>. Rất xấu và dư thừa.</p>
      <p class="mb-4">Arrow Function <code>() => {}</code> ra đời với đặc tính quan trọng: Nó <strong>KHÔNG</strong> có <code>this</code> của riêng nó. Nó lấy <code>this</code> từ scope bao bên ngoài (lexical scoping). Nó "trung thành"!</p>
      <pre class="bg-gray-100 p-4 border-l-4 border-black font-mono text-sm mb-4 overflow-x-auto rounded">
// ✅ Safe
setTimeout(() => {
    this.doSomething(); // 'this' được giữ nguyên từ context bên ngoài
}, 1000);
      </pre>

      <h3 class="text-2xl font-bold mt-8 mb-4">3. Khi nào KHÔNG nên dùng Arrow Function?</h3>
      <p class="mb-4">Đó là khi làm method cho Object hoặc Prototype, vì ta cần <code>this</code> trỏ vào chính object đó.</p>
      <pre class="bg-gray-100 p-4 border-l-4 border-black font-mono text-sm mb-4 overflow-x-auto rounded">
const person = {
    age: 10,
    grow: () => {
        this.age++; // ❌ Sai! Arrow func không có this, nó sẽ trỏ ra window/global
    },
    growOld: function() {
        this.age++; // ✅ Đúng
    }
}
      </pre>
      
      <p class="mt-6 border-t-2 border-gray-200 pt-4">JS đau đầu thật sự. Nhưng hiểu rõ <code>this</code> là chìa khóa để trở thành Senior JS Developer.</p>
    `
  },
  {
    id: 9,
    title: "Cú lừa về Garbage Collection: Nó không dọn ngay lập tức",
    excerpt: "Hồi mới học Java, tôi tưởng cứ gán null là RAM được giải phóng ngay. Thực tế phức tạp hơn nhiều. Tìm hiểu sâu hơn về JVM nào.",
    category: "JAVA",
    date: "23/12/2025",
    imageUrl: "/images/blog/java-gc.png",
    content: `
      <p class="mb-4">Hồi năm 2 học môn Hệ điều hành, tôi cứ nghĩ Java có bộ thu gom rác (Garbage Collector - GC) thì mình cứ xả rác thoải mái, gán <code>obj = null</code> là xong chuyện. Nhưng đời không như mơ.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">1. Sự thật phũ phàng</h3>
      <p class="mb-4">Việc bạn gán <code>obj = null</code> chỉ là đánh dấu object đó "unreachable" (không ai với tới nữa). Còn khi nào dọn là quyền của JVM. Nó giống như bạn vứt rác ra thùng trước cửa, nhưng bao giờ xe rác đến gom thì là lịch của họ.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">2. Stop-the-world (Cả thế giới đứng im)</h3>
      <p class="mb-4">Khi bộ nhớ đầy, GC sẽ chạy. Để dọn rác an toàn, JVM thường phải tạm dừng tất cả các luồng ứng dụng (Stop-the-world). App của bạn sẽ bị đơ trong vài mili-giây, thậm chí vài giây nếu Heap quá lớn.</p>
      <p class="mb-4">Với các hệ thống trading chứng khoán hay game real-time cần độ trễ thấp, đây là thảm họa. Vì thế sinh ra các thuật toán GC xịn hơn như G1 GC, ZGC.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">3. Memory Leak trong Java? Có đấy!</h3>
      <p class="mb-4">Đừng tưởng Java không leak ram. Nếu bạn add object vào một <code>static List</code> và quên remove, nó sẽ sống mãi mãi. GC không dám dọn nó vì nó vẫn "đang được dùng".</p>
      <pre class="bg-gray-100 p-4 border-l-4 border-black font-mono text-sm mb-4 overflow-x-auto rounded">
public class Cache {
    // Cái list này sẽ phình to mãi mãi nếu không clear
    public static List<Object> leakList = new ArrayList<>();
}
      </pre>
      
      <p class="mt-6 border-t-2 border-gray-200 pt-4"><strong>Lưu ý:</strong> Đừng cộng chuỗi <code>String</code> trong vòng lặp (tạo rác liên tục). Hãy dùng <code>StringBuilder</code>.</p>
    `
  }
];