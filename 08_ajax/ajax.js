//Curso JavaScript:106 AJAX:Objeto XMLHttpRequest

(() => {
  //Esto crea una nueva instancia de XMLHttpRequest.
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    //Un fragmento es un mecanismo especial del DOM que se crea, a ese le podemos insertar todo los datos que vamos a estar solicitando de la API PlaceHolder y hasta que tengamos todos hacemos una sola incersion.
    $fragment = document.createDocumentFragment();

  //El "readystatechange" se lanza cuando detecta cualquier cambio de estado, ya sea que la petición se halla abortado, que halla lanzado error, que se halla completado, por eso digo que es como todo los demas eventos que tiene ajax están o viven, reciden en el "readystatechange".
  xhr.addEventListener("readystatechange", (e) => {
    //Cuando la propiedad "readyState" sea diferente de 4, ¿Porqué de 4? por que no me importa cuando se esta cargando, cuando ya halla sido cargado, cuando este en un estado interactivo a mi me importa cuando ya halla sido completado. El "readyState" esta incompletado es cuando yo ya puedo empezar hacer una manipulacion en el DOM de la informacion que me llega de la API.
    if (xhr.readyState !== 4) return;

    //Si, del objeto AJAX "xhr" el codigo de respuesta "status" es mayor o igual a 200 y "&&" el estatus es menor a 300 ejecuta el codigo.
    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $xhr.appendChild($fragment);
    } else {
      //el statusText nos da el mensaje de error.
      // el status nos da el codigo de error.
      let message = xhr.statusText || "Ocurrió un error";
      $xhr.innerHTML = `Error ${xhr.status}:${message}`;
    }
    console.log(xhr);
  });

  //necesitamos asignarle 2 intrucciones mas , la intruccion que va a abrir la peticion y la que va a enviar la peticion.El metodo open recibe 2 parametros, el 1º es el metodo por el cual vamos a comunicarnos (La petición mas utiliza es GET que es cuando lo utilizamos atraves de una URL )con la API, el 2º es la URL.
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send();
})();

//Curso JavaScript:107 AJAX API Fetch

(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      let message = err.statusText || "Ocurrió un error";
      $fetch.innerHTML = `Error ${err.status}:${message}`;
    })
    .finally();
})();

//curso de javascript 108 AJAX: API Fetch + Async-Await
(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment);
    } catch (err) {
      let message = err.statusText || "Ocurrió un error";
      $fetchAsync.innerHTML = `Error ${err.status}:${message}`;
    } finally {
    }
  }

  getData();
})();
//curso de javascript 109 AJAX: Libreria Axios
(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      //console.log(res);
      res.data.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment);
    })
    .catch((err) => {
      console.log(err.response);
      let message = err.response.statusText || "Ocurrió un error";
      $axios.innerHTML = `Error ${err.response.status}:${message}`;
    })
    .finally();
})();
//curso de javascript 110 AJAX: Libreria Axios + Async-Await
(() => {
  const $axiosAsync = document.getElementById("axios-asinc"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $axiosAsync.appendChild($fragment);
    } catch (err) {
      let message = err.response.statusText || "Ocurrió un error";
      $axiosAsync.innerHTML = `Error ${err.response.status}:${message}`;
    } finally {
    }
  }

  getData();
})();
