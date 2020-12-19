const CPU = require('../models/processors');
const User = require('../models/user');

exports.index = async (req, res, next) => {
    try {
      const processors = await CPU.find();
      res.status(200).json(processors);
    } catch (error) {
      next(error);
    }
  };

  exports.show = async (req, res, next) => {
    try {
      const processor = await CPU.findById(req.params.id);
  
      res.status(200).json(processor);
    } catch (error) {
      next(error);
    }
  }

  exports.create = async (req, res, next) => {
    try {
      const { processor, model, review } = req.body;
  
      const user = await User.findById(req.user._id);
  
      const cpu = await CPU.create({
        author: user.name,
        processor: processor,
        model: model,
        review: review
      }); 
      res.status(200).json({ message: "Your review was added succesfully. Thank you for sharing your experience.", processor: cpu });
    } catch (error) {
      next(error);
    }
  };

  exports.update = async (req, res, next) => {
    try {
      const { _id, processor, model, review } = req.body;
      console.log(req.body);
      const cpu = await CPU.findOneAndUpdate({ _id: _id }, {
        processor,
        model,
        review
      });
      res.status(200).json({ message: "Your review was updated succesfully. Thank you for sharing your experience", processor: cpu });
    } catch (error) {
      next(error);
    }
  };

  exports.destroy = async (req, res, next) => {
    try {
      const { _id } = req.body;
      await CPU.findOneAndDelete({ _id: _id });
  
      res.status(200).json({ message: "Your review was deleted succesfully. We would really aprisiate if you would create another one" });
    } catch (error) {
      next(error);
    }
  };