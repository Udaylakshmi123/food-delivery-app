const ContactComponent = () =>{
    return (<div className="container">
        <h2 className="font-bold text-3xl p-4 m-4">Welcome to contact page</h2>
        <form>
            <input type="text" className="border border-black p-2 m-2" placeholder="name" />
            <input type="text" className="border border-black p-2 m-2" placeholder="message" />
            <button className="border border-black p-2 m-2 bg-gray-50 rounded-lg">Submit</button>
        </form>
    </div>)
}

export default ContactComponent;