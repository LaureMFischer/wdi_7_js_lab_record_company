var Album = function(name, band, year){
  this.name = name;
  this.band = band;
  this.year = year;
};

Album.prototype.render_album = function() {
  var album_list = document.getElementById('album-list'),
    new_li = document.createElement('li'),
    new_album_name_input = document.getElementById('new-album-name'),
    new_album_band_input = document.getElementById('band-name'),
    new_album_year_input = document.getElementById('year-released'),
    delete_button = document.createElement('button'),
    item_counter;

  item_counter = parseInt(album_list.getAttribute('data-counter'));
  new_li.setAttribute('id', 'item_'+item_counter);
  delete_button.setAttribute('id', 'delete_button_'+item_counter);
  item_counter += 1;

  new_li.className = 'album-list-item';
  new_li.innerHTML = this.name;
  delete_button.innerHTML = 'Delete';
  delete_button.className = 'delete';
  album_list.setAttribute('data-counter', item_counter);

  new_li.appendChild(delete_button);

  new_album_name_input.value = '';
  new_album_band_input.value = '';
  new_album_year_input.value = '';
  return new_li;
};
