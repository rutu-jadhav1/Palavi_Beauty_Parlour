function show(id){
    var receiptContent = document.getElementById(id);
    var modalcontent = document.getElementById('modal-content');
    modalcontent.innerHTML = receiptContent.innerHTML;
    document.getElementById('myModal').style.display = "block";
}
function closeModal()
{
    document.getElementById('myModal').style.display = "none";   
}