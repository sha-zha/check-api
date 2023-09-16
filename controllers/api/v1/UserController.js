const {User} = require('../../../src/models/index');

let controller = {}

controller.index = async (req,res) =>{
	try {
		const data = await User.findAll({
    		attributes: {exclude: ['password']},
    		order: [['id','DESC']]});

	}catch(e){
		 return res.status(500).send('Error!');
	}
};

module.exports = controller;