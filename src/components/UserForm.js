const UserForm = ()=>{
    return (
        <form className="space-y-4">
                <div className="flex space-x-4 text-black">
                  <input
                    type="text"
                    placeholder="Name*"
                    className="w-1/2 p-3 border rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder="Email Address*"
                    className="w-1/2 p-3 border rounded-lg"
                  />
                </div>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Enter 10-digit number"
                    className="w-1/2 p-3 border rounded-lg text-black"
                  />
                  <select
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                    className={`w-1/2 p-2 border rounded-lg 
                      ${selected === "" ? "text-gray-500" : "text-black"} 
                      bg-white focus:outline-none`}
                  >
                    <option value="">Select Service</option>
                    <option value="design">Web Designing</option>
                    <option value="development">Web Development</option>
                    <option value="app">App Development</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="sms">Bulk SMS</option>
                    <option value="database">Bulk Database</option>
                  </select>
                </div>
                <textarea
                  placeholder="Message"
                  className="w-full p-3 border rounded-lg h-32 text-black"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#fb9c24] text-black p-3 rounded-lg font-semibold flex items-center justify-center"
                >
                  Submit <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </form>
    )
}
export default UserForm