const express=require('express');
const port =8080;
const app=express(); //fire up express
const path=require('path');
const db=require('./config/mongoose');//include db
const habit=require('./models/habit');//use both db
const week=require('./models/week');
const { find } = require('./models/habit');
app.locals.moment = require('moment');//use mement to change our date in week.ejs
app.use(express.urlencoded());//middlewares
app.use(express.static('assets'));
app.set('view engine','ejs');//set up view engine ejs
app.set('views',path.join(__dirname,'views'));
/*mark task as pending*/
app.get('/pending',(req,res)=>{
    let id=req.query.id;
    let day=req.query.day;
    console.log(id,day);
    week.findOne({_id:id},(err,found)=>{
        found[day]=false;
        found.save((err,updatedval)=>{
           return res.redirect('back');
        })
    });
});
// mark task as done
app.get('/done',(req,res)=>{
    let id=req.query.id;
    let day=req.query.day;
    week.findOne({_id:id},(err,found)=>{
        found[day]=true;
        found.save((err,updatedval)=>{
            return res.redirect("back");
         })
    });
  
});
//render the weekly data for a particular habit(uses id) if not present
//first create then display it in week.ejs
app.get('/week',(req,res)=>{
   week.find({id:req.query.id},(err,weekid)=>{
       if(weekid.length < 1){
            week.create({
                id:req.query.id,
                name:req.query.name,
            });
            res.redirect('back');          
       }
       else{  
        return res.render('week',{
               weekid:weekid, 
            });
       }
   });
});
//delete a habit
app.get('/delete',(req,res)=>{
    habit.findByIdAndDelete(req.query.id,(err)=>{
        return res.redirect('back');
    });
});
//craete a new habit
app.post('/save',(req,res)=>{
    habit.create({
        habit:req.body.habit,
        desc:req.body.desc,
        routine:req.body.routine,
        startdate:req.body.startdate,
        starttime:req.body.starttime,
    },(err,newHabit)=>{
        if(err){
            return console.log(err);
        }
        return res.redirect('back');
    });
});
//search for the particular habit
app.post('/search',(req,res)=>{
    habit.find({habit:req.body.search},(err,habits)=>{
       if(habits.length<=0){
        return res.redirect('back');
       }
        return res.render('index',{
            habitarray:habits,
        });
    })
});
//render the home page
app.get('/',(req,res)=>{
    habit.find({},(err,habits)=>{
        //console.log(habits)
        return res.render('index',{
            habitarray:habits,
         });
    });
});
//listening server at port 8080
app.listen(port,(err)=>{
    if(err)
    {
        return console.log('Error Firing up express',err);
    }
    return console.log('Server up at port:',port);
})