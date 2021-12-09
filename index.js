let modal = document.querySelector('.modal')
let open = document.querySelector('#open')
let close = document.querySelector('#close')
let bg_modal = document.querySelector('.bg-modal')

open.onclick = () => {
    modal.style.left = '50%'
    bg_modal.style.display = 'block'
    setTimeout(() => {
        bg_modal.style.backgroundColor =  "rgba(0, 0, 0, .67)" 
    }, 100);
}

close.onclick = () => {
    modal.style.left = '-1920px'
    bg_modal.style.backgroundColor =  "rgba(0, 0, 0, 0)" 
    setTimeout(() => {
        bg_modal.style.display = 'none'
    }, 100);
}
bg_modal.onclick = () => {
    modal.style.left = '-1920px'
    bg_modal.style.backgroundColor =  "rgba(0, 0, 0, 0)" 
    setTimeout(() => {
        bg_modal.style.display = 'none'
    }, 100);
}