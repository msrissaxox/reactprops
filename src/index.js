import React from "react";
import ReactDOM from "react-dom/client";
import './styles.css';

function Card(props){
  console.log(props);
  
  return(
    <div className="my-style">
    <h2> { props.name } </h2>
    <img src= { props.img } 
      alt="avatar_img"
    />
    <p>{ props.tel }</p>
    <p>{ props.email }</p>
</div>
  )
}

function Page(){



return(
  <div>
    <h1>My Contacts</h1>
<Card name="Beyonce" 
img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" tel=
"+123 456 789" email="b@beyonce.com"/>

<Card name="Christina" 
img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREnAAfDRjmIdqpJfnik9nJOjeBwZ0OKg_GTA&s" tel=
"+123 456 555" email="b@chrstina.com"/>
  </div>
)
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
