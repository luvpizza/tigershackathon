

// slider sale
const sliderAllElements = document.querySelector('.sale__grid').children
const sliderPrev = document.querySelector('.sale__btn_left')
const sliderNext = document.querySelector('.sale__btn_right')
const sliderCurrentElements = [0,1,2,3,4,5]



function sliderRefresh(){
    for(let i = 0; i < 3; i++){
        sliderAllElements[sliderCurrentElements[i]].style.display = 'none'  
        sliderAllElements[sliderCurrentElements[i + 3]].style.display = 'block'  

    }
}

sliderRefresh()

function upElements(arr){
    for(let i = 0; i < arr.length; i++){
      arr[i]++
      if(arr[i] === 6){
        arr[i] = 0
      }
      
    }
    
    return arr
  }
  
      
  function downElements(arr){
      for(let i = 0; i < arr.length; i++){
        arr[i]--
        if(arr[i] === -1){
          arr[i] = 5
        }
        
      }
      
      return arr
      }

sliderNext.addEventListener('click',((e) => {
    upElements(sliderCurrentElements)
    sliderRefresh()
    console.log(sliderCurrentElements)
}))
sliderPrev.addEventListener('click',((e) => {
    downElements(sliderCurrentElements)
    sliderRefresh()
    console.log(sliderCurrentElements)
}))


// events

const eventDesc = document.querySelector('.event__desc').innerText
console.dir(document.querySelector('.events__grid-left').children)
console.dir(document.querySelector('.events__grid-left').children[0])

document.querySelector('.events__grid-left').children[0].addEventListener('click', ((e)=>{
    document.querySelector('.event__desc').innerText = "Сначала определяют участников игры. Далее устанавливаются правила игры: устанавливают денежную стоимость подарков, время обмена подарками и т. д. Имена участников пишут на листах бумаги. Затем эти листы предлагается тянуть жребием каждому участнику по очереди."
}))

document.querySelector('.events__grid-left').children[1].addEventListener('click', ((e)=>{
    document.querySelector('.event__desc').innerText = " У вас пройдут мини-хакатоны в каждой группе. Как он будет проходить? вы объединитесь в команды внутри своей группы и совместно в течении ограниченного времени будете разрабатывать проект для разработки у вас будет специально заданная тема"
}))

document.querySelector('.events__grid-left').children[2].addEventListener('click', ((e)=>{
    document.querySelector('.event__desc').innerText = "В новогодний вечер, любой желающий учащиеся у нас, могут прийти на новогоднее празднование, которые устроили наши тимлидеры."
}))

// modal
const openBtn = document.querySelector('.modal-open__btn')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close')
const overlay = document.querySelector('.overlay')
modal.style.display = 'none'

openBtn.addEventListener('click', () =>{
    modal.style.display = 'block'
})
closeBtn.addEventListener ('click', ()  => {
    modal.style.display = 'none'
})

overlay.addEventListener('click', () => {
    modal.style.display = 'none'
})

// kg

console.log(document.querySelector('.home__title').innerText)

function changeTitle(){
    if(document.querySelector('.home__title').innerText === "С Новым Кодом!"){
        document.querySelector('.home__title').innerText = "С Новым Годом!"
    } else{
        document.querySelector('.home__title').innerText = "С Новым Кодом!"
    }
}

setInterval(changeTitle, 1000)
