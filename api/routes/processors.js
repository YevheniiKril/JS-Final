const {
    index,
    show,
    create,
    update,
    destroy
  } = require('../controllers/processors');
  const passport = require('passport');
  
  module.exports = router => {

    router.get('/processors', index);
    router.get('/processors/:id', show);
    router.post('/processors', passport.authenticate('jwt', { session: false }), create);
    router.post('/processors/update', passport.authenticate('jwt', { session: false }), update);
    router.post('/processors/destroy', passport.authenticate('jwt', { session: false }), destroy);
  };