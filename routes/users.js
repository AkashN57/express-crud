import Express from "express";
import {v4 as uuidv4} from "uuid"
uuidv4()

const router = Express.Router();

let users = []

//GET
router.get('/',(req,res)=>{
    
    res.send(users)
})

//POST
router.post("/",(req,res)=>{
   

    const user = req.body
    // const userId = uuidv4()
    const userWithId = {...user,id:uuidv4()}

    users.push(userWithId)
   
    res.send(`User with Name ${user.fname} added to the Array!`)
})

//GET WITH ID
router.get("/:id",(req,res)=>{

    // console.log((req.params));
    // res.send(req.params)
    const {id} = req.params;

   users = users.find((user)=>user.id == id)

    res.send(users)
    

})
//DELETE
router.delete('/:id',(req,res)=>{
    const {id} = req.params;

     users = users.filter((user)=> user.id != id)
     res.send("User with a ID deleted!")
})

//PATCH
router.patch('/:id',(req,res)=>{
    let {id} = req.params;
    let {fname,lname,gender} = req.body;

    let users = users.find((user)=>user.id == user);

    if(fname){
        users.fname = fname
    }
    if(lname){
        users.lname = lname
    }
    if(gender){
        users.gender = gender
    }

    res.send(`User with ID ${id} has been updated`)
})


export default router