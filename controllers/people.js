const { people } = require("../data");

const getpeople= (req, res) => {
    res.status(200).json({ success: true, data: people });
  };
 const createPerson= (req, res) => {
    const { name } = req.body
    if (!name) {
      return res
        .status(400)
        .json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, person: name })
  }
  const createPersonPostman=(req,res)=>{
    const { name } = req.body
    if (!name) {
      return res
        .status(400)
        .json({ success: false, msg: 'please provide name value' })
    }   
    res.status(201).json({ success: true, data:[...people,name] })
  }
  const updatePerson=(req, res) => {
    const { id } = req.params
    const { name } = req.body
  
    const person = people.find((person) => person.id === Number(id))
  
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${id}` })
    }
    const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name
      }
      return person
    })
    res.status(200).json({ success: true, data: newPeople })
  }
  const deletePerson=(req,res)=>{
    const person =people.find((person)=>person.id===Number(req.params.id));
    if(!person){
      return res.status(404).json({suucess:false,msg:`no person with ${id}`});
    }
    const newpeople=people.filter((person)=>person.id !== Number(req.params.id));
    return res.status(200).json({success:true,data:newpeople});
  }
  module.exports={getpeople,createPerson,createPersonPostman,updatePerson,deletePerson}