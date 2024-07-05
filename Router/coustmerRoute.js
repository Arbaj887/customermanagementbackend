const router = require('express').Router();
const customer = require('../model/customer.model');

router.get('/', async (req, res) => {
  try {
    const result = await customer.find({});
   
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred' });
  }
});

router.put('/edit', async (req, res) => {
  const { id, name, email, phone, dob, address } = req.body;
  
  try {
    const result = await customer.findById(id);
    if (!result) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    result.name = name;
    result.email = email;
    result.phone = phone;
    result.dob = dob;
    result.address = address;
    await result.save();
    const update = await customer.find({})
    return res.json(update)

    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred' });
  }
});

router.post('/add', async (req, res) => {
  const { name, email, phone, dob, address } = req.body;
  
  try {
    const result = await customer.create({ name:name, email:email, phone:phone, dob:dob,address: address });
    return res.json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred' });
  }
});


router.delete('/delete',async (req,res)=>{
    const {id}=req.body;
    
    try {
        const result = await customer.findByIdAndDelete(id);
        if (!result) {
          return res.status(404).json({ error: 'Customer not found' });
        }
       const update = await customer.find({})
       return res.json(update)

      } catch (error) {
        console.error(error);
        
      }
})

module.exports = router;
