const express = require("express");
const app = express();
const router = express.Router();

const {
  getpeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// router.get('/',getpeople);
// router.post('/',createPerson);
// router.post('/postman',createPersonPostman);
// router.put('/:id',updatePerson);
// router.delete('/:id',deletePerson);

router.route('/').get(getpeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);
 module.exports=router;