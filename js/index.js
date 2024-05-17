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

function showWork(id)
{
    var workContent = document.getElementById(id);
    var modalcontent = document.getElementById('modal-content1');
    modalcontent.innerHTML = workContent.innerHTML;
    document.getElementById('myModal1').style.display = "block";
}
function closeModal1()
{
    document.getElementById('myModal1').style.display = "none";   
}