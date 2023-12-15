var main_div = document.querySelector('.main_div');

main_div.addEventListener('click', () => {
    var new_div = document.createElement('div').classList.add('content');
    var new_p = document.createElement('div').classList.add('inner_content');
    document.getElementsByClassName('main_div')[0].append(new_div);
    document.getElementsByClassName('content')[0].append(new_p);
    new_p.innerHTML = "Child 1";
});

document.addEventListener('click', (e) => {
    var target = e.target;
    if(target.closest('inner_content'))
    {
        target.style.backgroundColor = "blue";
        console.log("Target",e.target);
    }
});

