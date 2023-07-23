const nav_li = document.cuerySelectorAll('.nav_li');
nav_li.forEach(function(li){
    li.addEventListener('clik', function(e){
        const corretli = document.querySelector('.active');
        corretli.classList.remove('active');
        e.target.classList.add('active');
    });
    
});













    


    

    
