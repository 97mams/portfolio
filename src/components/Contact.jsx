export const Contact = function () {
    return <>
        <div className="w-full borde mt-20 px-28 flex flex-col items-center">
            <h1 className="text-5xl text-white text-center font-bold my-10">Contact</h1>
            <div className="w-[500px]">
                <form method="post">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-white">Nom</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="mamisoa"
                                className="bg-gray-200 p-1 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-white">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="anjaniainamamisoa@gmail.com"
                                className="bg-gray-200 p-1 rounded-md" />
                        </div>
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="message" className="text-white">Message</label>
                        <textarea name="message" id="message" rows="10" className="bg-gray-200 p-1 rounded-md" placeholder="Hey !"></textarea>
                    </div>
                    <button type="submit" className="text-white mt-4 bg-blue-900 px-3 py-2 rounded-md">send</button>
                </form>
            </div>
        </div>
    </>
}