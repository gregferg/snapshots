## Component Hierarchy

* `App`
  * `Splash`
  * `Sign Up`
  * `Sign In`
  * `HomePage(AlbumIndex)`
    * `HomePageEdit(AlbumIndexEdit)`
    * `MODULAR NewAlbum`
  * `AlbumDetail`
    * `MODULAR PhotoDetail`
    * `AlbumEdit`
      * `MODULAR NewPhotos`
  * `About Me`
  * `Contact`



* `Splash`
  * `/`
* `NewUser/Login`
  * `/new_user`
  * `/log_in`
* `Homepage`
  * `/:username`
  * `/:username/edit`
* `Album Detail`
  * `/:username/:album_id`
  * `/:username/:album_id/edit`
* `Photo Detail (modal)`
  * `/:username/:photo_id`
  * `/:username/:photo_id/edit`
