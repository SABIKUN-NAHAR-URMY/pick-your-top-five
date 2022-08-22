function getElement(elementId){
    const elementName = document.getElementById(elementId);
    const elementNameInner = elementName.innerText;
    return elementNameInner;
}
let count = 0;
function createMenuItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    count = count + 1;
    //section five player validation check
    if(count > 5)
    {
        alert('Can not add more than 5 players');
        return;
    }
    return li;
}

document.getElementById('messi-btn').addEventListener('click',function(){
    const messiName = getElement('messi-name');
    const selectItem = document.querySelector('#select-item');
    selectItem.appendChild(createMenuItem(messiName));

    const btn = document.getElementById('messi-btn');
    btn.disabled = 'true';
    btn.style.backgroundColor = '#A2A9AF';
})

document.getElementById('neymar-btn').addEventListener('click',function(){
    const neymarName = getElement('neymar-name');
    const selectItem = document.querySelector('#select-item');
    selectItem.appendChild(createMenuItem(neymarName));

    const btn = document.getElementById('neymar-btn');
    btn.disabled = 'true';
    btn.style.backgroundColor = '#A2A9AF';
})

document.getElementById('kylian-btn').addEventListener('click',function(){
    const kylianName = getElement('kylian-name');
    const selectItem = document.querySelector('#select-item');
    selectItem.appendChild(createMenuItem(kylianName));

    const btn = document.getElementById('kylian-btn');
    btn.disabled = 'true';
    btn.style.backgroundColor = '#A2A9AF';
})

document.getElementById('vitor-btn').addEventListener('click',function(){
    const vitorName = getElement('vitor-name');
    const selectItem = document.querySelector('#select-item');
    selectItem.appendChild(createMenuItem(vitorName));

    const btn = document.getElementById('vitor-btn');
    btn.disabled = 'true';
    btn.style.backgroundColor = '#A2A9AF';
})

document.getElementById('sergio-btn').addEventListener('click',function(){
    const sergioName = getElement('sergio-name');
    const selectItem = document.querySelector('#select-item');
    selectItem.appendChild(createMenuItem(sergioName));

    const btn = document.getElementById('sergio-btn');
    btn.disabled = 'true';
    btn.style.backgroundColor = '#A2A9AF';
})

document.getElementById('renato-btn').addEventListener('click',function(){
    const renatoName = getElement('renato-name');
    const selectItem = document.querySelector('#select-item');
    selectItem.appendChild(createMenuItem(renatoName));

    const btn = document.getElementById('renato-btn');
    btn.disabled = 'true';
    btn.style.backgroundColor = '#A2A9AF';
})

document.getElementById('garrincha-btn').addEventListener('click',function(){
    const garrinchaName = getElement('garrincha-name');
    const selectItem = document.querySelector('#select-item');
    selectItem.appendChild(createMenuItem(garrinchaName));

    const btn = document.getElementById('garrincha-btn');
    btn.disabled = 'true';
    btn.style.backgroundColor = '#A2A9AF';
})

document.getElementById('johan-btn').addEventListener('click',function(){
    const johanName = getElement('johan-name');
    const selectItem = document.querySelector('#select-item');
    selectItem.appendChild(createMenuItem(johanName));

    const btn = document.getElementById('johan-btn');
    btn.disabled = 'true';
    btn.style.backgroundColor = '#A2A9AF';
})

document.getElementById('dennis-btn').addEventListener('click',function(){
    const dennisName = getElement('dennis-name');
    const selectItem = document.querySelector('#select-item');
    selectItem.appendChild(createMenuItem(dennisName));

    const btn = document.getElementById('dennis-btn');
    btn.disabled = 'true';
    btn.style.backgroundColor = '#A2A9AF';
})

