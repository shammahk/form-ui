const tabs = document.querySelectorAll('nav li');

tabs.forEach((el, index) => {
    el.addEventListener('click', () => {
        showContent(el)
        changeContent(index)
        changeNavLink(index)
    })
})

function changeNavLink(index) {
    const list = tabs[index]
    // remove .selected from all list
    tabs.forEach(element => {
        element.classList.remove('selected')
    });
    
    //add the .selected class to the list with current index
    list.classList.add('selected');
}

function showContent(el) {
    console.log(el.textContent);
}

// another way to define an anonymous function
const changeContent = (index) => {
    const forms = document.querySelectorAll('form');
    const currentForm = forms[index]

    // hide the others 
    forms.forEach(form => form.classList.add('hidden'))

    // show the current one
    currentForm.classList.remove('hidden')
}