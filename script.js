
document.addEventListener('DOMContentLoaded', () => { 
    
    function createRipple(event, isBlue) { 
        const btn = event.currentTarget; 
        const ripple = document.createElement('div'); 
        ripple.className = `ripple ${isBlue ? 'ripple-blue' : ''}`; 
 
        const rect = btn.getBoundingClientRect(); 
        const size = Math.max(rect.width, rect.height) * 2; 
        const x = event.clientX - rect.left - size / 2; 
        const y = event.clientY - rect.top - size / 2; 
 
        ripple.style.width = ripple.style.height = `${size}px`; 
        ripple.style.left = `${x}px`; 
        ripple.style.top = `${y}px`; 
 
        btn.appendChild(ripple); 
        ripple.addEventListener('animationend', () => ripple.remove()); 
    } 
 
    
    document.querySelector('.android-btn').addEventListener('click', (e) => { 
        createRipple(e, false); 
        toggleSuggestionList(); 
    }); 
 
    
    document.querySelector('.android-input-btn').addEventListener('click', (e) => { 
        createRipple(e, true); 
        toggleSuggestionList(); 
    }); 
 

function toggleSuggestionList() {
    const list = document.querySelector('.suggestion-list');
		const hoverfix = document.querySelector('.android-btn');
    const overlay = document.querySelector('.overlay') || createOverlay();
 
    if (!list.classList.contains('active')) {
        list.style.display = 'block'; 
        overlay.style.display = 'block';
        setTimeout(() => {
            list.classList.add('active'); 
            overlay.classList.add('active');
						hoverfix.classList.add('hoverfix');
        }, 10);
    } else {
        
        list.classList.add('leaving');
        overlay.classList.add('leaving');
				hoverfix.classList.remove('hoverfix');

				
 
        setTimeout(() => {
            list.classList.remove('active', 'leaving');
            overlay.classList.remove('active', 'leaving');
            list.style.display = 'none'; 
            overlay.style.display = 'none';
        }, 300);
    }
}
function createOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', () => {
        toggleSuggestionList();
    });
    return overlay;
}
 

document.addEventListener('click', (e) => {
    if (!e.target.closest('.android-btn-container') && 
        !e.target.closest('.command-box') &&
        !e.target.closest('.suggestion-list')) {
        const list = document.querySelector('.suggestion-list');
        if (list.classList.contains('active')) {
            toggleSuggestionList();
        }
    }
});
});





document.getElementById('mybilibili').addEventListener('click', function() {
        window.location.href ='https://space.bilibili.com/3546375377652003';
    });
		
 const text = "请输入文本。"; 
const typingText = document.querySelector('.typing-text');
 
let index = 0;
const typingEffect = setInterval(() => {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
    } else {
        clearInterval(typingEffect);
    }
}, 200);

