const dropDown=({labelText='Select', items = []})=>{
    const drop = document.createElement('div');
    drop.classList.add('drop');
    const dropButton = document.createElement('div');
    dropButton.classList.add('button');
    dropButton.textContent=labelText;
    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');
    items.forEach((item)=>{
        const childItem= document.createElement('div');
        childItem.textContent=item;
        childItem.addEventListener('click', ()=>{
            console.log(item);
        })
        menuItems.appendChild(childItem);
    });
    drop.appendChild(dropButton);
    drop.appendChild(menuItems);
    dropButton.addEventListener('click', ()=>{
        if(menuItems.style.display==='block'){
            menuItems.style.display='none';
        }else{
            menuItems.style.display='block'
        }
    });
    return drop;
}

// Usage
const drop = dropDown({
  labelText: 'Chọn món',
  items: ['Phở', 'Bún', 'Mì'],
  onSelect: (item) => {
    alert(`Bạn đã chọn: ${item}`);
  }
});

document.body.appendChild(drop);
