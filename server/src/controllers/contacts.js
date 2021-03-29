const mongoose = require('mongoose');
const user = require('../models/user');
const Contacts = mongoose.model('Contacts');
const Users = mongoose.model('Users');





exports.createContact = async(req, res) => {
  
  const userId = req.params.id;
  const {contactEmail} = req.body
  


  
 const contactSearch =  await Contacts.findOne({ _id: userId , email: contactEmail })
 console.log(contactSearch)
 if(contactSearch){
  res.status(400).json({status:'contact alredy exists'})      
 }
 else {
      
   try {
     const user = Users.findById({_id : userId})
     let contact = await Contacts.create({
       name:  contactSearch.name,
       email : contactSearch.email
     })
         user.contacts.push(contact)
         res.status(201).json({message:'user create success', contact })

       }catch(error){
       
            res.status(400).json({ status:'error', response : error.message})

       }
       

          }
        }
 

  

// exports.getUserEmail = async (req, res)  => {
// };


// exports.createContact = async (req, res) => {
//     const { email , name } = req.body;
    
    // try { 
    //   const user = await Users.findOne({ email: email })
    //   if(user){
    //     res.status(200).json({status:'success', response : user})       
        
    //   } else {
    //     throw new Error('user not found')
        
    //   }
      
    // }
    // catch( error){
    //   res.status(400).json({ status:'error', response : error.message})
    // }
    
//     if(user){
//        var newContact;

//        Contacts.insertMany({user, email, name })
//          .then((contact) => {
//           newContact = contact[0];
//           user.contact.push(newContact)
            
//           user.contactInfo.push({
//             email,
//             name
//           })



//            .then((nuevoPass) => {
//                nuevoUser.password = nuevoPass;
//                return nuevoUser.save();
//              })
           
//              .then((user) => res.status(200).json({ status: "success", response: user }))
//              .catch((error) =>
//                res.status(400).json({ status: "error", message: error.message })
//              );
//           }
//   };
  
  
  //allContacs por id user
