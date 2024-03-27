
export default function Contact() {
    return (
        <div>

            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                         
                    </div>
                    <img src="https://i.ibb.co/TRC45cH/undraw-feeling-proud-qne1-3.png" alt="" className="" />
                </div>
                <form   className="space-y-6">
                    <div>
                        <label   className="text-xl font-medium">Full name</label>
                        <input type="text" placeholder="Your Name" className="w-full p-3 rounded border border-green-400 border-opacity-70" required/>
                    </div>
                    <div>
                        <label   className="text-xl font-medium">Email</label>
                        <input type="email" placeholder="example@gmail.com" className="w-full p-3 rounded  border border-green-400 border-opacity-70 " required/>
                    </div>
                    <div>
                        <label   className="text-xl font-medium">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded border border-green-400 border-opacity-70"></textarea>
                    </div>
                    <button   className="btn bg-[#23BE0A]   px-[25px] text-white rounded-lg  font-semibold   hover:text-black hover:bg-transparent hover:border-[#FF4240] text-[18px]  ">Send Message</button>
                </form>
            </div>

        </div>
    )
}
