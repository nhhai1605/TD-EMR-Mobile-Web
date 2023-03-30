# Project Name
> TDEMRREACT
<hr>


## ✨ Một số quy tắc chung.

`PascalCase`
   * Component (.tsx): PatientDashboard.tsx, UserManagement.tsx
   * Model entity, class, interface, và các type còn lại (class PatientViewModel, UserClass, PatientDashboard)

`CamelCase`
   * File .ts
   * Tên các biến, và hàm bên trong 1 component.
   * Hook: useTranslate, useState, use

`Kebab-case`
   * Tên folder sẽ viết thường, nếu nhiều từ sẽ cách bằng dấu - `user-management`
 
`Nên đặt rõ ràng tên biến để tránh việc đọc vào khó hiểu`

    Bad: 
        const abc = 60;
    Good:  
        const minutes = 60;

`Tránh việc tạo ra các magic number`

    Bad: 
        if(rule > 60)// 60 ???

    Good: 
        const TIME_EXPIRE = 60;
        if(rule > TIME_EXPIRE)

`Hằng số`
   * Các biến liên quan đến hằng số, đây là ngoại lệ, nên viết hoa hết và cách nhau = dấu _ ví dụ: TIME_EXPIRE, DISCOUNT_PERCENT, LIMIT_RATE

`Nên xài const và let, hạn chế xài var trong typescript (liên quan đến scope của 1 biến)`

`Tránh đặt tên file tsx giống với tên folder, ví dụ pages/patient/Patient.tsx => vì khi import nó sẽ thành 'pages/patient/Patient' 
   * Nên đặt khác với tên folder pages/patient/PatientManagement.tsx
	
`Tránh tự viết css liên quan đến vấn đề responsive ui:`
   * Nên sử dụng component của MUI để làm
   * Chỉ nên override các style của MUI.
    
`Tránh viết 1 page quá dài, nên break ra các component nhỏ hơn`

`Nên tạo ra các Model để nhận dữ liệu và passing dữ liệu thay vì sử dụng any. `
   * any vẫn có thể đc sử dụng, nhưng trong 1 số phạm vi nhất định, có thể sử dụng trong các callback của MUI hoặc javascript.
   * Có thể sử dụng interface hoặc type để tạo Model, class vẫn được nhưng cú pháp dài hơn (thường dùng để làm chuyện khác)
    

`1 số quy tắt khác có thể tham khảo link sau`
	https://github.com/airbnb/javascript/tree/master/react#naming

## ✨ Một số extension visual Code NÊN có:

   * `indent-rainbow`: tô màu để group các đoạn code đoạn html cho dễ nhìn
   * `Prettier`: format code.
   * `SVN (Chris Johnston)` - cài svn phải cài chức năng command line, thì tool nó mới work.
   * `Debugger for Chrome`
   * `ES7+ React/Redux/React-Native snippets`: gợi ý mã trong react, code cho nhanh.
   * `Bracket Pair Colorizer`  (vscode tự có, enable chức năng này trong setting) 
        dùng để đánh highlight group cái dấu { } trong code để dễ nhìn hơn.

### Khác
   * `Code Spell Checker`: check chính tả tên biến tiếng anh
   * `Polacode`: dùng screenshot đoạn code mà k cần xài sniping tool của micrsoft, thì có thể xài.
   * `Quokka.js` (Wallaby.js) tự động print kết quả của 1 số đoạn code trên visual code mà mình k cần phải xài console.log để coi ngoài trình duyệt


## ✨ Quy tắc về source control (SVN/GIT)

    - Đang trong giai đoạn Dev
        + Khi implement 1 chức năng mới. Nên checkout từ trunk ra 1 branch mới để làm chức năng đó
            - Quy tắc tên branch: dev/[Mã của task trên bitrix]-[Tóm tắt tổng quát tên branch]
                ví dụ: thực hiện code màn hình quản lý người dùng
                        dev/123_UserManagement.
            - Khi commit bắt buộc phải nhập message cho lần commit đó. Nội dung sẽ xoay quanh vấn đề implement task đó.
                ví dụ: "[123] thực hiện chỉnh sửa giao diện." -> 123 ở đây là tên task, giúp cho mình dễ dàng search trên SVN hoặc GIT.
        + Quá trình merge code:
            1. Commit tất cả code trên branch của mình [BranchDev].
            2. Switch qua brank trunk để pull code mới nhất về.
            3. Qua lại brank của mình tiến hành merge code từ Trunk vào Branch của mình (tránh làm ngược lại). 
            4. Resolve conflict nếu có sau đó test xem build code có lỗi hay không sau đó commit.
            5. Switch qua brank trunk và thực hiện merge từ [BranchDev] qua trunk và commit.
            6. Kết thúc quá trình.
    - Giai đoạn Production: (sẽ update)
    

## ✨ Build production React

    - Test trước khi build
    - Run: `npm run build:prod`
    - Sau khi xong source sẽ out ra folder `build/`
    - Chép toàn bộ override lên con 25 là xong

## 🚀 1 số ghi chú về GIT

#### Các bạn có thể sử dụng bất cứ tool nào mình thích, hoặc sử dụng theo suggest bên dưới.
* 1 số tool Git Desktop thường sử dụng git: `Source Tree`, `Git GUI Clients`, `Github desktop`... (Theo anh thấy Source Tree dễ dùng nhất)
* Hoặc Git GUI command line có thẻ sử dụng repo này: `https://github.com/jesseduffield/lazygit`
* Hoặc GIT command line như bình thường.
* Merge thì bắt buộc phải vào IDE để merge...

### 1 số lệnh cơ bản cho các bạn mới, nếu thích command line, còn không thì sử dụng GUI desktop ở trên.
* Check Log: `git log`
* Check status: `git status` xem đang ở branch nào.
* Branching: 
	* `git checkout -b 'dev/TenBranch'` đoạn này mặc định sẽ clone code từ current branch (mà mình đang đứng) ra branch mới tên là TenBranch nằm trong folder dev, nếu xài lệnh này bắt buộc phải check xem mình đang đứng ở đâu
	* `git checkout -b featureBranch main`: hoặc nếu muốn checkout branch mới từ 1 branch được chỉ đinh, thì lệnh trên có nghĩa là tạo branch tên `featureBranch` từ `main`
* Add file: `git add .` _ dấu chấm là add tất cả các file
* Commit: `git commit -m "nội dung message"`
* Push: `git push`
* Pull: `git pull`
* Merge: `git merge main` (có nghĩa là sẽ merge tất cả đồ ở nhánh chính (main) vào nhánh hiện tại - nhớ check xem đang đứng ở đâu)
* Rebase: `git rebase main` (Điều này có nghĩa là trong quá trình làm ở 1 branch khác ví dụ `dev/ChucNangNaoDo` trong 1 thời gian dài, branch `main` đã có quá nhiều sự thay đổi, để tránh việc branch mình bị `out-of-date` và dễ conflict, thì sử dụng rebase thay vì merge để lấy những update mới từ main và tiếp tục code.)
    
⭐️ Ở đây các bạn mới sẽ hơi lạ vì thấy merge và rebase nhìn vào sao nó hơi giống nhau... (Anh sẽ giải thích sau, cứ tuân thủ đã)

⭐️ Sau khi đã complete chức năng thì thực hiện merge, còn vẫn dev những muốn lấy đồ mới từ main thì sử dụng rebase.
    
🔥🔥🔥🔥🔥Nghiêm cấm sử dụng force push.


## 🚀 1 số lưu ý về GIT - `Nếu bạn chưa gặp`
1. Khi rename 1 folder từ `NewFeature` => `NewFeature2`, thì sẽ có 2 action xảy ra, là add folder `NewFeature2`, và remove folder `NewFeature`, 
* Nhưng sau khi merge vào main bị conflict hoặc vì lý do nào đó tụi e k để ý, commit lên local Branch, hoặc switch qua lại giữa các branch, lúc này trên project sẽ có cả 2 folder mới và cũ, đại loại là k để ý hoặc merge sai. Tóm lại là nên chú ý nha `Vì anh đang thấy có vụ này ở `main` nên a cảnh báo chung.`

2.  Git nó k phân biệt đc chữ hoa chữ thường, cho nên khi e đặt tên folder `NewFeature` => đổi thành `newfeature`, hoặc ngược lại nó k hiểu. 
* Cách giải quyết nếu gặp phải.
	* C1: 
		* rename `NewFeature` => `NewFeature2` => Commit
		* rename `NewFeature2` => `newfeature` => Commit, giải quyết theo kiểu swap vậy.
	* C2: Hiện tại phiên bản git mới bây giờ đã cập nhật vụ này ở config.
		* `git config core.ignorecase true` : bật true để sửa tên file
		* rename `NewFeature` => `newfeature` => Commit
		* `git config core.ignorecase false` : restore lại.


---




---Revert Commit