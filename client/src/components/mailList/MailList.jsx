const MailList = () => {
  return (
    <div className="w-full mt-12 bg-sky-900 text-white flex flex-col items-center gap-5 p-12">
      <h1 className="text-lg font-medium">Save time, save money!</h1>
      <span className="text-sm">Sign up and we'll send the best deals to you</span>

      <div className="">
        <input type="text" placeholder="Your Email" className="w-80 h-8 p-2.5 mr-2 rounded" />
        <button className="h-8 px-4 bg-sky-500 text-white font-medium rounded">Subscribe</button>
      </div>
    </div>
  )
}

export default MailList