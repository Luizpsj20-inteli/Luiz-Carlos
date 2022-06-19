$(".information-list li").css({
    "text-align": "center",
    "width": "50%",
    "margin-left": "20%"
})

const skills = document.querySelector(".db")

function getdata(){
  let url = "/data";
  

  let xhttp = new XMLHttpRequest();
  xhttp.open("get", url, false);
    xhttp.send();

  let data = JSON.parse(xhttp.responseText); 
 

  let html = "";
    data.forEach(element => {
        html += `<li>${element.skills}</li>
        <button>Deletar</button>
        <button>Editar</button>`;
    });
    skills.innerHTML = html;
}

getdata();

