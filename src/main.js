var service = new Services();

function getEle(id) {
  return document.getElementById(id);
}

function getListProducts() {
  //Lấy danh sách sản phẩm từ server
  //pending
  getEle("loader").style.display = "block";
  var promise = service.getListProductApi();
  promise
    .then(function (result) {
      renderListProducts(result.data);
      getEle("loader").style.display = "none";
    })
    .catch(function (error) {
      console.log(error);
    });
}

getListProducts();

function renderListProducts(data) {
  var contentHTML = "";

  data.forEach(function (product) {
    contentHTML += `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card cardPhone">
              <img src="./img/${product.hinhAnh}" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <div>
                    <h3 class="cardPhone__title">${product.tenSP}</h3>
                    <p class="cardPhone__text">${product.moTa}</p>
                  </div>
                  <div>
                    <h3 class="cardPhone__title">$${product.gia}</h3>
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="cardPhone__rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div>
                    <button class="btnPhone-shadow">
                      <i class="fa fa-shopping-cart"></i> Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
  });

  getEle("listProducts").innerHTML = contentHTML;
}
