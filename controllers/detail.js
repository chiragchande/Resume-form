const Detail = require('../models/detail');

exports.getAddDetail = (req, res, next) => {
    res.render('admin/add-product', {
      pageTitle: 'Add Detail',
      path: '/admin/add-product',
      editing: false
    });
  }

exports.postAddDetail = (req, res, next) => {
    const name = req.body.name;
    const email  = req.body.email;
    const imageUrl = req.body.imageUrl;
    const qualification = req.body.qualification;
    const detail = new Detail(name, email, imageUrl, qualification);
    detail
      .save()
      .then(result => {
        // console.log(result);
        console.log('Created Detail');
        res.redirect('/');
      })
      .catch(err => {
        console.log(err);
      });
  }


exports.getDetails = (req, res, next) => {
  Detail.fetchAll()
    .then(detail => {
      res.render('detail/user-detail', {
        prods: detail,
        pageTitle: 'Admin Details',
        path: '/'
      });
    })
    .catch(err => console.log(err));
};

