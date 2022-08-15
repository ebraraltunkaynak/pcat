const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const fileUpload = require('express-fileUpload');
const ejs = require('ejs');


const photoController = require('./controllers/photoControllers');
const pageController = require('./controllers/pageControllers');

const app = express();

//connect to DB
mongoose.connect('mongodb+srv://ebrar:ebrar2020_@cluster0.mg1yuad.mongodb.net/pcat-db?retryWrites=true&w=majority', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useFindAndModify: false,
}).then(()=>{
  console.log('db connected !')
}).catch((err)=>{
  console.log('Database bağlantısı sağlanamadı')
});

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

// ROUTES
app.get('/', photoController.getAllPhotos);

app.get('/photos/:id', photoController.getPhoto);
app.post('/photos', photoController.createPhoto);

app.put('/photos/:id', photoController.updatePhoto);

app.delete('/photos/:id', photoController.deletePhoto);

// pages

app.get('/about',pageController.getAboutPage );

app.get('/add',pageController.getAddPage );

app.get('/photos/edit/:id',pageController.getEditPage );


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});
