import $ from 'jquery';
import './styles.css';

$(document).ready(function() {
  $('#heroInfo').click(function() {
    const hero = $('#hero').val();
    $('#hero').val("");
    console.log(hero);

    let request = new XMLHttpRequest();
    // const url = `http://www.omdbapi.com/?t=${hero}&apikey=61c95e4f`;
    const url = `https://swapi.co/api/people/?search=${hero}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log(response);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      $('.name').text(`The hero is ${response.results[0].name}`);
      $('.height').text(`The hero height ${response.results[0].height} '`);
      $('.mass').text(`The hero mass ${response.results[0].mass}`);
    };
  });
});
