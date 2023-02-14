const MailList = () => {
  return (
    <div className="w-full mt-12 bg-sky-900 text-white flex flex-col items-center gap-5 md:p-12 px-10 py-4">
      <div className="flex flex-col text-center justify-center items-center">
        <p className="text-lg font-medium mb-2">Save time, save money!</p>
        <p className="text-sm">Sign up and we'll send the best deals to you</p>
      </div>

      <div className="flex items-center md:flex-row flex-col md:gap-0 gap-1.5 w-full">
        <input type="text" placeholder="Your Email" className="md:w-80 w-full h-12 px-5 md:mr-2 rounded text-sm outline-none" />
        <button className="h-12 md:w-auto w-full px-5 bg-sky-500 text-white text-sm font-medium rounded">Subscribe</button>
      </div>
    </div>
  )
}

export default MailList