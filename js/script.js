function darkmode(){
    const imgdark=document.getElementById('dark');
    imgdark.classList.add('active');

    const imglight=document.getElementById('light');
    imglight.classList.remove('active');

    const bodyelement=document.getElementById('body');
    bodyelement.classList.add('dark');
    const bodylelement=document.getElementById('body');
    bodylelement.classList.remove('light');
}
function lightmode(){
    const imglight=document.getElementById('light');
    imglight.classList.add('active');

    const imgdark=document.getElementById('dark');
    imgdark.classList.remove('active');

    const bodylelement=document.getElementById('body');
    bodylelement.classList.add('light');
    const bodyelement=document.getElementById('body');
    bodyelement.classList.remove('dark');
    
}