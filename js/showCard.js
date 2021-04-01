class Card {
  constructor(){
    this.card_id = null
    this.videoContent = []
    this.videoContainer = document.querySelector('.blogger__video_container')
    this.videoOther = document.querySelector('.bloggers__another_section')
    
  }
// choice_blogger----------------------------------------
  handleCard(elem, idCard){
    let block = document.querySelector('.blogger__card_section');
    let card_content = '';

    if (this.card_id === idCard) {
      block.innerHTML = ''
      this.card_id = null;
      // this.bloggers.style.display = 'block'
      // this.videoContent = []
      this.videoContainer.outerHTML = ''
      this.videoOther.outerHTML = ''
      // catalog.render()
    }else{
      CATALOG.forEach(({ id }) => {
        if (idCard === id) {
          this.videoContent.push(CATALOG[id - 1].video);
          card_content = `
          <div class="main__blogger_card">
        <div class="main__blogger_photo">
          <img class="blogger__card_img" src="${CATALOG[id - 1].photo}" alt="">
        </div>
        <div class="blogger__card_info">
          <div class="blogger__card_name">
            <h1>
              ${CATALOG[id - 1].name}
            </h1>
          </div>
          <div class="blogger__card_stats">
            <div class="blogger__card_social">
              <img src="./img/assets/youtube_big.png" alt="">
              <div class="blogger__card_subscribes">
                ${CATALOG[id - 1].youtube}
                <p>
                  Подписчиков
                </p>
              </div>
            </div>
            <div class="blogger__card_social">
              <img src="./img/assets/vk_big.png" alt="">
              <div class="blogger__card_subscribes">
                ${CATALOG[id - 1].vk}
                <p>
                  Подписчиков
                </p>
              </div>
            </div>
            <div class="blogger__card_social">
              <img src="./img/assets/inst_big.png" alt="">
              <div class="blogger__card_subscribes">
                ${CATALOG[id - 1].inst}
                <p>
                  Подписчиков
                </p>
              </div>
            </div>
          </div>
          <div class="blogger__card_discription">
            <h3 class="blogger__card_disc_title">
              Информация о канале
            </h3>
            <div class="blogger__card_disc_text">
              ${CATALOG[id - 1].description}
            </div>
          </div>
        </div>
      </div>
        `
        }
      })
      this.card_id = idCard
      console.log('hello')
    }
    
    block.innerHTML = ''
    block.innerHTML = card_content
    // this.bloggers.style.display = 'none'
    
    this.handlerVideo()
    this.handlerOtherBloggers()
    // this.videoContent = []
  }

  

  
// add_video_content--------------------------
  handlerVideo(){
    
    let videoContent = ''
    this.videoContent.forEach((item)=>{
      item.forEach(({preload, video})=>{
        videoContent += `
          <div style="background-image: url(${preload});" class="blogger__video_item">
            <div class="video-popup video" data-link="${video}"><img class="contact" class="play_video" src="./img/bloggers/play.png" alt=""></div>
          </div>
          
        `
      })
    })
    const vidoeContainer = `
      <div class="blogger__video_title">
        <h1>
          Последние ролики
        </h1>
      </div>
      <div class="blogger__video_content">
        ${videoContent}
      </div>
      
    `;
    this.videoContainer.innerHTML = vidoeContainer
    
  }





// add_other_bloggers---------------------------------
  handlerOtherBloggers(){
    let htmlCatalog = ''

    CATALOG.forEach(({ id, name, youtube, vk, inst, urlBack }) => {
      htmlCatalog += `
        <li style="background-image: url(${urlBack})" id="${id}" class="main__catalog_item" onclick="card.handleCard(this, ${id})">
            <div class="main__catalog_block">
              <h3 class="catalog__item_name">
                ${name}
              </h3>
              <div class="catalog__item_social">
                <div class="item__social">
                  <img src="./img/assets/youtube_mini.png" alt="">
                  <div class="item__stats">
                    &nbsp;${youtube}
                  </div>
                </div>
                <div class="item__social">
                  <img src="./img/assets/vk_mini.png" alt="">
                  <div class="item__stats">
                    &nbsp;${vk}
                  </div>
                </div>
                <div class="item__social">
                  <img src="./img/assets/inst_mini.png" alt="">
                  <div class="item__stats">
                    &nbsp;${inst}
                  </div>
                </div>
              </div>
            </div>
          </li>
      `
    })
    const mainHtml = `
      <div class="bloggers__another_title">
        <h1>
          Другие блогеры
        </h1>
      </div>
      <ul class="main__catalog_container">
        ${htmlCatalog}
      </ul>
    `
    document.querySelector('.bloggers__another_container').innerHTML = mainHtml
    this.videoContent = []
  }

  clearBoard(){
    
  }
}

const card = new Card();


