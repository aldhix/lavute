# Lavute
Layout Vue AdminLTE v3.2

## Used
- Vue 3
- AdminLTE v3.2.0
- Laravel +8

## Install
install npm :
```
npm i
```
Install vue etc & adminlte via npm:
```
npm i -D vue@next @vitejs/plugin-vue vue-router@next vuex@next admin-lte@^3.2
```

Route Laravel web.php :
```
Route::view('/{any?}','app')->where('any','(?!(api).*).*');
```

Run dev :
```
npm run dev
```

Server :
```
php artisan serve
```