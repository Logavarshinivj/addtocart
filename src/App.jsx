import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function App() {
  
  const[cart,setCart]=useState(0)
  return (
    <div className="App">
      <Home cart={cart} setCart={setCart} />

    </div>
  )
}

function Home({cart,setCart}){
  
  
  const data=[
    {
      id:1,
      img:"https://iranfreshfruit.net/wp-content/uploads/2020/01/green-grapes.jpg",
      title:"Juicy Grapes",
      desc:"",
      price:46,
    },
    {
      id:1,
      img:"https://media.istockphoto.com/id/146795021/photo/orange-slice.jpg?s=612x612&w=0&k=20&c=4EzBtbCewbW2PeAiSBp5Lh-btZIwrkbJ4Uq5TPh2tVc=",
      title:"Orange",
      desc:"",
      price:31,
    },
    {
      id:1,
      img:"https://img.freepik.com/free-vector/vector-ripe-yellow-banana-bunch-isolated-white-background_1284-45456.jpg?w=2000",
      title:"Banana",
      desc:"",
      price:19,
    },
    {
      id:1,
      img:"https://fruitfortheoffice.co.uk/pub/media/catalog/product/cache/118fd06640efc949eafa2123c39b08e3/s/t/strawberries-punnet_1000x.jpeg",
      title:"Strawberry",
      desc:"",
      price:15,
    },
    {
      id:1,
      img:"https://cdn.shopify.com/s/files/1/1507/9940/products/South-Africa-Cripps-Red-Apple-S-10PcsPack-Apples-Pears-4_1f33fa9a-c06f-41ea-b291-269c11a6653b_1024x1024.jpg?v=1665727699",
      title:"Apple",
      desc:"",
      price:28,
    },
    {
      id:1,
      img:"https://img.freepik.com/premium-photo/ripe-yellow-mango-with-cut-half-green-leaf-isolated-white-background_252965-516.jpg",
      title:"Sweet Mango",
      desc:"",
      price:42,
    },
    {
      id:1,
      img:"https://s1.1zoom.me/big0/221/Juice_Pomegranate_White_background_Highball_glass_547181_904x1024.jpg",
      title:"Pomegranate",
      desc:"",
      price:35,
    },
    {
      id:1,
      img:"https://i.pinimg.com/736x/08/9a/77/089a77ae55532e9ce673c75377e202ca.jpg",
      title:"Cucumber",
      desc:"",
      price:26,
    },
  ]
  return(
    <div>
      <div className='cart'>
      <h1>All Items</h1>
      {/* <h1>Cart cart={cart}</h1> */}
      <Badge badgeContent={cart}  color="error"><ShoppingCartIcon className='cart-btn'/>
      </Badge>
      

      </div>
      <div className='Container'>
       {data.map((x)=><Items item={x} cart={cart} setCart={setCart}  />)}
    </div>
    </div>

  )
}


function Items({item,cart,setCart}){
  // const[cart,setCart]=useState(0)
  
  
  return(
    <div>
      <Card className="item-cards">
      <CardMedia>
      <img className="item-img" src={item.img}/>
      <div className='content'>
      <h1>{item.title}</h1>
      <h2>${item.price}</h2>
      </div>
       <Ctbtn cart={cart} setCart={setCart}/>
     
      </CardMedia> 
      </Card>
    </div>
  )
}
function Ctbtn({cart,setCart}){
  
  const[show,setShow]=useState(true)

  function one(){
    // const[show,setShow]=useState(false)
    setShow(!show)
  }

  function two(){
    setCart(cart+1)
  }

  function three(){
    setCart(cart-1)
  }
  return(
//     <div className="btn">
//   {show?<Button onClick={()=>setCart(cart-1) } variant="contained" color="success">
//     remove cart
//   </Button>:<Button onClick={()=>setCart(cart+1)}variant="contained" color="success">
//     add to cart
//   </Button>
// }
  
//   </div>
<div className='add'>
  {show?<Button onClick={()=>{one() ; two()}} variant="contained" color="success" className='add'>Add to cart</Button>:
  <Button onClick={()=>{one();three()}}  variant="contained" color="success">Remove cart</Button>
}

{/* {show?setCart(cart+1):
  setCart(cart-1)
} */}

</div>


  )
}



export default App
