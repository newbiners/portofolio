import { useState } from "react";

const Contect = () => {
    const [email, setEmail] = useState({
        email:"",
        waPhone:"",
        message:""    
    })

    const inputValue = (e) => {
        const {name, value} = e.target;
        const obj = {
        ...email,
        [name]: value,    
        }
        setEmail(obj);
    }
    
    const submit = async(e) => {
        try {
            e.preventDefault()
            await fetch('https://server.mitrasurya.dev/hireguf',{
                method: "POST",
                body: JSON.stringify(email),
                headers: {
                    "Content-Type":"application/json"
                }
            });
        } catch (error) {
            console.log(error);
        }  
        document.getElementById('email').value = '';
        document.getElementById('waPhone').value = '';
        document.getElementById('message').value = '';
    } 
    return (
        <div>
            <form name="myForm" className="bg-sky-900 m-auto my-40 flex flex-col p-10 gap-6 rounded-md" onSubmit={submit}>
                <h1 className="text-4xl text-center text-white">input your request</h1>
                <input required id="email" type="text" placeholder="your email" className="p-4 rounded-md text-slate-800" name="email" onChange={inputValue}/>
                <input required id="waPhone" type="number" placeholder="your number whatsApp" className="p-4 rounded-md text-slate-800" name="waPhone" onChange={inputValue}/>
                <textarea required id="message" type="text" placeholder="your message" className="p-4 rounded-md text-slate-800" name="message" onChange={inputValue}></textarea>
                <button className="bg-green-700 py-3 w-28 rounded-md text-slate-50">submit</button>
            </form>
        </div>
    )
}

export default Contect;


// const request = async (url) => {
//     const response = await fetch(url);
//     const json = await JSON.stringify(response.json());
//     return json;
// }