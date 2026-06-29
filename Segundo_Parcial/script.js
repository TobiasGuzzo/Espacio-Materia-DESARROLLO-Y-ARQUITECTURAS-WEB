let t = document.getElementById('tipo');
let f = document.getElementById('formulario');

t.onchange = function() {
  document.getElementById('res').style.display = 'none';
  if (t.value == 'tejado') {
    document.getElementById('extra').style.display = 'block';
    document.getElementById('pot').required = true;
    document.getElementById('sup').required = true;
  } else {
    document.getElementById('extra').style.display = 'none';
    document.getElementById('pot').required = false;
    document.getElementById('sup').required = false;
  }
};

f.onsubmit = function(e) {
  e.preventDefault();
  
  let c = document.getElementById('con').value;
  let p = document.getElementById('com').value;
  let fac = document.getElementById('fac').value;
  let h = document.getElementById('hor').value;
  
  if (t.value == 'tejado') {
    let pot = document.getElementById('pot').value;
    let sup = document.getElementById('sup').value;
    
    let res = ((c * (p / 100) * (fac / 100)) / (h * 365 * pot)) * sup;
    document.getElementById('res-tit').innerText = 'Superficie de Tejado Necesaria';
    document.getElementById('res-txt').innerText = 'Para compensar el ' + p + '% con paneles de ' + pot + ' kW y ' + sup + ' m2, necesita ' + res.toFixed(2) + ' m2 de tejado.';
  } else {
    let res = (c * (p / 100) * (fac / 100)) / (h * 365);
    document.getElementById('res-tit').innerText = 'Tamaño del Campo Solar';
    document.getElementById('res-txt').innerText = 'Para compensar el ' + p + '%, necesita una potencia de ' + res.toFixed(3) + ' kW.';
  }
  
  document.getElementById('res').style.display = 'block';
};

let btn2 = document.getElementById('limp');
btn2.onclick = function() {
  location.reload();
};
