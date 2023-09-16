const {User} = require('../../../src/models/index');

let controller = {}

controller.create = async (req,res) =>{

};

controller.index = async (req,res) =>{
	try {
		const data = await User.findAll({
    		attributes: {exclude: ['password']},
    		order: [['id','DESC']]});

		return res.status(200).json({
      		data
    	});

	}catch(e){
		
		 return res.status(500).send('Error!: ');
	}
};

controller.show = async (req,res) =>{
	let id = req.body.id;

	try {
		const data = await User.findByPk(id);
		
		return res.status(200).json({
      		data
    	});
		
	}catch(e){
		 return res.status(500).send('Error!');
	}
};

controller.update = async (req,res) =>{

};

controller.deleted = async (req,res) =>{

};

module.exports = controller;