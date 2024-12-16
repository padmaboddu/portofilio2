 <script>
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname,element){
        for( let tablink of tablinks){
            tablink.classList.remove("active-link");

        }
        for( let tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
            
        }
        element.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
        <!-- -----card----- -->
       
    }
    setInterval(function() {
      var cardInner = document.querySelector('.card-inner');
      cardInner.classList.toggle('rotate');
  }, 2000);

  </script>
  <script>
    var sidemenu= document.getElementById("sidemenu");
    function openmenu(){
      sidemenu.style.right = "0";
    }
    function closemenu(){
      sidemenu.style.right = "-200px";
    }
  </script>
  <script>
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzNjK9-xQfgUt4KEhCEliDPNY0AY741IxE4iCqxyY1dIbOpgEui3jot2ejBkZdQJtzmoQ/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          msg.innerHTML="Message sent successfully"
          setTimeout(function(){
            msg.innerHTML=""
          },5000)
          form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
  </script>
  <script>
    var typed = new Typed(".multiple-text", {
    strings: ["A Web Developer", "A Creative Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
  let menuList = document.getElementById("menuList")
  menuList.style.maxHeight = "0px";
  function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
      {
      menuList.style.maxHeight = "300px";
    }
    else{
      menuList.style.maxHeight = "0px";
    }
  }
  
  
  function filterSelection(category) {
      const cards = document.getElementsByClassName('card');
      if (category === 'all') {
      
        for (let card of cards) {
          card.style.display = 'block';
        }
      } else {
      
        for (let card of cards) {
          const dataName = card.getAttribute('data-name');
          if (dataName === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        }
      }
  
    
      const buttons = document.getElementsByClassName('filter')[0].getElementsByTagName('button');
      for (let button of buttons) {
        if (button.getAttribute('data-name') === category) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      }
    }z
  

  </script>
   
  
  
  function filterSelection(category) {
      const cards = document.getElementsByClassName('card');
      if (category === 'all') {
        // Show all cards
        for (let card of cards) {
          card.style.display = 'block';
        }
      } else {
        // Hide cards not matching the category and show matching ones
        for (let card of cards) {
          const dataName = card.getAttribute('data-name');
          if (dataName === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        }
      }
  
      // Toggle active class for buttons
      const buttons = document.getElementsByClassName('filter')[0].getElementsByTagName('button');
      for (let button of buttons) {
        if (button.getAttribute('data-name') === category) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      }
    }
  
  /*function filterSelection(category) {
      var cards = document.getElementsByClassName("card");
    
      if (category == "all") {
        // Show all cards
        for (var i = 0; i < cards.length; i++) {
          cards[i].style.display = "block";
        }
      } else {
        // Hide cards not in the selected category and show those that are
        for (var i = 0; i < cards.length; i++) {
          var dataName = cards[i].getAttribute("data-name");
          if (dataName == category) {
            cards[i].style.display = "block";
          } else {
            cards[i].style.display = "none";
          }
        }
      }
    }*/
    
  
  /*document.addEventListener("DOMContentLoaded", function() {
      const filterButtons = document.querySelectorAll(".filter button");
      const filterableCards = document.querySelectorAll(".filterable_Cards .card");
  
      const filterCards = (category) => {
          filterableCards.forEach(card => {
              const cardCategory = card.dataset.name;
              const parentCol = card.closest('.col-3');
              
              if (category === 'all' || category === cardCategory) {
                  parentCol.classList.remove("hide");
              } else {
                  parentCol.classList.add("hide");
              }
          });
      };
  
      filterButtons.forEach(button => {
          button.addEventListener("click", function() {
              const category = this.dataset.name;
              filterCards(category);
              document.querySelector(".active").classList.remove("active");
              this.classList.add("active");
          });
      });
  });*/
