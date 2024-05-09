function toggleReview(state){
    const reviewElement = document.getElementById("1text");
    if(state =='1'){
        reviewElement.innerHTML = 'Absolutely thrilled with my experience at Palavi Beauty Parlour! Impeccable service, talented stylists, and a welcoming atmosphere. Will definitely be back!<br/><sub class="customer-name sedan-sc-regular">~ Samiksha</sub>';
    }
    else if(state == '2')
    {
        reviewElement.innerHTML = 'Amazing service at Palavi Beauty Parlour! The staff were friendly, skilled, and made me feel pampered. Can not wait to return for more treatments!!<br/><sub class="customer-name sedan-sc-regular">~ Nikita</sub>';
    }
    else if(state == '3')
    {
        reviewElement.innerHTML = 'Visited Palavi Beauty Parlour and was blown away! Exceptional service, skilled professionals, and a relaxing ambiance. My go-to for all beauty needs!!<br/><sub class="customer-name sedan-sc-regular">~ Sarita</sub>';
    }
}