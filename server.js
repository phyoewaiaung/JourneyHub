const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('db success');
  });

// const testTour = new Tour({
//   name: 'Camping',
//   rating: 4.7,
//   price: 498,
// });

// testTour
//   .save()
//   .then((doc) => console.log(doc))
//   .catch((e) => console.log(e));

const app = require('./app');

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
