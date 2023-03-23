# Wittelach: dashboard
___

Websolution application: wittelach dashboard


## 1. Installation

#### 1.1 Install all dependencies:
```
composer install
npm install
```

#### 1.2 Copy example environment file:
```
cp .env.example .env
```

#### 1.3 Create local database & add correct database credentials:
```
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

#### 1.4 Initialize environment file:
```
DEV_URL=
CLIENT_WEB_TITLE=
CLIENT_EMAIL=
CLIENT_NO_REPLY=
```

#### 1.5 Database migration
```
php artisan migrate:refresh --seed
```

#### 1.6 Build on local environment:
```
npm run dev
```

#### 1.7 Valet link & secure local dist folder:
```
cd dist
valet link <url>
valet secure
cd ..
```
___
## 2. Deploy

#### 2.1 Export server-side rendered to dist folder & start node product process manager & restarts if changes are detected:
```
npm run prod-ssr

pm2 start /«LocationToWebsiteRoot»/public/build/server/ssr.mjs --name ssr_wittelach --watch
```

#### 2.2 Sets the right permissions on the storage & bootstrap/cache folders:
```
sudo chgrp -R www-data storage bootstrap/cache

sudo chmod -R ug+rwx storage bootstrap/cache
```
___
## 3. Commands

#### 3.1 Update translations & other tables:
```
php artisan update:db
```

#### 3.2 Refresh DB & seed tables (total reset):
```
php artisan migrate:refresh --seed
```
___
## 4. Development
#### 4.1 Technology
* <i>Laravel 9</i>
* <i>Inertia</i>
* <i>Vue 3</i>


#### 4.2 Run on local environment:
```
npm run watch
```

#### 4.3 Create new page
```
php artisan make:page
```

#### 4.4 Update translations
```
php artisan translations:update
```
