// 간단한 예시: 버튼 클릭 시 알림 메시지 출력
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        alert('링크 클릭됨: ' + event.target.textContent);
      });
    });
  });