let tab1 = document.getElementById('tab-1');
let tab2 = document.getElementById('tab-2');
let tab3 = document.getElementById('tab-3');
let tabContent1 = document.getElementById('tab-content-1');
let tabContent2 = document.getElementById('tab-content-2');
let tabContent3 = document.getElementById('tab-content-3');
tab1.addEventListener('click', () =>{
    tabContent1.style.display = 'unset';
    tabContent2.style.display = 'none';
    tabContent3.style.display = 'none';
})

tab2.addEventListener('click', () =>{
    tabContent1.style.display = 'none';
    tabContent2.style.display = 'unset';
    tabContent3.style.display = 'none';
})

tab3.addEventListener('click', () =>{
    tabContent1.style.display = 'none';
    tabContent2.style.display = 'none';
    tabContent3.style.display = 'unset';
})