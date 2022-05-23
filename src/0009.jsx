import { useEffect, useState } from 'react';
import './App.css';
import Square from './Components/009/Square';
import axios from 'axios';
import User2 from './Components/009/User2';
import Post from './Components/009/Post';
function App() {
    const [sq, setSq] = useState([]);
    const add = () => setSq((s) => [...s, 1]);

    const [users, setUsers] = useState([]);

    const [users2, setUsers2] = useState([]);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            setUsers(res.data);
        });
    }, []);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            setPosts(res.data);
        });
    }, []);

    useEffect(() => {
        axios.get('https://dummyjson.com/users?limit=10').then((res) => {
            console.log(res.data.users);
            setUsers2(res.data.users);
        });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>USE eFFeCt</h1>

                <button onClick={add}>add</button>
                <div className="square-garden">
                    {sq.map((_, i) => (
                        <Square key={i} i={i}></Square>
                    ))}
                </div>

                {users2.map((u) => (
                    <User2 key={u.id} user={u}></User2>
                ))}

                {posts
                    .sort((a, b) => b.title.length - a.title.length)
                    .filter((p) => [7, 3, 4].indexOf(p.id) !== -1)
                    .map((p, i) => (
                        <Post key={p.id} post={p} index={i}></Post>
                    ))}
            </header>
        </div>
    );
}

export default App;
