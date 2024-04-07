

export function About({ name, lastName, contact }) {
    const lastNameArray = lastName.split(" ")
    return <div className="flex min-h-screen items-center justify-around">
        <div>
            <p className="text-blue-500 mb-4">Hey ther! I'm- </p>
            <h1 className="text-blue-500 font-bold text-6xl mb-4">{name} <br /> {lastNameArray[0]} <br /> {lastNameArray[1]} </h1>
            <p className="text-white"><span className="font-bold text-xl">Lorem ipsum dolor sit</span>, amet consectetur adipisicing elit. Sapiente esse.</p>
            <div className="py-3">
                {contact.map(contact => (
                    <a href="{contact.value}" key={contact.key} className="bg-blue-500 mr-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">{contact.key}</a>
                ))}
            </div>
        </div>
        <div>
            <img src="./src/assets/mamisoa1.jpeg" className="w-[200px] h-[200px] ms:object-none rounded-full" />
        </div>
    </div>
}