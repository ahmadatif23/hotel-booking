const MailList = () => {
  return (
    <div className="w-full mt-12 bg-sky-900 text-white flex flex-col items-center gap-5 p-12">
      <div className="flex flex-col text-center justify-center items-center">
        <p className="text-lg font-medium mb-2">Save time, save money!</p>
        <p className="text-sm">Sign up and we'll send the best deals to you</p>
      </div>

      <div className="">
        <input type="text" placeholder="Your Email" className="w-80 h-12 px-5 mr-2 rounded text-sm outline-none" />
        <button className="h-12 px-5 bg-sky-500 text-white text-sm font-medium rounded">Subscribe</button>
      </div>
    </div>
  )
}

export default MailList