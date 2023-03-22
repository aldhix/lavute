# Lavute
Layout Vue AdminLTE v3.2

## Used
- Vue 3
- AdminLTE v3.2.0
- Laravel +8

## Install
Install vue etc & adminlte via nmp :
```
npm i -D vue@next @vitejs/plugin-vue vue-router@next vuex@next admin-lte@^3.2
```

Route Laravel web.php :
```
Route::view('/{any?}','app')->where('any','.*');
```

Run dev :
```
npm run dev
```

Server :
```
php artisan serve
```