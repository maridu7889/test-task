const data = {
    "services": [
        {
            "id": 1,
            "head": null,
            "name": "Проф.осмотр",
            "node": 0,
            "price": 100.0,
            "sorthead": 20
        },
        {
            "id": 2,
            "head": null,
            "name": "Хирургия",
            "node": 1,
            "price": 0.0,
            "sorthead": 10
        },
        {
            "id": 3,
            "head": 2,
            "name": "Удаление зубов",
            "node": 1,
            "price": 0.0,
            "sorthead": 10
        },
        {
            "id": 4,
            "head": 3,
            "name": "Удаление зуба",
            "node": 0,
            "price": 800.0,
            "sorthead": 10
        },
        {
            "id": 5,
            "head": 3,
            "name": "Удаление 8ого зуба",
            "node": 0,
            "price": 1000.0,
            "sorthead": 30
        },
        {
            "id": 6,
            "head": 3,
            "name": "Удаление осколка зуба",
            "node": 0,
            "price": 2000.0,
            "sorthead": 20
        },
        {
            "id": 7,
            "head": 2,
            "name": "Хирургические вмешательство",
            "node": 0,
            "price": 200.0,
            "sorthead": 10
        },
        {
            "id": 8,
            "head": 2,
            "name": "Имплантация зубов",
            "node": 1,
            "price": 0.0,
            "sorthead": 20
        },
        {
            "id": 9,
            "head": 8,
            "name": "Коронка",
            "node": 0,
            "price": 3000.0,
            "sorthead": 10
        },
        {
            "id": 10,
            "head": 8,
            "name": "Слепок челюсти",
            "node": 0,
            "price": 500.0,
            "sorthead": 20
        }]
};


const tree = document.getElementById('tree');

function createNode(service){
    const li=document.createElement('li')
    const span=document.createElement('span')
    span.textContent=service.name
    span.classList.add('show')
    li.appendChild(span)
    li.appendChild(document.createTextNode(` (${service.price})`))

    if(service.node===1){
        const ul=document.createElement('ul')
        ul.classList.add('hide')
        li.appendChild(ul)
        buildTree(data.services, service.id, ul)
    }
    return li
}

function buildTree(services, parentId, parentUl){
    const branch=services.filter(service=>service.head===parentId)
    branch.sort((a,b)=>a.sorthead-b.sorthead)

    branch.forEach(service=>{
        const node=createNode(service)
        parentUl.appendChild(node)
    })



}

function showTree() {
    buildTree(data.services, null, tree)
    tree.style.display='block'

    
}

function toggleVisibility(event) {
    if (event.target.tagName !=='SPAN')
    return
    const childrenContainer=event.target.parentNode.querySelector('ul')

    if (!childrenContainer) 
    return
    childrenContainer.classList.toggle('hide')
}


showTree()
tree.onclick=toggleVisibility 

console.log(JSON.stringify(data.services, null, 1))

