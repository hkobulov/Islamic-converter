var elForm = document.querySelector('.weight-form');
var elWeightInput = document.querySelector('.weight-input');
var elWeightPost = document.querySelector('.weight-post');
var elWeightGet = document.querySelector('.weight-get');
var elWeightShow = document.querySelector('.weight-show');

elForm.addEventListener('submit', function(evt){
    evt.preventDefault();

    var inputValue = elWeightInput.value -0;
    var calculated = inputValue;
    var senderOption = elWeightPost.value;
    var returnOption = elWeightGet.value;

    if(senderOption === 'kg'){
        calculated *= 1000;
    } else if(senderOption === 'ir_dr'){
        calculated *=3.17;
    } else if(senderOption === 'hj_dr'){
        calculated *= 2.975;
    } else if(senderOption === 'ratl'){
        calculated *=408;
    } else if(senderOption === 'mud'){
        calculated *=544;
    } else if (senderOption === 'man'){
        calculated *=816;
    } else if (senderOption === 'qist'){
        calculated *=1088;
    } else if (senderOption === 'kilaja'){
        calculated *=1530;
    } else if (senderOption === 'sm_so'){
        calculated *=2176;
    } else if (senderOption === 'bg_so'){
        calculated *=3264;
    } else if (senderOption === 'faraq'){
        calculated *=6528;
    } else if (senderOption === 'kayla'){
        calculated *=13056;
    } else if (senderOption === 'qafiz'){
        calculated *=26112;
    } else if (senderOption === 'araq'){
        calculated *=32640;
    } else if (senderOption === 'mudiy'){
        calculated *=48960;
    } else if (senderOption === 'irdab'){
        calculated *=52224;
    } else if (senderOption === 'qulla'){
        calculated *=102000;
    } else if (senderOption === 'jarib'){
        calculated *=104448;
    } else if (senderOption === 'vasaq'){
        calculated *=130560;
    } else if (senderOption === 'qintor'){
        calculated *=142800;
    } else if (senderOption === 'kur'){
        calculated *=1566720;
    }


    if(returnOption === 'kg'){
        calculated /= 1000;
    } else if(returnOption === 'ir_dr'){
        calculated /=3.17;
    } else if(returnOption === 'hj_dr'){
        calculated /=2.975;
    } else if(returnOption === 'ratl'){
        calculated /=408;
    } else if(returnOption === 'mud'){
        calculated /=544;
    } else if (returnOption === 'man'){
        calculated /=816;
    } else if (returnOption === 'qist'){
        calculated /=1088;
    } else if (returnOption === 'kilaja'){
        calculated /=1530;
    } else if (returnOption === 'sm_so'){
        calculated *=2176;
    } else if (returnOption === 'bg_so'){
        calculated /=3264;
    } else if (returnOption === 'faraq'){
        calculated /=6528;
    } else if (senderOption === 'kayla'){
        calculated /=13056;
    } else if (senderOption === 'qafiz'){
        calculated /=26112;
    } else if (senderOption === 'araq'){
        calculated /=32640;
    } else if (senderOption === 'mudiy'){
        calculated /=48960;
    } else if (senderOption === 'irdab'){
        calculated /=52224;
    } else if (senderOption === 'qulla'){
        calculated /=102000;
    } else if (senderOption === 'jarib'){
        calculated /=104448;
    } else if (senderOption === 'vasaq'){
        calculated /=130560;
    } else if (senderOption === 'qintor'){
        calculated /=142800;
    } else if (senderOption === 'kur'){
        calculated /=1566720;
    }

    elWeightShow.textContent = calculated.toFixed(3);
})