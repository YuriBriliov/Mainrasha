class Catalog {
  constructor(){

  }

  render(){
    let htmlCatalog = ''

    CATALOG.forEach(({ id, name, youtube, vk, inst, urlBack})=>{
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
      <ul class="main__catalog_container">
        ${htmlCatalog}
      </ul>
    `
    document.querySelector('.main__catalog_bloggers').innerHTML = mainHtml

  }

}

const catalog = new Catalog();

catalog.render()


