// conteúdo modal

const openModal = (idModal) => {
    const divModal = document.querySelector(idModal);
    divModal.style.display = "flex";
  };
  
  const closeModal = (idModal) => {
    const divModal = document.querySelector(idModal);
    divModal.style.display = "none";
  };
  
  const handleModalClose = (event) => {
    if (event.target.className === "modal") {
      event.target.style.display = "none";
    }
  };
  
  // conteúdo explorar
  
  const url = `https://api.thecatapi.com/v1/images/search?limit=21`;
  const api_key = "live_XuwLbr8TXK3QsZJc2DLGdILJ0ggA3WuGebmtHXQewcMR1IC7qcmsx53c88SCMMdx";
  
  function appendImageToGrid(imageData) {
    let image = document.createElement("img");
    image.src = `${imageData.url}`;
  
    let gridCell = document.createElement("div");
    gridCell.classList.add("col");
    gridCell.classList.add("col-lg");
    gridCell.appendChild(image);
  
    document.getElementById("grid").appendChild(gridCell);
  }
  
  fetch(url, {
    headers: {
      "x-api-key": api_key,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let imagesData = data;
      imagesData.map(function (imageData) {
        appendImageToGrid(imageData);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  
  // buscar mais imagens
  
  document.getElementById("loadMoreButton").addEventListener("click", function () {
    fetch(url, {
      headers: {
        "x-api-key": api_key,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let imagesData = data;
        imagesData.map(function (imageData) {
          appendImageToGrid(imageData);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  
 