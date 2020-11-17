export function createQuad(where,quadSize){

    let quadContainer = document.querySelector(where)

    let containerWidth = quadContainer.clientWidth
    quadContainer.style.height = containerWidth+'px'
    
    let cubeSize = containerWidth / quadSize

    let id=1;
    for(let x=1;x<=quadSize;x++){
        for(let y=1;y<=quadSize;y++){
            quadContainer.appendChild(createCube(id,y,x,cubeSize))
            id++
        }    
    }

}

export function destroyQuad(which){
    let quad = document.querySelector(which)
    quad.innerHTML = ''
    quad.removeAttribute('style')
}

function createCube(id,x,y,size){
    let cube = document.createElement('div')
    cube.id = 'cube_'+id;
    cube.className = 'cube'
    cube.dataset.coords = [x,y]
    cube.dataset.killed = 0
    cube.dataset.multiplehit = "1"
    cube.style.width = size+'px'
    cube.style.height = size+'px'

    let cubeIndicator = document.createElement('span')
    cubeIndicator.className = 'cube__indicator'
    cubeIndicator.textContent = id
    cube.appendChild(cubeIndicator)

    let icon = document.createElement('span')
    icon.className = 'cube__icon'
    cubeIndicator.appendChild(icon)
    
    return cube
}
