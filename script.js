const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const confirmBtn = document.getElementById('confirmBtn');

const buyBtns = document.querySelectorAll('.buyBtn');

buyBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const img = btn.dataset.img || '';
    const title = btn.dataset.title;
    const desc = btn.dataset.desc;

    modalTitle.textContent = title;
    modalDesc.textContent = desc;

    if(img){
      modalImg.src = img;
      modalImg.style.display = 'block'; 
    } else {
      modalImg.style.display = 'none'; 
    }

    modal.classList.add('show');
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});

confirmBtn.addEventListener('click', () => {
  window.open('https://discord.gg/kzYJs9RCfb', '_blank');
});
