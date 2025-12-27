// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 移动导航栏切换
const mobileNavToggle = document.querySelector('.navbar-toggle');
const mobileNav = document.querySelector('.mobile-nav');

if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        this.classList.toggle('active');
    });
}

// 移动导航栏链接点击后关闭菜单
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        mobileNavToggle.classList.remove('active');
    });
});

// 平滑滚动
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// AOS 动画初始化
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-out-quad',
        once: true
    });
});

// 翻转动画卡片功能
const flipCard = document.querySelector('.flip-card-inner');
if (flipCard) {
    flipCard.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
}

// 项目卡片悬停效果
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// 技能条动画
const skillBars = document.querySelectorAll('.skill-progress');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.dataset.progress;
            entry.target.style.width = width + '%';
        }
    });
}, {
    threshold: 0.5
});

skillBars.forEach(bar => {
    observer.observe(bar);
});

// 数字递增动画
function animateNumbers() {
    const numbers = document.querySelectorAll('.counter-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const number = entry.target;
                const targetValue = parseInt(number.textContent);
                let currentValue = 0;
                const increment = targetValue / 50;
                
                const timer = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= targetValue) {
                        number.textContent = targetValue;
                        clearInterval(timer);
                    } else {
                        number.textContent = Math.floor(currentValue);
                    }
                }, 30);
                
                observer.unobserve(number);
            }
        });
    }, {
        threshold: 0.5
    });
    
    numbers.forEach(number => {
        observer.observe(number);
    });
}

// 页面加载完成后初始化动画
document.addEventListener('DOMContentLoaded', function() {
    animateNumbers();
});

// 回到顶部按钮
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
