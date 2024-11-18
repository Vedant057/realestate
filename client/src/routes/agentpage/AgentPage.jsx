import { useContext } from "react";
import "./agentPage.scss";
import { AuthContext } from "../../context/AuthContext";
import CardItem from "../../components/CardItem/CardItem"
function AgentPage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="agentPage">
      <div className="textContainer">
        <div className="wrapper">
        <div className='cards'>
      <h1><u>Check Our Agents!</u></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/bg2.png'
              text='Agent John'
              label='North America'
              path=''
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='/bg2.png'
              text='Agent Cristan'
              label='Europe'
              path=''
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/bg2.png'
              text='Agent Kamlesh'
              label='Asia'
              path=''
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='/bg2.png'
              text='Agent Dwayne'
              label='Australia'
              path=''
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='/bg2.png'
              text='Agent Maxtarn'
              label='South America'
              path=''
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='/bg2.png'
              text='Agent Yammie'
              label='Africa'
              path=''
            />
          </ul>
        </div>
      </div>
    </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg6.png" alt="" />
      </div>
    </div>
  );
}

export default AgentPage;