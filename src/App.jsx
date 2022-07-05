import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [alert, setAlert] = useState('Add or sub ');
  const [color, setColor] = useState();
  const [Change, setChange] = useState('');
  const [items, setItems] = useState([]);

  const add = () => {
    setCount(count + 1);
    setAlert('You are good');
    setColor('green');
  }
  const sub = () => {
    if (count === 0) {
      setCount(0);
      setAlert('You cant add a negative number');
      setColor('red');

    } else {
      setCount(count - 1);
      setColor('green')

    }
  }
  const res = () => {
    setCount(0);
    setAlert('Add a number');
    setColor('white')
  }
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${Change}`)
      .then(Response => Response.json())
      .then(json => setItems(json))
  }, [Change])

  return (
    <div className="App">
      <h3 className={`${color} alert `}>
        {alert}
      </h3>
      <button onClick={add} className="btn add">+</button>
      <h1 className="count-title">{count}</h1>
      <button onClick={sub} className='btn sub'>-</button>
      <button onClick={res} className="btn res">RESET</button>
      <div className="rest-api">
        <button onClick={() => { setChange('posts') }} className="btn api posts">
          Posts
        </button>
        <button onClick={() => { setChange('comments') }} className="btn api comments">
          comments
        </button>
        <button onClick={() => { setChange('users') }} className="btn api users">
          Users
        </button>
        <div className="root">
          <h1>{Change}</h1>
          {items.map(item =>{
            return <div className='data'>
                <h1>{JSON.stringify(item)}</h1>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
