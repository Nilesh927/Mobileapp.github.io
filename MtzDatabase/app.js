/*const express=require('express');
const connection=require('./connection');
const app=express();
const port=4001;
app.set('view engine','ejs');
app.use(express.static('Public'));
app.use(express.static('upload'));
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


// app.use()
app.get('/',(req,res)=>{
      res.render("index");         
})
app.get('/login',(req,res)=>{
               res.render("login");         
         })
app.get('/cartpage',(req,res)=>{
res.render("cartpage");         
})         
app.get('/affiliate',(req,res)=>{
res.render("affiliate");         
 })
app.get('/checkoutpage',(req,res)=>{
res.render("checkoutpage");         
}) 
app.get('/return',(req,res)=>{
res.render("return");         
})
app.get('/review',(req,res)=>{
res.render("review");         
})
app.get('/ourproduct',(req,res)=>{
      connection.query("select * from tbl_products",(error,result)=>{
            if(result.length>0)
            {
res.render('/adminzone/product_managment',{title:' Product Management ',data:result});
            }
            else
            {
                  throw error;
            }
      })
      //res.render("ourproduct");         
})
app.get('/buynow',(req,res)=>{
      res.render("buynow");
  });
  app.get('/buynow2',(req,res)=>{
      res.render("buynow2");
  });
  app.get('/buynow3',(req,res)=>{
      res.render("buynow3");
  });
  app.get('/buynow4',(req,res)=>{
      res.render("buynow4");
  });
  app.get('/buynow5',(req,res)=>{
      res.render("buynow5");
  });
  app.get('/buynow6',(req,res)=>{
      res.render("buynow6");
  });
  app.get('/buynow7',(req,res)=>{
      res.render("buynow7");
  });
  app.get('/buynow8',(req,res)=>{
      res.render("buynow8");
  });
  app.get('/buynow9',(req,res)=>{
      res.render("buynow9");
  });  */

  const express=require('express');
  const app=express();
  const con=require('./connection');
  const bodyParser= require('body-parser');
  const session= require('express-session');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));


  //setting session
  app.use(session({
    secret: 'hugrrtfjbkjhkjh',
    resave: true,
    saveUninitialized:true
  }))
  
  const port=8001;
  
  app.set('view engine','ejs');
  app.use(express.static('public'));
  app.use(express.static('uploads'));
  app.get('/',(req,res)=>{
      res.render("index");
  });
  app.get('/login',(req,res)=>{
      res.render("login");
  });
  app.get('/checkoutpage',(req,res)=>{
      res.render("checkoutpage");
  });
  app.get('/ourproduct',(req,res)=>{
      con.query("select * from tbl_products",(error,result)=>{
          if(result.length>0)
          {
              res.render("ourproduct",{data:result});
          }
          else
          {
              throw error;
          }
      })
      
  });
  app.get('/buynow',(req,res)=>{
      res.render("buynow");
  });
  app.get('/buynow2',(req,res)=>{
      res.render("buynow2");
  });
  app.get('/buynow3',(req,res)=>{
      res.render("buynow3");
  });
  app.get('/buynow4',(req,res)=>{
      res.render("buynow4");
  });
  app.get('/buynow5',(req,res)=>{
      res.render("buynow5");
  });
  app.get('/buynow6',(req,res)=>{
      res.render("buynow6");
  });
  app.get('/buynow7',(req,res)=>{
      res.render("buynow7");
  });
  app.get('/buynow8',(req,res)=>{
      res.render("buynow8");
  });
  app.get('/buynow9',(req,res)=>{
      res.render("buynow9");
  });
  app.get('/cartpage',(req,res)=>{
      res.render("cartpage");
  });  
app.get('/contactus',(req,res)=>{
      res.render("contactus");         
}) 
app.get('/dashboard',(req,res)=>{
    if(req.session.email!=null){
          res.render("./adminzone/dashboard"); 
app.get('/review',(req,res)=>{
res.render("review");         
})          

    }
    else{
        res.end("<script>alert('First login then goto next zone');window.location.href='/login'</script>")
    }
      
      
}) 
app.get('/logout',(req,res)=>{
    //   res.render("./adminzone/logout");  
    req.session.destroy();
    res.end("<script>alert('Logout');window.location.href='/login'</script>");

}) 
app.get('/manage_password',(req,res)=>{
      res.render("./adminzone/manage_password");         
}) 
app.get('/contact_management',(req,res)=>{
      res.render("./adminzone/contact_management");         
}) 
app.get('/order_product_managment',(req,res)=>{
      res.render("./adminzone/order_product_managment");         
}) 
app.get('/product_management',(req,res)=>{
      res.render("./adminzone/product_management");         
})
app.get('/return_product',(req,res)=>{
      res.render("./adminzone/return_product");         
})
app.get('/affiliate_member',(req,res)=>{
      con.query("select * from tbl_amember",(error,result)=>{
            if(result.length>0)
            {
           res.render('adminzone/affiliate_member',{title:'Affiliate Member Management',data:result});
            }   
            else
            {
                throw error;
            } 
          })       
}); 
app.get('/admin_zone',(req,res)=>{
      res.render("./adminzone/admin_zone.ejs");         
})   
app.get('/add_products',(req,res)=>{
      res.render("./adminzone/add_products");         
});    


app.get('/affiliate',(req,res)=>{
    res.render("affiliate");         
     })

//post action starts from here 

app.post('/members',(req,res)=>{
   //get values from form 
   var name,email,passwd,addr;
   name=req.body.name;
   email=req.body.email;
   passwd=req.body.passwd;
   addr=req.body.addr;

con.query('insert into tbl_amember(name,email,passwd,addr) values(?, ?, ?, ?)',[name,email,passwd,addr],(error,result)=>{
            if(error)
            {
                  throw error;
            }
            else
            {
                  res.end("<script>alert('Thanks for become a member as soon as we contact you ');window.location.href='/affiliate'</script>");
            }
      })
})
//add products 
//file upload by using multer module
var multer  =   require('multer'); 
//const con = require('./connection');
var fname=""; 
var storage =   multer.diskStorage({  
  destination: function (req, file, callback) {  
    callback(null, './uploads');  
  },  
  filename: function (req, file, callback) {  
    callback(null, file.originalname); 
    fname=file.originalname; 
  }  
});  
var upload = multer({ storage : storage}).single('myfile');  
//end file upload
app.post('/aproducts',(req,res)=>{ 
      //get values from add product form
      upload(req,res,function(err) { 
            var pname,price,pic,descr,cate;
            pname=req.body.pname;
            price=req.body.price;
            pic=fname;
            descr=req.body.description; 
            cate=req.body.category; 
            //console.log(req.body.pname);

            if(err) {  
                throw err;
            } 
            else
            { 
           // res.end("File is uploaded successfully!" + fname); 
 con.query("insert into tbl_products(pname,price,ppic,pcat,pdesc) values(?, ?, ?, ?, ?)",[pname,price,pic,cate,descr],(error,result)=>{
if(error) throw error;
else
res.end("<script>alert('Product Added into database');window.location.href='/add_products'</script>");
 })   
}        
        });  
});
var multer  =   require('multer'); 
 //const con = require('./connection');
var fname=""; 
var storage =   multer.diskStorage({  
  destination: function (req, file, callback) {  
    callback(null, './uploads');  
  },  
  filename: function (req, file, callback) {  
    callback(null, file.originalname); 
    fname=file.originalname; 
  }  
});  
var upload = multer({ storage : storage}).single('myfile'); 
app.listen(port,()=>{
console.log("server running ");
})
 app.post('/return',(req,res)=>{
      //get values from form 
      var product,email,rreturn,comment;
      product=req.body.name;
      email=req.body.email;
      rreturn=req.body.return;
      comment=req.body.comment;
   
   con.query('insert into tbl_return(product,email,rreturn,comment) values(?, ?, ?, ?)',[product,email,rreturn,comment],(error,result)=>{
               if(error)
               {
                     throw error;
               }
               else
               {
                     res.end("<script>alert('Your order is cancel soon ');window.location.href='/'</script>");
               }
         })
   })
   app.post('/contact',(req,res)=>{
      //get values from form 
      var name,email,number;
      name=req.body.name;
      email=req.body.email;
      number=req.body.number;
      
   
   con.query('insert into tbl_contact(name,email,number) values(?, ?, ? )',[name,email,number],(error,result)=>{
               if(error)
               {
                     throw error;
               }
               else
               {
                     res.end("<script>alert('We will Contact You Soon ');window.location.href='/'</script>");
               }
         })
   })
   //password management
 app.post('/signup',(req,res)=>{
      var uname,email,passwd;
      uname=req.body.uname;
      email=req.body.email;
      passwd=req.body.passwd;
      
     
     con.query('insert into tbl_password(uname,email,passwd) values(?, ?, ?)',[uname,email,passwd,],(error,result)=>{
               if(error)
               {
                     throw error;
               }
               else
               {
                     res.end("<script>alert('Thanks for sign up Now you can login ');window.location.href='/'</script>");
               }
         });
     })
     // end here password
     //log in start here
     
     app.post('/login',(req,res)=>{
          var email=req.body.email;
          var passwd=req.body.passwd;
     
          // match textbox value 
          con.query("select * from tbl_password where email= ? and  passwd= ? ",[email,passwd] ,(error,result,fields)=>{
             if(result.length>0)
             {
                req.session.email=email;

                 res.end("<script>alert('Welcome to login'); window.location.href='/dashboard'</script>");
                //res.redirect('./AdminZone/dashboard');
             }
             else
             {
                 res.end("<script>alert('Invalid Userid or Poassword'); window.location.href='/login'</script>");
                 //res.redirect('/login');
             }
             res.end();
     
          });
          
     
     
     });
     
     // log in end here
     app.post('/subscribe',(req,res)=>{
      var Email;
      Email=req.body.email;
      con.query('insert into subscribe(email) values(?)',[Email],(error,result)=>{
              if(error){
                  throw error;
  
              }
              else{
                  res.end("<script> alert ('submitted on databse ');window.location.href='/ '   </script>");
              }
      } );
  
  });



   